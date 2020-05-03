import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Faq from "./Faq";

function FaqSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <Faq
          items={[
            {
              question: "Who makes up the team?",
              answer:
                "Whether you donate to adopt one tree or 100, plant a tree yourself or simply spread the word, anybody who is trying to save the earth is a part of our team.",
            },
            {
              question: "How is the money spent?",
              answer:
                "For every tree adopted, 2/3 of the amount goes toward the procurement of the sapling from local indigenous nurseries and 1/3 goes towards the plantation and maintenance of the sapling.",
            },
            {
              question: "How do we know where & if the trees are planted?",
              answer:
                "With every donation the donor gets a unique tracking ID associated with their batch of saplings is mentioned. This code can then be used on our website to track the exact location of the planted sapling.",
            },
            {
              question: "How are the trees/saplings planted?",
              answer:
                "The trees are planted with the help of a team of dedicated ambassadors.",
              link: "Become an ambassador!",
            },
            {
              question: "Which trees do you plant?",
              answer:
                "Trees like jamun, arjun, peepal , neem and many more are planted.",
            },
            {
              question: "How can I get involved?",
              // answer: "Become an ambassador!",
              link: "Become an ambassador!",
            },
          ]}
        />
      </div>
    </Section>
  );
}

export default FaqSection;
