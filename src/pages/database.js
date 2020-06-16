import React from "react";
import DBInfo from "../components/DBInfo";
import DBLogin from "../components/DBLogin";
import "./database.css";

export default class Database extends React.Component {
  constructor(props) {
    super(props);
    this.state = { render: false };
  }

  async viewChange(render, password) {
    await this.setState({ render: render, password: password });
  }

  render() {
    return (
      <div className="container-fluid">
        {/* <DBInfo /> */}
        {this.state.render ? (
          <DBInfo password={this.state.password} />
        ) : (
          <DBLogin viewChange={this.viewChange.bind(this)} />
        )}
      </div>
    );
  }
}
