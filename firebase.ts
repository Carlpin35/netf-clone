// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3lfFyE9IwxnkALhOhlEECJwxNTDIuhGg",
  authDomain: "netflix-clone-d02f1.firebaseapp.com",
  projectId: "netflix-clone-d02f1",
  storageBucket: "netflix-clone-d02f1.appspot.com",
  messagingSenderId: "142121974598",
  appId: "1:142121974598:web:72554ce768145d20f74347",
  measurementId: "G-RK970QFM7H"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }