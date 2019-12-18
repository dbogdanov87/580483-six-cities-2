import React from "react";
import renderer from 'react-test-renderer';
import Map from './map';
import {offers} from '../../mocks/offers.js';

const coordinates = [52.3709553943508, 4.919309666406198];

const createNodeMock = (element) => {
  if (element.type === `div`) {
    return document.createElement(`div`);
  }
  return null;
};

const options = {createNodeMock};

it(`Map component is displayed correctly`, () => {
  const activeCardCoordinates = [50, 20];
  const props = {
    activeOfferCoordinates: coordinates,
    offers,
    activeCity: `Amsterdam`,
    activeCardCoordinates,
  };

  const map = renderer
    .create(<Map {...props} />, options)
    .toJSON();
  expect(map).toMatchSnapshot();
});
