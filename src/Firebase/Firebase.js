// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwGvfoVBSkEXSDaJJy5fsjTwGy9NDKUFw",
  authDomain: "blog-website-63d98.firebaseapp.com",
  projectId: "blog-website-63d98",
  storageBucket: "blog-website-63d98.firebasestorage.app",
  messagingSenderId: "764996484901",
  appId: "1:764996484901:web:8ae803954fd44f4aa864cc",
  measurementId: "G-HDRZWV247E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
