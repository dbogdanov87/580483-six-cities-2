import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {compose} from "recompose";
import {Provider} from "react-redux";
import {reducer} from "./reducer.js";
import thunk from "redux-thunk";

import App from './components/app/app.jsx';
import {createAPI} from './api';

const init = () => {
  const api = createAPI((...args) => store.dispatch(...args));
  const store = createStore(
    reducer,
    compose(
      applyMiddleware(thunk.withExtraArgument(api)),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
  );

  ReactDOM.render(<Provider store={store}>
      <App></App>
  </Provider>,
  document.querySelector(`#root`));
};

init();
