import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDMcBlxxUw1i47JCGDBHEzCY_bdCoiyS-w",
  authDomain: "todo-list-d5cfc.firebaseapp.com",
  projectId: "todo-list-d5cfc",
  storageBucket: "todo-list-d5cfc.appspot.com",
  messagingSenderId: "716476345680",
  appId: "1:716476345680:web:4d02b03d7a18db81491055",
};

const app = initializeApp(firebaseConfig);
export default app;
