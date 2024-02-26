import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCx96bDIfGDgeSSScZUoXivcFJYMspomwY",
    authDomain: "react-proyecto-final---cabak.firebaseapp.com",
    projectId: "react-proyecto-final---cabak",
    storageBucket: "react-proyecto-final---cabak.appspot.com",
    messagingSenderId: "443010454530",
    appId: "1:443010454530:web:4bb91b997af4f2cd63c31b"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
