import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Features from "./Features";
import "./FeaturesSection.scss";
import feature_adoptwith1 from "../assets/images/features-1.jpeg";
import feature_localBusiness from "../assets/images/features-2.jpeg";
import feature_wherePlant from "../assets/images/features-3.jpeg";
import feature_ambassador from "../assets/images/features-4.jpeg";
import feature_gift from "../assets/images/feature_gift.png";
import feature_track from "../assets/images/feature_track.png";
import feature_cert from "../assets/images/feature_cert.png";

function FeaturesSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <div className="FeaturesSection__box box">
          <Features
            columns={2}
            items={[
              {
                title: "adopt with just a click",
                body:
                  "we provde a user-friendly platform through which adopting & planting saplings is only a click of a button away!",
                image: feature_adoptwith1,
              },
              {
                title: "gift a plant",
                body:
                  "we offer a service wherein you can gift a sapling to a dear one and we will plant it under their name",
                image: feature_gift,
              },
              {
                title: "track your sapling",
                body:
                  "with the help of our tracking feature, you can locate your sapling and track it whenever, wherever! on reaching out to us, we can also schedule a visit for you to see your plant",
                image: feature_track,
              },
              {
                title: "certificate of appreciation",
                body:
                  "we honor you with certificates that you can additionally also opt to get printed and framed ",
                image: feature_cert,
              },
            ]}
          />
        </div>
      </div>
    </Section>
  );
}

export default FeaturesSection;
