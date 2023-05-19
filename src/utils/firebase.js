import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
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
}

export const createUserDocumentFromAuth = async (userAuth) => { 
  const {displayName, email } = userAuth;
  const createdAt = new Date();
  const userDocRef = doc(db, 'users', userAuth.uid);
  
  try {
    await setDoc(userDocRef, {
      displayName,
      email,
      createdAt
    });
  } catch (e) {
    console.error('error creating the user', e.message);
  }
};
