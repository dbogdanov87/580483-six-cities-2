import React from "react";
import renderer from 'react-test-renderer';
import {Header} from './header.jsx';

jest.mock(`react-router-dom`, () => ({
  Link: () => null
}));

it(`Header is displayed correctly for unauthorized users`, () => {

  const props = {
    isAuthorized: false
  };

  const header = renderer
    .create(<Header {...props} />)
    .toJSON();

  expect(header).toMatchSnapshot();
});


it(`Header is displayed correctly for authorized users`, () => {

  const props = {
    isAuthorized: true,
    userData: {email: `test@test.com`}
  };

  const header = renderer
    .create(<Header {...props} />)
    .toJSON();

  expect(header).toMatchSnapshot();
});

