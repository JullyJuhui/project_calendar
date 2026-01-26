// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB9cSSuZRNGUXJEwJJ0NEgvyo0o3toiuac",
    authDomain: "calendar2601-1f237.firebaseapp.com",
    projectId: "calendar2601-1f237",
    storageBucket: "calendar2601-1f237.firebasestorage.app",
    messagingSenderId: "447391575391",
    appId: "1:447391575391:web:1033e9407ac159f3019aea",
    measurementId: "G-3F0S8CXXSE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);