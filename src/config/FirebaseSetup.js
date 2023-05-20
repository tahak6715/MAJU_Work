// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5krXs5oy7wsp2HP87OLBGYrF8T_wWTmo",
  authDomain: "kuch-bhi-d09b2.firebaseapp.com",
  projectId: "kuch-bhi-d09b2",
  storageBucket: "kuch-bhi-d09b2.appspot.com",
  messagingSenderId: "892920509895",
  appId: "1:892920509895:web:14638ecc5a41f55b6655e2",
  measurementId: "G-WRN6HZC2PX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app