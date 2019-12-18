import React from "react";
import renderer from "react-test-renderer";
import ListCities from "./list-cities.jsx";

it(`CardOffer is rendered correctly`, () => {

  const div = document.createElement(`div`);
  div.id = `map`;
  document.body.appendChild(div);

  const tree = renderer.create(
      <ListCities
        activeCity={`Dusseldorf`}
        cities={[]}
        onChangeCityClick={jest.fn()}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
