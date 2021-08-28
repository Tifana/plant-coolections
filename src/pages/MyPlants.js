import PlantList from "../components/plants/PlantList"

const DUMMY_DATA = [
  {
    id: 'p1',
    title: 'Monstera',
    image: 'https://www.pflanze2000.de/Content/files/1345/monstera-deliciosa-fensterblatt-p21-97-1-987x1020-proportionalsmallest-100prz.jpg',
    type: 'Monstera Delicosa',
    description: 'Typical tropical plants, strong and does not need a lot of sun'
  },
  {
    id: 'p2',
    title: 'Calathea',
    image: 'https://mk0newsiteviodqfcuwv.kinstacdn.com/wp-content/uploads/2020/02/makoyana_1.jpg',
    type: 'Calathea Makoyana',
    description: 'Tropical origin, like humidity and very needy'
  }
]

function MyPlants() {
    return <section>
      <h1>MyPlants</h1>
      <PlantList plants={DUMMY_DATA} />
    </section> 
  }
  
  export default MyPlants;