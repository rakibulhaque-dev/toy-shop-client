// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsMBC9CIka5-JUwUgmJG9f9aa4BZGcDA4",
  authDomain: "eleven-toy.firebaseapp.com",
  projectId: "eleven-toy",
  storageBucket: "eleven-toy.appspot.com",
  messagingSenderId: "978964050848",
  appId: "1:978964050848:web:15db28dbb99aa092496ac5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;