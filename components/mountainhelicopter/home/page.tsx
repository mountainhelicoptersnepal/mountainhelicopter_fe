import React from "react";
import Hero from "./Hero";
import Story from "./Story";
import Rescue from "./Rescue";
import Blogs from "./Blogs";
import Cta from "./CTA";
import Faq from "./Faq";
import StateSection from "./HomeStats"

const page = () => {
  return (
    <div>
      <Hero />
      <StateSection/>
      <Story />
      <Rescue />
      <Blogs />
      <Faq />
      <Cta />
    
    </div>
  );
};

export default page;
