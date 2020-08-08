import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Map from "google-map-react";
import marker from "../assets/images/3d-marker.jpg";
import { Card } from "react-bootstrap";
import "./trackInfo.css";
import cardTitleImg from "../assets/images/tree2.png";
import x from "../assets/images/tree4.png";
import circleTree from "../assets/images/tracking-tree.png";
import circleCalendar from "../assets/images/tracking-calendar.png";
import { Link } from "../util/router";

const AnyReactComponent = ({ text }) => (
  <div>
    <img style={{ height: "45px" }} src={marker} alt=""></img>
  </div>
);

export default class TrackInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      lat: this.props.lat,
      lng: this.props.lng,
    };
    this.options = {
      center: {
        lat: this.state.lat,
        lng: this.state.lng,
      },
      zoom: 13,
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className="container">
        <Section>
          {/* <SectionHeader title="Track" centered /> */}
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
            <div className="trackingCard">
              <br />
              <div className="userProfile">
                <img className="userProfileImg" src={x} alt="" />
                <p className="is-caslon userProfileName">
                  {this.state.user.gift ? (
                    <p>
                      {" "}
                      <i className="fontawesome fas fa-gift"></i>{" "}
                      {this.state.user.giftTo}{" "}
                    </p>
                  ) : (
                    this.state.user.name
                  )}
                </p>
              </div>
              <center>
                <div className="illustrationsDiv">
                  <div className="saplingsCol">
                    <div className="sap-img">
                      <img className="sap-icon" src={circleTree} alt="" />
                    </div>
                    <div id="saplingsDiv" className="saplings-txt ">
                      <span className="sap-no is-caslon" id="sap-no">
                        {this.state.user.trees}
                      </span>
                      <p className="sap-txt is-century">saplings</p>
                    </div>
                  </div>
                  <div className="dateCol">
                    <div className="sap-img">
                      <img className="sap-icon" src={circleCalendar} alt="" />
                    </div>
                    <div className="saplings-txt date-txt is-caslon">
                      <span className="sap-no is-caslon" id="dateSpan">
                        {new Date(this.state.user.date).toLocaleDateString()}
                      </span>
                      <p className="sap-txt is-century">
                        {new Date(this.state.user.date).toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                </div>
              </center>
              <p className="trackingContent is-century">
                we are pleased to inform you that your saplings are happy and
                healthy. to track their location, refer to the map above.
              </p>
            </div>
          </div>

          <center>
            <div className="contactDiv">
              <p className="is-century" id="trackingContactSubtxt">
                if you would like us to arrange a visit for you to see your
                planted saplings
              </p>
              <Link to="/contact">
                <span id="trackingContactBtn" className="adopt-btn">
                  CONTACT US
                </span>
              </Link>
            </div>
          </center>
        </Section>
      </div>
    );
  }
}
