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
          <Card style={{ width: "18rem", "text-align": "center" }}>
            <Card.Title id="card-title" style={{ "text-align": "center" }}>
              Title
            </Card.Title>
            <Form className="form" onSubmit={this.onSubmitHandler.bind(this)}>
              <Form.Group>
                <Form.Control
                  type="name"
                  placeholder="Your name"
                  onChange={this.getName.bind(this)}
                />
                <Form.Text className="text-muted">
                  We'll use this name to showcase your association with us
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Your email"
                  onChange={this.getEmail.bind(this)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Control
                  type="number"
                  placeholder="Your phone number"
                  onChange={this.getPhone.bind(this)}
                />
              </Form.Group>
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
