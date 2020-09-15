import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCyjWxOBmZ5blrltGXmWjkEYSDbXi-Xt9o",
    authDomain: "crwn-db-785ba.firebaseapp.com",
    databaseURL: "https://crwn-db-785ba.firebaseio.com",
    projectId: "crwn-db-785ba",
    storageBucket: "crwn-db-785ba.appspot.com",
    messagingSenderId: "301768870668",
    appId: "1:301768870668:web:fbebd7a4111b6d2177d729"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;