// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAG49S7LkzCYaicYkilt2jU1yJhahD0sYY",
  authDomain: "react-disney-plus-website.firebaseapp.com",
  projectId: "react-disney-plus-website",
  storageBucket: "react-disney-plus-website.appspot.com",
  messagingSenderId: "720577254803",
  appId: "1:720577254803:web:b8e26edc47129ed3134466"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;