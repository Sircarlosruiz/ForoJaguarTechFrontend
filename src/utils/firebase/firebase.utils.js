// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDOdKqf8glghqn0OCgNCekaEWvyznk38U",
  authDomain: "jaguartech-15cdb.firebaseapp.com",
  projectId: "jaguartech-15cdb",
  storageBucket: "jaguartech-15cdb.appspot.com",
  messagingSenderId: "477877606652",
  appId: "1:477877606652:web:22c3e33474c354b612df79",
  measurementId: "G-BMJCFECQ3N",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebaseApp);


const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account",
})

// Auth Providers
export const auth = getAuth(firebaseApp);
export const signInUserWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInUserWithFacebookPopup = () => signInWithPopup(auth, facebookProvider);

