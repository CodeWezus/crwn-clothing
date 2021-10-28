//This initial import firebase/app is important because it pulls in the Firebase utility libraries.
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDBR-xU-JNrfjPhZePVILYk_nKxJsZfkkk",
    authDomain: "crwn-db-1bba1.firebaseapp.com",
    projectId: "crwn-db-1bba1",
    storageBucket: "crwn-db-1bba1.appspot.com",
    messagingSenderId: "253837336055",
    appId: "1:253837336055:web:28bb7574f18f235c1362f2",
    measurementId: "G-J5D224MNSK"
};

//Initializes the application with the Firebase config above
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider).catch( (error) => {
    if (error.code === 'auth/popup-closed-by-user'){}
});

export default firebase;