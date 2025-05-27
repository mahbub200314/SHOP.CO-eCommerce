// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider,getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcu9rdU77JgeECoqcwcC5dfQPqyVWf-FQ",
  authDomain: "ecomercewebstie.firebaseapp.com",
  projectId: "ecomercewebstie",
  storageBucket: "ecomercewebstie.firebasestorage.com",
  messagingSenderId: "338195213662",
  appId: "1:338195213662:web:55b38966ebd213f8ea33cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)