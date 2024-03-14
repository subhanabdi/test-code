import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider, createUserWithEmailAndPassword as signUp, signInWithEmailAndPassword as signIn, signOut as signOutUser, signInWithPopup } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyAJvH8F0Vk6hvkJKTLk-K9VJn6fzbEpsN0",

  authDomain: "hello-new-d337a.firebaseapp.com",

  projectId: "hello-new-d337a",

  storageBucket: "hello-new-d337a.appspot.com",

  messagingSenderId: "590690437215",

  appId: "1:590690437215:web:f18f60a32f39efd11e73ea"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Define auth here
const auth = getAuth(app); // Initialize auth using the Firebase app instance

// Sign up with email and password
export const signUpWithEmailAndPassword = (email, password) => {
  return signUp(auth, email, password);
};
  
// Login with email and password
export const signInWithEmailAndPassword = (email, password) => {
  return signIn(auth, email, password);
};
  
// Sign out
export const signOut = () => {
  return signOutUser(auth);
};
  
// Sign in with Google
export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};
  
// Sign in with GitHub
export const signInWithGitHub = () => {
  const provider = new GithubAuthProvider();
  return signInWithPopup(auth, provider);
};


export { auth};
