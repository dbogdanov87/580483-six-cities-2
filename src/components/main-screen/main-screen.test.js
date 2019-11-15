import React from "react";
import renderer from "react-test-renderer";
import MainScreen from "./main-screen.jsx";

it(`MainScreen is rendered correctly`, () => {
  const cardNames = [`str1`, `str2`, `str3`, `str4`];
  const tree = renderer.create(<MainScreen
    cardNames={cardNames}
  />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
