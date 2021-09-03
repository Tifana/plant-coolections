import WishlistForm from "../components/plants/WishlistForm";

function Wishlist() {
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
    );
  }

  return (
    <section>
      <h1>Wishlist</h1>
      <h1>Add your wish plant here!</h1>
      <WishlistForm onAddPlant={addPlantHandler} />
    </section>
  );
}

export default Wishlist;
