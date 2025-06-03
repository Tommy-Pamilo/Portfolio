import { FirebaseApp, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

let FirebaseInstance: FirebaseApp;

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

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
  getAnalytics: GetAnalytics,
};

export default firebaseServices;
