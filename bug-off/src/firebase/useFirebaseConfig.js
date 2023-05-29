// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


 // Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8YMkxcSKXhf7fY4DJPGmZxkAcfV9C_vM",
  authDomain: "test-5f5d6.firebaseapp.com",
  projectId: "test-5f5d6",
  storageBucket: "test-5f5d6.appspot.com",
  messagingSenderId: "683214083750",
  appId: "1:683214083750:web:1c86b6479d4d140fda8667",
  measurementId: "G-B8K1ZF9L1L"
};  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);


const useFirebaseConfig = () => {
  return { app, analytics, db}
};

export default useFirebaseConfig;