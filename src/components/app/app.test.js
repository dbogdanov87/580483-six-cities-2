import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

it(`App is rendered correctly`, () => {
  const cardNames = [`str1`, `str2`, `str3`, `str4`];
  const tree = renderer.create(<App
    cardNames={cardNames}
  />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
