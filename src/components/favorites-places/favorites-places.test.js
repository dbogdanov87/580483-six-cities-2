import React from 'react';
import renderer from 'react-test-renderer';
import FavoritesPlace from './favorites-places.jsx';
import {offers} from '../../mocks/offers.js';

jest.mock(`react-router-dom`, () => ({
  Link: () => null
}));

it(`FavoritesPlace is displayed correctly`, () => {

  const props = {
    favorites: offers,
    setFavorites: jest.fn(),
    bookmarkClickHandler: jest.fn(),
  };

  const favoritePlace = renderer
    .create(<FavoritesPlace {...props} />)
    .toJSON();

  expect(favoritePlace).toMatchSnapshot();
});
