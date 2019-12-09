import React from "react";
import PropTypes from "prop-types";

const ListCities = (props) => {
  const {cities, offers, sortingName, activeCity, changeCityClickHandler} = props;

  return (
    cities.map((city) => (
      <li className="locations__item" key={`city-${city.id}`}>
        <a
          className={`locations__item-link tabs__item ${city.name === activeCity.name && `tabs__item--active`}`}
          href="#"
          onClick={() => changeCityClickHandler(city, offers, sortingName)}>
          <span>{city.name}</span>
        </a>
      </li>)
    )
  );
};


ListCities.propTypes = {
  activeCity: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  cities: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape({})),
  sortingName: PropTypes.string,
  changeCityClickHandler: PropTypes.func.isRequired,
};

export default ListCities;
