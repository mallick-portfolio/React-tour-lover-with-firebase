// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth'
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMduhkYEIALfQFHXp8EbU4mXxZbxEQDxw",
  authDomain: "tour-firebase-auth.firebaseapp.com",
  projectId: "tour-firebase-auth",
  storageBucket: "tour-firebase-auth.appspot.com",
  messagingSenderId: "207712339409",
  appId: "1:207712339409:web:3b7780d2c4500264098cf0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth
