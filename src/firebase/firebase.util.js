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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
  
    const userRef = firestore.doc(`/users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData      
            });
        }catch(err){
            console.log('error creating user',err.message);
        }
    }
    return userRef;
};


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;