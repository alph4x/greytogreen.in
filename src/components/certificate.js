import React from "react";
import certTemplate from "../assets/images/cert_template.png";
import "./certificate.css";
import queryString from "query-string";
import Axios from "axios";

export default class Certificate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: {} };
  }

  async componentWillMount() {
    const trackingId = queryString.parse(window.location.search).trackingId;
    await Axios.post("https://api.greytogreen.in/getUserDetails/certificate", {
      trackingId: trackingId,
    }).then(async (res) => {
      await this.setState({ user: res.data[0] });
    });
  }

  async componentDidMount() {}

  render() {
    return (
      <div
        id="cert_content"
        className="is-century"
        style={{
          background: `url(${certTemplate})`,
          backgroundSize: "contain",
          WebkitBackgroundSize: "cover",
        }}
      >
        <p id="cert_text">
          this certifies that{" "}
          <span id="personTrees">
            <b>{this.state.user.trees} tree(s)</b>
          </span>{" "}
          were planted <br></br> in the name of
        </p>
        <span id="personName">
          <b>
            {this.state.user.gift
              ? this.state.user.giftTo
              : this.state.user.name}
          </b>
        </span>
        {this.state.user.gift ? (
          <p id="certTextGift">
            as a gift from{" "}
            <span id="giftFromName">
              <b>{this.state.user.giftFrom}</b>
            </span>
          </p>
        ) : (
          <p></p>
        )}
        <br></br>
        <span id="personDate" style={{ textTransform: "none" }}>
          {new Date(this.state.user.date).toLocaleDateString()}
        </span>
      </div>
    );
  }
}
