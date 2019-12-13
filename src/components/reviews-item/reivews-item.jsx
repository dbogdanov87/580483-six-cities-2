import React from "react";
import PropTypes from "prop-types";

const ReviewsItem = (props) => {

  const {
    review: {
      avatarImage,
      userName,
      rating,
      reviewsText,
      dateTime,
      dateString
    }
  } = props;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarImage} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {userName}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: rating}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {reviewsText}
        </p>
        <time className="reviews__time" dateTime={dateTime}>{dateString}</time>
      </div>
    </li>);
};

ReviewsItem.propTypes = {
  review: PropTypes.shape({
    avatarImage: PropTypes.string,
    userName: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    reviewsText: PropTypes.string.isRequired,
    dateTime: PropTypes.string.isRequired,
    dateString: PropTypes.string.isRequired,
  }).isRequired
};
export default ReviewsItem;
