import React from "react";
import renderer from "react-test-renderer";
import ListOffers from "./list-offers.jsx";

it(`ListOffers is rendered correctly`, () => {
  const offers = [{
    id: 1,
    previewImage: `img`,
    price: 25,
    is_favorite: true,
    rating: `90%`,
    title: `Beautiful`,
    type: `privet`
  }];
  const tree = renderer.create(<ListOffers
    offers={offers}
  />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
