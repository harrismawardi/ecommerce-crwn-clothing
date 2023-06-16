import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCVgoQMYjOxq9q5bhpLaDRE97gHw0-Q74U",
  authDomain: "crwn-clothing-db-b2046.firebaseapp.com",
  projectId: "crwn-clothing-db-b2046",
  storageBucket: "crwn-clothing-db-b2046.appspot.com",
  messagingSenderId: "73390111484",
  appId: "1:73390111484:web:cdae41a63c96e79f3ff579",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const checkUserExists = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  return userSnapshot.exists();
};

export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {
  const { displayName, email } = userAuth;
  const createdAt = new Date();
  const userDocRef = doc(db, 'users', userAuth.uid);

  await setDoc(userDocRef, {
    displayName,
    email,
    createdAt,
    ...additionalInformation
  });
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) { return }
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
}

export const logUserOut = async () => await signOut(auth);

export const onAuthStateChangeListener = (callback) => {
  return onAuthStateChanged(auth, callback);
}