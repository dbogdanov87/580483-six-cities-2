import React from 'react';
import renderer from 'react-test-renderer';
import EmptyOffers from './empty-offers.jsx';

jest.mock(`react-router-dom`, () => ({
  Link: () => null
}));

jest.mock(`../header/header`, () => `Header`);

it(`EmptyOffers is displayed correctly`, () => {

  const props = {
    city: `Amsterdam`,
  };

  const favoriteEmpty = renderer
    .create(<EmptyOffers {...props} />)
    .toJSON();

  expect(favoriteEmpty).toMatchSnapshot();
});
