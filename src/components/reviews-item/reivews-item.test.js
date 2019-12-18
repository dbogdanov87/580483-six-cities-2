import React from "react";
import renderer from "react-test-renderer";
import ReviewsItem from "./reivews-item.jsx";
import {reviews} from "../../mocks/reviews.js";

it(`Reviews Item is rendered correctly`, () => {

  const div = document.createElement(`div`);
  div.id = `map`;
  document.body.appendChild(div);

  const tree = renderer.create(<ReviewsItem
    review={reviews[0]}
  />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
