import React from "react";
import Axios from "axios";
import "./trackingId.css";

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

  async btnHandler(e) {
    e.preventDefault();
    const trackingId = document.getElementById("trackingId").value;
    await this.setState({ trackingId: trackingId });
    this.checkViewChange();
  }

  render() {
    return (
      <div id="trackingContainer">
        {/* <div>
          <span>Enter Tracking ID:</span>
          <input id="trackingId"></input>
          <button onClick={this.btnHandler.bind(this)}>Submit</button>
        </div> */}
        <div className="form">
          <form style={{ width: "100%" }}>
            <div className="input-group">
              <input
                class="input-group__input"
                id="email"
                type="text"
                placeholder=" "
                autocomplete="off"
              />
              <label class="input-group__label" for="email" id="trackingId">
                TRACKING ID
              </label>
            </div>

            <center>
              <span
                variant="primary"
                className="submitBtn"
                onClick={this.btnHandler.bind(this)}
              >
                Submit
              </span>
            </center>
          </form>
        </div>
      </div>
    );
  }
}
