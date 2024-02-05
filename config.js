import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXcTRw0moomMO7jmZSmKUf5fQA-cnSKKM",
  authDomain: "olizana.firebaseapp.com",
  projectId: "olizana",
  storageBucket: "olizana.appspot.com",
  messagingSenderId: "362367792808",
  appId: "1:362367792808:web:56966e3b9fb0eeed5d349d",
  measurementId: "G-P61HVE7PQ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);