import {SORTED_OPTIONS, DEFAULT_CITY, ACTION_TYPES} from "../src/constants.js";
import {convertCommentsToCamelCase,
  convertUserToCamelCase,
  convertOffersToCamelCase} from "./utils/utils.js";

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

export const initialState = {
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
    type: ACTION_TYPES.CHANGE_CITY,
    payload: city
  }),
  getListOffers: (offers) => {
    return {
      type: ACTION_TYPES.GET_LIST_OFFERS,
      payload: offers
    };
  },
  changeSortingName: (sortingName) => {
    return {
      type: ACTION_TYPES.SORTING_OFFERS_BY_NAME,
      payload: sortingName,
    };
  },

  getCityOffers: (offers) => ({
    type: ACTION_TYPES.GET_CITY_OFFERS,
    payload: offers
  }),

  getFavorites: (favorites) => ({
    type: ACTION_TYPES.GET_FAVORITES,
    payload: favorites
  }),

  getReviews: (review) =>({
    type: ACTION_TYPES.GET_REVIEWS,
    payload: review
  }),

  setActivePinCoordinates: (coordinates) => ({
    type: ACTION_TYPES.SET_ACTIVE_PIN,
    payload: coordinates
  }),

  setUserData: (userData) => ({
    type: ACTION_TYPES.SET_USER_DATA,
    payload: userData
  }),

  isAuthorized: (flag) => {
    return {
      type: ACTION_TYPES.USER_AUTHORIZE,
      payload: flag
    };
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.CHANGE_CITY:
      return Object.assign({}, state, {
        city: action.payload,
      });
    case ACTION_TYPES.GET_LIST_OFFERS:
      return Object.assign({}, state, {
        offers: action.payload,
      });
    case ACTION_TYPES.GET_CITY_OFFERS:
      return Object.assign({}, state, {
        cityOffers: action.payload,
      });

    case ACTION_TYPES.GET_FAVORITES:
      return Object.assign({}, state, {
        favorites: action.payload,
      });

    case ACTION_TYPES.GET_REVIEWS:
      return Object.assign({}, state, {
        reviews: action.payload,
      });

    case ACTION_TYPES.SORTING_OFFERS_BY_NAME:
      return Object.assign({}, state, {
        sortingName: action.payload,
      });

    case ACTION_TYPES.SET_USER_DATA:
      return Object.assign({}, state, {
        userData: action.payload,
      });

    case ACTION_TYPES.USER_AUTHORIZE: return Object.assign({}, state, {
      isAuthorized: action.payload
    });

    case ACTION_TYPES.SET_ACTIVE_PIN: return Object.assign({}, state, {
      activeOfferCoordinates: action.payload
    });
  }
  return state;
};

export const Operations = {
  getListOffers: () => (dispatch, state, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.getListOffers(convertOffersToCamelCase(response.data)));
      });
  },

  getReviews: (id) => (dispatch, state, api) => {
    return api.get(`/comments/` + id)
      .then((response) => {
        dispatch(ActionCreator.getReviews(convertCommentsToCamelCase(response.data)));
      });
  },

  loadReviews: (id) => (dispatch, state, api) => {
    return api.get(`/comments/` + id)
      .then((response) => {
        dispatch(ActionCreator.getReviews(convertCommentsToCamelCase(response.data)));
      });
  },

  loadFavorites: () => (dispatch, state, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        dispatch(ActionCreator.getFavorites(convertOffersToCamelCase(response.data)));
      });
  },

  sendComment: (id, comment) => (dispatch, state, api) => {
    return api.post(`/comments/` + id, comment)
      .then((response) => {
        dispatch(ActionCreator.getReviews(convertCommentsToCamelCase(response.data)));
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
        dispatch(ActionCreator.setUserData(convertUserToCamelCase(response.data)));
      }).then(dispatch(ActionCreator.isAuthorized(true)));
  },

  setAuthorizationFlag: (flag) => (dispatch) => {
    dispatch(ActionCreator.isAuthorized(flag));
  },
};
