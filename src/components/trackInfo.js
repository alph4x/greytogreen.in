import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Map from "google-map-react";
import marker from "../assets/images/LOGO-single.png";
import { Card } from "react-bootstrap";
import "./trackInfo.css";
import cardTitleImg from "../assets/images/tree2.png";
import x from "../assets/images/tree4.png";
import logoSingle from "../assets/images/LOGO-single.png";

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
          <div className="trackingInfoContainer">
            <Card id="cardContainer">
              <Card.Img variant="top" src={cardTitleImg} id="cardTitleImg" />
              <Card.Body>
                <Card.Title>User's Name</Card.Title>
                <div className="row cardBodyIllustrations">
                  <div className="col card-col">
                    <div className="row">
                      <img
                        className="col card-col cardBodyIllustration"
                        src={x}
                        alt="x"
                      ></img>
                      <p className="col card-col" style={{ margin: "auto" }}>
                        <span id="numTrees" className="is-caslon">
                          37
                        </span>
                        <span className="is-century" id="saplingSpan">
                          saplings
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="col card-col">
                    <div className="row">
                      <img
                        className="col card-col cardBodyIllustration"
                        src={x}
                        alt="x"
                      ></img>
                      <p className="col card-col" style={{ margin: "auto" }}>
                        <span id="date" className="is-caslon">
                          28.06.19
                        </span>
                        <br></br>
                        <span id="time">17:28 IST</span>
                      </p>
                    </div>
                  </div>
                </div>
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
