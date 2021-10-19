import { Switch, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Add from "./pages/Add";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Reels from "./pages/Reels";
import Search from "./pages/Search";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <MainLayout>
          <Home />
        </MainLayout>
      </Route>
      <Route path="/search" exact>
        <MainLayout>
          <Search />
        </MainLayout>
      </Route>
      <Route path="/add" exact>
        <MainLayout>
          <Add />
        </MainLayout>
      </Route>
      <Route path="/reels" exact>
        <MainLayout>
          <Reels />
        </MainLayout>
      </Route>
      <Route path="/profile" exact>
        <MainLayout>
          <Profile />
        </MainLayout>
      </Route>
    </Switch>
  );
}
