import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider, createUserWithEmailAndPassword as signUp, signInWithEmailAndPassword as signIn, signOut as signOutUser, signInWithPopup } from 'firebase/auth';


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
