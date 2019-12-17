import React from "react";
import PropTypes from "prop-types";

const ListCities = (props) => {
  const {cities, offers, activeCity, changeCityClickHandler} = props;

  return (
    cities.map((city, it) => (
      <li className="locations__item" key={it}>
        <a
          className={`locations__item-link tabs__item ${city === activeCity && `tabs__item--active`}`}
          href="#"
          onClick={() => changeCityClickHandler(city, offers)}>
          <span>{city}</span>
        </a>
      </li>)
    )
  );
};


ListCities.propTypes = {
  activeCity: PropTypes.string.isRequired,
  cities: PropTypes.array.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape({})),
  changeCityClickHandler: PropTypes.func.isRequired,
};

export default ListCities;
