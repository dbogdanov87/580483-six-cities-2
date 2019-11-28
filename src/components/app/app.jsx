import React from "react";
import PropTypes from 'prop-types';
import MainScreen from "../main-screen/main-screen.jsx";
import DetailsOffer from "../details-offer/details-offer.jsx";

const getPageScreen = (props) => {
  const {offers} = props;
  const offerId = location.pathname.slice(-1);
  switch (location.pathname) {
    case `/`:
      return <MainScreen offers={offers}/>;
    case `/offer` + offerId:
      const offerDetail = offers.find((offer) => {
        return offer.id === parseInt(offerId, 10);
      });
      return <DetailsOffer offer={offerDetail} />;
  }
  return null;
};

const App = (props) => {
  return <React.Fragment>{getPageScreen(props)}</React.Fragment>;
};

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

getPageScreen.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default App;
