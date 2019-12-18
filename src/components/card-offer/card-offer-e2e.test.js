import React from "react";
import {CardOffer} from "./card-offer.jsx";
import {configure, shallow} from "enzyme";
import {offers} from "../../mocks/offers.js";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

const props = {
  offer: offers[0],
  offers,
  favorites: offers,
  onOfferHover: jest.fn(),
  onClickBookmark: jest.fn(),
  setFavorite: jest.fn(),
};

it(`when you mouse enter on card, return correct information about card`, () => {
  const onOfferHover = jest.fn();
  const onClickBookmark = jest.fn();
  const card = shallow(<CardOffer {...props} onOfferHover={onOfferHover} onClickBookmark={onClickBookmark}/>);

  card.simulate(`mouseOver`);

  expect(onOfferHover).toHaveBeenCalledTimes(1);
});
