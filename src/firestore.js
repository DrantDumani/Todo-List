import {
  getFirestore,
  collection,
  doc,
  addDoc,
  setDoc,
  getDoc,
  onSnapshot,
} from "firebase/firestore";
import app from "./firebaseConfig";

const database = getFirestore();
export let unsubscribe = () => {};

export async function fetchUserTasks(userId, callback) {
  const docRef = doc(database, "userTasks", userId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    callback(docSnap.data());
  } else {
    setDoc(doc(database, "userTasks", userId), {
      projects: [],
      tasks: [],
    });
  }
}

export function updateFirestore(obj, userId) {
  setDoc(doc(database, "userTasks", userId), obj);
}

export function setUnsubscribe(callback, userId) {
  unsubscribe = onSnapshot(doc(database, "userTasks", userId), (doc) => {
    callback(doc.data());
  });
}
