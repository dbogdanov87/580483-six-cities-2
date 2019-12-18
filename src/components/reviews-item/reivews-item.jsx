import React from "react";
import PropTypes from "prop-types";

import {updateRating} from "../../utils/utils.js";

const ReviewsItem = (props) => {

  const {review} = props;

  const data = new Date(review.date);
  const monthNames = [`January`, `February`, `March`, `April`, `May`, `June`,
    `July`, `August`, `September`, `October`, `November`, `December`
  ];
  const month = monthNames[data.getMonth()];
  const year = data.getFullYear();

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {review.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: updateRating(review.rating)}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time" dateTime="10 октября">{month + ` ` + year}</time>
      </div>
    </li>);
};

ReviewsItem.propTypes = {
  review: PropTypes.object.isRequired
};
export default ReviewsItem;
