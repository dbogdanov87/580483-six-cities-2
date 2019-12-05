import cities from "../src/mocks/cities.js";
import offers from "../src/mocks/offers.js";

const activeCity = cities[0];

const getOffersByCityId = (city) => {
  return offers.filter((item) => item.city.id === city.id);
};

const initialState = {
  city: activeCity,
  offers: getOffersByCityId(activeCity)
};

const ActionCreator = {
  changeCity: (city) => ({
    type: `CHANGE_CITY`,
    payload: city
  }),
  getListOffers: (city) => ({
    type: `GET_LIST_OFFERS`,
    payload: getOffersByCityId(city)
  })
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
  }
  return state;
};

export {
  ActionCreator,
  getOffersByCityId,
  reducer,
};
