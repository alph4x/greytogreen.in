import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import SectionButton from "./SectionButton";
import { useRouter } from "./../util/router.js";
import Axios from "axios";

export default class HeroSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
    Axios.get("http://localhost:4500/getUserDetails/totalPlanted").then(
      (res) => {
        this.setState({ totalTreesPlanted: res.data.totalTreesPlanted });
        this.animateValue("treesNum", 0, this.state.totalTreesPlanted, 2000);
      }
    );
    //enter values for total trees planted here
    setTimeout(() => {}, 2000);
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
            style={{ textAlign: "center", marginTop: "-20px" }}
          >
            <span
              style={{
                fontSize: "14px",
                textDecoration: "underline",
                cursor: "pointer",
                textTransform: "uppercase",
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
              textTransform: "uppercase",
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
