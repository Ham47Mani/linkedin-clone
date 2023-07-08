import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBNT39L0aTUUxtT3ErTsO7UWthUo0vF2Eo",
  authDomain: "linkedin-clone-55a40.firebaseapp.com",
  projectId: "linkedin-clone-55a40",
  storageBucket: "linkedin-clone-55a40.appspot.com",
  messagingSenderId: "775063547705",
  appId: "1:775063547705:web:31931344442852b56382e8"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const store = getStorage(app);