import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCEAeo0AihMccFo6ljwhVVxN1QsYu_dpbc",
  authDomain: "blog-app-react-typescript.firebaseapp.com",
  projectId: "blog-app-react-typescript",
  storageBucket: "blog-app-react-typescript.appspot.com",
  messagingSenderId: "412601294824",
  appId: "1:412601294824:web:8cd5b5f73b10d502130e5d",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
