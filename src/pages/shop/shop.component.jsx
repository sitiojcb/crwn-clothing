import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

class ShopPage extends React.Component {
  //constructor() {
    //comenta que es mala idea llamar el fetchCollectionsStartAsync();
    //aca por comportamiento inesperado
  //}
//  UNSAFE.componentWillMount(){
    //comenta que es mala idea, is deprecated
 // }
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;

    fetchCollectionsStartAsync();
  }

  render() {
    const { match } = this.props;

    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
