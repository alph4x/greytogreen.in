import React from "react";
import $ from "jquery";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import SectionButton from "./SectionButton";
import "./Facts.css";

export default class Facts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      facts: [
        "Ostriches can run faster than horses.",
        "Olympic gold medals are actually made mostly of silver.",
        "You are born with 300 bones; by the time you are an adult you will have 206.",
        "It takes about 8 minutes for light from the Sun to reach Earth.",
        "Some bamboo plants can grow almost a meter in just one day.",
        "The state of Florida is bigger than England.",
        "Some penguins can leap 2-3 meters out of the water.",
        "On average, it takes 66 days to form a new habit.",
        "Mammoths still walked the earth when the Great Pyramid was being built.",
      ],
    };
  }

  componentDidMount() {
    this.buttonHandler();
  }

  buttonHandler() {
    document.getElementById("factText").innerText = this.state.facts[
      Math.floor(Math.random() * Math.floor(9))
    ];
  }

  render() {
    return (
      <div className="is-vcentered">
        <SectionHeader centered={true} title="Did you know..?" size="large" />
        <p
          id="factText"
          className="is-century"
          style={{ fontSize: "20px" }}
        ></p>
        <button
          id="factBtn"
          className="is-pink is-caslon"
          onClick={this.buttonHandler.bind(this)}
        >
          Another Fact
        </button>
      </div>
    );
  }
}
