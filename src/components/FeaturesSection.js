import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Features from "./Features";
import "./FeaturesSection.scss";
import features1 from "../assets/images/features-1.jpeg";
import features2 from "../assets/images/features-2.jpeg";
import features3 from "../assets/images/features-3.jpeg";
import features4 from "../assets/images/features-4.jpeg";

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
                  "we provde a user-friendly platform through which adopting & planting saplings is only a click of buttons away!",
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
      </div>
    </Section>
  );
}

export default FeaturesSection;
