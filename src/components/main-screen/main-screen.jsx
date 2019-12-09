import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {ActionCreator} from "../../reducer.js";
import ListOffers from "../list-offers/list-offers.jsx";
import ListCities from "../list-cities/list-cities.jsx";
import SortingOffers from "../sorting-offers/sorting-offers.jsx";
import Map from "../map/map.jsx";
import cities from "../../mocks/cities.js";

class MainScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpenSorting: false,
    };

    this.toggleSortingClickHandler = this.toggleSortingClickHandler.bind(this);
    this.sortingSelectionClickHandler = this.sortingSelectionClickHandler.bind(this);
  }

  toggleSortingClickHandler() {
    this.setState((oldState) => ({
      isOpenSorting: !oldState.isOpenSorting
    }));
  }

  sortingSelectionClickHandler(sortingName) {
    const {sortingOffersByName, offers, city, getListOffers} = this.props;
    sortingOffersByName(sortingName);
    getListOffers(city, offers, sortingName);
    this.toggleSortingClickHandler();
  }

  render() {
    const {
      offers,
      city,
      changeCityClickHandler,
      sortingName,
    } = this.props;

    const {isOpenSorting} = this.state;
    const numberOffers = offers.length;

    return (
      <div className="page page--gray page--main">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link header__logo-link--active">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <ul className="locations__list tabs__list">
                <ListCities cities={cities} activeCity={city} offers={offers} sortingName={sortingName} changeCityClickHandler={changeCityClickHandler}/>
              </ul>
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{numberOffers} {offers.length === 1 ? `place` : `places`} to stay in Amsterdam</b>
                <SortingOffers
                  sortingName={sortingName}
                  isOpenSorting={isOpenSorting}
                  toggleSortingClickHandler={this.toggleSortingClickHandler}
                  sortingSelectionClickHandler={this.sortingSelectionClickHandler}
                />
                <ListOffers offers={offers}/>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map offers={offers} activeCity={city}/>
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
  offers: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  city: PropTypes.shape({}).isRequired,
  changeCityClickHandler: PropTypes.func.isRequired,
  sortingName: PropTypes.string.isRequired,
  sortingOffersByName: PropTypes.func.isRequired,
  getListOffers: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  city: state.city,
  offers: state.offers,
  cities,
  sortingName: state.sortedByName,
});

const mapDispatchToProps = (dispatch) => ({
  changeCityClickHandler: (city, offers, sortingName) => {
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.getListOffers(city, offers, sortingName));
  },
  getListOffers: (city, offers, sortingName) => dispatch(ActionCreator.getListOffers(city, offers, sortingName)),
  sortingOffersByName: (sortedName) => dispatch(ActionCreator.sortingOffersByName(sortedName)),
});

export {MainScreen};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);


