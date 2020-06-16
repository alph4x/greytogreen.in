import React from "react";
import Axios from "axios";
import { Form, Button } from "react-bootstrap";
import DBUser from "./DBUser";
import { Table } from "react-bootstrap";
import SectionHeader from "./SectionHeader";
import validator from "validator";
import Swal from "sweetalert2";

export default class DBInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { formDisplay: false };
  }

  async componentWillMount() {}

  async componentDidMount() {
    await Axios.get(
      "https://api.greytogreen.in/getUserDetails/leaderboard/recent"
    ).then((res) => {
      this.setState({ list: res.data });
    });
  }

  async getName(e) {
    e.persist();
    await this.setState({ name: e.target.value });
    if (validator.isLength(this.state.name, { min: 1, max: 15 })) {
      this.setState({ isName: true });
      document.getElementById("formName").classList.add("entryValidated");
    } else {
      this.setState({ isName: false });
      document.getElementById("formName").classList.add("formInvalid");
      document.getElementById("formName").classList.remove("entryValidated");
    }
  }

  async getEmail(e) {
    e.persist();
    //validate email
    await this.setState({ email: e.target.value });
    if (validator.isEmail(this.state.email)) {
      this.setState({ isEmail: true });
      document.getElementById("formBasicEmail").classList.add("entryValidated");
    } else {
      this.setState({ isEmail: false });
      document.getElementById("formBasicEmail").classList.add("formInvalid");
      document
        .getElementById("formBasicEmail")
        .classList.remove("entryValidated");
    }
  }

  async getPhone(e) {
    e.persist();
    await this.setState({ phone: e.target.value });
    if (validator.isMobilePhone(this.state.phone)) {
      this.setState({ isPhone: true });
      document.getElementById("formPhone").classList.add("entryValidated");
    } else {
      this.setState({ isPhone: false });
      document.getElementById("formPhone").classList.add("formInvalid");
      document.getElementById("formPhone").classList.remove("entryValidated");
    }
  }

  async getFormMessage(e) {
    await this.setState({ message: e.target.value });
  }

  async giftCheck(e) {
    if (e.target.checked) {
      document.getElementById("giftForm").className = "toggleShow";
      await this.setState({ gift: !this.state.gift });
    } else {
      document.getElementById("giftForm").className = "toggleHide";
      await this.setState({ gift: !this.state.gift });
    }
  }

  async getGiftTo(e) {
    e.persist();
    await this.setState({ giftTo: e.target.value });
    if (
      validator.isLength(this.state.giftTo, {
        min: 1,
        max: 10,
      })
    ) {
      this.setState({ isGiftTo: true });
      document.getElementById("formGiftTo").classList.add("entryValidated");
    } else {
      this.setState({ isGiftTo: false });
      document.getElementById("formGiftTo").classList.add("formInvalid");
      document.getElementById("formGiftTo").classList.remove("entryValidated");
    }
  }

  async getGiftFrom(e) {
    e.persist();
    await this.setState({ giftFrom: e.target.value });
    if (
      validator.isLength(this.state.giftFrom, {
        min: 1,
        max: 10,
      })
    ) {
      this.setState({ isGiftFrom: true });
      document.getElementById("formGiftFrom").classList.add("entryValidated");
    } else {
      this.setState({ isGiftFrom: false });
      document.getElementById("formGiftFrom").classList.add("formInvalid");
      document
        .getElementById("formGiftFrom")
        .classList.remove("entryValidated");
    }
  }

  async getGiftMessage(e) {
    await this.setState({ giftMessage: e.target.value });
  }

  async getNumTrees(e) {
    await this.setState({ trees: e.target.value });
  }

  async getPaidBy(e) {
    await this.setState({ paidBy: e.target.value });
  }

  async addEntry() {
    Axios.post("https://api.greytogreen.in/database/post", {
      password: this.props.password,
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
      trees: this.state.trees,
      // Hardcoding the value of 49 (Price of one tree)
      totalPrice: this.state.trees * 49,
      gift: this.state.gift,
      giftTo: this.state.giftTo,
      giftFrom: this.state.giftFrom,
      giftMessage: this.state.giftMessage,
      paidBy: this.state.paidBy,
    }).then((res) => {
      if (res.data === false) {
        alert("ERROR, incorrect PW");
      } else {
        Swal.fire("Entry saved!");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    });
  }

  async formDisplayHandler() {
    if (this.state.formDisplay) {
      document.getElementById("newEntryForm").classList.remove("formShow");
      document.getElementById("newEntryForm").classList.add("formHide");
      await this.setState({ formDisplay: !this.state.formDisplay });
    } else {
      document.getElementById("newEntryForm").classList.remove("formHide");
      document.getElementById("newEntryForm").classList.add("formShow");
      await this.setState({ formDisplay: !this.state.formDisplay });
    }
  }

  render() {
    return (
      <div id="DB" className="container-fluid">
        <SectionHeader title="DATABASE" centered />
        <div>
          <center>
            <span
              id="newEntry"
              className="adopt-btn center"
              onClick={this.formDisplayHandler.bind(this)}
            >
              Add a new entry?
            </span>
          </center>
          <Form
            id="newEntryForm"
            className="form formHide"
            onSubmit={this.addEntry.bind(this)}
          >
            {/* Display name */}
            <Form.Group>
              <Form.Control
                id="formName"
                type="name"
                placeholder="Display name"
                onChange={this.getName.bind(this)}
              />
            </Form.Group>
            {/* Email */}
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={this.getEmail.bind(this)}
              />
            </Form.Group>
            {/* Number of trees */}
            <Form.Group>
              <Form.Control
                id="formNumTrees"
                type="number"
                placeholder="Number of trees"
                onChange={this.getNumTrees.bind(this)}
              />
            </Form.Group>
            {/* paid by */}
            <Form.Group>
              <Form.Control
                id="fromPaidBy"
                type="text"
                placeholder="payment mode"
                onChange={this.getPaidBy.bind(this)}
              />
            </Form.Group>
            {/* Phone */}
            <Form.Group>
              <Form.Control
                id="formPhone"
                type="number"
                placeholder="Phone number"
                onChange={this.getPhone.bind(this)}
              />
            </Form.Group>
            {/* Message */}
            <Form.Group>
              <Form.Control
                id="formMessage"
                as="textarea"
                rows="3"
                placeholder=" My #greytogreen message is.."
                onChange={this.getFormMessage.bind(this)}
              />
              <Form.Text className="text-muted" style={{ textAlign: "left" }}>
                optional; for display on website
              </Form.Text>
            </Form.Group>
            {/* Gift checkbox */}
            <Form.Group controlId="formBasicCheckbox">
              <div style={{ textAlign: "left" }}>
                <i className="fontawesome fas fa-gift"></i> &nbsp;
                <input
                  type="checkbox"
                  id="giftCheckbox"
                  name="giftCheckbox"
                  onChange={this.giftCheck.bind(this)}
                />
                <label for="giftCheckbox">
                  &nbsp; This is a gift for someone &nbsp;
                </label>
              </div>
            </Form.Group>
            {/* Gift div */}
            <div id="giftForm" className="toggleHide">
              {/* TO */}
              <Form.Group>
                <Form.Label style={{ display: "block", textAlign: "left" }}>
                  To
                </Form.Label>

                <Form.Control
                  id="formGiftTo"
                  type="name"
                  placeholder="Recipient Name or Nickname"
                  onChange={this.getGiftTo.bind(this)}
                />
              </Form.Group>
              {/* FROM */}
              <Form.Group>
                <Form.Label style={{ display: "block", textAlign: "left" }}>
                  From
                </Form.Label>
                <Form.Control
                  id="formGiftFrom"
                  type="name"
                  placeholder="Your Name or Nickname"
                  onChange={this.getGiftFrom.bind(this)}
                />
              </Form.Group>
              {/* INCLUDE A GIFT MESSAGE */}
              <Form.Group>
                <Form.Label style={{ display: "block", textAlign: "left" }}>
                  Include a gift message
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows="2"
                  placeholder=" My #greytogreen gift message is.."
                  onChange={this.getGiftMessage.bind(this)}
                />
                <Form.Text className="text-muted" style={{ textAlign: "left" }}>
                  optional; to be included on the certificate
                </Form.Text>
              </Form.Group>
            </div>
            <span
              className="adopt-btn center"
              onClick={this.addEntry.bind(this)}
              style={{ fontSize: "20px" }}
            >
              ADD ENTRY
            </span>
          </Form>
        </div>
        <div>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Date</th>
                <th>Message</th>
                <th>Number of trees</th>
                <th>Tracking ID</th>
                <th>Gifted?</th>
                <th>Gift To</th>
                <th>Gift From</th>
                <th>Gift Message</th>
                <th>Paid By</th>
              </tr>
            </thead>
            <tbody>
              {this.state.list
                ? this.state.list.map((user, index) => (
                    <DBUser
                      key={index}
                      index={index}
                      name={user.name}
                      email={user.email}
                      date={new Date(user.date).toLocaleString()}
                      message={user.message}
                      trees={user.trees}
                      trackingId={user.trackingId}
                      gift={user.gift ? "Yes" : "No"}
                      giftTo={user.giftTo}
                      giftFrom={user.giftFrom}
                      giftMessage={user.giftMessage}
                      paidBy={user.paidBy}
                    />
                  ))
                : null}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}
