import React from "react";
import Axios from "axios";

export default class TrackingId extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.checkViewChange.bind(this);
  }

  async checkViewChange() {
    //DB fetch call to get lat & long
    await Axios.post("http://localhost:4500/getUserDetails", {
      trackingId: this.state.trackingId,
    }).then((res) => this.setState({ user: res.data[0] }));

    if (!this.state.user) {
      alert("ERROR - Tracking ID not found");
    } else if (this.state.trackingId === this.state.user.trackingId) {
      //checks if incoming trackindId matches component trackindId
      console.log("view change");
      this.props.viewChange(2, this.state.user);
    }
  }

  async btnHandler() {
    const trackingId = document.getElementById("trackingId").value;
    await this.setState({ trackingId: trackingId });
    this.checkViewChange();
  }

  render() {
    return (
      <div>
        <div>
          <span>Enter Tracking ID:</span>
          <input id="trackingId"></input>
          <button onClick={this.btnHandler.bind(this)}>Submit</button>
        </div>
      </div>
    );
  }
}
