import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import WishlistForm from "../components/plants/WishlistForm";
import PlantList from "../components/plants/PlantList";

function Wishlist() {
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
      history.replace('/MyPlants')
    })
  }

  const [isLoading, setIsloading] = useState(true)
  const [loadedPlants, setLoadedPlants] = useState([])

  useEffect(() => {
    setIsloading(true)
    fetch(
      "https://plantcoolections-default-rtdb.firebaseio.com/plants.json" 
    )
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      const plants = []

      for (const key in data) {
        const plant = {
          id: key,
          ...data[key]
        }

        plants.push(plant)
      }

      setIsloading(false)
      setLoadedPlants(plants)
    })
  }, [])

  if (isLoading) {
    return (
      <section>
        <p>Loading ... </p>
      </section>
    )
  }

  return (
    <section>
      <h1>Wishlist</h1>
      <h1>Add your wish plant here!</h1>
      <WishlistForm onAddPlant={addPlantHandler} />
      <PlantList plants={loadedPlants} />
    </section>
  );
}

export default Wishlist;
