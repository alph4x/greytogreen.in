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
        title="Ready to make an impact?"
        subtitle=""
        buttonText="Adopt Now"
        buttonOnClick={() => {
          router.push("/adopt");
        }}
      />
    </>
  );
}

export default FaqPage;
