import React from 'react'
import { Route } from 'react-router-dom'
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect'
// import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'
// import { updateCollections } from '../../redux/shop/shop.actions'
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions'
import {selectIsCollectionFetching} from '../../redux/shop/shop.selectors'
import  WithSpinner from '../../components/with-spinner/with-spinner.component'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component  {
    //comenta con redux-thunk no lo necesito 
    // state = {
    //         loading: true
    //     }
    // unsubscribeFromSnapshot = null;
// cambio con redux-thunk 
    // componentDidMount() {
    //     const { updateCollections } = this.props;
    //     const collectionRef = firestore.collection('collections')
    //     //
    //     // fetch('https://firestore.googleapis.com/v1/projects/crwn-db-79248/databases/(default)/documents/collections').then(
    //     //     response => response.json()
    //     // ).then(collections => console.log(collections))

    // collectionRef.get().then( snapshot => {
    // //  console.log(snapshot)
    //    const collectionsMap =   convertCollectionsSnapshotToMap(snapshot)
    //    //console.log(collectionsMap)
    //         updateCollections(collectionsMap)
    //         this.setState({loading: false})
    //      })
    // }
    componentDidMount() {
    }
    render() {
        const { match } = this.props;
      //  const { loading } = this.state;
        return (
            <div className='shop-page'>
                <Route extact path={`${match.path}`} 
                render={(props) => (
                <CollectionsOverviewWithSpinner isLoading={loading} {...props} /> 
                )} />
                <Route exact path={`${match.path}/:collectionId`} 
                render={(props) => (
                <CollectionsOverviewWithSpinner isLoading={loading} {...props} /> 
                )} />
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})
export default connect(null, mapDispatchToProps)(ShopPage);