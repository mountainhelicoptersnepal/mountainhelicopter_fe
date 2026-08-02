import React from "react";
import Hero from "./Hero";
import Testimonial from "./Testimonial";
import FAQ from "./FAQ";
import CTA from "./CTA";

const page = () => {
  return (
    <div>
      <Hero />
      <Testimonial />
      <FAQ />
      <CTA />
    </div>
  );
};

export default page;
