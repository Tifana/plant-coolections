import classes from "./WishlistForm.module.css";
import Card from "../ui/Card";

function WishlistForm() {
  return (
    <Card>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="name">Name</label>
          <input type="text" required id="name" />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Plant Image</label>
          <input type="url" required id="image" />
        </div>
        <div className={classes.control}>
          <label htmlFor="type">Type</label>
          <input type="text" required id="type" />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea id="description" required rows="5"></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Plant</button>
        </div>
      </form>
    </Card>
  );
}

export default WishlistForm;
