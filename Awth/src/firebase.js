// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2m98UsVw8dXRzGKLH1hb022Qxrz2Y_-g",
  authDomain: "login-8131b.firebaseapp.com",
  projectId: "login-8131b",
  storageBucket: "login-8131b.firebasestorage.app",
  messagingSenderId: "134169095453",
  appId: "1:134169095453:web:6009b7b4c53380237945f4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Auth and Google Provider
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
