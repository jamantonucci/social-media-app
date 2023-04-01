import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEJ3kIEmbqiSTM25gtUxQeCEioTj9k0M8",
  authDomain: "social-media-9f427.firebaseapp.com",
  projectId: "social-media-9f427",
  storageBucket: "social-media-9f427.appspot.com",
  messagingSenderId: "167541230164",
  appId: "1:167541230164:web:e4f8fd6822dbc43babfbc1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize cloud firestore
export const db = getFirestore(app);
