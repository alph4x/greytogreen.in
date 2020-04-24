import React from "react";
import SectionHeader from "./SectionHeader";
import Map from "google-map-react";
import marker from "../assets/images/LOGO-single.png";

const AnyReactComponent = ({ text }) => (
  <div>
    <img style={{ height: "30px" }} src={marker} alt=""></img>
  </div>
);

export default class TrackInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: this.props.lat,
      lng: this.props.lng,
    };
    this.options = {
      center: {
        lat: this.state.lat,
        lng: this.state.lng,
      },
      zoom: 15,
    };
  }

  render() {
    return (
      <div className="container">
        <SectionHeader title="Track" centered />
        <div
          className="mapsContainer"
          style={{ height: "50vh", width: "100%" }}
        >
          <Map
            bootstrapURLKeys={{
              key: "AIzaSyAdj654dearZBWb7_JuepgNRc_0y8QzyW4",
            }}
            defaultCenter={this.options.center}
            defaultZoom={this.options.zoom}
          >
            <AnyReactComponent
              lat={this.state.lat}
              lng={this.state.lng}
              text="My Marker"
            />
          </Map>
        </div>
      </div>
    );
  }
}
