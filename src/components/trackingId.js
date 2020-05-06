import React from "react";
import Axios from "axios";
import "./trackingId.css";
import Swal from "sweetalert2";

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
      Swal.fire({
        confirmButtonColor: "#1d392a",
        title: "Invalid tracking ID",
        titleText: "Invalid tracking ID",
        text: "Are you sure that is correct?",
        icon: "question",
      });
    } else if (
      this.state.trackingId === this.state.user.trackingId &&
      this.state.user.planted === true
    ) {
      //checks if incoming trackindId matches component trackindId & is planted
      this.props.viewChange(2, this.state.user);
    } else if (
      this.state.trackingId === this.state.user.trackingId &&
      this.state.user.planted === false
    ) {
      //checks if incoming trackindId matches component trackindId but isn't planted yet
      Swal.fire({
        confirmButtonColor: "#1d392a",
        title: "In progress!",
        titleText: "In progress!",
        text:
          "We are working on alloting your batch of saplings a new home. You'll hear soon from us!",
        icon: "success",
      });
    }
  }

  async btnHandler(e) {
    e.preventDefault();
    const trackingId = document.getElementById("trackingId").value;
    console.log(trackingId);
    await this.setState({ trackingId: trackingId });
    this.checkViewChange();
  }

  render() {
    return (
      <div id="trackingContainer">
        <div className="trackingForm">
          <form style={{ width: "100%" }}>
            <div className="input-group">
              <input
                class="input-group__input"
                id="trackingId"
                type="text"
                placeholder=" "
                autocomplete="off"
              />
              <label class="input-group__label" for="email">
                TRACKING ID
              </label>
            </div>

            <center>
              <span
                id="submitBtn"
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
