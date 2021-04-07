import firebase from "firebase/app";
import "firebase/database";

let app = firebase.initializeApp({
  apiKey: "AIzaSyAK14GanPULMMoiDGddk5Hho0yFs1hdQRY",
  authDomain: "freshyta-1eacc.firebaseapp.com",
  projectId: "freshyta-1eacc",
  storageBucket: "freshyta-1eacc.appspot.com",
  messagingSenderId: "251952848809",
  appId: "1:251952848809:web:1c798f7bba82dbdb65aeb8",
});

export const database = app.database();

export default app;
