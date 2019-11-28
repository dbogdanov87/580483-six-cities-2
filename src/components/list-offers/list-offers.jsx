import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import CardOffer from "../card-offer/card-offer.jsx";

class ListOffers extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: -1,
    };

    this.onCardMouseEnterHandler = this.onCardMouseEnterHandler.bind(this);
    this.onCardMouseOutHandler = this.onCardMouseOutHandler.bind(this);
  }

  onClickCardNameHandler(id) {
    location.pathname = `/offer` + id;
  }

  onCardMouseEnterHandler(id) {
    this.setState({activeCard: id});
  }

  onCardMouseOutHandler() {
    this.setState({activeCard: -1});
  }

  render() {
    const {offers} = this.props;

    return <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => <CardOffer
          key={offer.id}
          offer={offer}
          onClickCardName={this.onClickCardNameHandler}
          onMouseEnterCard={this.onCardMouseEnterHandler}
          onMouseOutCard={this.onCardMouseOutHandler}
        />
        )
      }
    </div>;
  }
}

ListOffers.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    cardImage: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    priceText: PropTypes.string.isRequired,
    bookmarkActive: PropTypes.bool.isRequired,
    rating: PropTypes.string.isRequired,
    cardName: PropTypes.string.isRequired,
    cardType: PropTypes.string.isRequired,
  })).isRequired,
};

export default ListOffers;
