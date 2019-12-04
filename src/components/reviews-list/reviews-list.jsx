import React from "react";
import PropTypes from "prop-types";

import ReviewsItem from "../reviews-item/reivews-item.jsx";

const ReviewList = (props) => {
  const {reviews} = props;

  return (
    <ul className="reviews__list">
      {
        reviews.map((review) => (
          <ReviewsItem review={review} key={review.id}/>)
        )
      }
    </ul>);
};

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default ReviewList;
