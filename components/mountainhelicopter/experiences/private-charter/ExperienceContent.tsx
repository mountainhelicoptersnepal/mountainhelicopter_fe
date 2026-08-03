import Story from "./Story";
import Itineraries from "./Itineraries";
import Journey from "./Journey";
import DesignProcess from "./DesignProcess";
import Comparison from "./Comparison";
import DesignedFor from "./DesignedFor";
import Essentials from "./Essentials";
import SeasonGuide from "./SeasonGuide";
import Testimonials from "./Testimonials";
import FAQ from "./Faq";
import BookingSidebar from "./BookingSidebar";

export default function ExperienceContent() {
  return (
    <section
      id="story"
      className="border-b border-[#E2E8F0] bg-[#F8FAFC]"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24 lg:px-16 lg:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-[7fr_5fr] lg:gap-16">
          <div className="min-w-0 space-y-20">
            <Story />
            <Itineraries />
            <Journey />
            <DesignProcess />
            <Comparison />
            <DesignedFor />
            <Essentials />
            <SeasonGuide />
            <Testimonials />
            <FAQ />
          </div>
          <div className="lg:sticky lg:top-28 lg:self-start">
            <BookingSidebar />
          </div>
        </div>
      </div>
    </section>
  );
}