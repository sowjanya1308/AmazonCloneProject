// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANcD1jnEorCNPMckuwtZeNJXZDUta0B-A",
  authDomain: "ecommerce-5e03f.firebaseapp.com",
  projectId: "ecommerce-5e03f",
  storageBucket: "ecommerce-5e03f.appspot.com",
  messagingSenderId: "840067888883",
  appId: "1:840067888883:web:f5ee1989174807ee692986",
  measurementId: "G-GRLRRSEYLE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);