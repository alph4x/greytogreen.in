import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Map from "google-map-react";
import marker from "../assets/images/LOGO-single.png";
import { Card } from "react-bootstrap";
import "./trackInfo.css";

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
      <div className="container" style={{ height: "100vh" }}>
        <Section>
          <SectionHeader title="Track" centered />
          <div className="mapsContainer">
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
          <div className="trackingInfo">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Section>{" "}
      </div>
    );
  }
}
