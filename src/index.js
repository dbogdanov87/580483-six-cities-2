import React from "react";
import ReactDOM from "react-dom";
import App from './components/app/app.jsx';
import offers from './mocks/offers.js';
import reviews from "./mocks/reviews.js";
import nearbyOffers from "./mocks/nearbyOffers.js";

const init = () => {
  ReactDOM.render(
      <App
        offers={offers}
        reviews={reviews}
        nearbyOffers={nearbyOffers}
      />,
      document.querySelector(`#root`)
  );
};

init();
