// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-28bdd.firebaseapp.com",
  projectId: "mern-blog-28bdd",
  storageBucket: "mern-blog-28bdd.firebasestorage.app",
  messagingSenderId: "349732521014",
  appId: "1:349732521014:web:9ec1a8c477e988bbf94497"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

