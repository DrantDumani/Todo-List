import {
  getFirestore,
  collection,
  doc,
  addDoc,
  setDoc,
  getDoc,
} from "firebase/firestore";
import app from "./firebaseConfig";

const database = getFirestore();

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
