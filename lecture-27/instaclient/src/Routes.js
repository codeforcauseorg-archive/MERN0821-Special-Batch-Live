import { Switch, Route } from "react-router-dom";
import AuthGaurd from "./gaurds/AuthGaurd";
import LoggedinGaurd from "./gaurds/LoggedinGaurd";
import MainLayout from "./layouts/MainLayout";
import Add from "./pages/Add";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Reels from "./pages/Reels";
import Search from "./pages/Search";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <AuthGaurd>
          <MainLayout>
            <Home />
          </MainLayout>
        </AuthGaurd>
      </Route>
      <Route path="/search" exact>
        <AuthGaurd>
          <MainLayout>
            <Search />
          </MainLayout>
        </AuthGaurd>
      </Route>
      <Route path="/add" exact>
        <AuthGaurd>
          <MainLayout>
            <Add />
          </MainLayout>
        </AuthGaurd>
      </Route>
      <Route path="/reels" exact>
        <AuthGaurd>
          <MainLayout>
            <Reels />
          </MainLayout>
        </AuthGaurd>
      </Route>
      <Route path="/profile" exact>
        <AuthGaurd>
          <MainLayout>
            <Profile />
          </MainLayout>
        </AuthGaurd>
      </Route>

      <Route path="/login" exact>
        <LoggedinGaurd>
          <Login />
        </LoggedinGaurd>
      </Route>
    </Switch>
  );
}
