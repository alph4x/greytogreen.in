import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import SectionButton from "./SectionButton";
import Facts from "./Facts";

function CtaSection(props) {
  return (
    <Section color="lightergreen" size={props.size}>
      <div className="columns">
        {/* <div className="container column">
          <Facts />
        </div> */}
        <div className="container column">
          <div className="columns is-vcentered has-text-centered-mobile is-centered is-variable is-8">
            <div className="column is-narrow">
              <SectionHeader
                title={props.title}
                subtitle={props.subtitle}
                size={3}
              />
            </div>
            <div className="column is-narrow">
              <SectionButton
                parentColor={props.color}
                size="large"
                onClick={props.buttonOnClick}
              >
                ADOPT NOW
              </SectionButton>
              <div className="DIY is-century" style={{ textAlign: "center" }}>
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
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default CtaSection;
