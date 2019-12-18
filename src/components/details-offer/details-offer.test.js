import React from "react";
import renderer from 'react-test-renderer';
import {DetailsOffer} from './details-offer.jsx';
import {offers} from '../../mocks/offers.js';
import {reviews} from '../../mocks/reviews.js';

jest.mock(`../header/header`, () => `Header`);
jest.mock(`../map/map`, () => `Map`);

it(`DetailsOffer details are displayed correctly`, () => {

  const props = {
    offer: offers[0],
    offers,
    reviews,
    nearOffer: offers[0],
    activeCity: `Amsterdam`,
    isAuthorized: false,
    userData: {email: `test@test.com`},
    favorites: offers,
    setFavorite: jest.fn(),
    getListOffers: jest.fn(),
    offerHoverHandler: jest.fn(),
    loadFavorites: jest.fn(),
    history: {push: `/`},
    match: {params: {id: 1}}
  };

  const offer = renderer
    .create(<DetailsOffer {...props} />)
    .toJSON();

  expect(offer).toMatchSnapshot();

});
