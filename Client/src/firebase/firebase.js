// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCGUyd5gHjQt0mBIwBThj30amb41D-vNP8",
  authDomain: "codepulse-279bb.firebaseapp.com",
  projectId: "codepulse-279bb",
  storageBucket: "codepulse-279bb.appspot.com",
  messagingSenderId: "1053429833695",
  appId: "1:1053429833695:web:5423ef00c6876f1277ae6a",
  measurementId: "G-194HKXXGWP"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

const firestore = getFirestore(app);
const auth = getAuth(app);

export { firestore, app, auth };