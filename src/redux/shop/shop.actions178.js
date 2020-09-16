import ShopActionTypes from './shop.types'
import {firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'
import ShopActionsTypes from './shop.types'
export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
    
})

export const fetchCollectionsFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})
export const fetchCollectionsSuccess = collectionsMap => ({
    type: ShopActionsTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})
export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections')
        //podemos hacer esto gracias a redux thunk
        dispatch(fetchCollectionsStart())

        collectionRef.get().then(snapshot => {
    //  console.log(snapshot)
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
            dispatch(fetchCollectionsSuccess(collectionsMap))
            
        }).catch(error => dispatch(fetchCollectionsFailure(error.message)))
    }
}