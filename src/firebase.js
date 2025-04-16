import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDBXZ3Va0RRXrsLeYcA6N1CiNY0wSU1jco",
  authDomain: "ejerciciosjmp.firebaseapp.com",
  projectId: "ejerciciosjmp",
  storageBucket: "ejerciciosjmp.firebasestorage.app",
  messagingSenderId: "152542549504",
  appId: "1:152542549504:web:f9b8eb878bb9b7ab172ae5",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // <-- ESTA LÍNEA es clave

const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut, db, doc, getDoc, setDoc };
