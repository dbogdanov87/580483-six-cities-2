export const ACTION_TYPES = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_LIST_OFFERS: `GET_LIST_OFFERS`,
  SORTING_OFFERS_BY_NAME: `SORTING_OFFERS_BY_NAME`,
  GET_CITY_OFFERS: `GET_CITY_OFFERS`,
  GET_FAVORITES: `GET_FAVORITES`,
  GET_REVIEWS: `GET_REVIEWS`,
  SET_ACTIVE_PIN: `SET_ACTIVE_PIN`,
  SET_USER_DATA: `SET_USER_DATA`,
  USER_AUTHORIZE: `USER_AUTHORIZE`,
};

export const MAX_NEAR_PLACES = 3;
export const MIN_LENGTH_COMMENT_REVIEWS = 50;
export const MAX_LENGTH_COMMENT_REVIEWS = 300;
export const MAX_COUNT_REVIEWS = 10;
export const MAX_COUNT_CITIES = 6;
export const DEFAULT_CITY = `Amsterdam`;

export const SORTED_OPTIONS = [
  {
    id: 1,
    name: `Popular`,
  },
  {
    id: 2,
    name: `Price: low to high`,
  },
  {
    id: 3,
    name: `Price: high to low`,
  },
  {
    id: 4,
    name: `Top rated first`,
  },
];
