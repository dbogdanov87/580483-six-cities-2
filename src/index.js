import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./reducer.js";
import App from './components/app/app.jsx';
import offers from './mocks/offers.js';
import reviews from "./mocks/reviews.js";
import nearbyOffers from "./mocks/nearbyOffers.js";

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);
const init = () => {
  ReactDOM.render(<Provider store={store}>
    <App
      offers={offers}
      reviews={reviews}
      nearbyOffers={nearbyOffers}>
    </App>
  </Provider>,
  document.querySelector(`#root`));
};

init();
