// import React from "react";

import * as firebase from "firebase/app";
import { initializeApp } from 'firebase/app';
// import * as firebase from "firebase";

// const firebaseConfig = {

//     // apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  
//     // authDomain: process.env.NEXT_PUBLIC_FIREBASE_authDomain,
//     // databaseURL: process.env.NEXT_PUBLIC_FIREBASE_databaseURL,
  
//     // projectId: process.env.NEXT_PUBLIC_FIREBASE_projectId,
  
//     // storageBucket: process.env.NEXT_PUBLIC_FIREBASE_storageBucket,
  
//     // messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_messagingSenderId,
  
//     // appId:process.env.NEXT_PUBLIC_FIREBASE_appId,
  
//   };

//   export const firebaseApp = initializeApp(firebaseConfig)

const firebaseCon = {

    apiKey: "AIzaSyBXGqhcFLA1mUYrj8exZlJyLew0WkRHFjo",
  
    authDomain: "for-jmwebgo.firebaseapp.com",
  
    databaseURL: "https://for-jmwebgo-default-rtdb.asia-southeast1.firebasedatabase.app",
  
    projectId: "for-jmwebgo",
  
    storageBucket: "for-jmwebgo.appspot.com",
  
    messagingSenderId: "788688140898",
  
    appId: "1:788688140898:web:6ee37da89c69ea1e0eaf3b",
  
    measurementId: "G-1DVDKB9M0Q"
  
  };
  
  
  // Initialize Firebase
//   export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

  export const apptry = firebase.initializeApp({ ...firebaseCon });
  