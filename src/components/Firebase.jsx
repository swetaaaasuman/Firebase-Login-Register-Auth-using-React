// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkBs77BD0ynhZ26iJLBnZitOmAOmLVA60",
  authDomain: "login-auth-ea34a.firebaseapp.com",
  projectId: "login-auth-ea34a",
  storageBucket: "login-auth-ea34a.appspot.com",
  messagingSenderId: "420890660335",
  appId: "1:420890660335:web:731193a3bfa9b889e6fa1a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;
