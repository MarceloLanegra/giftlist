import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBiU1pFvzyz5Knp3ugzXkaJZ1AZNZsKZhY",
  authDomain: "wishlist-2c8e7.firebaseapp.com",
  projectId: "wishlist-2c8e7",
  storageBucket: "wishlist-2c8e7.appspot.com",
  messagingSenderId: "302967730045",
  appId: "1:302967730045:web:d7f09f1f6e62db6bb46614",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
