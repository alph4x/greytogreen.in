import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./adoptForm.css";
import leaf1 from "../assets/images/leaves1.png";
import leaf2 from "../assets/images/leaves2.png";
import leaf3 from "../assets/images/leaves3.png";
import leaf4 from "../assets/images/leaves4.png";
import { Jumbotron, Container, Card, Form, Button } from "react-bootstrap";

export default class AdoptForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
            <Form className="form">
              <Form.Group>
                <Form.Control type="name" placeholder="Your name" />
                <Form.Text className="text-muted">
                  We'll use this name to showcase your association with us
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Your email" />
              </Form.Group>

              <Form.Group>
                <Form.Control type="number" placeholder="Your phone number" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Pay now
              </Button>
            </Form>
          </Card>
        </div>
      </div>
    );
  }
}
