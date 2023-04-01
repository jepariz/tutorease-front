import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDoA4eNtRqWhBRus0-x6t9EFa6LUS3aMCI",
  authDomain: "tutorease.firebaseapp.com",
  projectId: "tutorease",
  storageBucket: "tutorease.appspot.com",
  messagingSenderId: "578681317613",
  appId: "1:578681317613:web:d8cd848c16d8bb780e44e4",
  measurementId: "G-5W3SPZXPFP"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
