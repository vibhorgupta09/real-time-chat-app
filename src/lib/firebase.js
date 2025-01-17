import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chat-app-11e22.firebaseapp.com",
  projectId: "chat-app-11e22",
  storageBucket: "chat-app-11e22.firebasestorage.app",
  messagingSenderId: "1059831445782",
  appId: "1:1059831445782:web:dc00db6fe9c35cc1b57837"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()