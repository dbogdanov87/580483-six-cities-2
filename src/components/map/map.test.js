import React from "react";
import renderer from "react-test-renderer";
import Map from "./map.jsx";

it(`Map is rendered correctly`, () => {

  const div = document.createElement(`div`);
  div.id = `map`;
  document.body.appendChild(div);
  const offers = [{
    id: 1,
    cardImage: `img`,
    coordinates: [52.3809553943508, 4.939309666406198],
    price: 25,
    priceText: `night`,
    bookmarkActive: true,
    rating: `90%`,
    cardName: `Beautiful`,
    cardType: `privet`
  }];
  const tree = renderer.create(<Map
    offers={offers}
  />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
