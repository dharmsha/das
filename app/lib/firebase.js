// app/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBknGACfthTV7XlSdNw8X5azEw61sHyHDw",
  authDomain: "yads-b6254.firebaseapp.com",
  projectId: "yads-b6254",
  storageBucket: "yads-b6254.firebasestorage.app",
  messagingSenderId: "793719245640",
  appId: "1:793719245640:web:a6d1ae02dd661e7fec017d",
  measurementId: "G-1DPC941KLJ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };