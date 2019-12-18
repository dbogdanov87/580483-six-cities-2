import React from 'react';
import renderer from 'react-test-renderer';
import FavoritesItems from './favorites-items.jsx';
import {offers} from '../../mocks/offers.js';

jest.mock(`react-router-dom`, () => ({
  Link: () => null
}));

it(`FavoritesItems is displayed correctly`, () => {

  const props = {
    city: `Amsterdam`,
    favorites: offers,
  };

  const favoriteItems = renderer
    .create(<FavoritesItems {...props} />)
    .toJSON();

  expect(favoriteItems).toMatchSnapshot();
});
