import firebase from "firebase/app";
import "firebase/database";
import "firebase/firestore";

let app = firebase.initializeApp({
  apiKey: "AIzaSyCudN92aa5gMYprjsu7cFXaP9hQhW5UKeo",
  authDomain: "freshyta-c3fef.firebaseapp.com",
  projectId: "freshyta-c3fef",
  storageBucket: "freshyta-c3fef.appspot.com",
  messagingSenderId: "521406712524",
  appId: "1:521406712524:web:f1f0102d97cac3aa109069",
});

export const database = app.database();

export const firestore = app.firestore();

export default app;
