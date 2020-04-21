import React from "react";
import HeroSection from "./../components/HeroSection";
import FeaturesSection from "./../components/FeaturesSection";
import FactsLeaderboard from "./../components/FactsLeaderboard";
import ClientsSection from "./../components/ClientsSection";
import TestimonialsSection from "./../components/TestimonialsSection";
import CtaSection from "./../components/CtaSection";
import { useRouter } from "./../util/router.js";

function IndexPage(props) {
  const router = useRouter();

  return (
    <>
      <HeroSection
        color="lightergreen"
        size="medium"
        title=""
        greyTitle="grey"
        lightgreenTitle="to"
        darkgreenTitle="green"
        subtitle="planting for a greener future"
        buttonText="ADOPT NOW"
        buttonOnClick={() => {
          router.push("/adopt");
        }}
      />
      <div className="is-pink" style={{ height: "1rem" }}></div>
      <FeaturesSection
        color="white"
        size="medium"
        title="in a nutshell"
        subtitle="here's an overall view of the functions we perform and the services we offer"
      />
      <FactsLeaderboard />
      {/* <ClientsSection
        color="light"
        size="medium"
        title="You're in good company"
        subtitle=""
      /> */}
      {/* <TestimonialsSection
        color="white"
        size="medium"
        title="Here's what people are saying"
        subtitle=""
      /> */}
      <CtaSection
        color="lightergreen"
        size="medium"
        title="Ready to make an impact?"
        subtitle=""
        buttonText="Adopt now"
        buttonOnClick={() => {
          router.push("/adopt");
        }}
      />
    </>
  );
}

export default IndexPage;
