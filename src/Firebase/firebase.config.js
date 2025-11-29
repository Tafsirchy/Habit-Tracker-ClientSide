// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBx38whOGrgHkx30iSQKsZdkSxDkjEvnb8",
  authDomain: "habit-tracker-4a192.firebaseapp.com",
  projectId: "habit-tracker-4a192",
  storageBucket: "habit-tracker-4a192.firebasestorage.app",
  messagingSenderId: "116666022164",
  appId: "1:116666022164:web:84a30c003a7f874c276a01",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;