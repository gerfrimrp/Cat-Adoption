// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhv1mlYOUhGv82ZLMpakS6HoL7qR1o__8",
  authDomain: "i-project-64637.firebaseapp.com",
  projectId: "i-project-64637",
  storageBucket: "i-project-64637.appspot.com",
  messagingSenderId: "768513435646",
  appId: "1:768513435646:web:56dc34bc02eb9cbb7502af",
  measurementId: "G-XQHDQT31JE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
