import React from 'react';
import renderer from 'react-test-renderer';
import SignIn from './sign-in.jsx';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {reducer} from '../../reducer.js';
import {BrowserRouter as Router} from 'react-router-dom';

it(`SignIn page is displayed correctly`, () => {
  const store = createStore(reducer);
  const login = renderer
    .create(<Provider store={store}><Router><SignIn /></Router></Provider>)
    .toJSON();
  expect(login).toMatchSnapshot();
});
