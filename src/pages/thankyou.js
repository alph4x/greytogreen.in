import React from "react";
import SectionHeader from "../components/SectionHeader";
import Section from "../components/Section";
import thankyouImg from "../assets/images/thanks_for_adopting_illustration.png";
import "./thankyou.css";
import queryString from "query-string";
import Certificate from "../components/certificate";
import FileSaver from "file-saver";
import htmlToImage from "html-to-image";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default class Thankyou extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  async componentWillMount() {
    // fetch tracking ID from URL params
    const trackingId = queryString.parse(window.location.search).trackingId;
    await this.setState({ trackingId });
    // console.log("xxxxx");
  }

  downloadBtnHandler() {}

  componentDidMount() {
    setTimeout(() => {
      var imgNode = document.getElementById("cert_content");
      htmlToImage
        .toPng(imgNode)
        .then(function (dataUrl) {
          var img = new Image();
          img.id = "certGenImg";
          img.src = dataUrl;
          document.getElementById("cert-img").appendChild(img);
          document.getElementById("cert_content").style.display = "none";
          document.getElementById("loader").classList.remove("loaderShow");
          document.getElementById("loader").classList.add("loaderHide");
          var url = document.getElementById("certGenImg").src;
          document.getElementById("dlAnchor").href = url;
        })
        .catch(function (error) {
          console.error("oops, something went wrong!", error);
        });
    }, 3000);
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
              <span id="trackingId">
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
              color="#00BFFF"
              height={100}
              width={100}
              timeout={4000} //3 secs
            />
            <span>Please wait while we generate your certificate</span>
          </div>
          <div id="certStuff">
            <div id="cert-img" className="container">
              <Certificate />
            </div>
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
