import { Switch, Route } from "react-router-dom";
import EditView from "./views/EditView";
import Home from "./views/Home";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/edit/:formid" exact>
        <EditView/>
      </Route>
    </Switch>
  );
}
