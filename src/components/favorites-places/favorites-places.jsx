import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

import {Operations} from "../../reducer.js";
import {updateRating} from "../../utils/utils.js";

const FavoritesPlace = (props) => {

  const bookmarkRef = React.createRef();

  const bookmarkClickHandler = () => {
    bookmarkRef.current.classList.remove(`place-card__bookmark-button--active`);
    props.setFavorite(props.favorite.id, 0);
    bookmarkRef.current.disabled = true;
  };

  const setAddress = () => {
    return `/offer/${props.favorite.id}`;
  };

  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={setAddress()}>
          <img className="place-card__image" src={props.favorite.previewImage} width="150" height="110" alt="Place image" />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{props.favorite.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button" ref={bookmarkRef} onClick={bookmarkClickHandler}>
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: updateRating(props.favorite.rating)}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={setAddress()}>{props.favorite.title} </Link>
        </h2>
        <p className="place-card__type">{props.favorite.type}</p>
      </div>
    </article>
  );
};

FavoritesPlace.propTypes = {
  setFavorite: PropTypes.func,
  favorites: PropTypes.array,
  favorite: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  setFavorite: state.setFavorite,
});

const mapDispatchToProps = {
  setFavorite: (id, status) => Operations.setFavorite(id, status),
};

export {FavoritesPlace};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPlace);
