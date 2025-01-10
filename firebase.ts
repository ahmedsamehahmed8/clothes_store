// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzKqwk79iakgrp3c6kAdOnZOOshLKfahY",
  authDomain: "project-876f1.firebaseapp.com",
  projectId: "project-876f1",
  storageBucket: "project-876f1.firebasestorage.app",
  messagingSenderId: "1094593982263",
  appId: "1:1094593982263:web:f20d07af9dbe0e081cb4b2",
  measurementId: "G-X3N1E8M4F3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
