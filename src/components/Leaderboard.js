import React from "react";
import axios from "axios";
import "./Leaderboard.scss";
import { Spinner, Tabs, Tab } from "react-bootstrap";

const Person = (props) => (
  <div className="list__person">
    <img className="person__image" src={props.personImg} />
    <div>
      <p className="person__name">{props.personName}</p>
      <p className="personMessage">This is a dummy message</p>
    </div>
    <p className="person__networth">{props.personNetworth}</p>
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
        personImg={person.squareImage}
        personName={person.name}
        personNetworth={person.worth / 1000}
      />
    ))}
  </div>
);

const Header = () => (
  <div className="header">
    <img
      className="header__icon"
      src="https://user-images.githubusercontent.com/23297041/55285200-a24e9b00-538f-11e9-8990-d49a162824d1.png"
    />
    <h1 className="header__title">
      TreeVR
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
    list: [],
    loading: true,
  };

  componentDidMount() {
    this.getForbesList();
  }

  getForbesList = () => {
    fetch("https://forbes400.herokuapp.com/api/forbes400")
      .then((res) => res.json())
      .then((list) => {
        this.setState({ list, loading: false });
      });
  };

  render() {
    return (
      <div className="app">
        <Header />

        {this.state.loading && <LoadingIndicator />}
        <Tabs
          defaultActiveKey="recent"
          id="uncontrolled-tab-example"
          className="is-century "
        >
          <Tab eventKey="recent" title="Most recent">
            {/* <Sonnet /> */}
            <List list={this.state.list} />
          </Tab>
          <Tab eventKey="most" title="Most trees">
            <List list={this.state.list} />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default App;
