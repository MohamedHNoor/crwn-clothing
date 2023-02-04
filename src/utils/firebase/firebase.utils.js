// Import the functions from the SDKs
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyChQJWGIu1Ij8c0F9DbduVft3CC92IdlPU',
  authDomain: 'crwn-clothing-db-13001.firebaseapp.com',
  projectId: 'crwn-clothing-db-13001',
  storageBucket: 'crwn-clothing-db-13001.appspot.com',
  messagingSenderId: '959462811287',
  appId: '1:959462811287:web:346a1f533c47c181756bd2',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  // 1 - if user does not exist
  if (!userSnapshot.exists()) {
    // 2 - create user data, set the document with data from userAuth in my collection
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  // 3 - if user data exists return the userDocRef
  return userSnapshot;
};
