import React from "react";
import Hero from "./Hero";
import Story from "./Story";
import Rescue from "./Rescue";
import Blogs from "./Blogs";
import Cta from "./CTA";
import Faq from "./Faq";
import Stats from "./Stats";
import InsagramSection from "./InstagramSection";

const page = () => {
  return (
    <div>
      <Hero />
      <Stats />
      <Story />
      <Rescue />
      <InsagramSection />
      <Blogs />
      <Faq />
      <Cta />
    </div>
  );
};

export default page;
