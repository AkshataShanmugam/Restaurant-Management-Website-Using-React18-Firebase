// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArobtP-pf4LgGXGpfKm6a1BOEfvU5Cam8",
  authDomain: "restaurant-management-v18.firebaseapp.com",
  databaseURL: "https://restaurant-management-v18-default-rtdb.firebaseio.com",
  projectId: "restaurant-management-v18",
  storageBucket: "restaurant-management-v18.appspot.com",
  messagingSenderId: "267554302641",
  appId: "1:267554302641:web:d113301f046ff97a88d090"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);