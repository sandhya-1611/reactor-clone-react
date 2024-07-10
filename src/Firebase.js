// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "process.env.REACT_APP_FIREBASE_API_KEY",
  authDomain: "realtor-clone-react-4d6e8.firebaseapp.com",
  projectId: "realtor-clone-react-4d6e8",
  storageBucket: "realtor-clone-react-4d6e8.appspot.com",
  messagingSenderId: "739391899041",
  appId: "1:739391899041:web:a3f071c1b270195656f7e0"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();