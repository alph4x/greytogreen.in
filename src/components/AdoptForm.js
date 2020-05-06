import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./adoptForm.css";
import { Jumbotron, Container, Card, Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import certificate from "../assets/images/certificate.png";

export default class AdoptForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { gift: false };
  }

  async getName(e) {
    await this.setState({ name: e.target.value });
  }

  async getEmail(e) {
    await this.setState({ email: e.target.value });
  }

  async getPhone(e) {
    await this.setState({ phone: e.target.value });
  }

  async getFormMessage(e) {
    await this.setState({ message: e.target.value });
  }

  async giftCheck(e) {
    if (e.target.checked) {
      document.getElementById("giftForm").className = "toggleShow";
      document.getElementById("sec2").style.height =
        document.getElementById("sec2").offsetHeight + 270 + "px";
      await this.setState({ gift: !this.state.gift });
    } else {
      document.getElementById("giftForm").className = "toggleHide";
      document.getElementById("sec2").style.height =
        document.getElementById("sec2").offsetHeight - 270 + "px";
      await this.setState({ gift: !this.state.gift });
    }
  }

  async getGiftTo(e) {
    await this.setState({ giftTo: e.target.value });
  }

  async getGiftFrom(e) {
    await this.setState({ giftFrom: e.target.value });
  }

  async getGiftMessage(e) {
    await this.setState({ giftMessage: e.target.value });
  }

  certificateShow() {
    Swal.fire({
      imageUrl: certificate,
      imageWidth: 400,
      imageHeight: 250,
      imageAlt: "Custom image",
    });
  }

  async onSubmitHandler(e) {
    e.preventDefault();
    //send form details
    let formData = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      message: this.state.message,
      gift: this.state.gift,
      giftTo: this.state.giftTo,
      giftFrom: this.state.giftFrom,
      giftMessage: this.state.giftMessage,
    };
    await this.props.getFormDetails(formData);
    //call server & razorpay function
    let paynowFn = this.props.payNow;
    paynowFn();
  }

  render() {
    return (
      <div id="sec2" className="sec2">
        <div id="leaves">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </div>
        <Jumbotron fluid>
          <Container>
            <h1 id="adoptForm-title" className="is-caslon">
              Congratulations, you're making it greener!
            </h1>
            <p className="is-century">
              Help us reach you better for periodic updates on your saplings!
            </p>
          </Container>
        </Jumbotron>
        <div className="payment-form">
          <Card
            id="formCard"
            style={{
              textAlign: "center",
            }}
            className="is-century formCard"
          >
            <Card.Title id="card-title" style={{ textAlign: "center" }}>
              Details
            </Card.Title>
            <Form className="form" onSubmit={this.onSubmitHandler.bind(this)}>
              {/* Display name */}
              <Form.Group>
                <Form.Control
                  type="name"
                  placeholder="Display name"
                  onChange={this.getName.bind(this)}
                />
                <Form.Text className="text-muted" style={{ textAlign: "left" }}>
                  We'll use this name to showcase your association with us
                </Form.Text>
              </Form.Group>
              {/* Email */}
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  onChange={this.getEmail.bind(this)}
                />
              </Form.Group>
              {/* Phone */}
              <Form.Group>
                <Form.Control
                  type="number"
                  placeholder="Phone number"
                  onChange={this.getPhone.bind(this)}
                />
              </Form.Group>
              {/* Message */}
              <Form.Group>
                <Form.Control
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

                <Form.Text className="text-muted" style={{ textAlign: "left" }}>
                  We’ll send a certificate to your email address, which you can
                  forward along or print.
                  <span
                    onClick={this.certificateShow.bind(this)}
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                  >
                    (Here's an example)
                  </span>
                </Form.Text>
              </Form.Group>
              {/* Gift div */}
              <div id="giftForm" className="toggleHide">
                {/* TO */}
                <Form.Group>
                  <Form.Label style={{ display: "block", textAlign: "left" }}>
                    To
                  </Form.Label>

                  <Form.Control
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
                  <Form.Text
                    className="text-muted"
                    style={{ textAlign: "left" }}
                  >
                    optional; to be included on the certificate
                  </Form.Text>
                </Form.Group>
              </div>
              <span
                className="adopt-btn center"
                onClick={this.onSubmitHandler.bind(this)}
                style={{ fontSize: "20px" }}
              >
                COMPLETE ADOPTION
              </span>
            </Form>
          </Card>
        </div>
      </div>
    );
  }
}
