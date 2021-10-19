import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import react, { useEffect, useState } from "react";
import firebaseApp from "./utils/firebaseApp";

let UserContext = react.createContext();

function App() {
  let [user, setUser] = useState();

  useEffect(function () {
    firebaseApp.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export {App, UserContext};
