import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import CardOffer from "./card-offer.jsx";

configure({adapter: new Adapter()});

describe(`Tests for card offer`, () => {
  it(`when you click on title, a callback will be called`, () => {
    const offers = [{
      id: 1,
      previewImage: `img`,
      price: 25,
      isFavorite: true,
      rating: `90%`,
      title: `Beautiful`,
      type: `privet`
    }];
    const onClickCardNameHandle = jest.fn();

    const cardOffer = shallow(<CardOffer
      offer = {offers[0]}
      onClickCardName={onClickCardNameHandle}
      onMouseEnterCard={()=> {}}
      onMouseOutCard={()=> {}}
    />);

    const cardName = cardOffer.find(`.place-card__name a`);
    cardName.simulate(`click`);

    expect(onClickCardNameHandle).toHaveBeenCalledTimes(1);
  });
  it(`when you mouse enter on card, return correct information about card`, () => {
    const offers = [{
      id: 1,
      previewImage: `img`,
      price: 25,
      isFavorite: true,
      rating: `90%`,
      title: `Beautiful`,
      type: `privet`
    }];
    const onMouseEnterCardHandle = jest.fn();

    const cardOffer = shallow(<CardOffer
      offer={offers[0]}
      onClickCardName={()=> {}}
      onMouseEnterCard={onMouseEnterCardHandle}
      onMouseOutCard={()=> {}}
    />);

    const offer = cardOffer.find(`.place-card`);
    offer.simulate(`mouseenter`);

    expect(onMouseEnterCardHandler).toHaveBeenCalledTimes(1);
  });
});
