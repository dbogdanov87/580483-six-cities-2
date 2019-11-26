import React from "react";
import PropTypes from 'prop-types';
import MainScreen from "../main-screen/main-screen.jsx";

const App = (props) => {
  const {offers} = props;

  return <MainScreen offers={offers}/>;
};


App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    priceText: PropTypes.string.isRequired,
    bookmarkActive: PropTypes.bool.isRequired,
    rating: PropTypes.string.isRequired,
    cardName: PropTypes.string.isRequired,
    cardType: PropTypes.string.isRequired,
  }).isRequired
  )
};

export default App;
