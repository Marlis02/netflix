// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Create a root reference
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsHE6WAw1mmLUZ_pSJ6MAJzmvNwzQaFv0",
  authDomain: "zetflix-f5f6e.firebaseapp.com",
  projectId: "zetflix-f5f6e",
  storageBucket: "zetflix-f5f6e.appspot.com",
  messagingSenderId: "949494104277",
  appId: "1:949494104277:web:468b2ea98cb5d1ac77225c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
