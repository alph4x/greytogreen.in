import React from "react";
import "./SectionHeader.scss";

function SectionHeader(props) {
  return (
    <>
      {(props.title || props.subtitle) && (
        <header
          className={
            "SectionHeader__header" + (props.centered ? " is-centered" : "")
          }
        >
          <h1
            className={
              "title is-spaced has-text-weight-bold" +
              (props.size ? ` is-${props.size}` : "") +
              (props.size === 1 ? " is-size-2-mobile" : "") +
              " is-century"
            }
          >
            {props.title}
            <span className="grey-font">{props.greyTitle}</span>
            <span className="lightgreen-font">{props.lightgreenTitle}</span>
            <span className="darkgreen-font">{props.darkgreenTitle}</span>
          </h1>

          {props.subtitle && (
            <p
              className={
                "subtitle" + (props.size > 4 ? " is-6" : "") + " is-century"
              }
            >
              {props.subtitle}
            </p>
          )}
        </header>
      )}
    </>
  );
}

export default SectionHeader;
