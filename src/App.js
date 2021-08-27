import { Route, Switch } from 'react-router-dom'
import MainNavigation from './components/layout/MainNavigation'
import Homepage from './pages/Homepage'
import MyPlants from './pages/MyPlants'
import Wishlist from './pages/Wishlist'

function App() {
  return <div>
    <MainNavigation />
    <Switch>
      <Route path='/' exact>
        <Homepage />
      </Route>
      <Route path='/MyPlants'>
        <MyPlants />
      </Route>
      <Route path='/Wishlist'>
        <Wishlist />
      </Route>
    </Switch>
    
  </div>
}

export default App;
