import React from "react";
import renderer from 'react-test-renderer';
import {offers} from '../../mocks/offers.js';
import {reviews} from '../../mocks/reviews.js';
import CardOffer from '../card-offer/card-offer.jsx';

jest.mock(`react-router-dom`, () => ({
  Link: () => null
}));

it(`CardOffer are displayed correctly`, () => {

  const card = renderer.create(
      <CardOffer
        offers={offers[0]}
        reviews={reviews}
        user={null}
        onOfferHover={-1}
        isPremium={false}
        favorites={offers}
      />)
      .toJSON();
  expect(card).toMatchSnapshot();
});
