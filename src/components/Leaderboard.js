import React from "react";
import axios from "axios";
import "./Leaderboard.scss";
import { Spinner, Tabs, Tab } from "react-bootstrap";
import Axios from "axios";
import icon1 from "../assets/images/tree1.png";
import icon2 from "../assets/images/tree2.png";
import icon3 from "../assets/images/tree3.png";
import icon4 from "../assets/images/tree4.png";

const Person = (props) => (
  <div className="list__person">
    <div>
      <img className="person__image" src={props.personImg} alt="user icon" />
      <span className="timeDate">{props.personDate}</span>
      <span className="timeDate">{props.personTime}</span>
    </div>
    <div className="person__text">
      <p className="person__name">{props.personName}</p>
      <p className="personMessage">{props.personMessage}</p>
    </div>
    <div>
      <p className="person__networth lightgreen-font">{props.personTrees}</p>
    </div>
  </div>
);

Person.defaultProps = {
  personImg:
    "https://specials-images.forbesimg.com/imageserve/5ab944eda7ea432fbc1d2d9c/416x416.jpg?background=000000&cropX1=0&cropX2=400&cropY1=0&cropY2=400",
};

const List = (props) => (
  <div className="list">
    {props.list.map((person) => (
      <Person
        personImg={
          person.numTrees <= 30
            ? person.numTrees <= 10
              ? icon1
              : icon2
            : person.numTrees <= 100
            ? icon3
            : icon4
        }
        personDate={new Date(person.date).toLocaleDateString()}
        personTime={new Date(person.date).toLocaleTimeString()}
        personName={
          person.gift ? (
            <p>
              <i
                style={{ color: "#f03434" }}
                class="fas fa-hand-holding-heart"
              ></i>{" "}
              &nbsp;
              {person.giftTo}
            </p>
          ) : (
            <p>{person.name}</p>
          )
        }
        personMessage={
          person.gift ? <p>{person.giftMessage}</p> : <p>{person.message}</p>
        }
        personTrees={person.numTrees}
      />
    ))}
  </div>
);

const Header = () => (
  <div className="header">
    <img
      alt="header logo"
      className="header__icon"
      src="https://user-images.githubusercontent.com/23297041/55285200-a24e9b00-538f-11e9-8990-d49a162824d1.png"
    />
    <h1 className="header__title">
      Impact
      <span>Leaderboard</span>
    </h1>
  </div>
);

class LoadingIndicator extends React.Component {
  render() {
    return (
      <div className="loading-indicator" ref={(ctx) => (this.indicator = ctx)}>
        <Spinner
          style={{ display: "block", margin: "auto" }}
          animation="border"
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </Spinner>{" "}
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    recentList: [],
    mostList: [],
    loading: true,
  };

  componentWillMount() {
    // this.getLeaderboard();
    this.getLeaderboardRecent();
    this.getLeaderboardMost();
  }

  async getLeaderboardRecent() {
    await Axios.get(
      "https://api.greytogreen.in/getUserDetails/leaderboard/recent"
    ).then(async (res) => {
      await this.setState({ recentList: res.data, loading: false });
      console.log(this.state.recentList);
    });
  }

  async getLeaderboardMost() {
    await Axios.get(
      "https://api.greytogreen.in/getUserDetails/leaderboard/most"
    ).then(async (res) => {
      await this.setState({ mostList: res.data, loading: false });
      console.log("most", this.state.mostList);
    });
  }

  render() {
    return (
      <div className="app is-century">
        <Header />

        {this.state.loading && <LoadingIndicator />}
        <Tabs
          defaultActiveKey="most"
          id="uncontrolled-tab-example"
          className="is-century "
        >
          <Tab eventKey="recent" title="Most recent">
            <List list={this.state.recentList} />
          </Tab>
          <Tab eventKey="most" title="Most trees">
            <List list={this.state.mostList} />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default App;
