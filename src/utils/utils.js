export const updateRating = (rating) => {
  return `${Math.round(rating) / 5 * 100}%`;
};
