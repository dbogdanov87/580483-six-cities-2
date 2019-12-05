const offers = [
  {
    id: 1,
    city: {
      id: 4,
      name: `Amsterdam`
    },
    cardImage: `img/apartment-01.jpg`,
    cardGalleryImages: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    cardMark: `Premium`,
    coordinates: [52.3909553943508, 4.85309666406198],
    price: 250,
    priceText: `night`,
    bookmarkActive: true,
    insideItems: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
    features:
      {
        entire: `Entire place`,
        bedRooms: 3,
        maxAdults: 4
      },
    rating: `90%`,
    cardName: `Beautiful luxurious apartment at great location`,
    cardType: `privet room`,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    user: {
      userName: `Angelina`,
      avatarImage: `img/avatar-angelina.jpg`,
      userStatus: `Pro`
    }
  },
  {
    id: 2,
    city: {
      id: 4,
      name: `Amsterdam`
    },
    cardImage: `img/room.jpg`,
    cardGalleryImages: [`img/room.jpg`, `img/apartment-01.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    cardMark: `Not premium`,
    coordinates: [52.369553943508, 4.85309666406198],
    price: 70,
    priceText: `night`,
    bookmarkActive: false,
    insideItems: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Dishwasher`, `Cabel TV`, `Fridge`],
    features:
      {
        entire: `Entire place`,
        bedRooms: 1,
        maxAdults: 2
      },
    rating: `90%`,
    cardName: `Wood and stone place`,
    cardType: `privet room`,
    description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    user: {
      userName: `Angelina`,
      avatarImage: `img/avatar-angelina.jpg`,
      userStatus: `New`
    }
  },

  {
    id: 3,
    city: {
      id: 3,
      name: `Brussels`
    },
    cardImage: `img/apartment-02.jpg`,
    cardGalleryImages: [`img/room.jpg`, `img/apartment-01.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    cardMark: `Not premium`,
    coordinates: [52.3909553943508, 4.929309666406198],
    price: 65,
    priceText: `night`,
    bookmarkActive: false,
    insideItems: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`],
    features:
      {
        entire: `Entire place`,
        bedRooms: 2,
        maxAdults: 3
      },
    rating: `60%`,
    cardName: `Canal View Prinsengracht`,
    cardType: `privet room`,
    description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    user: {
      userName: `Angelina`,
      avatarImage: `img/avatar-angelina.jpg`,
      userStatus: `mid`
    }
  },

  {
    id: 4,
    city: {
      id: 3,
      name: `Brussels`
    },
    cardImage: `img/apartment-03.jpg`,
    cardGalleryImages: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    cardMark: `Premium`,
    coordinates: [52.3809553943508, 4.939309666406198],
    price: 150,
    priceText: `night`,
    bookmarkActive: true,
    insideItems: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`],
    features: {
      entire: `Entire place`,
      bedRooms: 1,
      maxAdults: 2
    },
    rating: `90%`,
    cardName: `Nice, cozy, warm big bed apartment`,
    cardType: `privet room`,
    description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    user: {
      userName: `Angelina`,
      avatarImage: `img/avatar-angelina.jpg`,
      userStatus: `mid`
    }
  },
  {
    id: 5,
    city: {
      id: 2,
      name: `Cologne`
    },
    cardImage: `img/apartment-01.jpg`,
    cardGalleryImages: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    cardMark: `Premium`,
    coordinates: [52.3909553943508, 4.85309666406198],
    price: 250,
    priceText: `night`,
    bookmarkActive: true,
    insideItems: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
    features:
      {
        entire: `Entire place`,
        bedRooms: 3,
        maxAdults: 4
      },
    rating: `90%`,
    cardName: `Beautiful luxurious apartment at great location`,
    cardType: `privet room`,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    user: {
      userName: `Angelina`,
      avatarImage: `img/avatar-angelina.jpg`,
      userStatus: `Pro`
    }
  },

  {
    id: 6,
    city: {
      id: 2,
      name: `Cologne`
    },
    cardImage: `img/room.jpg`,
    cardGalleryImages: [`img/room.jpg`, `img/apartment-01.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    cardMark: `Not premium`,
    coordinates: [52.369553943508, 4.85309666406198],
    price: 70,
    priceText: `night`,
    bookmarkActive: false,
    insideItems: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Dishwasher`, `Cabel TV`, `Fridge`],
    features:
      {
        entire: `Entire place`,
        bedRooms: 1,
        maxAdults: 2
      },
    rating: `90%`,
    cardName: `Wood and stone place`,
    cardType: `privet room`,
    description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    user: {
      userName: `Angelina`,
      avatarImage: `img/avatar-angelina.jpg`,
      userStatus: `New`
    }
  },

  {
    id: 7,
    city: {
      id: 1,
      name: `Paris`
    },
    cardImage: `img/apartment-02.jpg`,
    cardGalleryImages: [`img/room.jpg`, `img/apartment-01.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    cardMark: `Not premium`,
    coordinates: [48.8534125, 4.929309666406198],
    price: 65,
    priceText: `night`,
    bookmarkActive: false,
    insideItems: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`],
    features:
      {
        entire: `Entire place`,
        bedRooms: 2,
        maxAdults: 3
      },
    rating: `60%`,
    cardName: `Canal View Prinsengracht`,
    cardType: `privet room`,
    description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    user: {
      userName: `Angelina`,
      avatarImage: `img/avatar-angelina.jpg`,
      userStatus: `mid`
    }
  },

  {
    id: 8,
    city: {
      id: 1,
      name: `Paris`
    },
    cardImage: `img/apartment-03.jpg`,
    cardGalleryImages: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    cardMark: `Premium`,
    coordinates: [48.8534180, 4.939309666406300],
    price: 150,
    priceText: `night`,
    bookmarkActive: true,
    insideItems: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`],
    features: {
      entire: `Entire place`,
      bedRooms: 1,
      maxAdults: 2
    },
    rating: `90%`,
    cardName: `Nice, cozy, warm big bed apartment`,
    cardType: `privet room`,
    description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    user: {
      userName: `Angelina`,
      avatarImage: `img/avatar-angelina.jpg`,
      userStatus: `mid`
    }
  },
  {
    id: 9,
    city: {
      id: 1,
      name: `Paris`
    },
    cardImage: `img/apartment-01.jpg`,
    cardGalleryImages: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    cardMark: `Premium`,
    coordinates: [48.8535000, 4.853096664100],
    price: 250,
    priceText: `night`,
    bookmarkActive: true,
    insideItems: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
    features:
      {
        entire: `Entire place`,
        bedRooms: 3,
        maxAdults: 4
      },
    rating: `90%`,
    cardName: `Beautiful luxurious apartment at great location`,
    cardType: `privet room`,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    user: {
      userName: `Angelina`,
      avatarImage: `img/avatar-angelina.jpg`,
      userStatus: `Pro`
    }
  },

  {
    id: 10,
    city: {
      id: 5,
      name: `Hamburg`,
    },
    cardImage: `img/room.jpg`,
    cardGalleryImages: [`img/room.jpg`, `img/apartment-01.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    cardMark: `Not premium`,
    coordinates: [52.369553943508, 4.85309666406198],
    price: 70,
    priceText: `night`,
    bookmarkActive: false,
    insideItems: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Dishwasher`, `Cabel TV`, `Fridge`],
    features:
      {
        entire: `Entire place`,
        bedRooms: 1,
        maxAdults: 2
      },
    rating: `90%`,
    cardName: `Wood and stone place`,
    cardType: `privet room`,
    description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    user: {
      userName: `Angelina`,
      avatarImage: `img/avatar-angelina.jpg`,
      userStatus: `New`
    }
  },

  {
    id: 11,
    city: {
      id: 6,
      name: `Dusseldorf`,
    },
    cardImage: `img/apartment-02.jpg`,
    cardGalleryImages: [`img/room.jpg`, `img/apartment-01.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    cardMark: `Not premium`,
    coordinates: [52.3909553943508, 4.929309666406198],
    price: 65,
    priceText: `night`,
    bookmarkActive: false,
    insideItems: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`],
    features:
      {
        entire: `Entire place`,
        bedRooms: 2,
        maxAdults: 3
      },
    rating: `60%`,
    cardName: `Canal View Prinsengracht`,
    cardType: `privet room`,
    description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    user: {
      userName: `Angelina`,
      avatarImage: `img/avatar-angelina.jpg`,
      userStatus: `mid`
    }
  },

  {
    id: 12,
    city: {
      id: 6,
      name: `Dusseldorf`,
    },
    cardImage: `img/apartment-03.jpg`,
    cardGalleryImages: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    cardMark: `Premium`,
    coordinates: [52.3809553943508, 4.939309666406198],
    price: 150,
    priceText: `night`,
    bookmarkActive: true,
    insideItems: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`],
    features: {
      entire: `Entire place`,
      bedRooms: 1,
      maxAdults: 2
    },
    rating: `90%`,
    cardName: `Nice, cozy, warm big bed apartment`,
    cardType: `privet room`,
    description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    user: {
      userName: `Angelina`,
      avatarImage: `img/avatar-angelina.jpg`,
      userStatus: `mid`
    }
  }
];

export default offers;
