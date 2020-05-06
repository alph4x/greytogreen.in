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
              question: "How do we know where & if the trees are planted?",
              answer:
                "with every batch of saplings you adopt, you get a unique Tracking ID associated with that particular batch. this code can then be used on our website to track the exact location of the planted sapling(s). we offer a service wherein, if you want to visit your saplings, we can arrange a meeting for you.",
            },

            {
              question: "How is the money spent?",
              answer:
                "from a total of ₹49, your payment is righteously being made use of for: procuring the saplings, transportation, plantation and maintenance. for a detailed perspective,",
              link: " click here to know more",
              route: "about",
            },
            {
              question: "Who makes up the team?",
              answer:
                "whether you adopt one tree or a hundred, whether you plant a tree yourself or simply help spread the word, anybody who is trying to save the earth is a part of our team",
            },
            {
              question: "who plants the trees?",
              answer:
                "you can choose to plant your sapling yourself or we can do it for you! the trees are planted with the help of our cadre of young ambassadors",
              link: " Become an ambassador!",
              route: "contact",
            },
            {
              question: "How do you ensure the safety of our planted saplings?",
              answer:
                "to combat this issue, we only plant your saplings in areas that have restricted access.",
            },
            {
              question: "Which trees do you plant?",
              answer:
                "jamun, peepal, neem and arjun to name a few among a myriad of others",
            },
            {
              question: "How can I get involved?",
              link: " Become an ambassador!",
              route: "contact",
            },
          ]}
        />
      </div>
    </Section>
  );
}

export default FaqSection;
