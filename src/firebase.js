// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCh0EWzRCQorOSbOeC8nOyxsem3VRqLDys",
  authDomain: "notes-7a881.firebaseapp.com",
  projectId: "notes-7a881",
  storageBucket: "notes-7a881.appspot.com",
  messagingSenderId: "959371341353",
  appId: "1:959371341353:web:66d8e7e39c13fa79e93638"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
