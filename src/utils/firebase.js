// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWmLoI65VTeegIZVYHxQkW5UT5Ud_Nako",
  authDomain: "netflix-5b846.firebaseapp.com",
  projectId: "netflix-5b846",
  storageBucket: "netflix-5b846.appspot.com",
  messagingSenderId: "65187325745",
  appId: "1:65187325745:web:cd0d16df0b520658eef210",
  measurementId: "G-2QP4RRZK7D"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();