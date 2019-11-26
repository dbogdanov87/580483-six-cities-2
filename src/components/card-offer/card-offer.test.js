import React from "react";
import renderer from "react-test-renderer";
import CardOffer from "./card-offer.jsx";

it(`CardOffer is rendered correctly`, () => {
  const offers = [{
    id: 1,
    img: `img`,
    price: 25,
    priceText: `night`,
    bookmarkActive: true,
    rating: `90%`,
    cardName: `Beautiful`,
    cardType: `privet`
  }];
  const tree = renderer.create(<CardOffer
    offer={offers[0]}
    onClickCardName={()=> {}}
    onMouseEnterCard={()=> {}}
    onMouseOutCard={()=> {}}
  />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
