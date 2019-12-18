import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import CardOffer from "../card-offer/card-offer.jsx";

class ListOffers extends PureComponent {
  constructor(props) {
    super(props);
  }

  handleClickCardName(id) {
    location.pathname = `/offer` + id;
  }

  render() {
    const {offers, onOfferHover} = this.props;

    return <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => <CardOffer
          key={offer.id}
          offer={offer}
          onClickCardName={this.handleClickCardName}
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
    preview_image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    is_favorite: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  })).isRequired,
  onOfferHover: PropTypes.func,
};

export default ListOffers;
