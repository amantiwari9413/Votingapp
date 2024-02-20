// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5XrasxmHaj21re04FwRx9ARywVI-JMbA",
  authDomain: "votingapp-622b9.firebaseapp.com",
  projectId: "votingapp-622b9",
  storageBucket: "votingapp-622b9.appspot.com",
  messagingSenderId: "126875588",
  appId: "1:126875588:web:fa70a913cb8d80c5635691",
  measurementId: "G-042QD014WT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const database=getFirestore(app)