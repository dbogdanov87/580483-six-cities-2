import React from "react";
import renderer from "react-test-renderer";
import ListCities from "./list-cities.jsx";

it(`CardOffer is rendered correctly`, () => {

  const div = document.createElement(`div`);
  div.id = `map`;
  document.body.appendChild(div);

  const city = {
    id: 6,
    name: `Dusseldorf`,
    location: {
      latitude: 51.2217200,
      longitude: 6.7761600,
      zoom: 12,
    }
  };
  const tree = renderer.create(
      <ListCities
        activeCity={city}
        cities={[]}
        changeCityClickHandler={jest.fn()}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
