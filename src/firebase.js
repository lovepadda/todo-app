// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  authDomain: "todo-app-450c2.firebaseapp.com",
  projectId: "todo-app-450c2",
  storageBucket: "todo-app-450c2.appspot.com",
  messagingSenderId: "407382901505",
  appId: "1:407382901505:web:68187c12418359135c9100",
  measurementId: "G-4VLDGNXRD5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)