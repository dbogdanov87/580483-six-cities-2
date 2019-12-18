import leaflet from "leaflet";
import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import {getCityCoordinates} from "../../reducer.js";

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this.icon = leaflet.icon({
      iconUrl: `../img/pin.svg`,
      iconSize: [30, 30]
    });

    this.activeIcon = leaflet.icon({
      iconUrl: `../img/pin-active.svg`,
      iconSize: [30, 30]
    });

    this.mapRef = React.createRef();
    this.markers = [];
  }


  _addMarkerOffers(offers) {
    offers.map((offer) => {
      leaflet.marker(this._getCoordinatesByOffer(offer), {icon: this.icon})
        .addTo(this.map);
    });
    this._displayActivePin(this.props.activeOfferCoordinates);
  }

  _displayActivePin(coordinates) {
    if (coordinates.length !== 0) {
      leaflet
        .marker(coordinates, {icon: this.activeIcon})
        .addTo(this.map);
    }
    return;
  }

  _getCoordinatesByOffer(offer) {
    return [offer.location.latitude, offer.location.longitude];
  }

  _init(activeCity, offersList, container) {
    this.city = getCityCoordinates(activeCity, offersList);
    this.map = leaflet.map(container, {
      center: this.city,
      zoom: 12,
      zoomControl: false,
      marker: true
    });
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);
    this._addMarkerOffers(offersList);
  }

  _removeMarkersOffers() {
    this.markers.forEach((marker) => {
      this.map.removeLayer(marker);
    });
  }

  componentDidMount() {
    const {activeCity, offers} = this.props;
    this._init(activeCity, offers, this.mapRef.current);
  }

  componentDidUpdate() {
    const {activeCity, offers} = this.props;
    this._removeMarkersOffers();
    this._addMarkerOffers(offers);
    this.map.setView(getCityCoordinates(activeCity, offers), this.map.options.zoom);
  }

  render() {
    return <div id="map" style={{height: `100%`}} ref={this.mapRef} />;
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        coordinates: PropTypes.array
      })
  ),
  activeCity: PropTypes.string.isRequired,
  activeOfferCoordinates: PropTypes.array.isRequired
};

export default Map;
