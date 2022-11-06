import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getStorage, ref, uploadBytes, getDownloadURL, getBytes} from 'firebase/storage';
import {getFirestore, collection, addDoc, getDocs, doc, getDoc, query, where, setDoc, deleteDoc} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.FIREBASE_AUTHDOMAIN,
  projectId: process.env.FIREBASE_PROJECTID,
  storageBucket: process.env.FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
  appId: process.env.FIREBASE_APPID,
  measurementId: process.env.FIREBASE_MEASUREMENTID
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);


export default firebaseApp;

