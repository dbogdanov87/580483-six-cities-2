const offers = [
  {
    id: 1,
    city: {
      id: 4,
      name: `Amsterdam`
    },
    previewImage: `img/apartment-01.jpg`,
    cardGalleryImages: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    cardMark: `Premium`,
    coordinates: [52.3909553943508, 4.85309666406198],
    price: 250,
    is_favorite: true,
    insideItems: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
    features:
      {
        entire: `Entire place`,
        bedRooms: 3,
        maxAdults: 4
      },
    rating: `90%`,
    title: `Beautiful luxurious apartment at great locations`,
    type: `privet room`,
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
    previewImage: `img/room.jpg`,
    cardGalleryImages: [`img/room.jpg`, `img/apartment-01.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    cardMark: `Not premium`,
    coordinates: [52.369553943508, 4.85309666406198],
    price: 70,
    is_favorite: false,
    insideItems: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Dishwasher`, `Cabel TV`, `Fridge`],
    features:
      {
        entire: `Entire place`,
        bedRooms: 1,
        maxAdults: 2
      },
    rating: `90%`,
    title: `Wood and stone place`,
    type: `privet room`,
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
    previewImage: `img/apartment-02.jpg`,
    cardGalleryImages: [`img/room.jpg`, `img/apartment-01.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    cardMark: `Not premium`,
    coordinates: [52.3909553943508, 4.929309666406198],
    price: 65,
    is_favorite: false,
    insideItems: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`],
    features:
      {
        entire: `Entire place`,
        bedRooms: 2,
        maxAdults: 3
      },
    rating: `60%`,
    title: `Canal View Prinsengracht`,
    type: `privet room`,
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
    previewImage: `img/apartment-03.jpg`,
    cardGalleryImages: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    cardMark: `Premium`,
    coordinates: [52.3809553943508, 4.939309666406198],
    price: 150,
    is_favorite: true,
    insideItems: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`],
    features: {
      entire: `Entire place`,
      bedRooms: 1,
      maxAdults: 2
    },
    rating: `90%`,
    title: `Nice, cozy, warm big bed apartment`,
    type: `privet room`,
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
    previewImage: `img/apartment-01.jpg`,
    cardGalleryImages: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    cardMark: `Premium`,
    coordinates: [52.3909553943508, 4.85309666406198],
    price: 250,
    is_favorite: true,
    insideItems: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
    features:
      {
        entire: `Entire place`,
        bedRooms: 3,
        maxAdults: 4
      },
    rating: `90%`,
    title: `Beautiful luxurious apartment at great location`,
    type: `privet room`,
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
    previewImage: `img/room.jpg`,
    cardGalleryImages: [`img/room.jpg`, `img/apartment-01.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    cardMark: `Not premium`,
    coordinates: [52.369553943508, 4.85309666406198],
    price: 70,
    is_favorite: false,
    insideItems: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Dishwasher`, `Cabel TV`, `Fridge`],
    features:
      {
        entire: `Entire place`,
        bedRooms: 1,
        maxAdults: 2
      },
    rating: `90%`,
    title: `Wood and stone place`,
    type: `privet room`,
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
    previewImage: `img/apartment-02.jpg`,
    cardGalleryImages: [`img/room.jpg`, `img/apartment-01.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    cardMark: `Not premium`,
    coordinates: [48.8744200, 2.34201000],
    price: 65,
    is_favorite: false,
    insideItems: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`],
    features:
      {
        entire: `Entire place`,
        bedRooms: 2,
        maxAdults: 3
      },
    rating: `60%`,
    title: `Canal View Prinsengracht`,
    type: `privet room`,
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
    previewImage: `img/apartment-03.jpg`,
    cardGalleryImages: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    cardMark: `Premium`,
    coordinates: [48.8644200, 2.34901000],
    price: 150,
    is_favorite: true,
    insideItems: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`],
    features: {
      entire: `Entire place`,
      bedRooms: 1,
      maxAdults: 2
    },
    rating: `90%`,
    title: `Nice, cozy, warm big bed apartment`,
    type: `privet room`,
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
    previewImage: `img/apartment-01.jpg`,
    cardGalleryImages: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    cardMark: `Premium`,
    coordinates: [48.8534100, 2.3488000],
    price: 250,
    is_favorite: true,
    insideItems: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
    features:
      {
        entire: `Entire place`,
        bedRooms: 3,
        maxAdults: 4
      },
    rating: `90%`,
    title: `Beautiful luxurious apartment at great location`,
    type: `privet room`,
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
    previewImage: `img/room.jpg`,
    cardGalleryImages: [`img/room.jpg`, `img/apartment-01.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    cardMark: `Not premium`,
    coordinates: [52.369553943508, 4.85309666406198],
    price: 70,
    is_favorite: false,
    insideItems: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Dishwasher`, `Cabel TV`, `Fridge`],
    features:
      {
        entire: `Entire place`,
        bedRooms: 1,
        maxAdults: 2
      },
    rating: `90%`,
    title: `Wood and stone place`,
    type: `privet room`,
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
    previewImage: `img/apartment-02.jpg`,
    cardGalleryImages: [`img/room.jpg`, `img/apartment-01.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    cardMark: `Not premium`,
    coordinates: [52.3909553943508, 4.929309666406198],
    price: 65,
    is_favorite: false,
    insideItems: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`],
    features:
      {
        entire: `Entire place`,
        bedRooms: 2,
        maxAdults: 3
      },
    rating: `60%`,
    title: `Canal View Prinsengracht`,
    type: `privet room`,
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
    previewImage: `img/apartment-03.jpg`,
    cardGalleryImages: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    cardMark: `Premium`,
    coordinates: [52.3809553943508, 4.939309666406198],
    price: 150,
    is_favorite: true,
    insideItems: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`],
    features: {
      entire: `Entire place`,
      bedRooms: 1,
      maxAdults: 2
    },
    rating: `90%`,
    title: `Nice, cozy, warm big bed apartment`,
    type: `privet room`,
    description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    user: {
      userName: `Angelina`,
      avatarImage: `img/avatar-angelina.jpg`,
      userStatus: `mid`
    }
  }
];

export default offers;
