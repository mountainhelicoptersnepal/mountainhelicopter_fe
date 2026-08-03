import type { Metadata } from "next";
import Header from "@/components/mountainhelicopter/ads/lukla/Header";
import Hero from "@/components/mountainhelicopter/ads/lukla/Hero";
import RouteBoard from "@/components/mountainhelicopter/ads/lukla/RouteBoard";
import DailyFlights from "@/components/mountainhelicopter/ads/lukla/DailyFlights";
import EverestTours from "@/components/mountainhelicopter/ads/lukla/EverestTours";
import Gallery from "@/components/mountainhelicopter/ads/lukla/Gallery";
import Comparison from "@/components/mountainhelicopter/ads/lukla/Comparison";
import Steps from "@/components/mountainhelicopter/ads/lukla/Steps";
import SeptemberBand from "@/components/mountainhelicopter/ads/lukla/SeptemberBand";
import Safety from "@/components/mountainhelicopter/ads/lukla/Safety";
import FAQSection from "@/components/mountainhelicopter/ads/lukla/FAQSection";
import ContactStrip from "@/components/mountainhelicopter/ads/lukla/ContactStrip";
import BottomBook from "@/components/mountainhelicopter/ads/lukla/BottomBook";
import Footer from "@/components/mountainhelicopter/ads/lukla/Footer";
import FloatingCta from "@/components/mountainhelicopter/ads/lukla/FloatingCta";
import { FAQS } from "@/components/mountainhelicopter/ads/lukla/constants";

const TITLE =
  "Kathmandu to Lukla Helicopter | Everyday Departure | Everest Heli Tours | Mountain Helicopters Nepal";
const DESCRIPTION =
  "Everyday helicopter departures Kathmandu to Lukla and Lukla to Kathmandu. Gorak Shep pickup after your EBC trek. Everest heli tours with Kala Patthar landing, breakfast at Hotel Everest View, and Gokyo Lake overfly. CAAN certified, since 2009.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title:
      "Kathmandu to Lukla Helicopter | Everyday Departure | Mountain Helicopters Nepal",
    description:
      "Fly the Everest Gateway without delays. Daily Kathmandu to Lukla helicopter departures, Gorak Shep pickups, and Everest tours with Kala Patthar landing.",
    type: "website",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function LuklaLandingPage() {
  return (
    <div id="top" className="bg-white text-[17px] leading-[1.6] text-[#12233F]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Header />

      <main>
        <Hero />
        <RouteBoard />
        <DailyFlights />
        <EverestTours />
        <Gallery />
        <Comparison />
        <Steps />
        <SeptemberBand />
        <Safety />
        <FAQSection />
        <ContactStrip />
        <BottomBook />
      </main>

      <Footer />
      <FloatingCta />
    </div>
  );
}
