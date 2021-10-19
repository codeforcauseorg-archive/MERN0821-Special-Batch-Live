import { Switch, Route } from "react-router-dom";
import AuthGaurd from "./AuthGaurd";
import Home from "./Home";
import Login from "./Login";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <AuthGaurd>
          <Home />
        </AuthGaurd>
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  );
}
