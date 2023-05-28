// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


function useFirebaseConfig() {
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyABI5O8ym8VGx1Q00WOlxIbtZNX-rEl074",
    authDomain: "bug-off-796d7.firebaseapp.com",
    projectId: "bug-off-796d7",
    storageBucket: "bug-off-796d7.appspot.com",
    messagingSenderId: "428922515403",
    appId: "1:428922515403:web:b223f60253da51f12bd04e",
    measurementId: "G-GPMGNHK5HT"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  return { app, analytics }
}

export default useFirebaseConfig;