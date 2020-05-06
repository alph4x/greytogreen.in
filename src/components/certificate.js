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
    await Axios.post("http://localhost:4500/getUserDetails/certificate", {
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
          backgroundSize: "contain ",
        }}
      >
        <p id="cert_text">
          this certifies that{" "}
          <span id="personTrees">
            <b>{this.state.user.numTrees}</b>
          </span>{" "}
          trees were planted <br></br> in the name of
        </p>
        <span id="personName">
          <b>{this.state.user.name}</b>
        </span>
        <br></br>
        <span id="personDate">
          {new Date(this.state.user.date).toLocaleDateString()}
        </span>
      </div>
    );
  }
}
