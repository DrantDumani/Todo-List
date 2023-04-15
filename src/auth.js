import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const auth = getAuth();
const provider = new GoogleAuthProvider();

export function getCurrentUserId() {
  return auth.currentUser.uid;
}

async function signIn() {
  await signInWithPopup(auth, provider);
}

async function logOut() {
  await signOut(auth);
}

export function setAuthListener(callback) {
  onAuthStateChanged(auth, (user) => {
    callback(user);
  });
}

export function addLoginListenerToElement(el, eventType) {
  el.addEventListener(eventType, signIn);
}

export function addLogoutListenerToElement(el, eventType) {
  el.addEventListener(eventType, logOut);
}
