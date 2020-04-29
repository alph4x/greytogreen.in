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
        "The oldest living tree in the world is over 4800 years old. Name Methuselah.",
        "A mature tree can absorb 48 pounds of carbon dioxide each year. Sequester 1 ton of Co2",
        "by the time it reaches the age of 40.",
        "Trees reduce air temperature by evaporating water in their leaves ",
        "Earth has more than 60000 species of trees.",
        "A mature, leafy tree produces enough oxygen for 2 to 10 people per year.",
        "More than 3 million people die in the world due to illnesses linked to air pollution.",
        "Trees reduce stress",
        "Well maintained trees and shrubs can increase property value up to 14%",
        "The shade & wind buffering provided by the trees reduces annual heating and cooling costs by 2.1 Billion Dollars",
        "A single tree produces approximately 260 pounds of oxygen per year.",
        "One tree can absorb as much carbon in a year as a car produces while driving 26000 miles.",
        "1/3 of the USA is covered by forests.",
        "The average tree in an urban/city area has a life expectancy of only 8 years.",
        "Roadside trees reduce indoor pollution by more than 50%",
        "More than 20% of the world's oxygen is produced by the Amazon rain forests",
        "Planting trees and increasing the green cover helps reduce the crime rate in the area.",
        "Every Rs50 spent on planting trees and caring for them yields benefits that are 2 to 5 times that invested. (In the form of clean air, lower energy costs, increased property value & cleaner groundwater)",
        "Every 2 seconds man destroys an area of the forest the size of a football field.",
        "Only 20% of the forests are properly protected.",
        "80000 acres of forests disappear from the earth every day.",
        "4 out of every 10 trees get chopped down for making tissue paper, toothpaste, magazines.",
        "15% of all greenhouse gas emissions are the result of deforestation",
        "At the current rate of deforestation, the world's rainforests would completely vanish in 100 years.",
        "The tallest species of trees in the world include Coast Redwood, Giant Sequoia, Coast Douglas Fir, and Australian Mountain Ash.",
        "Planting Trees prevents erosion.",
        "GENERAL SHERMAN, a giant sequoia, is the world’s largest tree standing at 275 Feet with 52000 cubic feet of wood.",
        "An average size tree produces enough oxygen in one year to keep a family of 4 breathing.",
        "Trees help reduce ozone levels in urban cities.",
        "Trees absorb sound and help reduce noise pollution.",
        "Trees trap dust and debris. Dust, smog & other particles In the air collect on the leaves of the trees.",
        "Trees Help Save Water",
        "Trees Help counter water pollution.",
        "Trees shield children from ultraviolet rays. Reduces UV-B exposure by 50%.",
        "A typical forest of 10000 trees will retain approximately 10 million gallons of rainwater in a year.",
        "The deforestation rate of the world is 13million hectors per year.",
        "Continued deforestation will only further increase global warming threatening the survival of the human race.",
        "Deaths per 100000 people due to pollution: India -195; Pakistan-205; USA – 21; UK-21",
        "Pollution levels in the schools of Delhi are 4 times more than the safety limit.",
        "44% of the Delhi school children have reduced lungs. As compared to the children of other cities.",
        "14000 sq km area of forest cover lost in the last 30 years.",
        "80% of the world forest cover already lost.",
        "Living in Delhi is equivalent to smoking 20+ cigarettes a day.",
        "For every 3 people, there is only one tree in Delhi",
      ],
    };
  }

  componentDidMount() {
    this.buttonHandler();
  }

  buttonHandler() {
    let factsArrSize = this.state.facts.length;
    document.getElementById("factText").innerText = this.state.facts[
      Math.floor(Math.random() * Math.floor(factsArrSize))
    ];
  }

  render() {
    return (
      <div className="is-vcentered" style={{ margin: "45% 0" }}>
        <SectionHeader
          centered={true}
          className="is-caslon"
          title="did you know?"
          size="large"
        />
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
