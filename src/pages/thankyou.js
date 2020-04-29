import React from "react";
import SectionHeader from "../components/SectionHeader";
import Section from "../components/Section";
import thankyouImg from "../assets/images/thanks_for_adopting_illustration.png";
import "./thankyou.css";

export default class Thankyou extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    // fetch tracking ID
  }

  render() {
    return (
      <div className="container">
        <Section>
          <SectionHeader title="THANKS FOR ADOPTING TREES!" centered />
          <div className="is-century center">
            <p>
              We will be sending you periodical updates about the trees that you
              adopted. <br></br> Contact us if you want us to arrange a visit
              for you to see the trees.
            </p>
            <p id="trackingText">
              The tracking ID for your batch of trees is: &nbsp;
              <span id="trackingId">81asduin20</span>
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
