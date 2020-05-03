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
      <div className="container">
        <Section>
          <SectionHeader title="Track" centered />
          <div className="trackingInfoContainer">
            <div className="trackingCard">
              <br />
              <div className="userProfile">
                <img className="userProfileImg" src={x} alt="" />
                <p className="is-caslon userProfileName">Danish Arora</p>
              </div>
              <center>
                <div className="illustrationsDiv">
                  <div className="saplingsCol">
                    <div className="sap-img">
                      <img className="sap-icon" src={x} alt="" />
                    </div>
                    <div className="saplings-txt ">
                      <span className="sap-no is-caslon" id="sap-no">
                        37
                      </span>
                      <p className="sap-txt is-century">saplings</p>
                    </div>
                  </div>
                  <div className="dateCol">
                    <div className="sap-img">
                      <img className="sap-icon" src={x} alt="" />
                    </div>
                    <div className="saplings-txt date-txt is-caslon">
                      <span className="sap-no is-caslon" id="dateSpan">
                        28.06.19
                      </span>
                      <p className="sap-txt is-century">17:28 IST</p>
                    </div>
                  </div>
                </div>
              </center>
              <p className="trackingContent">
                lorem ipsum lorem ipsum lorem ipsum lorem ipsum{" "}
              </p>
            </div>
          </div>
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
        </Section>
      </div>
    );
  }
}
