import React from "react";
import Axios from "axios";
import { Form, Button, Col, Spinner } from "react-bootstrap";

const SpinnerDiv = (
  <Spinner animation="border" role="status">
    <span className="sr-only">Loading...</span>
  </Spinner>
);

export default class SecretAccess extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async checkDb() {
    await Axios.post("https://api.greytogreen.in/planted", {
      trackingId: this.state.trackingId,
      password: this.state.password,
      plantedLat: parseFloat(this.state.lat),
      plantedLng: parseFloat(this.state.lng),
    }).then((res) => {
      this.setState({ user: res.data });
    });
  }

  async submitHandler() {
    await this.checkDb();

    if (this.state.user !== "wrong password!") {
      alert("Successfully updated the database!");
    } else {
      alert("Wrong password!");
    }
  }

  render() {
    return (
      <div className="container">
        <Form>
          <Form.Row>
            <Col>
              <Form.Control
                placeholder="Tracking ID"
                onChange={(e) => {
                  this.setState({ trackingId: e.target.value });
                }}
              />
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Control
                placeholder="Latitude"
                onChange={(e) => {
                  this.setState({ lat: e.target.value });
                }}
              />
            </Col>
            <Col>
              <Form.Control
                placeholder="Longitude"
                onChange={(e) => {
                  this.setState({ lng: e.target.value });
                }}
              />
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Form.Control
                placeholder="Secret Password"
                type="password"
                onChange={(e) => {
                  this.setState({ password: e.target.value });
                }}
              />
            </Col>
          </Form.Row>
          <Button variant="primary" onClick={this.submitHandler.bind(this)}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
