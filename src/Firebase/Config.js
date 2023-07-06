import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getFirestore } from "firebase/firestore/lite";
import 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAI-qxtCiwrc6-DQ-IKMlvbut7zXkt30_8",
  authDomain: "mosastick-e59f1.firebaseapp.com",
  projectId: "mosastick-e59f1",
  storageBucket: "mosastick-e59f1.appspot.com",
  messagingSenderId: "46659780403",
  appId: "1:46659780403:web:25b2195a3dea12ea76c846",
  measurementId: "G-B329JD4F2Y"
};

const firebase = initializeApp(firebaseConfig);
export const db= getFirestore(firebase);
export const auth =getAuth(firebase);
export const storagePlace=getStorage(firebase);
export default firebase;
 