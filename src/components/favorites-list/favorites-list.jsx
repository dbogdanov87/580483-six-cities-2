import React, {PureComponent} from "react";
import {connect} from 'react-redux';

import Header from "../header/header.jsx";
import {Operations} from "../../reducer.js";
import FavoritesItems from "../favorites-items/favorites-items.jsx";

class FavoritesList extends PureComponent {
  constructor(props) {
    super(props);
    props.loadFavorites();

    this.favoriteCities = Array.from(props.favorites.reduce((acc, elem) => acc.add(elem.city.name), new Set()));
  }

  render() {
    return (
      <div>
        <Header/>
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {this.favoriteCities.map((city, index) => <FavoritesItems key={index} city={city} favorites={this.props.favorites.filter((favoriteItem) => favoriteItem.city.name === city)}/>)}
              </ul>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  favorites: state.favorites,
});

const mapDispatchToProps = {
  loadFavorites: Operations.loadFavorites,
};

export {FavoritesList};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesList);
