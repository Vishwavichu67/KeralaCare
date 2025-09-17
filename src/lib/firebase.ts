// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  projectId: "studio-347998656-749b4",
  appId: "1:799969070845:web:b51859b1fb0b438b23b894",
  storageBucket: "studio-347998656-749b4.firebasestorage.app",
  apiKey: "AIzaSyBD7wZBMoKennwY89V_1Ss4L6RO5Rr4RUE",
  authDomain: "studio-347998656-749b4.firebaseapp.com",
  messagingSenderId: "799969070845",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);


export { app, auth, db, storage };
