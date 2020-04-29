import React from "react";
import FaqItem from "./FaqItem";

function Faq(props) {
  return (
    <>
      {props.items.map((item, index) => (
        <FaqItem
          link={item.link}
          question={item.question}
          answer={item.answer}
          key={index}
        />
      ))}
    </>
  );
}

export default Faq;
