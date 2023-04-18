import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';


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
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {auth, analytics}