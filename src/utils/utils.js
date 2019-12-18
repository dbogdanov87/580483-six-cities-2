import {MAX_NEAR_PLACES} from "../constants.js";

export const updateRating = (rating) => {
  return `${Math.round(rating) / 5 * 100}%`;
};


export const getNearOffers = (offers, selectedOfferId) => {
  const result = [];
  const selectedOfferIndex = offers.map((offer) => offer.id).indexOf(selectedOfferId);
  let index = 0;
  while (result.length < MAX_NEAR_PLACES) {
    if (index !== selectedOfferIndex) {
      result.push(offers[index]);
      ++index;
    } else {
      ++index;
    }
  }
  return [...result, offers[selectedOfferIndex]];

};
