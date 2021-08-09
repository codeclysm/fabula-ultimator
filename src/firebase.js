import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

firebase.initializeApp({
  apiKey: "AIzaSyDC3Vpj27bB6Gt5zWJuEPmf-4O8v1PQn4c",
  authDomain: "fabula-ultimator.firebaseapp.com",
  databaseURL:
    "https://fabula-ultimator-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fabula-ultimator",
  storageBucket: "fabula-ultimator.appspot.com",
  messagingSenderId: "623320016703",
  appId: "1:623320016703:web:9d0351818fb2c60b9f158a",
  measurementId: "G-Y7HY8WX1X1",
});

export default firebase;

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
