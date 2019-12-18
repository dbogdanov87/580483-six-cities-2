import React from "react";
import renderer from "react-test-renderer";
import CardOffer from "./card-offer.jsx";

it(`CardOffer is rendered correctly`, () => {

  const div = document.createElement(`div`);
  div.id = `map`;
  document.body.appendChild(div);

  const offers = [{
    id: 1,
    previewImage: `img`,
    price: 25,
    is_favorite: true,
    rating: `90%`,
    title: `Beautiful`,
    type: `privet`
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
