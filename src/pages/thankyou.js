import React from "react";
import SectionHeader from "../components/SectionHeader";
import Section from "../components/Section";
import thankyouImg from "../assets/images/thanks_for_adopting_illustration.png";
import "./thankyou.css";
import queryString from "query-string";

export default class Thankyou extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentWillMount() {
    // fetch tracking ID from URL params
    const trackingId = queryString.parse(window.location.search).trackingId;
    await this.setState({ trackingId });
  }

  componentDidMount() {}

  render() {
    return (
      <div className="container">
        <Section>
          <SectionHeader title="THANKS FOR ADOPTING TREES!" centered />
          <div className="is-century center">
            <p style={{ fontSize: "20px" }}>
              Hi! We have registered your tracking ID and are currently
              allotting your batch of saplings a new home. However, we will keep
              you posted and you should be able to track your saplings in 4-5
              working days.
            </p>
            <p id="trackingText">
              The tracking ID for your batch of trees is: &nbsp;
              <span id="trackingId">{this.state.trackingId}</span>
              <span style={{ display: "block" }} className="text-muted">
                We have sent you a mail with your Tracking ID. However, we would
                suggest you to save it since this is a unique ID that has been
                generated to track your specific batch of saplings.
              </span>
            </p>
          </div>
          <img
            style={{ display: "block", margin: "8vh auto 0 auto" }}
            src={thankyouImg}
            alt="thanks_illustration"
          ></img>
        </Section>
      </div>
    );
  }
}
