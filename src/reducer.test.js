import {getOffersByCity} from './reducer.js';
import {reducer, initialState, ActionCreator} from './reducer.js';
import {offers} from '../src/mocks/offers.js';
import {reviews} from '../src/mocks/reviews.js';
import MockAdapter from 'axios-mock-adapter';
import createAPI from './api.js';
import {Operations} from './reducer';
import {ACTION_TYPES} from './constants.js';

describe(`Business logic is correct`, () => {
  it(`Offers are taken correctly`, () => {
    expect(getOffersByCity(`Amsterdam`, offers).length).not.toEqual(0);
  });
});

describe(`Action creators work correctly`, () => {
  it(`cityChange returns new city`, () => {
    expect(ActionCreator.changeCity(`Moscow`)).toEqual({
      type: ACTION_TYPES.CHANGE_CITY,
      payload: `Moscow`,
    });
  });

  it(`loadOffers returns new offers`, () => {
    expect(ActionCreator.getListOffers(offers)).toEqual({
      type: ACTION_TYPES.GET_LIST_OFFERS,
      payload: {
        offers,
        isLoading: false,
      }
    });
  });

  it(`authorize returns new offers`, () => {
    expect(ActionCreator.isAuthorized(true)).toEqual({
      type: ACTION_TYPES.USER_AUTHORIZE,
      payload: true,
    });
  });

  it(`getReviews returns new offers`, () => {
    expect(ActionCreator.getReviews(reviews)).toEqual({
      type: ACTION_TYPES.GET_REVIEWS,
      payload: reviews,
    });
  });

  it(`getCityOffers returns new offers`, () => {
    expect(ActionCreator.getCityOffers(offers)).toEqual({
      type: ACTION_TYPES.GET_CITY_OFFERS,
      payload: offers,
    });
  });

  it(`getUserData returns new offers`, () => {
    expect(ActionCreator.setUserData({user: `test`})).toEqual({
      type: ACTION_TYPES.SET_USER_DATA,
      payload: {user: `test`},
    });
  });

  it(`getFavorites returns new offers`, () => {
    expect(ActionCreator.getFavorites(offers)).toEqual({
      type: ACTION_TYPES.GET_FAVORITES,
      payload: offers,
    });
  });

  it(`setActivePinCoordinates returns new offers`, () => {
    expect(ActionCreator.setActivePinCoordinates(([30, 40]))).toEqual({
      type: ACTION_TYPES.SET_ACTIVE_PIN,
      payload: [30, 40],
    });
  });

});


describe(`Reducer works correctly`, () => {
  it(`Reducer with no params should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`Reducer should replace city by a given value`, () => {
    expect(reducer({
      currentCity: `Amsterdam`,
      currentCoordinates: [1, 1],
      currentOffers: [{city: `Amsterdam`, currentCoordinates: [1, 1]}],
    }, {
      type: ACTION_TYPES.CHANGE_CITY,
      payload: `Moscow`,
    })).toEqual({
      currentCity: `Moscow`,
      currentCoordinates: [1, 1],
      currentOffers: [{city: `Amsterdam`, currentCoordinates: [1, 1]}]
    });
  });


  const onError = jest.fn();
  const api = createAPI(onError);
  const apiMock = new MockAdapter(api);

  it(`Should make a correct API call to /hotels`, () => {
    const loadOffers = Operations.getListOffers();
    const dispatch = jest.fn();

    apiMock
      .onGet(`./hotels`)
      .reply(200, [{city: {name: `Am`}}]);

    return loadOffers(dispatch, null, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
      });
  });

  it(`Should make a correct API call to /comments`, () => {
    const id = 1;
    const loadReviews = Operations.loadReviews(id);
    const dispatch = jest.fn();

    apiMock
      .onGet(`/comments/` + id)
      .reply(200, [{reviews: [`test`]}]);

    return loadReviews(dispatch, null, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ACTION_TYPES.GET_REVIEWS,
          payload: [{reviews: [`test`]}]
        }
        );
      });
  });

  it(`Should make a correct POST to /login`, () => {
    const dispatch = jest.fn();
    const userData = {
      email: `test@test.com`,
      password: `111`
    };
    const sendUserData = Operations.setUserData(userData, jest.fn());

    apiMock
      .onPost(`/login`, userData)
      .reply(200, {name: `test`, avatarUrl: ``, isPro: true, email: `test@test.com`});

    return sendUserData(dispatch, null, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
      });
  });

  it(`Should make a correct POST to /comments`, () => {
    const comment = {
      rating: 2,
      comment: `test149`
    };
    const id = 1;

    const sendComment = Operations.sendComment(id, comment);
    const dispatch = jest.fn();

    apiMock
      .onPost(`/comments/` + id, comment)
      .reply(200, [{reviews: [`test`]}]);

    return sendComment(dispatch, null, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ACTION_TYPES.GET_REVIEWS,
          payload: [{reviews: [`test`]}]
        }
        );
      });
  });


  it(`Should make a correct GET to /favorites`, () => {
    const loadFavorites = Operations.loadFavorites();
    const dispatch = jest.fn();

    apiMock
      .onGet(`/favorite`)
      .reply(200, [{favorites: [`test`]}]);

    return loadFavorites(dispatch, null, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ACTION_TYPES.GET_FAVORITES,
          payload: [{favorites: [`test`]}]
        }
        );
      });
  });

});
