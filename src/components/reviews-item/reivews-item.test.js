import React from "react";
import renderer from "react-test-renderer";
import ReviewsItem from "./reivews-item.jsx";

it(`Reviews Item is rendered correctly`, () => {

  const div = document.createElement(`div`);
  div.id = `map`;
  document.body.appendChild(div);

  const review = {
    id: 1,
    avatarImage: `str`,
    userName: `str`,
    rating: `str`,
    reviewsText: `str`,
    dateTime: `str`,
    dateString: `str`
  };

  const tree = renderer.create(<ReviewsItem
    review={review}
  />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
