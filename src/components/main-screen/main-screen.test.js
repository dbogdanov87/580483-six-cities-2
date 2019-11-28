import React from "react";
import renderer from "react-test-renderer";
import MainScreen from "./main-screen.jsx";

it(`MainScreen is rendered correctly`, () => {
  const offers = [{
    id: 1,
    cardImage: `img`,
    price: 25,
    priceText: `night`,
    bookmarkActive: true,
    rating: `90%`,
    cardName: `Beautiful`,
    cardType: `privet`
  }];
  const tree = renderer.create(<MainScreen
    offers={offers}
  />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
