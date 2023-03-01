import { FirebaseApp, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCz13ymIBO0bpdX-QB2uLYjSEocjWxWDeo",
  authDomain: "portfolio-682a1.firebaseapp.com",
  projectId: "portfolio-682a1",
  storageBucket: "portfolio-682a1.appspot.com",
  messagingSenderId: "660180400492",
  appId: "1:660180400492:web:e6328d43cef451f5409b49",
  measurementId: "G-NL4623L5VW"
};

let FirebaseInstance: FirebaseApp;

const InitializeApp = () => {
  if (!FirebaseInstance) {
    FirebaseInstance = initializeApp(firebaseConfig);
  }

  return FirebaseInstance;
};

const GetFirestoreInstance = () => {
  const firebaseInstance = InitializeApp();

  return getFirestore(firebaseInstance);
};

const GetAnalytics = () => {
  const firebaseInstance = InitializeApp();

  return getAnalytics(firebaseInstance);
};

const firebaseServices = {
  getFirestoreInstance: GetFirestoreInstance,
  getAnalytics: GetAnalytics
};

export default firebaseServices;
