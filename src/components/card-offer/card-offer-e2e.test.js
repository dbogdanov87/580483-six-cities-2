import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import CardOffer from "./card-offer.jsx";

configure({adapter: new Adapter()});

describe(`Tests for card offer`, () => {
  it(`when you click on title, a callback will be called`, () => {
    const offers = [{
      id: 1,
      preview_image: `img`,
      price: 25,
      is_favorite: true,
      rating: `90%`,
      title: `Beautiful`,
      type: `privet`
    }];
    const onClickCardNameHandler = jest.fn();

    const cardOffer = shallow(<CardOffer
      offer = {offers[0]}
      onClickCardName={onClickCardNameHandler}
      onMouseEnterCard={()=> {}}
      onMouseOutCard={()=> {}}
    />);

    const cardName = cardOffer.find(`.place-card__name a`);
    cardName.simulate(`click`);

    expect(onClickCardNameHandler).toHaveBeenCalledTimes(1);
  });
  it(`when you mouse enter on card, return correct information about card`, () => {
    const offers = [{
      id: 1,
      preview_image: `img`,
      price: 25,
      is_favorite: true,
      rating: `90%`,
      title: `Beautiful`,
      type: `privet`
    }];
    const onMouseEnterCardHandler = jest.fn();

    const cardOffer = shallow(<CardOffer
      offer={offers[0]}
      onClickCardName={()=> {}}
      onMouseEnterCard={onMouseEnterCardHandler}
      onMouseOutCard={()=> {}}
    />);

    const offer = cardOffer.find(`.place-card`);
    offer.simulate(`mouseenter`);

    expect(onMouseEnterCardHandler).toHaveBeenCalledTimes(1);
  });
});
