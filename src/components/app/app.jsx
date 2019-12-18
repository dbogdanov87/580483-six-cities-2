import React from "react";
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import {Operations} from "../../reducer.js";
import MainScreen from "../main-screen/main-screen.jsx";
import DetailsOffer from "../details-offer/details-offer.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import FavoritesList from "../favorites-list/favorites-list.jsx";

const App = (props) => {
  const {isAuthorized, offers} = props;

  if (offers.length === 0) {
    props.getListOffers();
  }

  return offers.length === 0 ? null : (
    <Router history={history}>
      <Switch>
        <Route exact path={`/`} component={MainScreen} />
        <Route exact path={`/login`} component={isAuthorized ? MainScreen : SignIn} />
        <Route exact path={`/offer/:id`} component={DetailsOffer} />
        <Route exact path={`/favorites`} component={isAuthorized ? FavoritesList : SignIn} />
        <Route render={ () => <div style={
          {
            fontSize: `30px`,
            position: `absolute`,
            width: `100%`,
            top: `50%`,
            textAlign: `center`}}>`Ups... Page not found`</div>
        }/>
      </Switch>
    </Router>
  );
};

App.propTypes = {
  offers: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired,
  isAuthorized: PropTypes.bool,
  getListOffers: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  offers: state.offers,
  city: state.city,
  isAuthorized: state.isAuthorized,
  getListOffers: state.getListOffers,
});

const mapDispatchToProps = {
  getListOffers: Operations.getListOffers,
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
