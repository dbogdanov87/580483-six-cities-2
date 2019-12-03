import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

jest.mock(`../map/map.jsx`);

it(`App is rendered correctly`, () => {
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
  const tree = renderer.create(<App
    offers={offers}
  />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
