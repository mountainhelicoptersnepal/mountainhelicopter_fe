import CTA from "./Cta";
import ExperienceContent from "./ExperienceContent";
import Hero from "./Hero";
import Highlights from "./Highlights";
import MobileBookingBar from "./MobileBookingBar";
import RelatedExperiences from "./RelatedExperiences";

export default function CelebrationsPage() {
  return (
    <>
      <Hero />
      <Highlights />
      <ExperienceContent />
      <RelatedExperiences />
      <CTA />
      <MobileBookingBar />
    </>
  );
}
