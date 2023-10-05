import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCuE7gBL2wVtFEK4Ma6mmAvKagc3VnGg5w",
  authDomain: "react-glasses-auth-5f1c0.firebaseapp.com",
  projectId: "react-glasses-auth-5f1c0",
  storageBucket: "react-glasses-auth-5f1c0.appspot.com",
  messagingSenderId: "659263089152",
  appId: "1:659263089152:web:8f55b50ed7336c96a086e5"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
