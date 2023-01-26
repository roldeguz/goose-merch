import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBSsRUdd1LZZvbwLfGBnBsTaVd843jQOjk",
    authDomain: "goose-merch-db.firebaseapp.com",
    projectId: "goose-merch-db",
    storageBucket: "goose-merch-db.appspot.com",
    messagingSenderId: "279754795425",
    appId: "1:279754795425:web:1465d973bc3842f06783e0"
  };
  
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const SignInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (e) {
            console.log('Error creating user document', e.message);
        }
    }

    return userDocRef;
}