import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArDb3omnFSu2DWZrFdFshCGc1EOVw4DTw",
  authDomain: "website-2a746.firebaseapp.com",
  projectId: "website-2a746",
  storageBucket: "website-2a746.appspot.com",
  messagingSenderId: "1079900356480",
  appId: "1:1079900356480:web:5034e0952490639aa50b65",
  measurementId: "G-J098LZJQG3",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
