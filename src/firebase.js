// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyASdlciLvybezVV-1YEkQmWB-zqQKGzSFw",
    authDomain: "wedding-invitation-39ce0.firebaseapp.com",
    projectId: "wedding-invitation-39ce0",
    storageBucket: "wedding-invitation-39ce0.appspot.com",
    messagingSenderId: "443833588721",
    appId: "1:443833588721:web:9472bbec2878adbca58250",
    measurementId: "G-ZG2EEEG62H"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
