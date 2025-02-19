// firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
const firebaseConfig = {
  apiKey: "AIzaSyAlf6cPn_8iQdqKQ6BUBMPQBBtYRG9vwYo",
  authDomain: "tarbo-coin-83350.firebaseapp.com",
  databaseURL: "https://tarbo-coin-83350-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tarbo-coin-83350",
  storageBucket: "tarbo-coin-83350.firebasestorage.app",
  messagingSenderId: "102108533132",
  appId: "1:102108533132:web:7f4356101231aa4ac106a9",
  measurementId: "G-7ZHY2J6NPL"
};
// Your web app's Firebase configuration


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };