// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEwJAwLilF7-Whkr1rwqwqPwOmKKLYQ64",
  authDomain: "e-tools-e74d8.firebaseapp.com",
  projectId: "e-tools-e74d8",
  storageBucket: "e-tools-e74d8.appspot.com",
  messagingSenderId: "818928376047",
  appId: "1:818928376047:web:694421ea32b1a30249a31a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;