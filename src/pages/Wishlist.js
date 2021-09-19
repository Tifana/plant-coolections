import { useEffect, useState } from "react";

import PlantList from "../components/plants/PlantList";
import Btn from "../components/ui/Btn"
// import Backdrop from "../components/ui/Backdrop";
// import Modal from "../components/ui/Modal"

function Wishlist() {
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
      <div>
        <h1>Add your wish plant here!</h1>
        <Btn />
      </div>
      <PlantList plants={loadedPlants} />     
    </section>
  );
}

export default Wishlist;
