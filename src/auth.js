// import app from "./firebaseConfig"
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const auth = getAuth();
const provider = new GoogleAuthProvider();

export async function signIn() {
  await signInWithPopup(auth, provider);
}

export async function logOut() {
  await signOut(auth);
}
