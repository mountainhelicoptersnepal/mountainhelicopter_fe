"use client";

import { useEffect, useState } from "react";
import {
  BriefcaseBusiness,
  CalendarDays,
  Clock3,
  Download,
  Mountain,
  ShieldCheck,
  Users,
} from "lucide-react";
import EverestTourSidebar from "./EverestTourSidebar";

const tabs = [
  { label: "Overview", href: "#overview" },
  { label: "Itinerary", href: "#itinerary" },
  { label: "Pricing", href: "#pricing" },
  { label: "Gallery", href: "#gallery" },
  { label: "Review", href: "#review" },
  { label: "FAQ", href: "#faq" },
];

const quickFacts = [
  {
    icon: ShieldCheck,
    label: "Safety",
    value: "Experienced High-Altitude Pilots",
  },
  {
    icon: Clock3,
    label: "Duration",
    value: "4 to 5 hours",
  },
  {
    icon: Mountain,
    label: "Max Altitude Reached",
    value: "5,545 metres / 18,192 feet (Kala Patthar)",
  },
  {
    icon: CalendarDays,
    label: "Finest Season",
    value: "Spring (March - May), Autumn (September - November)",
  },
  {
    icon: Users,
    label: "No Of Pax",
    value: "Up to 5 passengers per tour",
  },
  {
    icon: BriefcaseBusiness,
    label: "Baggage",
    value: "400 kg (passenger weight + baggage weight per helicopter)",
  },
];

const tourHighlights = [
  "Landing at Kala Patthar (5,545m), the closest point to Mount Everest reachable without climbing",
  "Close-up aerial views of Everest, Lhotse, Nuptse, Ama Dablam, and the Khumbu Glacier",
  "Route via Lukla, Namche Bazaar, Tengboche Monastery, and HEV",
  "20-to-30-minute breakfast stop at Hotel Everest View, the highest-placed hotel in the world",
  "Passenger insurance covered",
];

function smoothScrollTo(targetY: number, duration = 700) {
  const startY = window.scrollY;
  const distance = targetY - startY;
  const startTime = performance.now();

  const easeInOutCubic = (time: number) =>
    time < 0.5 ? 4 * time * time * time : 1 - Math.pow(-2 * time + 2, 3) / 2;

  const animateScroll = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeInOutCubic(progress);

    window.scrollTo(0, startY + distance * easedProgress);

    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  };

  requestAnimationFrame(animateScroll);
}

export default function OverviewSection() {
  const [activeTab, setActiveTab] = useState("");

  const handleTabClick = (href: string) => {
    setActiveTab(href);

    const section = document.querySelector(href);
    if (!section) return;

    const offset = 150;

    const sectionTop =
      section.getBoundingClientRect().top + window.scrollY - offset;

    smoothScrollTo(sectionTop);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = 170;
      let currentTab = "";

      tabs.forEach((tab) => {
        const section = document.querySelector(tab.href);

        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= offset && rect.bottom > offset) {
          currentTab = tab.href;
        }
      });

      setActiveTab(currentTab);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* MINI NAVBAR */}
      <section className="sticky top-[75px] z-40 border-b border-slate-200 bg-white">
        <div className="mx-auto flex min-h-[58px] max-w-7xl items-center px-6 md:px-12 lg:px-16">
          <nav className="mobile-tabs-scrollbar flex h-full w-full items-center gap-1 overflow-x-scroll pb-1 md:overflow-x-auto md:pb-0">
            {tabs.map((tab) => (
              <button
                key={tab.label}
                type="button"
                onClick={() => handleTabClick(tab.href)}
                className={`flex h-[58px] shrink-0 cursor-pointer items-center border-0 px-5 font-manrope !text-sm font-bold uppercase tracking-[0.14em] transition md:px-6 ${
                  activeTab === tab.href
                    ? "bg-[#f6b51f] text-[#073763]"
                    : "bg-white text-slate-500 hover:bg-slate-50 hover:text-[#073763]"
                }`}
              >
                {tab.label}
              </button>
            ))}

            <a
              href="/pdfs/itinerary_of_ebc.pdf"
              download="Everest-Kala-Patthar-HEV-Itinerary.pdf"
              className="group ml-1 flex h-10 shrink-0 items-center gap-2 rounded-sm bg-[#073763] px-4 font-manrope text-xs font-bold uppercase tracking-[0.1em] text-white shadow-[0_8px_20px_rgba(7,55,99,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f6b51f] hover:text-[#073763] md:ml-auto md:px-5"
            >
              <Download
                size={15}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />

              <span className="whitespace-nowrap">Itinerary PDF</span>
            </a>
          </nav>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section id="overview" className="scroll-mt-36 bg-[#fbfbfa]">
        <div className="mx-auto max-w-7xl px-6 py-8 md:px-12 md:py-12 lg:px-16">
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_320px] xl:grid-cols-[minmax(0,1fr)_340px]">
            <main className="min-w-0">
              {/* QUICK FACTS */}
              <section>
                <h2 className="font-manrope text-xs font-bold uppercase tracking-[0.24em] text-[#071f3d]">
                  Quick Facts
                </h2>

                <p className="mt-5 max-w-6xl font-manrope text-sm leading-7 text-[#687482]">
                  These are the trip facts for the Everest Mountain Overfly with
                  Kala Patthar Landing and Breakfast at Hotel Everest View,
                  including duration, maximum altitude, finest season, passenger
                  capacity, and baggage limits.
                </p>

                <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {quickFacts.map((fact) => {
                    const Icon = fact.icon;

                    return (
                      <article
                        key={fact.label}
                        className="flex min-h-[86px] items-center gap-5 rounded-lg border border-slate-200 bg-white px-5 py-4 shadow-[0_10px_28px_rgba(8,38,71,0.08)]"
                      >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-[#dbe7f2] bg-[#f2f7fc] text-[#0b4674]">
                          <Icon size={18} strokeWidth={1.8} />
                        </div>

                        <div>
                          <h4 className="font-manrope text-sm font-bold uppercase tracking-[0.08em] text-[#073763]">
                            {fact.label}
                          </h4>

                          <p className="mt-1 font-manrope text-xs font-bold leading-5 text-[#073763]">
                            {fact.value}
                          </p>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>

              {/* TOUR HIGHLIGHTS */}
              <section className="mt-14">
                <h2 className="font-manrope text-xs font-bold uppercase tracking-[0.24em] text-[#071f3d]">
                  Highlights
                </h2>

                <div className="mt-1 rounded-[28px] bg-white px-5 py-8 shadow-[0_18px_40px_rgba(8,38,71,0.08)] md:px-8 lg:px-9">
                  <div className="space-y-5">
                    {tourHighlights.map((item) => (
                      <article
                        key={item}
                        className="rounded-xl border border-slate-200 bg-white px-6 py-5 shadow-[0_8px_22px_rgba(8,38,71,0.06)]"
                      >
                        <span className="mb-3 block h-[3px] w-12 rounded-full bg-[#0e6695]" />

                        <h4 className="font-manrope text-base font-bold leading-6 text-[#1a2b3f]">
                          {item}
                        </h4>
                      </article>
                    ))}
                  </div>
                </div>
              </section>

              {/* ABOUT THIS FLIGHT */}
              <section className="mt-16 bg-white">
                <div className="mb-8">
                  <p className="mb-5 flex items-center gap-3 font-manrope text-[11px] font-bold uppercase tracking-[0.28em] text-[#e3a11e]">
                    <span className="h-px w-12 bg-[#e3a11e]" />
                    About This Flight
                  </p>

                  <h2 className="font-fraunces text-4xl font-semibold leading-[0.98] tracking-[0] text-[#061a3a] md:text-5xl">
                    Everest Mountain Overfly,
                    <br />
                    <span className="text-[#f2ae22]">
                      Kala Patthar and HEV.
                    </span>
                  </h2>
                </div>

                <div className="max-w-6xl font-manrope text-base leading-8 text-[#687482]">
                  <p>
                    The Everest Mountain Overfly with Kala Patthar Landing and
                    Breakfast at Hotel Everest View is the complete
                    Everest-by-air experience, a touchdown at Kala Patthar&apos;s
                    famous ridgeline at 5,545 metres, followed by breakfast with
                    a 360-degree Himalayan view, all completed in a single day
                    from Kathmandu. The flight carries passengers from Kathmandu
                    to Lukla and up to Kala Patthar, the same iconic viewpoint
                    that Everest Base Camp trekkers walk days to reach, before
                    descending to Hotel Everest View for a sit-down breakfast
                    and returning to Kathmandu.
                  </p>
                  <p className="mt-5">
                    The helicopter first flies from Kathmandu to Lukla, then
                    continues deep into the Khumbu Valley, passing over Namche
                    Bazaar and Tengboche as the terrain opens into the
                    high-altitude approach to the Everest region. From there,
                    the flight climbs close past Everest Base Camp and the
                    Khumbu Glacier before touching down at Kala Patthar for a
                    brief halt to take in the view and capture photos.
                  </p>
                  <p className="mt-5">
                    After the Kala Patthar landing, the helicopter flies to
                    Hotel Everest View at Syangboche, where a relaxed breakfast
                    stop is served with sweeping views of Everest, Ama Dablam
                    and Thamserku. From there, the flight retraces its route
                    through Lukla and back to Kathmandu.
                  </p>
                </div>
              </section>
            </main>

            <EverestTourSidebar />
          </div>
        </div>
      </section>

    </>
  );
}
