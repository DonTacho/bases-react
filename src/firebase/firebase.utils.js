 import firebase from "firebase/app";
 import "firebase/firestore";
 import "firebase/auth";

 const config = {
    apiKey: "AIzaSyB0RPd5Z04EcRcYXK4-jp1SHAYwKB8z9YI",
    authDomain: "bases-react-nov-7e3df.firebaseapp.com",
    projectId: "bases-react-nov-7e3df",
    storageBucket: "bases-react-nov-7e3df.appspot.com",
    messagingSenderId: "704865129531",
    appId: "1:704865129531:web:9364f5c75d8741f026b81e"
  };

firebase.initializeApp(config);

 export const createUserProfileDocument = async (userAuth, additionalData) => {
     if (!userAuth) return;

     const userRef = firestore.doc(`users/${userAuth.uuid}`);

     const snapShot = await userRef.get();

     if (!snapShot.exists) {
         const { displayName, email } = userAuth;
         const createAt = new Date();
         try {
             await userRef.set({
                 displayName,
                 email,
                 createAt, 
                 ...additionalData
            });
        } catch (error) {
            console.log("Error creating user", error.message);
        }
    }
    return userRef;
 }

 export const auth = firebase.auth();
 export const firestore = firebase.firestore();

 const provider = new firebase.auth.GoogleAuthProvider();
 provider.setCustomParameters({ prompt: "select_account" });
 export const signInWithGoogle = () => auth.signInWithPopup(provider);

 export default firebase;