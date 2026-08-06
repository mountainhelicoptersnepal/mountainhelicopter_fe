import BestTime from "./BestTime";
// import CancellationPolicy from "./CancellationPolicy";
import CTA from "./Cta";
import FAQ from "./FAQ";
// import FleetSection from "./FleetSection";
import ForWhomSection from "./ForWhomSection";
import FlightHighlights from "./FlightHighlights";
import FlightExperience from "./FlightExperience";
import Gallary from "./Gallary";
import HealthSafetyGuidelines from "./HealthSafetyGuidelines";
import Hero from "./Hero";
import InclusionsExclusions from "./InclusionsExclusions";
import Itinerary from "./Itinerary";
import LandingSafetySnapshot from "./LandingSafetySnapshot";
import OverviewSection from "./OverviewSection";
import PriceSection from "./PriceSection";
// import WhatToPack from "./WhatToPack";
import WhyEverestTour from "./WhyEverestTour";
import WhyBookWithUs from "./WhyBookWithUs";

export default function EverestBaseCampPage() {
  return (
    <>
      <Hero />
      <OverviewSection />
      <FlightHighlights />
      <WhyEverestTour />
      <FlightExperience />
      <ForWhomSection />
      <Itinerary />
      <Gallary />
      <InclusionsExclusions />
      <PriceSection />
      <BestTime />
      <LandingSafetySnapshot />
      {/* <CancellationPolicy /> */}
      <HealthSafetyGuidelines />
      <WhyBookWithUs />
      <FAQ />
      <CTA />

      {/* Unused in the redesigned order */}
      {/* <WhatToPack /> */}
      {/* <FleetSection /> */}
      {/* <MajorPeaksSection /> */}
    </>
  );
}
