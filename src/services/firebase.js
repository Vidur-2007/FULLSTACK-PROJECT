import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDEQDFxlAPZwH5GiY3udYdsl9YR9cX61go",
  authDomain: "cbit-attendance-90021.firebaseapp.com",
  projectId: "cbit-attendance-90021",
  storageBucket: "cbit-attendance-90021.firebasestorage.app",
  messagingSenderId: "158277909",
  appId: "1:158277909:web:06d88c7b27167df77c891c"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };