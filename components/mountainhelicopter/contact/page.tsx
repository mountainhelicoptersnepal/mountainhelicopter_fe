import React from "react";
import Hero from "./Hero";
import ReachDesk from "./ReachDesk";
import FindUs from "./FindUs";
import InquiryForm from "./InquiryForm";
import FAQ from "./FAQ";
import CTA from "./CTA";

const page = () => {
  return (
    <div>
      <Hero />
      <ReachDesk />
      <FindUs />
      <InquiryForm />
      <FAQ />
      <CTA />
    </div>
  );
};

export default page;
