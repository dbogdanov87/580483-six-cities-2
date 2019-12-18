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

export const convertOffersToCamelCase = (offers) => {
  return offers.map(({
    city,
    preview_image: previewImage,
    images,
    title,
    is_favorite: isFavorite,
    is_premium: isPremium,
    rating,
    type,
    bedrooms,
    max_adults: maxAdults,
    price,
    goods,
    host,
    description,
    location,
    id,
  }) => ({
    city,
    previewImage,
    images,
    title,
    isFavorite,
    isPremium,
    rating,
    type,
    bedrooms,
    maxAdults,
    price,
    goods,
    host: {
      id: host.id,
      isPro: host.is_pro,
      name: host.name,
      avatarUrl: host.avatar_url,
    },
    description,
    location,
    id,
  }));
};

export const convertCommentsToCamelCase = (comments) => {
  return comments.map(({
    comment,
    date,
    id,
    rating,
    user,
  }) => ({
    comment,
    date,
    id,
    rating,
    user: {
      avatarUrl: user.avatar_url,
      id: user.id,
      isPro: user.is_pro,
      name: user.name,
    },
  }));
};

export const convertUserToCamelCase = ({
  avatar_url: avatarUrl,
  email,
  id,
  is_pro: isPro,
  name,
}) => ({
  avatarUrl,
  email,
  id,
  isPro,
  name,
});
