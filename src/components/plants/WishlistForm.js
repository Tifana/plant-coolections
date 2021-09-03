import classes from "./WishlistForm.module.css";
import Card from "../ui/Card";
import { useRef } from "react";

function WishlistForm(props) {
  //for reading the entered values, setting up our own references/connection to DOM elements
  const nameInputRef = useRef();
  const imageInputRef = useRef();
  const typeInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    
    const enteredName = nameInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredType = typeInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    
    //creating a new object to store the values
    const plantData ={
      name: enteredName,
      image: enteredImage,
      type: enteredType,
      description: enteredDescription
    }

    props.onAddPlant(plantData)

  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="name">Name</label>
          <input type="text" required id="name" ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Plant Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="type">Type</label>
          <input type="text" required id="type" ref={typeInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea id="description" required rows="5" ref={descriptionInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Plant</button>
        </div>
      </form>
    </Card>
  );
}

export default WishlistForm;
