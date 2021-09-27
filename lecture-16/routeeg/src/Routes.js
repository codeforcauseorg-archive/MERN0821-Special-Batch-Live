import { Switch, Route } from "react-router-dom";
import Help from "./pages/Help";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import MainLayout from "./layouts/MainLayout";

export default function Routes() {
  return (
    <Switch>
      <Route path="/help" exact>
        <Help />
      </Route>
      <Route path="/profile" exact>
        <MainLayout>
          <Profile />
        </MainLayout>
      </Route>
      <Route path="/" exact>
        <MainLayout>
          <Home />
        </MainLayout>
      </Route>
    </Switch>
  );
}
