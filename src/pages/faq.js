import React from "react";
import FaqSection from "./../components/FaqSection";
import CtaSection from "./../components/CtaSection";
import { useRouter } from "./../util/router.js";

function FaqPage(props) {
  const router = useRouter();

  return (
    <>
      <FaqSection
        color="light"
        size="medium"
        title="Frequently Asked Questions"
        subtitle=""
      />
      <CtaSection
        color="lightergreen"
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

export default FaqPage;
