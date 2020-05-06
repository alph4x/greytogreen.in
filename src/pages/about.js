import React from "react";
import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import Features from "../components/Features";
import features_1 from "../assets/images/features-1.jpeg";
import features_2 from "../assets/images/features-2.jpeg";
import features_3 from "../assets/images/features-3.jpeg";
import features_4 from "../assets/images/features-4.jpeg";
import costBreakdown from "../assets/images/cost-breakdown.png";
import "./about.css";

export default class AboutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <Section color={this.props.color} size={this.props.size}>
          <SectionHeader title="about us" centered={true} size={3} />
          <div className="ourStory">
            <p className="is-century">
              On Diwali 2018, a singular article planted a seed (pun intended)
              in the mind of a very passionate student from New Delhi. The
              article spoke about the rise in pollution levels due to the
              bursting of crackers and enabled the reader to reason the sitch on
              the lack of trees in the capital. A phone call to a fellow
              dendrophile, a compassionate friend and multiple endless
              long-drives led to what we would now like to introduce as Grey To
              Green. A work in progress for a year and a half now, Grey To Green
              aims to provide a platform and service which will equip anybody
              and everybody to adopt trees with the click of a button. Let’s
              make this world a greener place. Together.
            </p>
          </div>
          <div className="costBreakdown">
            <p
              style={{ fontSize: "1.5rem", textAlign: "center" }}
              className="is-century"
            >
              where does the money go?
            </p>
            <img src={costBreakdown}></img>
          </div>
          <div className="ContactSection__container container">
            <div className="FeaturesSection__box box" id="featuresSection">
              <Features
                columns={2}
                items={[
                  {
                    title: "adopt with just a click",
                    body:
                      "we provde a user-friendly platform through which adopting & planting saplingssud is only a click of buttons away!",
                    image: features_1,
                  },
                  {
                    title: "we support local businesses",
                    body:
                      "our team procures saplings via local nurseries and gardeners",
                    image: features_2,
                  },
                  {
                    title: "we plant here",
                    body:
                      "residential areas, schools, colleges, barren lands are a few places we aim to make greener (among a myriad of others, of course) ",
                    image: features_3,
                  },
                  {
                    title: "team work is dream work",
                    body:
                      "we believe in our cadre of young ambassadors who help us connect with like-minded people and are determined to bring about a change",
                    image: features_4,
                  },
                ]}
              />
            </div>
          </div>
        </Section>
      </div>
    );
  }
}
