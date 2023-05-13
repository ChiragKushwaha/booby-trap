import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDTDCPYikRdOHWxGceiRbtjjxdWJ7oyKiY",
//   authDomain: "b00by-trap.firebaseapp.com",
//   projectId: "b00by-trap",
//   storageBucket: "b00by-trap.appspot.com",
//   messagingSenderId: "846423423070",
//   appId: "1:846423423070:web:41727b077cecd37b295ccf",
//   measurementId: "G-35VMBZ96VK",
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
