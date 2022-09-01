import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRqA3yeKhsime8sVYrwPPF-rc6GQYeNZo",
  authDomain: "ordernow-70b38.firebaseapp.com",
  projectId: "ordernow-70b38",
  storageBucket: "ordernow-70b38.appspot.com",
  messagingSenderId: "650668739813",
  appId: "1:650668739813:web:8b4ea8cd034eee8995180c",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth();

export const registerRequest = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const loginRequest = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};
