// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDXXIMm0ATD7YtNDCONDLoxonCO2Bgzba0",
  authDomain: "suki-x-panel.firebaseapp.com",
  databaseURL: "https://suki-x-panel-default-rtdb.firebaseio.com",
  projectId: "suki-x-panel",
  storageBucket: "suki-x-panel.firebasestorage.app",
  messagingSenderId: "936670588394",
  appId: "1:936670588394:web:dfbdc6bd039b3364361693",
  measurementId: "G-ZP3Y3B9YMF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Export the initialized services
export { app, analytics, db };