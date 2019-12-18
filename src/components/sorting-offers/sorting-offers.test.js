import React from 'react';
import renderer from 'react-test-renderer';
import SortingOffers from './sorting-offers.jsx';

jest.mock(`react-router-dom`, () => ({
  Link: () => null
}));

it(`SortingOffers is displayed correctly`, () => {

  const onClickToggleSorting = jest.fn();
  const onClickSortingSelection = jest.fn();
  const isOpenSorting = true;
  const sortingName = `Popular`;

  const sorting = renderer
    .create(<SortingOffers sortingName={sortingName} onClickToggleSorting={onClickToggleSorting} onClickSortingSelection={onClickSortingSelection} isOpenSorting={isOpenSorting}/>)
    .toJSON();

  expect(sorting).toMatchSnapshot();
});
