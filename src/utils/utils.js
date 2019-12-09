export const {sortingOffersByNames} = (offers, sortingBy) => {
  switch (sortingBy) {
    case `Popular`: return offers;
    case `Price: low to high`:
      return offers.sort((a, b) => a.price - b.price);
    case `Price: high to low`:
      return offers.sort((a, b) => b.price - a.price);
    case `Top rated first`:
      return offers.sort((a, b) => b.rating - a.rating);
  }
  return offers;
};
