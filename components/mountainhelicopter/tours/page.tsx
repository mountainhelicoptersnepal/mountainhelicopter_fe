import React from "react";
import Hero from "./Hero";
import Testimonial from "./Testimonial";
import FAQ from "./FAQ";
import CTA from "./CTA";
import TourSection from "../home/TourSection";

const page = () => {
  return (
    <div>
      <Hero />
      <TourSection />
      <Testimonial />
      <FAQ />
      <CTA />
    </div>
  );
};

export default page;
