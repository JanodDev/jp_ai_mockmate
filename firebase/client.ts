// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOZ4qrQfDjZfBK62TJH6YSBheE35iB4JM",
  authDomain: "mockmate-7ca59.firebaseapp.com",
  projectId: "mockmate-7ca59",
  storageBucket: "mockmate-7ca59.firebasestorage.app",
  messagingSenderId: "80271494542",
  appId: "1:80271494542:web:570ed6b73348909237a8df",
  measurementId: "G-XLE8RCMYY1",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
