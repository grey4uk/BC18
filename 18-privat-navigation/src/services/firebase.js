// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: 'my-athorization-project.firebaseapp.com',
  projectId: 'my-athorization-project',
  storageBucket: 'my-athorization-project.appspot.com',
  messagingSenderId: '364866289247',
  appId: '1:364866289247:web:e186ff42b510fbe80e65ea',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

const database = getFirestore(app);

const firebase = {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  auth,
  signOut,
  app,
  database,
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
};

export default firebase;
