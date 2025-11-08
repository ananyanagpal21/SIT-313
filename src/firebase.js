import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCGF00Y8L1YFpXgtUJVJIJ238CDTyycBCI",
  authDomain: "login-registration-2942b.firebaseapp.com",
  projectId: "login-registration-2942b",
  storageBucket: "login-registration-2942b.firebasestorage.app",
  messagingSenderId: "702790375522",
  appId: "1:702790375522:web:7f9e75364019e440abd93b",
  measurementId: "G-G0H2N724XV"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);