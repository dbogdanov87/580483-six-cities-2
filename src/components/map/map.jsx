import leaflet from "leaflet";
import React, {PureComponent} from "react";
import PropTypes from "prop-types";


const city = [52.38333, 4.9];
const zoomCity = 12;
const icon = leaflet.icon({
  iconUrl: `img/pin.svg`,
  iconSize: [30, 30]
});

class Map extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return <div id="map" style={{height: `100%`}}></div>;
  }

  componentDidMount() {
    const {offers} = this.props;
    const map = leaflet.map(`map`, {
      center: city,
      zoom: zoomCity,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoomCity);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    offers.map((offer) => {
      leaflet
        .marker(offer.coordinates, {icon})
        .addTo(map);
    });
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        coordinates: PropTypes.array.isRequired
      })
  ),
};

export default Map;
