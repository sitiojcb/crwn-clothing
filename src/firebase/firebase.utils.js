import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCq_FqyhvOMizfVEbDMykbbe69NL71Ynd4",
    authDomain: "crwn-db-79248.firebaseapp.com",
    databaseURL: "https://crwn-db-79248.firebaseio.com",
    projectId: "crwn-db-79248",
    storageBucket: "crwn-db-79248.appspot.com",
    messagingSenderId: "732625627403",
    appId: "1:732625627403:web:58576922fff33f87271a0e",
    measurementId: "G-B2VZW0YJY0"
}
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;