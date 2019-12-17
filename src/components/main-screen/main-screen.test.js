import React from "react";
import renderer from "react-test-renderer";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {reducer} from '../../reducer';

import MainScreen from "./main-screen.jsx";

jest.mock(`../map/map.jsx`);

it(`MainScreen is rendered correctly`, () => {
  const offers = [{
    id: 1,
    preview_image: `img`,
    price: 25,
    is_favorite: true,
    rating: `90%`,
    title: `Beautiful`,
    type: `privet`
  }];
  const store = createStore(reducer);
  const tree = renderer.create(
      <Provider store={store}><MainScreen offers={offers} /></Provider>, {
      })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
