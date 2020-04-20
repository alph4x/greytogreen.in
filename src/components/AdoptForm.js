import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./adoptForm.css";
import { Jumbotron, Container, Card, Form, Button } from "react-bootstrap";

export default class AdoptForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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

  async giftCheck(e) {
    if (e.target.checked) {
      document.getElementById("giftForm").className = "toggleShow";
    } else {
      document.getElementById("giftForm").className = "toggleHide";
    }
  }

  async onSubmitHandler(e) {
    e.preventDefault();
    //send form details
    let formData = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
    };
    await this.props.getFormDetails(formData);
    //call server & razorpay function
    let paynowFn = this.props.payNow;
    paynowFn();
  }

  render() {
    return (
      <div className="sec2">
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
            style={{
              width: "25rem",
              textAlign: "center",
            }}
            className="is-century"
          >
            <Card.Title id="card-title" style={{ textAlign: "center" }}>
              Details
            </Card.Title>
            <Form className="form" onSubmit={this.onSubmitHandler.bind(this)}>
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
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  onChange={this.getEmail.bind(this)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Control
                  type="number"
                  placeholder="Phone number"
                  onChange={this.getPhone.bind(this)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  as="textarea"
                  rows="3"
                  placeholder=" My #greytogreen message is.."
                />
                <Form.Text className="text-muted" style={{ textAlign: "left" }}>
                  optional; for display on website
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="This is a gift"
                  style={{ textAlign: "left" }}
                  onChange={this.giftCheck.bind(this)}
                />
              </Form.Group>
              <div id="giftForm" className="toggleHide"></div>

              <Button
                variant="primary"
                type="submit"
                // onClick={}
              >
                Pay now
              </Button>
            </Form>
          </Card>
        </div>
      </div>
    );
  }
}
