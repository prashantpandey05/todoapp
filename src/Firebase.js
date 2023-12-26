// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDHKZrhWi8x2Nh9N7YuHQ-O0jnuf1f30BI",
    authDomain: "todo-f3fd4.firebaseapp.com",
    projectId: "todo-f3fd4",
    storageBucket: "todo-f3fd4.appspot.com",
    messagingSenderId: "916593601299",
    appId: "1:916593601299:web:ee8626785d85acd0b008e6",
    measurementId: "G-KVG5M30VCT"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)