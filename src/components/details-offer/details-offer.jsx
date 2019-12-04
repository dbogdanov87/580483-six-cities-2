import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import ReviewsList from "../reviews-list/reviews-list.jsx";
import ListOffers from "../list-offers/list-offers.jsx";
import Map from "../map/map.jsx";

class DetailsOffer extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      offer: {
        cardGalleryImages,
        cardMark,
        cardName,
        price,
        priceText,
        insideItems,
        features: {
          entire,
          bedRooms,
          maxAdults
        },
        rating,
        description,
        user: {
          userName,
          avatarImage,
          userStatus
        },

      },
      reviews,
      nearbyOffers
    } = this.props;

    return (
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                cardGalleryImages.map((img, i) => (
                  <div className="property__image-wrapper" key={i}>
                    <img className="property__image" src={img} alt="Photo studio"/>
                  </div>))
              }
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              <div className="property__mark">
                <span>{cardMark}</span>
              </div>
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {cardName}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: rating}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">4.8</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {entire}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedRooms}
                </li>
                <li className="property__feature property__feature--adults">
                  {maxAdults}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;{priceText}</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {
                    insideItems.map((item, i) => (
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
                    <img className="property__avatar user__avatar" src={avatarImage} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {userName}
                  </span>
                  <span className="property__user-status">
                    {userStatus}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                  <p className="property__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
                <ReviewsList reviews={reviews}/>
                <form className="reviews__form form" action="#" method="post">
                  <label className="reviews__label form__label" htmlFor="review">Your review</label>
                  <div className="reviews__rating-form form__rating">
                    <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio"/>
                    <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
                      <svg className="form__star-image" width="37" height="33">
                        <use xlinkHref="#icon-star"></use>
                      </svg>
                    </label>

                    <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio"/>
                    <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
                      <svg className="form__star-image" width="37" height="33">
                        <use xlinkHref="#icon-star"></use>
                      </svg>
                    </label>

                    <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio"/>
                    <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
                      <svg className="form__star-image" width="37" height="33">
                        <use xlinkHref="#icon-star"></use>
                      </svg>
                    </label>

                    <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio"/>
                    <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
                      <svg className="form__star-image" width="37" height="33">
                        <use xlinkHref="#icon-star"></use>
                      </svg>
                    </label>

                    <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio"/>
                    <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
                      <svg className="form__star-image" width="37" height="33">
                        <use xlinkHref="#icon-star"></use>
                      </svg>
                    </label>
                  </div>
                  <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
                  <div className="reviews__button-wrapper">
                    <p className="reviews__help">
                      To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
                    </p>
                    <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
                  </div>
                </form>
              </section>
            </div>
          </div>
          <section className="property__map">
            <Map offers={nearbyOffers}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <ListOffers offers={nearbyOffers}/>
            </div>
          </section>
        </div>
      </main>
    );
  }
}

DetailsOffer.propTypes = {
  offer: PropTypes.shape({
    cardImage: PropTypes.string.isRequired,
    cardGalleryImages: PropTypes.arrayOf(PropTypes.string).isRequired,
    cardMark: PropTypes.string.isRequired,
    cardName: PropTypes.string.isRequired,
    cardType: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    priceText: PropTypes.string.isRequired,
    bookmarkActive: PropTypes.bool.isRequired,
    insideItems: PropTypes.arrayOf(PropTypes.string).isRequired,
    features: PropTypes.shape({
      entire: PropTypes.string.isRequired,
      bedRooms: PropTypes.number.isRequired,
      maxAdults: PropTypes.number.isRequired
    }),
    rating: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    user: PropTypes.shape({
      userName: PropTypes.string.isRequired,
      avatarImage: PropTypes.string.isRequired,
      userStatus: PropTypes.string.isRequired
    })
  }).isRequired,
  nearbyOffers: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default DetailsOffer;
