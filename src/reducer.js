import {SORTED_OPTIONS, DEFAULT_CITY} from "../src/constants.js";

export const getOffersByCity = (offers, cityName) => {
  return offers.filter((offer) => offer.city.name === cityName);
};

export const getCityCoordinates = (cityName, offers) => {
  const offer = offers.find((item) => item.city.name === cityName);
  return [offer.city.location.latitude, offer.city.location.longitude];
};

export const sortingOffers = (filteredOffers, sortingBy) => {
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
  offers: [],
  cityOffers: [],
  city: DEFAULT_CITY,
  reviews: null,
  favorites: [],
  isAuthorized: false,
  userData: {},
  sortingName: SORTED_OPTIONS[0].name,
  cities: [],
  activeOfferCoordinates: []
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: `CHANGE_CITY`,
    payload: city
  }),
  getListOffers: (offers) => {
    return {
      type: `GET_LIST_OFFERS`,
      payload: offers
    };
  },
  changeSortingName: (sortingName) => {
    return {
      type: `SORTING_OFFERS_BY_NAME`,
      payload: sortingName,
    };
  },

  getCityOffers: (offers) => ({
    type: `GET_CITY_OFFERS`,
    payload: offers
  }),

  getFavorites: (favorites) => ({
    type: `GET_FAVORITES`,
    payload: favorites
  }),

  getReviews: (review) =>({
    type: `GET_REVIEWS`,
    payload: review
  }),

  setActivePinCoordinates: (coordinates) => ({
    type: `SET_ACTIVE_PIN`,
    payload: coordinates
  }),

  setUserData: (userData) => ({
    type: `SET_USER_DATA`,
    payload: userData
  }),

  isAuthorized: (flag) => {
    return {
      type: `USER_AUTHORIZE`,
      payload: flag
    };
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_CITY`:
      return Object.assign({}, state, {
        city: action.payload,
      });
    case `GET_LIST_OFFERS`:
      return Object.assign({}, state, {
        offers: action.payload,
      });
    case `GET_CITY_OFFERS`:
      return Object.assign({}, state, {
        cityOffers: action.payload,
      });

    case `GET_FAVORITES`:
      return Object.assign({}, state, {
        favorites: action.payload,
      });

    case `GET_REVIEWS`:
      return Object.assign({}, state, {
        reviews: action.payload,
      });

    case `SORTING_OFFERS_BY_NAME`:
      return Object.assign({}, state, {
        sortingName: action.payload,
      });

    case `SET_USER_DATA`:
      return Object.assign({}, state, {
        userData: action.payload,
      });

    case `USER_AUTHORIZE`: return Object.assign({}, state, {
      isAuthorized: action.payload
    });

    case `SET_ACTIVE_PIN`: return Object.assign({}, state, {
      activeOfferCoordinates: action.payload
    });
  }
  return state;
};

export const Operations = {
  getListOffers: () => (dispatch, state, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.getListOffers(response.data));
      });
  },

  getReviews: (id) => (dispatch, state, api) => {
    return api.get(`/comments/` + id)
      .then((response) => {
        dispatch(ActionCreator.getReviews(response.data));
      });
  },

  loadFavorites: () => (dispatch, state, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        dispatch(ActionCreator.getFavorites(response.data));
      });
  },

  loadReviews: (id) => (dispatch, state, api) => {
    return api.get(`/comments/` + id)
      .then((response) => {
        dispatch(ActionCreator.getReviews(response.data));
        console.log(response.data);
      });
  },

  sendComment: (id, comment) => (dispatch, state, api) => {
    return api.post(`/comments/` + id, comment)
      .then((response) => {
        dispatch(ActionCreator.getReviews(response.data));
      });
  },

  setFavorite: (hotelId, status) => (dispatch, state, api) => {
    return api.post(`/favorite/` + hotelId + `/` + status);
  },

  setUserData: (email, password) => (dispatch, state, api) => {
    const userParams = {
      email,
      password,
    };
    return api.post(`/login`, userParams)
      .then((response) => {
        dispatch(ActionCreator.setUserData(response.data));
      }).then(dispatch(ActionCreator.isAuthorized(true)));
  },

  setAuthorizationFlag: (flag) => (dispatch, ) => {
    dispatch(ActionCreator.isAuthorized(flag));
  },
};
