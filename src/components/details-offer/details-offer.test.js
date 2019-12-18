import React from "react";
import renderer from "react-test-renderer";
import DetailsOffer from "./details-offer.jsx";

it(`Details Offer is rendered correctly`, () => {

  const div = document.createElement(`div`);
  div.id = `map`;
  document.body.appendChild(div);

  const offers = [{
    previewImage: `img`,
    cardGalleryImages: [`img/room.jpg`],
    cardMark: `Premium`,
    price: 250,
    isFavorite: true,
    insideItems: [`Wi-Fi`],
    features:
      {
        entire: `Entire place`,
        bedRooms: 3,
        maxAdults: 4
      },
    rating: `90%`,
    title: `Beautiful luxurious apartment at great location`,
    type: `privet room`,
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
    previewImage: `img`,
    cardGalleryImages: [`img/room.jpg`],
    coordinates: [0, 0],
    cardMark: `Premium`,
    price: 250,
    isFavorite: true,
    insideItems: [`Wi-Fi`],
    features:
      {
        entire: `Entire place`,
        bedRooms: 3,
        maxAdults: 4
      },
    rating: `90%`,
    title: `Beautiful luxurious apartment at great location`,
    type: `privet room`,
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
