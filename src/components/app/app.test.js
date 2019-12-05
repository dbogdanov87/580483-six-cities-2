import React from "react";
import renderer from "react-test-renderer";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {reducer} from '../../reducer';
import App from "./app.jsx";


jest.mock(`../map/map.jsx`);

it(`App is rendered correctly`, () => {
  const offers = [{
    id: 1,
    cardImage: `img`,
    price: 25,
    priceText: `night`,
    bookmarkActive: true,
    rating: `90%`,
    cardName: `Beautiful`,
    cardType: `privet`
  }];
  const store = createStore(reducer);
  const tree = renderer.create(
      <Provider store={store}><App offers={offers} /></Provider>, {
      })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
