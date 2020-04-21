import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import YouTube from "react-youtube";
import Features from "./Features";
import features1 from "../assets/images/features-1.jpeg";
import features2 from "../assets/images/features-2.jpeg";
import features3 from "../assets/images/features-3.jpeg";
import features4 from "../assets/images/features-4.jpeg";
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
                title: "adopt with just a click",
                body:
                  "we provde a user-friendly platform through which adopting & planting saplingssud is only a click of buttons away!",
                image: features1,
              },
              {
                title: "we support local businesses",
                body:
                  "our team procures saplings via local nurseries and gardeners",
                image: features2,
              },
              {
                title: "we plant here",
                body:
                  "residential areas, schools, colleges, barren lands are a few places we aim to make greener (among a myriad of others, of course)",
                image: features3,
              },
              {
                title: "team work is dream work",
                body:
                  "we believe in our cadre of young ambassadors from who help us connect with like-minded people and are determined to bring about a change",
                image: features4,
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
            <span className="center customBtn  ">
              Which trees to be planted
            </span>
          </div>
          <div className="column">
            <span className="center customBtn">Find the nearest nursery</span>
          </div>
        </div>
      </div>
    </Section>
  );
}
