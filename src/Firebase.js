import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCZ4pc2LKZS13AcW9dg5ar_Gh69_3PdUy0",
    authDomain: "chat-app-26e92.firebaseapp.com",
    projectId: "chat-app-26e92",
    storageBucket: "chat-app-26e92.appspot.com",
    messagingSenderId: "610451873189",
    appId: "1:610451873189:web:270d24bb9f50056d3bdc4c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()