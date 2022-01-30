// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCb3dNyF4-EDJKiDQN8FFHOgBbMcoREk8g",
  authDomain: "signature-farms.firebaseapp.com",
  projectId: "signature-farms",
  storageBucket: "signature-farms.appspot.com",
  messagingSenderId: "124087764394",
  appId: "1:124087764394:web:978da1825aef1be004d7d3",
  measurementId: "G-MTTXCL2HYP",
};

// Initialize Firebase
initializeApp(firebaseConfig);

// initialize firestore
export const db = getFirestore();
