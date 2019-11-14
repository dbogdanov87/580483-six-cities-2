import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import MainScreen from "./main-screen.jsx";

configure({adapter: new Adapter()});

it(`when you click on title, a callback will be called`, () => {
  const cardNames = [`str1`];
  const clickHandler = jest.fn();

  const mainScreen = shallow(<MainScreen
    cardNames={cardNames}
    clickHandler={clickHandler}
  />);

  const cardName = mainScreen.find(`.place-card__name a`);
  cardName.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
