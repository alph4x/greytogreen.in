import React from "react";
import Section from "./Section";
import Facts from "./Facts";
import Leaderboard from "./Leaderboard";
import "./FactsLeaderboard.css";

export default class FactsLeaderboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Section id="factsLeaderboardSection" color="light" size="large">
        <div className="container">
          <div className=" columns is-centered is-variable is-4 is-multiline">
            <div id="facts" className="column is-vcentered">
              <Facts />
            </div>
            <div id="leaderboard" className="column" style={{ margin: "auto" }}>
              <Leaderboard />
            </div>
          </div>
        </div>
      </Section>
    );
  }
}
