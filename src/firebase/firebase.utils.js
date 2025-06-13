// firebase.utils.js
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  getDocs
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB7C0t86jhu7lZj4IxhJF3lw7WvkjkFJvc",
  authDomain: "ecommerce-db-56f2f.firebaseapp.com",
  projectId: "ecommerce-db-56f2f",
  storageBucket: "ecommerce-db-56f2f.firebasestorage.app",
  messagingSenderId: "842053571659",
  appId: "1:842053571659:web:502b050c914a9ca549a9ce",
  measurementId: "G-TSZNFVM1BF"
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Auth & Firestore
export const auth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);

// Google Auth
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => signInWithPopup(auth, provider);

// Create user profile document
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(firestore, `users/${userAuth.uid}`);
  const snapShot = await getDoc(userRef);

  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userRef;
};

// Batch add collections and documents
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(firestore, collectionKey);
  const batch = writeBatch(firestore);

  objectsToAdd.forEach(obj => {
    const newDocRef = doc(collectionRef); // auto-generated ID
    batch.set(newDocRef, obj);
  });

  await batch.commit();
};

// Convert collections snapshot to map
export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(docSnapshot => {
    const { title, items } = docSnapshot.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: docSnapshot.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};
