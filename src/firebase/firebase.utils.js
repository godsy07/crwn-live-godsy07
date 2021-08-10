import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB7C0t86jhu7lZj4IxhJF3lw7WvkjkFJvc",
  authDomain: "ecommerce-db-56f2f.firebaseapp.com",
  projectId: "ecommerce-db-56f2f",
  storageBucket: "ecommerce-db-56f2f.appspot.com",
  messagingSenderId: "842053571659",
  appId: "1:842053571659:web:e6dd591363818e2449a9ce",
  measurementId: "G-8Z5HGY4H09",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  // console.log(snapShot);
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
