import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Features from "./Features";
import dig from "../assets/images/dig.png";
import place from "../assets/images/place.png";
import fill from "../assets/images/fill.png";
import mulch from "../assets/images/mulch.png";
import "./DIY.css";

export default function DIY(props) {
  const opts = {
    height: "790",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <Section color={props.color} size={props.size}>
      <div className="ContactSection__container container">
        <SectionHeader
          title="DO IT YOURSELF"
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <div className="FeaturesSection__box box" id="featuresSection">
          <Features
            columns={2}
            items={[
              {
                title: "DIG",
                body:
                  "Dig a shallow broad pit and place the sapling inside it.",
                image: dig,
              },
              {
                title: "PLACE",
                body:
                  "Place the plant at the proper height otherwise the roots may have difficulty developing due to lack of oxygen.",
                image: place,
              },
              {
                title: "FILL",
                body:
                  "Backfill the pit and make sure that the planted tree/sapling is straight.",
                image: fill,
              },
              {
                title: "MULCH",
                body:
                  "Mulch is an organic matter (decaying leaves, bark or compost) spread around the base of a tree to hold moisture, reduce the growth of grass and weed.",
                image: mulch,
              },
            ]}
          />
        </div>
        <div>
          <p
            className="is-century"
            style={{ marginTop: "4rem", textAlign: "center", fontSize: "24px" }}
          >
            Here's a video to help you plant:
          </p>
          <iframe
            title="video"
            id="ytplayer"
            type="text/html"
            width="640"
            height="360"
            src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
            frameborder="0"
          ></iframe>
        </div>
        <div className="columns" style={{ marginTop: "4rem" }}>
          <div className="column ">
            <span className="center customBtn " style={{ top: "25%" }}>
              Which plants to plant?
            </span>
          </div>
          <div className="column">
            <span className="center customBtn">
              <a
                style={{ textDecoration: "none", color: "inherit" }}
                href="https://www.google.com/maps/search/?api=1&query=plant+nursery"
              >
                Take me to the nearest nursery
              </a>
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}
