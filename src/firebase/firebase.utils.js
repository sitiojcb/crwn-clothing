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
    //video 166 agrego 
 //   const collectionRef = firestore.collection('users');//166
    //para obtener el snapshot oj 
    const snapShot = await userRef.get()
    //console.log(snapShot)
   // const collectionSnapshot = await collectionRef.get();//166
  //  console.log({collection: collectionSnapshot.docs.map(doc => doc.data())})//166
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

//video 167 --esto lo mantiene
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd ) => {
    const collectionRef = firestore.collection(collectionKey);
    //console.log(collectionRef)
    const batch = firestore.batch()
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc()
       // console.log(newDocRef)
       //set de value 
       batch.set(newDocRef, obj )
    })
    //como retorna una promesa usa await
   return await batch.commit()
}

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data //o doc.data()
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    })
    //console.log(transformedCollection)
    //realiza loop comenzando con Hats
   return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection
        return accumulator
    }, {})
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;