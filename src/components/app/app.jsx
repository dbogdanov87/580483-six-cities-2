import React from "react";
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import {Operations} from "../../reducer.js";
import MainScreen from "../main-screen/main-screen.jsx";
import DetailsOffer from "../details-offer/details-offer.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import FavoritesList from "../favorites-list/favorites-list.jsx";
import withAuth from "../../hocs/with-auth.jsx";

const App = (props) => {
  const {allOffers} = props;

  if (allOffers.length === 0) {
    props.getListOffers();
  }

  return allOffers.length === 0 ? null : (
    <Router history={history}>
      <Switch>
        <Route exact path={`/`} component={MainScreen} />
        <Route exact path={`/login`} component={SignIn} />
        <Route exact path={`/offer/:id`} component={DetailsOffer} />
        <Route exact path={`/favorites`} component={withAuth(FavoritesList)} />
        <Route render={ () => <div>style={
          {
            fontSize: `30px`,
            position: `absolute`,
            width: `100%`,
            top: `50%`,
            textAlign: `center`}}>Ups... Page not found</div>
        } />
      </Switch>
    </Router>
  );
};

App.propTypes = {
  allOffers: PropTypes.array.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  allOffers: state.allOffers,
  getListOffers: state.getListOffers,
});

const mapDispatchToProps = {
  getListOffers: Operations.getListOffers,
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
