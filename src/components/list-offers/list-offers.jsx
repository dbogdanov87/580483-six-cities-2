import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import CardOffer from "../card-offer/card-offer.jsx";

class ListOffers extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offers, onOfferHover} = this.props;

    return <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => <CardOffer
          key={offer.id}
          offer={offer}
          onOfferHover={onOfferHover}
        />
        )
      }
    </div>;
  }
}

ListOffers.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    previewImage: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  })).isRequired,
  onOfferHover: PropTypes.func,
};

export default ListOffers;
