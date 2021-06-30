import { Route, Switch } from "react-router";

import Home from "./Home";
import Menu from "./categories/Menu";
import Ingrediants from "./ingrediants/Ingrediants";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/categories">
        <Menu />
      </Route>
      <Route exact path="/ingrediants">
        <Ingrediants />
      </Route>
    </Switch>
  );
};
export default Routes;
