import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {Operations, getOffersByCity} from "../../reducer.js";
import Header from "../header/header.jsx";
import ReviewsList from "../reviews-list/reviews-list.jsx";
import ReviewsSendForm from "../reviews-send-form/reviews-send-form.jsx";
import CardOffer from "../card-offer/card-offer.jsx";
import withFormSubmit from "../../hocs/with-form-submit.jsx";
import Map from "../map/map.jsx";
import {updateRating} from "../../utils/utils.js";
import {MAX_COUNT_REVIEWS} from "../../constants.js";
import {getNearOffers} from "../../utils/utils.js";

const DetailsOffer = (props) => {
  const id = props.match.params.id;
  const {city, offers} = props;
  const offer = offers.find((item) => item.id === Number(id));
  const avatarUrl = `../` + offer.host.avatar_url;
  const cityOffers = getOffersByCity(offers, city);
  const nearbyOffers = getNearOffers(cityOffers, Number(id));
  const currentOfferCoordinates = [offer.location.latitude, offer.location.longitude];
  let listReviews = [];


  if (props.reviews === null) {
    props.loadReviews(id);
  }

  if (props.reviews !== null) {
    listReviews = props.reviews.slice(0, MAX_COUNT_REVIEWS).sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  const offerHoverHandler = (offerItem) => {
    return offerItem;
  };

  let statusFavorites = props.favorites.find((item) => item.id === Number(id)) ? 1 : 0;
  const bookmarkClickHandler = () => {
    if (props.isAuthorized) {
      if (statusFavorites === 1) {
        statusFavorites = 0;
        props.setFavorite(id, statusFavorites);
      } else {
        statusFavorites = 1;
        props.setFavorite(id, statusFavorites);
      }
      props.loadFavorites();
    } else {
      props.history.push(`/login`);
    }
  };

  const CommentWrapped = withFormSubmit(ReviewsSendForm);

  const submitHandler = (comment) => {
    props.sendComment(props.match.params.id, comment);
  };

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                offer.images.map((img, i) => (
                  <div className="property__image-wrapper" key={i}>
                    <img className="property__image" src={img} alt="Photo studio"/>
                  </div>))
              }
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {
                offer.is_premium &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer.title}
                </h1>
                <button className={statusFavorites === 1 && props.isAuthorized ? `property__bookmark-button property__bookmark-button--active button` : `property__bookmark-button button`} type="button" onClick={bookmarkClickHandler}>
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: updateRating(offer.rating)}} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{Math.round(offer.rating)}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer.bedrooms}
                </li>
                <li className="property__feature property__feature--adults">
                  {offer.max_adults}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {
                    offer.goods.map((item, i) => (
                      <li className="property__inside-item" key={item + i}>
                        {item}
                      </li>))
                  }
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {offer.host.name}
                  </span>
                  <span className="property__user-status">
                    {offer.host.is_pro ? `Pro` : `Free`}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {offer.description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{listReviews.length}</span></h2>
                {props.reviews === null || props.reviews.length === 0 ? `` : <ReviewsList reviews={listReviews}/>}
                {props.isAuthorized && <CommentWrapped submitClick={submitHandler}/>}
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map offers={nearbyOffers}
              activeCity={city}
              activeOfferCoordinates={currentOfferCoordinates}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {nearbyOffers.map((nearOffer) => {
                return <CardOffer
                  offer={nearOffer}
                  key={nearOffer.id + nearOffer.title}
                  onOfferHover={offerHoverHandler}
                />;
              })}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

DetailsOffer.propTypes = {
  offer: PropTypes.object,
  id: PropTypes.number,
  city: PropTypes.string,
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    preview_image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    is_favorite: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    is_premium: PropTypes.bool,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    bedrooms: PropTypes.number.isRequired,
    max_adults: PropTypes.number.isRequired,
    goods: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    host: PropTypes.shape({
      id: PropTypes.number.isRequired,
      is_pro: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      avatar_url: PropTypes.string.isRequired,
    }),
  })).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape({})),
  loadReviews: PropTypes.func,
  favorites: PropTypes.arrayOf(PropTypes.shape({})),
  isAuthorized: PropTypes.bool,
  setFavorite: PropTypes.func,
  sendComment: PropTypes.func,
  match: PropTypes.object,
  history: PropTypes.object,
  loadFavorites: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  city: state.city,
  offers: state.offers,
  reviews: state.reviews,
  isAuthorized: state.isAuthorized,
  favorites: state.favorites,
});

const mapDispatchToProps = {
  setFavorite: (id, status) => Operations.setFavorite(id, status),
  loadFavorites: Operations.loadFavorites,
  loadReviews: (id) => Operations.loadReviews(id),
  sendComment: (id, comment) => Operations.sendComment(id, comment)

};

export {DetailsOffer};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsOffer);
