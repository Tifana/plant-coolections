// import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import WishlistForm from '../plants/WishlistForm'
import classes from './Modal.module.css'

function Modal() {
  const history = useHistory(); //to navigate the input after we get it

  function addPlantHandler(plantData) {
    //firebase require .json
    fetch(
      "https://plantcoolections-default-rtdb.firebaseio.com/plants.json",
      //to store data to firebase we must send post request'
        {
          method: 'POST',
          body: JSON.stringify(plantData),
          headers: {
            'Content-Type': 'application/json'
          } 
        }
    ).then(() => {
      history.replace('/Wishlist')
    })
  }

    return (
      <div className={classes.modal}>
      <p>please fill the form bellow!</p>
      <WishlistForm onAddPlant={addPlantHandler} />
    </div>
    )
  }

export default Modal