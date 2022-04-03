import firebase from 'firebase/compat/app'

const firebaseConfig = {
    apiKey: "AIzaSyAzPvfkZAoUZXSj4V4YyZkTN4xFQpo_xFg",
    authDomain: "democpp-79630.firebaseapp.com",
    projectId: "democpp-79630",
    storageBucket: "democpp-79630.appspot.com",
    messagingSenderId: "904499117684",
    appId: "1:904499117684:web:4c0818a1083a82ed7a9b21"
  };

firebase.initializeApp(firebaseConfig);
export {firebase};