import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {ActionCreator, getOffersByCity, sortingOffers, getCityCoordinates} from "../../reducer.js";
import EmptyOffers from "../empty-offers/empty-offers.jsx";
import ListOffers from "../list-offers/list-offers.jsx";
import ListCities from "../list-cities/list-cities.jsx";
import Header from "../header/header.jsx";
import SortingOffers from "../sorting-offers/sorting-offers.jsx";
import {MAX_COUNT_CITIES} from "../../constants.js";
import Map from "../map/map.jsx";

class MainScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpenSorting: false,
    };

    this.getCityOffers = props.getCityOffers;

    if (props.cityOffers.length === 0) {
      const cityOffers = getOffersByCity(props.offers, props.city);
      props.getCityOffers(cityOffers);
      //props.setSortedOffers(props.offers, props.city)
    }

    this.activeOfferCoordinates = getCityCoordinates(props.city, props.offers);
    this.props.setActivePinCoordinates(this.activeOfferCoordinates);

    this.toggleSortingClickHandler = this.toggleSortingClickHandler.bind(this);
    this.sortingSelectionClickHandler = this.sortingSelectionClickHandler.bind(this);
    this.offerHoverHandler = this.offerHoverHandler.bind(this);
    //this.redirectToLoginHandler = this.redirectToLoginHandler(this);
  }

  toggleSortingClickHandler() {
    this.setState((oldState) => ({
      isOpenSorting: !oldState.isOpenSorting
    }));
  }
  //
  // redirectToLoginHandler() {
  //   this.props.history.push(`/login`);
  // }

  getAllCities(offers) {
    const uniqueCities = offers.reduce((acc, elem) => acc.add(elem.city.name), new Set());
    return Array.from(uniqueCities).slice(0, MAX_COUNT_CITIES);
  }

  offerHoverHandler(id) {
    const activeOffer = this.props.offers.find((item) => item.id === id);
    const coordinates = [activeOffer.location.latitude, activeOffer.location.longitude];
    this.props.setActivePinCoordinates(coordinates);
  }

  sortingSelectionClickHandler(sortingName) {
    const {changeSortingName, cityOffers} = this.props;
    changeSortingName(sortingName);
    sortingOffers(cityOffers, sortingName);
    this.toggleSortingClickHandler();
  }

  render() {
    const {
      offers,
      cityOffers,
      city,
      changeCityClickHandler,
      sortingName,
    } = this.props;

    const cities = this.getAllCities(offers);

    const {isOpenSorting} = this.state;
    const numberOffers = cityOffers.length;

    return (
      <div className="page page--gray page--main">
        <Header />
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <ul className="locations__list tabs__list">
                <ListCities cities={cities} activeCity={city} cityOffers={cityOffers} offers={offers} sortingName={sortingName} changeCityClickHandler={changeCityClickHandler} />
              </ul>
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{numberOffers} {offers.length === 1 ? `place` : `places`} to stay in {city}</b>
                <SortingOffers
                  sortingName={sortingName}
                  isOpenSorting={isOpenSorting}
                  toggleSortingClickHandler={this.toggleSortingClickHandler}
                  sortingSelectionClickHandler={this.sortingSelectionClickHandler}
                />
                {
                  numberOffers > 0
                    ? <ListOffers offers={cityOffers} offerHoverHandler={this.offerHoverHandler} />
                    : <EmptyOffers city={city}/>
                }
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map offers={offers} activeCity={city} activeOfferCoordinates={this.props.activeOfferCoordinates}/>
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

MainScreen.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({})),
  city: PropTypes.string.isRequired,
  changeCityClickHandler: PropTypes.func,
  sortingName: PropTypes.string,
  changeSortingName: PropTypes.func,
  getListOffers: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  city: state.city,
  offers: state.offers,
  cities: state.cities,
  cityOffers: state.cityOffers,
  getCityOffers: state.getCityOffers,
  activeCity: state.activeCity,
  sortingName: state.sortingName,
  userData: state.userData,
  isAuthorized: state.isAuthorized,
  activeOfferCoordinates: state.activeOfferCoordinates,
  setActivePinCoordinates: state.setActivePinCoordinates
});

const mapDispatchToProps = (dispatch) => ({
  changeCityClickHandler: (city, offers) => {
    dispatch(ActionCreator.changeCity(city));
    const cityOffers = getOffersByCity(offers, city);
    dispatch(ActionCreator.getCityOffers(cityOffers));
  },

  getCityOffers: (offers) => {
    dispatch(ActionCreator.getCityOffers(offers));
  },

  setActivePinCoordinates: (coordinates) => {
    dispatch(ActionCreator.setActivePinCoordinates(coordinates));
  },

  changeSortingName: (sortingName) =>
    dispatch(ActionCreator.changeSortingName(sortingName)),
});

export {MainScreen};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);


