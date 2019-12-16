import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import FavoritesPlace from "../favorites-places/favorites-places.jsx";

class FavoritesItems extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      favorites,
      city,
    } = this.props;

    //console.log(city);

    return (
      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>{city}</span>
            </a>
          </div>
        </div>
        <div className="favorites__places">
          {
            favorites.map((favorite, index) => <FavoritesPlace key={index} favorite={favorite}/>)
          }
        </div>
      </li>
    );
  }
}

FavoritesItems.propTypes = {
  city: PropTypes.string,
};

export default FavoritesItems;
