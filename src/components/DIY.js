import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Features from "./Features";
import dig from "../assets/images/dig.png";
import place from "../assets/images/place.png";
import fill from "../assets/images/fill.png";
import mulch from "../assets/images/mulch.png";
import "./DIY.css";
import { Modal, Carousel } from "react-bootstrap";

export default class DIY extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  hideModal() {
    this.setState({ isOpen: false });
  }

  showModal() {
    this.setState({ isOpen: true });
  }

  render() {
    return (
      <Section color={this.props.color} size={this.props.size}>
        <div className="ContactSection__container container">
          <SectionHeader
            title="do it yourself"
            subtitle={this.props.subtitle}
            centered={true}
            size={3}
          />
          <div className="FeaturesSection__box box" id="featuresSection">
            <Features
              columns={2}
              items={[
                {
                  title: "dig",
                  body:
                    "Dig a shallow broad pit and place the sapling inside it.",
                  image: dig,
                },
                {
                  title: "place",
                  body:
                    "place the plant at the proper height otherwise the roots may have difficulty developing due to lack of oxygen.",
                  image: place,
                },
                {
                  title: "fill",
                  body:
                    "backfill the pit and make sure that the planted tree/sapling is straight.",
                  image: fill,
                },
                {
                  title: "mulch",
                  body:
                    "mulch is an organic matter (decaying leaves, bark or compost) spread around the base of a tree to hold moisture, reduce the growth of grass and weed.",
                  image: mulch,
                },
              ]}
            />
          </div>
          <div>
            <p
              className="is-century"
              style={{
                marginTop: "4rem",
                textAlign: "center",
                fontSize: "24px",
                marginBottom: "2rem",
              }}
            >
              here's a video to help you plant:
            </p>
            <iframe
              title="video"
              id="ytplayer"
              type="text/html"
              width="640"
              height="360"
              src="https://www.youtube.com/embed/SL6t5SUrat0"
              frameborder="0"
            ></iframe>
          </div>
          <div className="columns" style={{ marginTop: "4rem" }}>
            {/* <div className="column ">
              <span
                className="center customBtn "
                style={{ top: "25%" }}
                onClick={this.showModal.bind(this)}
              >
                Which plants to plant?
              </span>
            </div> */}
            <div className="column">
              <span className="center customBtn is-century">
                <a
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    textTransform: "none",
                  }}
                  href="https://www.google.com/maps/search/?api=1&query=plant+nursery"
                >
                  TAKE ME TO THE NEAREST NURSERY
                </a>
              </span>
            </div>
          </div>
          <Modal
            show={this.state.isOpen}
            onHide={this.hideModal.bind(this)}
            centered
          >
            {/* <Modal.Header>Hi</Modal.Header> */}
            <Modal.Body>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://www.telegraph.co.uk/content/dam/news/2016/09/08/107667228_beech-tree-NEWS_trans_NvBQzQNjv4BqplGOf-dgG3z4gg9owgQTXEmhb5tXCQRHAvHRWfzHzHk.jpg"
                    alt="Arjun"
                  />
                  <Carousel.Caption>
                    <h3>Arjun (Terminialia Arjuna)</h3>
                    <p>Height: 25m</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://www.telegraph.co.uk/content/dam/news/2016/09/08/107667228_beech-tree-NEWS_trans_NvBQzQNjv4BqplGOf-dgG3z4gg9owgQTXEmhb5tXCQRHAvHRWfzHzHk.jpg"
                    alt="Neem"
                  />

                  <Carousel.Caption>
                    <h3>Neem </h3>
                    <p>
                      Reduces heat; Reduces pollution both in the daytime and
                      night; Removes Lead from the environment; Height: 15-20m
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://www.telegraph.co.uk/content/dam/news/2016/09/08/107667228_beech-tree-NEWS_trans_NvBQzQNjv4BqplGOf-dgG3z4gg9owgQTXEmhb5tXCQRHAvHRWfzHzHk.jpg"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Peepal</h3>
                    <p>
                      Reduces pollution; Converts CO2 to O2 at night; Life:
                      1900-2000 years; Height: 3m
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://www.telegraph.co.uk/content/dam/news/2016/09/08/107667228_beech-tree-NEWS_trans_NvBQzQNjv4BqplGOf-dgG3z4gg9owgQTXEmhb5tXCQRHAvHRWfzHzHk.jpg"
                    alt="Jamun/Plum"
                  />

                  <Carousel.Caption>
                    <h3>Jamun/Plum</h3>
                    <p>
                      Removes sulphur dioxide from the environment; Height:
                      30-50m
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://www.telegraph.co.uk/content/dam/news/2016/09/08/107667228_beech-tree-NEWS_trans_NvBQzQNjv4BqplGOf-dgG3z4gg9owgQTXEmhb5tXCQRHAvHRWfzHzHk.jpg"
                    alt="Tulsi"
                  />

                  <Carousel.Caption>
                    <h3>Tulsi</h3>
                    <p>
                      Height 75-90cm; Emits oxygen at night; Emits oxygen for 20
                      hrs & zone for 4 hrs; Absorbs harmful gases like Carbon
                      Monoxide, CO2 & Sulphur Dioxide from the environment.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Modal.Body>
            {/* <Modal.Footer>This is the footer</Modal.Footer> */}
          </Modal>
        </div>
      </Section>
    );
  }
}
