import React, {PureComponent} from "react"
import FavoritesItems from "../favorites-items/favorites-items.jsx";

class FavoritesList extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
              <FavoritesItems />>
              </li>
            </ul>
          </section>
        </div>
      </main>
    );
  }
}

export default FavoritesList;
