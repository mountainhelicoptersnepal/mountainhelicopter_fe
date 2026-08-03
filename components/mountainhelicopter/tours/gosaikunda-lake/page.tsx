import BestTime from "./BestTime";
import CancellationPolicy from "./CancellationPolicy";
import CTA from "./Cta";
import FAQ from "./FAQ";
import FleetSection from "./FleetSection";
import FlightExperience from "./FlightExperience";
import Gallary from "./Gallary";
import HealthSafetyGuidelines from "./HealthSafetyGuidelines";
import Hero from "./Hero";
import InclusionsExclusions from "./InclusionsExclusions";
import Itinerary from "./Itinerary";
import OverviewSection from "./OverviewSection";
import PriceSection from "./PriceSection";
import Testimonials from "./Testimonial";
import WhatToPack from "./WhatToPack";
import WhyBookWithUs from "./WhyBookWithUs";

export default function EverestBaseCampPage() {
  return (
    <>
      <Hero />
      <OverviewSection />
      <Itinerary />
      <PriceSection />
      <Gallary />
      <FlightExperience />
      {/* <MajorPeaksSection /> */}
      <BestTime />
      <InclusionsExclusions />
      <WhatToPack />
      <HealthSafetyGuidelines />
      <FleetSection />
      <WhyBookWithUs />
      <CancellationPolicy />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
