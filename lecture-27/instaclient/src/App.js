import "./App.css";
import Routes from "./Routes";
import React, { useState } from "react";
import firebaseApp from "./utils/firebaseApp";
import { useEffect } from "react";
import axiosInstance from "./utils/axiosInstance";

let UserContext = React.createContext();

function App() {
  let [user, setUser] = useState();

  useEffect(function () {
    firebaseApp.auth().onAuthStateChanged((userInstance) => {
      setUser(userInstance);
      userInstance.getIdToken().then((token) => {
        axiosInstance.defaults.headers["Authorization"] = "Bearer " + token;
      });
    });
  }, []);

  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>
        <Routes />
      </UserContext.Provider>
    </div>
  );
}

export { App, UserContext };
