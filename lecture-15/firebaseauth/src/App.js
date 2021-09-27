import logo from './logo.svg';
import './App.css';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebaseApp from './utils/firebaseApp';
import firebase from 'firebase';
import { useEffect, useState } from 'react';

function App() {

  let [user, setUser] = useState();

  let handleUserChange = function (userItem) {
    setUser(userItem);
    userItem.ge
  }

  useEffect(function () {
    firebaseApp.auth().onAuthStateChanged(handleUserChange);
  }, []);

  const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
  };

  if(user===undefined){
    return <div className="App">
        <h1> Loading... </h1>
      </div>;
  }
  else if(user===null){
    return (
      <div className="App">
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseApp.auth()} />
      </div>
    );
  } else {
    return <div className="App">
      <h1> Hello {user.displayName} </h1>
      <button onClick={function() {
        firebaseApp.auth().signOut();
      }}>Logout</button>
    </div>;
  }



 
}

export default App;
