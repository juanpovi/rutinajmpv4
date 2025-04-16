// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBXZ3Va0RRXrsLeYcA6N1CiNY0wSU1jco",
  authDomain: "ejerciciosjmp.firebaseapp.com",
  projectId: "ejerciciosjmp",
  storageBucket: "ejerciciosjmp.firebasestorage.app",
  messagingSenderId: "152542549504",
  appId: "1:152542549504:web:f9b8eb878bb9b7ab172ae5",
  measurementId: "G-3E4XSDBWYW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);