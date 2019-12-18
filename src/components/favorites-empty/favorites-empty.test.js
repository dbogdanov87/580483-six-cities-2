import React from 'react';
import renderer from 'react-test-renderer';
import FavoriteEmpty from './favorites-empty.jsx';

jest.mock(`react-router-dom`, () => ({
  Link: () => null
}));

jest.mock(`../header/header`, () => `Header`);

it(`FavoriteEmpty is displayed correctly`, () => {

  const props = {
    isAuthorized: false,
    bookmarkClickHandle: jest.fn(),
    setFavorite: jest.fn(),
  };

  const favoriteEmpty = renderer
    .create(<FavoriteEmpty {...props} />)
    .toJSON();

  expect(favoriteEmpty).toMatchSnapshot();
});
