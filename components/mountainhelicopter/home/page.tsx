import React from "react";
import Hero from "./Hero";
import Blogs from "./Blogs";
import Cta from "./CTA";
import Faq from "./Faq";

const page = () => {
  return (
    <div>
      <Hero />
      <Blogs />
      <Cta />
      <Faq />
    </div>
  );
};

export default page;
