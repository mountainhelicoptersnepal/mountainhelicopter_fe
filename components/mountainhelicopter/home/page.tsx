import React from "react";
import Hero from "./Hero";
import StatsSection from "./HomeStats"
import Cta from "./CTA";
import Faq from "./Faq";

const page = () => {
  return (
    <div>
      <Hero />
      <StatsSection/>
      <Cta />
      <Faq />
    </div>
  );
};

export default page;
