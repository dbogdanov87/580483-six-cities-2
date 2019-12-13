import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

const CardOffer = (props) => {
  const {
    offer: {
      id,
      preview_image,
      price,
      is_favorite,
      is_premium,
      rating,
      title,
      type
    },
    offerHoverHandler,
  } = props;

  const linkAddress = () => {
    return `/offer/${id}`;
  };

  return (
    <article className="cities__place-card place-card"
      key={title + id}
      onMouseOver={() => {offerHoverHandler(id)}}>
      {
        is_premium &&
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={linkAddress()}>
          <img className="place-card__image" src={preview_image} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={
            is_favorite ? `place-card__bookmark-button--active button` : `place-card__bookmark-button button`}
          type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: rating}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={linkAddress()} className="place-card_title">{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>);
};

CardOffer.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    preview_image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    is_favorite: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  onClickCardName: PropTypes.func,
};

export default CardOffer;
