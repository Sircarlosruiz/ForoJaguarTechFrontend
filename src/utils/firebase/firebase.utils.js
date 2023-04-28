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
  onAuthStateChanged,
} from "firebase/auth";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  setDoc,
} from "firebase/firestore";
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
export const db = () => getFirestore(firebaseApp);

// Firestore Functions
export const createUserDocFromAuth = async (userAuth, additionalInfo = {}) => {
  if (!userAuth) return;

  const userDocRef = doc(db(), "users", userAuth.uid);
  const userData = await getDocs(userDocRef);

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

export const signInUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

//CRUD FUNCTIONS
const itemsCollection = collection(db, "items");

//CREATE(creando documento)
export const createItem = async (data) => {
  try {
    const docRef = await addDoc(itemsCollection, data);
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

// READ (obtener todos los documentos)
export const getItems = async () => {
  const querySnapshot = await getDocs(itemsCollection);
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
  });
};

// UPDATE (Actualizar un documento)
export const updateItem = async (docId, data) => {
  const docRef = doc(db, "items", docId);
  try {
    await updateDoc(docRef, data);
    console.log("Document successfully updated!");
  } catch (error) {
    console.error("Error updating document: ", error);
  }
};

//DELETE (eleminando el documento)
export const deleteItem = async (docId) => {
  const docRef = doc(db, "items", docId);
  try {
    await deleteDoc(docRef);
    console.log("Document successfully deleted");
  } catch (error) {
    console.error("Error deleting document: ", error);
  }
};

export const logOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

export const FIREBASE_ERROR_CODES = {
  NOT_FOUND: "auth/user-not-found",
  WRONG_PASSWORD: "auth/wrong-password",
  NOT_ALLOWED: "auth/operation-not-allowed",
};
