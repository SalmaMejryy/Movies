// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3FOArsJQ5OyT5-euI_y-eWlnPDQvPP9A",
  authDomain: "cinevault-322c6.firebaseapp.com",
  projectId: "cinevault-322c6",
  storageBucket: "cinevault-322c6.firebasestorage.app",
  messagingSenderId: "119230923686",
  appId: "1:119230923686:web:ec416fbb42746e7c078567",
  measurementId: "G-FSKYQL2LYE"
};
// Initialize Firebase
const App = initializeApp(firebaseConfig);
export const db = getFirestore(App)
