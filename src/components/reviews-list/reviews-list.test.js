import React from "react";
import renderer from "react-test-renderer";
import ReviewsList from "./reviews-list.jsx";

it(`Reviews List is rendered correctly`, () => {

  const div = document.createElement(`div`);
  div.id = `map`;
  document.body.appendChild(div);

  const reviews = [{
    id: 1,
    avatarImage: `str`,
    userName: `str`,
    rating: `str`,
    reviewsText: `str`,
    dateTime: `str`,
    dateString: `str`
  }];

  const tree = renderer.create(<ReviewsList
    reviews={reviews}
  />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
