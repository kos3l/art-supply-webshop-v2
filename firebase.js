// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";

import firebase from "@firebase/app";
import "@firebase/firestore";
import "@firebase/auth";
import "@firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

var firebaseConfig = {
  apiKey: "AIzaSyDVbBiGJX5S3p4Qh1Sf0TFbjfg8V7Bblbg",
  authDomain: "art-webshop.firebaseapp.com",
  projectId: "art-webshop",
  storageBucket: "art-webshop.appspot.com",
  messagingSenderId: "851706972677",
  appId: "1:851706972677:web:049f097274bd898624aa6c",
  measurementId: "G-GLN0R8D33F",
};
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const dbPaintingItemsList = db.collection("painting");
export const dbDrawingItemsList = db.collection("drawing");
export const dbBundlesItemsList = db.collection("bundles");
export const dbTextContentList = db.collection("textContent");
