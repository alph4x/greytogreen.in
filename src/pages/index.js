import React from "react";
import HeroSection from "./../components/HeroSection";
import FeaturesSection from "./../components/FeaturesSection";
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
        size="large"
        title="as" //unfunctional as hardcoded inside the component
        subtitle="This landing page is perfect for showing off your awesome product and driving people to sign up for a paid plan."
        buttonText="ADOPT NOW"
        buttonOnClick={() => {
          router.push("/adopt");
        }}
      />
      <div className="is-pink" style={{ height: "1rem" }}></div>
      <FeaturesSection
        color="white"
        size="medium"
        title="Features"
        subtitle="All the features you need to move faster"
      />
      <ClientsSection
        color="light"
        size="medium"
        title="You're in good company"
        subtitle=""
      />
      <TestimonialsSection
        color="white"
        size="medium"
        title="Here's what people are saying"
        subtitle=""
      />
      <CtaSection
        color="primary"
        size="medium"
        title="Ready to get started?"
        subtitle=""
        buttonText="Get Started"
        buttonOnClick={() => {
          router.push("/pricing");
        }}
      />
    </>
  );
}

export default IndexPage;
