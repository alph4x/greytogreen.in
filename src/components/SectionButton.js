import React from "react";

function SectionButton(props) {
  const {
    parentColor,
    size,
    state,
    fullWidth,
    // Passed to button element
    ...otherProps
  } = props;

  return (
    <button
      style={{
        backgroundColor: "#1e3a2b",
        border: "2px",
        borderRadius: "15px",
      }}
      className={
        "button" +
        (size ? ` is-${size}` : "") +
        (state ? ` is-${state}` : "") +
        (fullWidth ? " is-fullwidth" : "")
      }
      {...otherProps}
    >
      <span style={{ color: "#fff" }}>{props.children}</span>
    </button>
  );
}

export default SectionButton;
