import React from "react";
import PropTypes from "prop-types";

const CardOffer = (props) => {
  const {
    offer: {
      id,
      img,
      price,
      priceText,
      bookmarkActive,
      rating,
      cardName,
      cardType
    },
    onClickCardName,
    onMouseEnterCard,
    onMouseOutCard
  } = props;

  return (
    <article className="cities__place-card place-card"
      key={cardName + id}
      onMouseEnter={() => onMouseEnterCard(id)}
      onMouseOut={onMouseOutCard}>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={img} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;{priceText}</span>
          </div>
          <button className={
            bookmarkActive ? `place-card__bookmark-button--active button` : `place-card__bookmark-button button`}
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
          <a href="#" onClick={onClickCardName}>{cardName}</a>
        </h2>
        <p className="place-card__type">{cardType}</p>
      </div>
    </article>);
};

CardOffer.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    priceText: PropTypes.string.isRequired,
    bookmarkActive: PropTypes.bool.isRequired,
    rating: PropTypes.string.isRequired,
    cardName: PropTypes.string.isRequired,
    cardType: PropTypes.string.isRequired,
  }).isRequired,
  onClickCardName: PropTypes.func,
  onMouseEnterCard: PropTypes.func,
  onMouseOutCard: PropTypes.func
};

export default CardOffer;
