import React, { useState } from "react";
import "./FaqItem.scss";
import { useRouter, Router } from "./../util/router.js";

function FaqItem(props) {
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();

  return (
    <article
      className="FaqItem is-century"
      onClick={() => setExpanded(!expanded)}
    >
      <div id="faqTitle" className="title is-spaced is-4">
        <span className="FaqItem__icon icon is-size-5 has-text-primary">
          <i
            className={
              "fas" +
              (expanded ? " fa-minus" : "") +
              (!expanded ? " fa-plus" : "")
            }
          />
        </span>
        {props.question}
      </div>

      {expanded && (
        <div className="subtitle">
          {props.answer}{" "}
          <span
            className="faqLink"
            onClick={() => {
              router.push("/contact");
            }}
          >
            {props.link}
          </span>
        </div>
      )}
    </article>
  );
}

export default FaqItem;
