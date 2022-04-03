import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAzPvfkZAoUZXSj4V4YyZkTN4xFQpo_xFg",
    authDomain: "democpp-79630.firebaseapp.com",
    projectId: "democpp-79630",
    storageBucket: "democpp-79630.appspot.com",
    messagingSenderId: "904499117684",
    appId: "1:904499117684:web:4c0818a1083a82ed7a9b21"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth()

export { app, db, auth }
