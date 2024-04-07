// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgH38IlfMpp6fOWFavE0WCVuK1lOBu5qY",
  authDomain: "react-dragon-news-auth-d2877.firebaseapp.com",
  projectId: "react-dragon-news-auth-d2877",
  storageBucket: "react-dragon-news-auth-d2877.appspot.com",
  messagingSenderId: "864335881394",
  appId: "1:864335881394:web:da6f869debf26cef7d95ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app