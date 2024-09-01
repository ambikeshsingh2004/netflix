// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { buildCreateSlice } from "@reduxjs/toolkit";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// in your firebase go to overview then authentication and then enbale type of authentication you want 

const firebaseConfig = {
  apiKey: "AIzaSyAO7lLQCbVdC2XDF46UB6rTkRwBX7zLLZw",
  authDomain: "project1-48386.firebaseapp.com",
  projectId: "project1-48386",
  storageBucket: "project1-48386.appspot.com",
  messagingSenderId: "362866101381",
  appId: "1:362866101381:web:a6d51d685c244ffe7d2dec",
  measurementId: "G-7WNK264K3G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();