// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8tnvEH0j5vOcpln9R90VJJXIngSK1ldM",
  authDomain: "real-estate-app-f214d.firebaseapp.com",
  projectId: "real-estate-app-f214d",
  storageBucket: "real-estate-app-f214d.appspot.com",
  messagingSenderId: "58282193803",
  appId: "1:58282193803:web:16cec8c3acec6bae3af58e",
  databaseURL:"https://real-estate-app-f214d-default-rtdb.firebaseio.com",

};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);