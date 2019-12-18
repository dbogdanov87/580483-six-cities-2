import React from 'react';
import ReviewsSendForm from './reviews-send-form.jsx';
import renderer from 'react-test-renderer';


const sendComment = jest.fn();

it(`ReviewsSendForm is displayed correctly`, () => {
  const props = {
    id: `1`,
    sendComment,
  };

  const review = renderer
    .create(<ReviewsSendForm {...props} />).toJSON();

  expect(review).toMatchSnapshot();
});
