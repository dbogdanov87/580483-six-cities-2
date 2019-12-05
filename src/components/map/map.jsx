import leaflet from "leaflet";
import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const icon = leaflet.icon({
  iconUrl: `img/pin.svg`,
  iconSize: [30, 30]
});

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this.mapRef = React.createRef();
    this.markers = [];
  }

  render() {
    return <div id="map" style={{height: `100%`}} ref={this.mapRef}></div>;
  }

  _init(activeCity, offersList, container) {
    this.city = [activeCity.location.latitude, activeCity.location.longitude];
    this.zoom = activeCity.location.zoom;
    this.map = leaflet.map(container, {
      center: this.city,
      zoom: this.zoom,
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

  _addMarkerOffers(offers) {
    this._removeMarkersOffers();
    offers.map((offer) => {
      leaflet
        .marker(offer.coordinates, {icon})
        .addTo(this.map);
    });
  }

  _removeMarkersOffers() {
    this.markers.forEach((marker) => {
      this._map.removeLayer(marker);
    });
  }


  componentDidMount() {
    const {activeCity, offers} = this.props;
    this._init(activeCity, offers, this.mapRef.current);
  }

  componentDidUpdate() {
    const {activeCity, offers} = this.props;
    this._addMarkerOffers(offers);
    this.map.setView([activeCity.location.latitude, activeCity.location.longitude], activeCity.location.zoom);
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        coordinates: PropTypes.array.isRequired
      })
  ),
  activeCity: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Map;
