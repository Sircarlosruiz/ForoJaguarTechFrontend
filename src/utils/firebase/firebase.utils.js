// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
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
// const facebookProvider = new FacebookAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

// Auth Providers
export const auth = getAuth(firebaseApp);
export const signInUserWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
// export const signInUserWithFacebookPopup = () => signInWithPopup(auth, facebookProvider);

//firestore connection
export const db = () => getFirestore();

// Firestore Functions
export const createUserDocFromAuth = async (userAuth, additionalInfo = {}) => {
  if (!userAuth) return;

  const userDocRef = doc(db(), "users", userAuth.uid);
  const userData = await getDoc(userDocRef);

  if (!userData.exists()) {
    const { email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        email,
        createAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log("Error: ", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailAndPassword = async(email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
};

export const logOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);

export const FIREBASE_ERROR_CODES = {
    NOT_FOUND: "auth/user-not-found",
    WRONG_PASSWORD: "auth/wrong-password",
    NOT_ALLOWED: "auth/operation-not-allowed",
  };