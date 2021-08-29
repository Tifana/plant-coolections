import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Homepage from "./pages/Homepage";
import MyPlants from "./pages/MyPlants";
import Wishlist from "./pages/Wishlist";

function App() {
  return (
      <Layout>
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/MyPlants">
          <MyPlants />
        </Route>
        <Route path="/Wishlist">
          <Wishlist />
        </Route>
      </Switch>
      </Layout>
  );
}

export default App;
