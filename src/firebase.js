import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDmwvFdXbmXZO_HhYOgFW2A9TV1rKJesiY",
  authDomain: "div-auth-dev.firebaseapp.com",
  projectId: "div-auth-dev",
  storageBucket: "div-auth-dev.appspot.com",
  messagingSenderId: "436020222394",
  appId: "1:436020222394:web:ecac4ae13abbddcbafe583"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
