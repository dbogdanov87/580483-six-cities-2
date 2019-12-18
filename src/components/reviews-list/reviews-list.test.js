import React from "react";
import renderer from "react-test-renderer";
import ReviewsList from "./reviews-list.jsx";
import {reviews} from "../../mocks/reviews.js";

it(`Reviews List is rendered correctly`, () => {

  const div = document.createElement(`div`);
  div.id = `map`;
  document.body.appendChild(div);

  const tree = renderer.create(<ReviewsList
    reviews={reviews}
  />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
