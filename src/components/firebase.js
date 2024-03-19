// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6_twOhogk9QSRWVQQ1QAekLed-cqNVgQ",
 authDomain: "contact-database-9c47b.firebaseapp.com",
  databaseURL: "https://contact-database-9c47b-default-rtdb.firebaseio.com",
  projectId: "contact-database-9c47b",
  storageBucket: "contact-database-9c47b.appspot.com",
  messagingSenderId: "118822537955",
  appId: "1:118822537955:web:3ef795baeadbe37b7293d6",
  measurementId: "G-0WY0798WFC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);