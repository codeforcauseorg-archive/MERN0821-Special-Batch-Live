import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoxo791fqPXeaKQagbBnFM34s2WHfTlO0",
  authDomain: "mern0921.firebaseapp.com",
  projectId: "mern0921",
  storageBucket: "mern0921.appspot.com",
  messagingSenderId: "154167995008",
  appId: "1:154167995008:web:b44c73ccdd308329159465"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;