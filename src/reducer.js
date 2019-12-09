import cities from "../src/mocks/cities.js";
import offers from "../src/mocks/offers.js";
import {SORTED_OPTIONS} from "../src/constants.js";

const activeCity = cities[0];

const getSortedOffers = (city, allOffers, sortingBy) => {
  const filteredOffers = allOffers.filter((item) => item.city.id === city.id);
  return sortingOffersByNames(filteredOffers, sortingBy);
};

const sortingOffersByNames = (filteredOffers, sortingBy) => {
  switch (sortingBy) {
    case `Popular`: return filteredOffers;
    case `Price: low to high`:
      return filteredOffers.sort((a, b) => a.price - b.price);
    case `Price: high to low`:
      return filteredOffers.sort((a, b) => b.price - a.price);
    case `Top rated first`:
      return filteredOffers.sort((a, b) => b.rating - a.rating);
  }
  return filteredOffers;
};

const initialState = {
  city: activeCity,
  offers: getSortedOffers(activeCity, offers, SORTED_OPTIONS[0].name),
  sortedByName: SORTED_OPTIONS[0].name,
};

const ActionCreator = {
  changeCity: (city) => ({
    type: `CHANGE_CITY`,
    payload: city
  }),
  getListOffers: (city, filteredOffers, sortingBy) => ({
    type: `GET_LIST_OFFERS`,
    payload: getSortedOffers(city, filteredOffers, sortingBy)
  }),
  sortingOffersByName: (sortedName) => {
    return {
      type: `SORTING_OFFERS_BY_NAME`,
      payload: sortedName,
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_CITY`:
      return Object.assign({}, state, {
        city: action.payload,
      });
    case `GET_LIST_OFFERS`:
      return Object.assign({}, state, {
        offers: action.payload,
      });
    case `SORTING_OFFERS_BY_NAME`:
      return Object.assign({}, state, {
        sortedByName: action.payload,
      });
  }
  return state;
};

export {
  ActionCreator,
  getSortedOffers,
  reducer,
};
