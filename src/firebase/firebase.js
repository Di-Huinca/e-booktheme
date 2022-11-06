import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getStorage, ref, uploadBytes, getDownloadURL, getBytes} from 'firebase/storage';
import {getFirestore, collection, addDoc, getDocs, doc, getDoc, query, where, setDoc, deleteDoc} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);


export default firebaseApp;

