import React from 'react';
import renderer from 'react-test-renderer';
import FavoritesList from './favorites-list.jsx';
import {offers} from '../../mocks/offers.js';

jest.mock(`react-router-dom`, () => ({
  Link: () => null
}));

jest.mock(`../header/header.jsx`, () => `Header`);

it(`FavoritesList is displayed correctly`, () => {

  const props = {
    city: `Amsterdam`,
    favorites: offers,
  };

  const favoriteItems = renderer
    .create(<FavoritesList {...props} />)
    .toJSON();

  expect(favoriteItems).toMatchSnapshot();
});
