// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUxICY6RhCalgf_TAvxbhyM7InPBSP9PY",
  authDomain: "netflix-94bac.firebaseapp.com",
  projectId: "netflix-94bac",
  storageBucket: "netflix-94bac.appspot.com",
  messagingSenderId: "877952374852",
  appId: "1:877952374852:web:9c51713f598a9cd6f84411"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();