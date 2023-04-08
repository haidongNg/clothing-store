// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  GoogleAuthProvider,
  User,
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBryJkHbIYqrR0-jGNM3fg6-rY-TJciSCw",
  authDomain: "clothing-store-db-cd342.firebaseapp.com",
  projectId: "clothing-store-db-cd342",
  storageBucket: "clothing-store-db-cd342.appspot.com",
  messagingSenderId: "946131431372",
  appId: "1:946131431372:web:62cba6a88b24a36c3bb769",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});
export const db = getFirestore(firebaseApp);
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

interface AdditionalInformation {
  displayName?: string;
}

/**
 * Create user with Document firebase storage
 *
 * @param userAuth
 * @param additionalInformation
 * @returns
 */
export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalInformation: AdditionalInformation
) => {
  // userAuth empty
  if (!userAuth) return;

  // table users
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  // user exists
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      // save user
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error);
    }
  }

  return userDocRef;
};

/**
 * Create user with email and password
 *
 * @param email String
 * @param password String
 * @returns
 */
export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

/**
 * Sign in user with email and password
 *
 * @param email String
 * @param password  String
 * @returns
 */
export const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

/**
 * Sign Out
 *
 * @returns
 */
export const signOutUser = async () => signOut(auth);

export const onAuthStateChangedlistener = (
  callback: (user?: User | any) => void
) => onAuthStateChanged(auth, callback);
