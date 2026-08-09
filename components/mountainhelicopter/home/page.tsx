import React from "react";
import Hero from "./Hero";
import Story from "./Story";
import Rescue from "./Rescue";
import Blogs from "./Blogs";
import Cta from "./CTA";
import FAQ from "./FAQ";
import Stats from "./Stats";
import Testimonial from "./Testimonial";
import TourSection from "./TourSection";
import InstagramSection from "./InstagramSection";

const page = () => {
  return (
    <div>
      <Hero />
      <Stats />
      <TourSection />
      <Story />
      <Rescue />
      <Testimonial />
      {/* <InstagramSection /> */}
      <Blogs />
      <FAQ />
      <Cta />
    </div>
  );
};

export default page;
