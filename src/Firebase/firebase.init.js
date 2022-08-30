// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQdK-twtgHm9ruj4ZrtcjL_EdjWjAPm9A",
  authDomain: "aka-coin.firebaseapp.com",
  projectId: "aka-coin",
  storageBucket: "aka-coin.appspot.com",
  messagingSenderId: "456039065391",
  appId: "1:456039065391:web:a25d4481c039ec769863da",
  measurementId: "G-CDSLG87PTV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;