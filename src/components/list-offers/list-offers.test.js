import React from "react";
import renderer from "react-test-renderer";
import ListOffers from "./list-offers.jsx";

it(`ListOffers is rendered correctly`, () => {
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
  const tree = renderer.create(<ListOffers
    offers={offers}
  />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
