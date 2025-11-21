// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "jrbierberivberdcccdbcv",
  authDomain: "icvniejsdcscscrecvccd",
  projectId: "dcvsdcscevevrev",
  storageBucket: "wncwjecisdcsccsdwjceccc",
  messagingSenderId: "13416909sdcsdcc5453",
  appId: "1:134169095453:web:6009b7b4cscdcscdcscdscsc53380237945f4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Auth and Google Provider
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

