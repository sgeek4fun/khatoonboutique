import { initializeApp } from "firebase/app";
import { getAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';
import { getDatabase } from "firebase/database";



const firebaseConfig = {
  apiKey: "AIzaSyA4P4WsfMGvO5q5aqmFUykxIfeV5OlUIzU",
  authDomain: "khatoon-3d01c.firebaseapp.com",
  projectId: "khatoon-3d01c",
  storageBucket: "khatoon-3d01c.appspot.com",
  messagingSenderId: "353035097092",
  appId: "1:353035097092:web:182ffa7e23918804fc1151",
  measurementId: "G-EGFF6E6J28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);


export {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged,database}