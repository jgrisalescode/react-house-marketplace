import { initializeApp } from "firebase/app"
import { } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBGMtEtpv0EdQIugHG3YEaM9VjuVSrhqZw",
    authDomain: "house-marketplace-jgrisales.firebaseapp.com",
    projectId: "house-marketplace-jgrisales",
    storageBucket: "house-marketplace-jgrisales.appspot.com",
    messagingSenderId: "714529696238",
    appId: "1:714529696238:web:56f338671951110b9146ff"
};

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()