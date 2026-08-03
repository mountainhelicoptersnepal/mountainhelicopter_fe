import BestTime from "./BestTime";
import CancellationPolicy from "./CancellationPolicy";
import CTA from "./Cta";
import FAQ from "./FAQ";
import FleetSection from "./FleetSection";
import FlightExperience from "./FlightExperience";
import HealthSafetyGuidelines from "./HealthSafetyGuidelines";
import Hero from "./Hero";
import InclusionsExclusions from "./InclusionsExclusions";
import Itinerary from "./Itinerary";
import OverviewSection from "./OverviewSection";
import PriceSection from "./PriceSection";
import WhatToPack from "./WhatToPack";
import WhyBookWithUs from "./WhyBookWithUs";

export default function MuktinathPilgrimagePage() {
  return (
    <>
      <Hero />
      <OverviewSection />
      <Itinerary />
      <PriceSection />
      <FlightExperience />
      <BestTime />
      <InclusionsExclusions />
      <WhatToPack />
      <HealthSafetyGuidelines />
      <FleetSection />
      <WhyBookWithUs />
      <CancellationPolicy />
      <FAQ />
      <CTA />
    </>
  );
}
