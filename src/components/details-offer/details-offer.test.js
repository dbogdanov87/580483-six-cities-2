import React from "react";
import renderer from "react-test-renderer";
import DetailsOffer from "./details-offer.jsx";

it(`Details Offer is rendered correctly`, () => {

  const div = document.createElement(`div`);
  div.id = `map`;
  document.body.appendChild(div);

  const offers = [{
    cardImage: `img`,
    cardGalleryImages: [`img/room.jpg`],
    cardMark: `Premium`,
    price: 250,
    priceText: `night`,
    bookmarkActive: true,
    insideItems: [`Wi-Fi`],
    features:
      {
        entire: `Entire place`,
        bedRooms: 3,
        maxAdults: 4
      },
    rating: `90%`,
    cardName: `Beautiful luxurious apartment at great location`,
    cardType: `privet room`,
    description: `A quiet `,
    user: {
      userName: `Angelina`,
      avatarImage: `img`,
      userStatus: `Pro`
    }
  }];
  const reviews = [{
    avatarImage: `str`,
    userName: `str`,
    rating: `str`,
    reviewsText: `str`,
    dateTime: `str`,
    dateString: `str`
  }];
  const nearbyOffers = [{
    id: 1,
    cardImage: `img`,
    cardGalleryImages: [`img/room.jpg`],
    coordinates: [0, 0],
    cardMark: `Premium`,
    price: 250,
    priceText: `night`,
    bookmarkActive: true,
    insideItems: [`Wi-Fi`],
    features:
      {
        entire: `Entire place`,
        bedRooms: 3,
        maxAdults: 4
      },
    rating: `90%`,
    cardName: `Beautiful luxurious apartment at great location`,
    cardType: `privet room`,
    description: `A quiet `,
    user: {
      userName: `Angelina`,
      avatarImage: `img`,
      userStatus: `Pro`
    }
  }];

  const tree = renderer.create(<DetailsOffer
    offer={offers[0]}
    reviews={reviews}
    nearbyOffers={nearbyOffers}
  />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
