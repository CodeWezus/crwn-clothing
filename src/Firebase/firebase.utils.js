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

// Takes in the userAuth object and tries to create a user profile in the application database.
export const createUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth) return;

    // A query reference object which contains properties used to build the snapshot. The reference does not have the actual data such as the ID or path.
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    // Create a snapshot based on the properties in userRef and returns the user data.
    const snapShot = await userRef.get();

    console.log(snapShot)

    // If a snapshot doesn't exist, ie. a user does not have an account, we want to create that piece of data at the userRef location.
    if(!snapShot.exists){
        const {displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error){
            console.log('error creating user snapshot', error.message)
        }
    }

    return userRef;
}

//Initializes the application with the Firebase config above.
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Allows for the Google Sign-In popup functionality.
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider).catch( (error) => {
    if (error.code === 'auth/popup-closed-by-user'){}
});

export default firebase;