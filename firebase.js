// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVbBiGJX5S3p4Qh1Sf0TFbjfg8V7Bblbg",
  authDomain: "art-webshop.firebaseapp.com",
  projectId: "art-webshop",
  storageBucket: "art-webshop.appspot.com",
  messagingSenderId: "851706972677",
  appId: "1:851706972677:web:049f097274bd898624aa6c",
  measurementId: "G-GLN0R8D33F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = firebase.firestore();
export const dbMenuAdd = db.collection("menuItems");
export const dbPaintingAdd = db.collection("Painting");
