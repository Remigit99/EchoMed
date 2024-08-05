
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: String(process.env.NEXT_PUBLIC_FIREBASE_APIKEY),
  authDomain: String(process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN),
  projectId: String(process.env.NEXT_PUBLIC_FIREBASE_PROJECTID),
  storageBucket: String(process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET),
  messagingSenderId: String(process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID),
  appId: String(process.env.NEXT_PUBLIC_FIREBASE_APP_ID)
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };