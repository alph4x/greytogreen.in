import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import SectionButton from "./SectionButton";
import { useRouter } from "./../util/router.js";

export default class HeroSection extends React.Component {
  constructor(props) {
    super(props);
    // const router = useRouter();
  }

  animateValue(id, start, end, duration) {
    var range = end - start;
    var current = start;
    var increment = end > start ? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function () {
      current += increment;
      obj.innerHTML = current;
      if (current == end) {
        clearInterval(timer);
      }
    }, stepTime);
  }

  componentDidMount() {
    //enter values for total trees planted here
    this.animateValue("treesNum", 0, 542, 2000);
  }

  render() {
    return (
      <Section color={this.props.color} size={this.props.size}>
        <div
          className="container"
          style={{ position: "relative", top: "-10px" }}
        >
          <SectionHeader
            title={this.props.title}
            greyTitle={this.props.greyTitle}
            lightgreenTitle={this.props.lightgreenTitle}
            darkgreenTitle={this.props.darkgreenTitle}
            subtitle={this.props.subtitle}
            centered={true}
            size={1}
          />
          <div className="buttons is-centered">
            <SectionButton
              parentColor={this.props.color}
              size="large"
              onClick={this.props.buttonOnClick}
            >
              {this.props.buttonText}
            </SectionButton>
          </div>
          <div
            className="DIY is-century"
            style={{ textAlign: "center", marginTop: "-25px" }}
          >
            <span
              style={{
                fontSize: "14px",
                textDecoration: "underline",
                cursor: "pointer",
              }}
              onClick={() => {
                window.location.href = "/diy";
              }}
            >
              OR DO IT YOURSELF
            </span>
          </div>
          <div
            id="trees-planted"
            style={{
              textAlign: "center",
              marginTop: "20px",
              marginBottom: "-25px",
            }}
            className="is-caslon darkgreen-font"
          >
            <span
              id="treesNum"
              style={{ fontSize: "36px", letterSpacing: "4px" }}
            ></span>
            <br></br>
            <span
              id="trees-planted-subtext"
              style={{
                position: "relative",
                top: "-5px",
                letterSpacing: "-1px",
              }}
            >
              TREES PLANTED
            </span>
          </div>
        </div>
      </Section>
    );
  }
}
