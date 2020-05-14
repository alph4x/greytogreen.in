/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import SectionHeader from "../components/SectionHeader";
import Section from "../components/Section";
import thankyouImg from "../assets/images/thanks_for_adopting_illustration.png";
import "./thankyou.css";
import queryString from "query-string";
// import Certificate from "../components/certificate";
import FileSaver from "file-saver";
import htmlToImage from "html-to-image";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import Axios from "axios";

export default class Thankyou extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  async componentWillMount() {
    // fetch tracking ID from URL params
    const trackingId = queryString.parse(window.location.search).trackingId;
    await this.setState({ trackingId });
  }

  downloadBtnHandler() {}

  componentDidMount() {
    // Axios.post("https://api.greytogreen.in/getUserDetails/certificate", {
    Axios.post("http://localhost:4500/getUserDetails/certificate", {
      trackingId: this.state.trackingId,
    }).then((res) => {
      const base64Img = "data:image/png;base64, " + res.data;
      var img = new Image();
      img.id = "certGenImg";
      img.src = base64Img;
      document.getElementById("certImgDiv").appendChild(img);
      document.getElementById("loader").classList.remove("loaderShow");
      document.getElementById("loader").classList.add("loaderHide");
      var url = document.getElementById("certGenImg").src;
      document.getElementById("dlAnchor").href = url;
    });
  }

  render() {
    return (
      <div id="thankyouContainer" className="container">
        <Section>
          <SectionHeader title="CONGRATULATIONS ON ADOPTING TREES!" centered />
          <div className="is-century center">
            <p style={{ fontSize: "20px" }}>
              We have registered your tracking ID and are currently allotting
              your batch of saplings a new home. You can track your saplings
              using the tracking ID given below:
            </p>
            <p id="trackingText">
              <span id="trackingId" style={{ textTransform: "none" }}>
                <b>{this.state.trackingId}</b>
              </span>
              <span style={{ display: "block" }} className="text-muted">
                We have also emailed you your tracking ID. Please keep it saved.
              </span>
            </p>
          </div>
          <div id="loader" className="loaderShow">
            <Loader
              type="Puff"
              color="#577F67"
              height={100}
              width={100}
              timeout={70000} //3 secs
            />
            <span>Please wait while we generate your certificate</span>
          </div>
          <div id="certStuff">
            <div id="certImgDiv"></div>
            <div className="row certBtns">
              <div className="col">
                <span
                  className="adopt-btn"
                  id="certDlBtn"
                  onClick={this.downloadBtnHandler.bind(this)}
                >
                  <a id="dlAnchor" download="My Certificate | GreyToGreen">
                    Download your certificate
                  </a>
                </span>
                <br></br>
                <span className="is-century">
                  and share it on your social media!
                </span>
              </div>
              <div className="col">
                <span
                  onClick={() => (window.location = "/contact")}
                  className="adopt-btn"
                >
                  Contact us to get it framed
                </span>
              </div>
            </div>
          </div>
        </Section>
      </div>
    );
  }
}
