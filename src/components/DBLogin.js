import React from "react";

export default class DBLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  btnHandler() {
    const password = document.getElementById("password").value;
    this.props.viewChange(true, password);
  }

  render() {
    return (
      <div id="trackingContainer">
        <div className="trackingForm">
          <form style={{ width: "100%" }}>
            <div className="input-group">
              <input
                class="input-group__input"
                id="password"
                type="text"
                placeholder=" "
                autocomplete="off"
              />
              <label class="input-group__label" for="email">
                Password
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
