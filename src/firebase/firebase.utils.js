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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return ;
   // console.log(firestore.doc('users/1242423')) va a devolver exist false
    //const userRef = firestore.doc('users/1242423')
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    //para obtener el snapshot oj 
    const snapShot = await userRef.get()
    //console.log(snapShot)
    if(!snapShot.exists) {
        //si no existe quiero crear data 
        const {displayName, email } = userAuth;
        const createdAt = new Date()
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user ' , error.message)
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