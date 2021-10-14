// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjvde-qq_YHmJ60Ybc3UgzNYGY405Qm1k",
  authDomain: "disneyplus-clone-39283.firebaseapp.com",
  projectId: "disneyplus-clone-39283",
  storageBucket: "disneyplus-clone-39283.appspot.com",
  messagingSenderId: "742590415680",
  appId: "1:742590415680:web:44d2acbbc3403cff61f0a5",
  measurementId: "G-4FE24NS47Z"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider =  new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;