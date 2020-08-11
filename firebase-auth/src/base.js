import * as firebase from "firebase/app";
import "firebase/auth";
const app = firebase.initializeApp({
  apiKey: "AIzaSyCTcc8BhuCemNydDJBGEw9XEmrpcMM2-mA",
  authDomain: "fir-auth-4f57e.firebaseapp.com",
  databaseURL: "https://fir-auth-4f57e.firebaseio.com",
  projectId: "fir-auth-4f57e",
  storageBucket: "fir-auth-4f57e.appspot.com",
  messagingSenderId: "331542359985",
  appId: "1:331542359985:web:71b804a9a110a3e8271790",
  measurementId: "G-DN0GST835D",
});

export default app;
