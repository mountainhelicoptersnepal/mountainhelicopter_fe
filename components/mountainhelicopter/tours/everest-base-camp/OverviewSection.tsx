"use client";

import { useEffect, useState } from "react";
import {
  Clock3,
  Download,
  Gauge,
  Hotel,
  MapPin,
  Mountain,
  Plane,
  Sunrise,
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
    label: "Duration",
    value: "4–5 hrs",
  },
  {
    label: "Departure Time",
    value: "5:30 am – 6:30 am",
  },
  {
    label: "Departure Point",
    value: "Tribhuvan International Airport Domestic Terminal",
  },
  {
    label: "Return Point",
    value: "Tribhuvan International Airport, Kathmandu",
  },
  {
    label: "Max Altitude Reached",
    value: "5,545 m / 18,192 ft (Kala Patthar)",
  },
  {
    label: "EBC Flight Duration",
    value: "5.5 hrs / 175 km & Everest Base Camp",
  },
  {
    label: "Helicopter Type",
    value: "Airbus H125 (AS350 B3e), CAAN-certified",
  },
  {
    label: "Helicopter Capacity",
    value: "Up to 4 passengers + 2 pilots",
  },
  {
    label: "Difficulty Level",
    value: "Easy, no physical fitness required",
  },
  {
    label: "Minimum Recommended Age",
    value: "5 years",
  },
  {
    label: "Best Season",
    value: "March–May and September–November",
  },
  {
    label: "Shared Tour Price",
    value: "From USD 1,400 per person",
  },
  {
    label: "Private Charter Price",
    value: "From USD 5,400",
  },
  {
    label: "Ideal Time",
    value: "Early Tour Operation in one morning",
  },
  {
    label: "Meal Included",
    value: "Breakfast at Hotel Everest View",
  },
  {
    label: "Permit Included",
    value: "Yes, for Sagarmatha National Park",
  },
  {
    label: "Hotel Pickup",
    value: "Yes, included from your Kathmandu hotel",
  },
  {
    label: "Travel Insurance",
    value: "Required, minimum 6,000 m altitude coverage",
  },
];

const tourHighlights = [
  {
    icon: Mountain,
    title: "Everest Base Camp Flyover",
    description:
      "Fly above the traditional trail from Lukla and witness the Everest region from the air.",
  },
  {
    icon: MapPin,
    title: "Kala Patthar Landing",
    description:
      "Land near one of the best viewpoints for clear views of Mount Everest and the surrounding peaks.",
  },
  {
    icon: Hotel,
    title: "Hotel Everest View Breakfast",
    description:
      "Enjoy breakfast with panoramic Himalayan views at one of the world's highest-altitude hotels.",
  },
  {
    icon: Sunrise,
    title: "Khumbu Icefall From Above",
    description:
      "See the Khumbu Icefall, glaciers and high-altitude valleys from a completely different perspective.",
  },
  {
    icon: Mountain,
    title: "Eight 8,000m+ Peaks",
    description:
      "See Everest, Lhotse, Makalu, Cho Oyu, Ama Dablam, Pumori and other Himalayan giants.",
  },
  {
    icon: Plane,
    title: "Lukla Airstrip",
    description:
      "Fly past the famous Tenzing-Hillary Airport, one of the world's most remarkable mountain airstrips.",
  },
  {
    icon: Gauge,
    title: "Sherpa Villages Aerial",
    description:
      "View Namche Bazaar, Tengboche, Pheriche and other Sherpa settlements from above.",
  },
  {
    icon: Clock3,
    title: "Sunrise Over the Khumbu",
    description:
      "Early departures provide beautiful morning light over the Himalayan valleys and peaks.",
  },
];

const designedForItems = [
  {
    title: "Travellers on Short Notice",
    description:
      "A short trip to Nepal isn't enough to trek. It is enough to fly. The helicopter departs at dawn from Kathmandu and returns in just 4 to 5 hours. This is the tour designed for tight itineraries and tighter schedules.",
  },
  {
    title: "Families and Multi-Generational Groups",
    description:
      "No fitness requirement. No acclimatization. No age limit. Children aged 3 and above fly, and so do grandparents. The lap of Mount Everest is not reserved for the young and strong. It is reserved for those who book.",
  },
  {
    title: "Creatives & Photographers",
    description:
      "Charter privately for full aircraft control, unobstructed window angles, and extended ground time at 5,545 metres. The amphitheatre of the Khumbu giants lit by first light is not a backdrop. It is the subject. Ask about door-off configuration.",
  },
  {
    title: "Travellers With Mobility Limitations",
    description:
      "Knee injuries. Joint conditions. Wheelchair users. Post-surgery recovery. The two-week trek is not an option, but the destination still is. The helicopter removes every physical barrier between Kathmandu and the foot of Mount Everest.",
  },
];

function smoothScrollTo(targetY: number, duration = 700) {
  const startY = window.scrollY;
  const distance = targetY - startY;
  const startTime = performance.now();

  const easeInOutCubic = (time: number) =>
    time < 0.5
      ? 4 * time * time * time
      : 1 - Math.pow(-2 * time + 2, 3) / 2;

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
          <nav className="flex h-full w-full items-center gap-1 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.label}
                type="button"
                onClick={() => handleTabClick(tab.href)}
                className={`flex h-[58px] shrink-0 cursor-pointer items-center border-0 px-5 font-manrope text-xs font-bold uppercase tracking-[0.14em] transition md:px-6 ${
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
              download="Everest-Base-Camp-Itinerary.pdf"
              className="group ml-1 flex h-10 shrink-0 items-center gap-2 rounded-sm bg-[#073763] px-4 font-manrope text-xs font-bold uppercase tracking-[0.1em] text-white shadow-[0_8px_20px_rgba(7,55,99,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f6b51f] hover:text-[#073763] md:px-5"
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
      <section
        id="overview"
        className="scroll-mt-36 bg-[#fbfbfa]"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 py-16 md:py-24 lg:py-28">
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_320px] xl:grid-cols-[minmax(0,1fr)_340px]">
            {/* LEFT CONTENT */}
            <main className="min-w-0">
              <div className="mb-7">
                <p className="mb-4 flex items-center gap-3 font-manrope text-[11px] font-bold uppercase tracking-[0.24em] text-[#ce8e17]">
                  <span className="h-px w-7 bg-[#ce8e17]" />
                  About This Flight
                </p>

                <h2 className="font-fraunces text-3xl font-semibold leading-[1.12] tracking-[-0.02em] text-[#0a3158] md:text-4xl">
                  Helicopter Tour to,
                  <br />
                  <span className="text-[#dfa11e]">
                    Everest Base Camp.
                  </span>
                </h2>
              </div>

              <div className="space-y-4 font-manrope text-sm leading-7 text-[#657180]">
                <p>
                  The Everest Base Camp Helicopter Tour is not just an
                  experience of flying; it is an entire experience of being in
                  the presence of the highest peak on earth. The helicopter
                  tour to Everest Base Camp begins early in the morning, where
                  the helicopter takes off from the Tribhuvan Airport in
                  Kathmandu and flies towards the north-east, where it tours
                  over the beautiful scenery, peaks of Khumbu region.
                </p>

                <p>
                  In no time of taking off, in around ninety minutes the
                  helicopter will be viewing the beautiful Khumbu glacier and
                  its popular viewpoint, scenic Lhotse and the dreamy Mt.
                  Everest. The helicopter will land at the hotel mountain view.
                  Here at the hotel mountain view Everest Base Camp Helicopter
                  Tour with landing is an excellent opportunity for travellers
                  who cannot go trekking and want to feel the thrill of
                  standing at the lap of Mt. Everest.
                </p>

                <p>
                  Everest. After that the helicopter will land at an altitude of
                  5,545 m above sea level at Kala Patthar, and the first picture
                  every passenger will see is the closest view of Mt. Everest
                  possible without climbing it.
                </p>
              </div>

              {/* QUICK FACTS */}
              <section className="mt-9">
                <h3 className="font-fraunces text-xl font-semibold text-[#0a3158]">
                  Quick Facts
                </h3>

                <p className="mt-2 max-w-4xl font-manrope text-xs leading-6 text-[#7b8490]">
                  These are the trip facts of the helicopter tour to Everest
                  Base Camp, which makes the helicopter trip to Everest Base
                  Camp more predictable of what we are offering you in your
                  journey.
                </p>

                <div className="mt-5 overflow-hidden rounded-xl bg-[#062b55] shadow-[0_15px_35px_rgba(6,43,85,0.12)]">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4">
                    {quickFacts.map((fact, index) => (
                      <div
                        key={`${fact.label}-${index}`}
                        className="border-b border-white/10 p-5 sm:border-r"
                      >
                        <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.16em] text-white/50">
                          {fact.label}
                        </p>

                        <p className="mt-2 font-manrope text-xs font-semibold leading-5 text-white">
                          {fact.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* TOUR HIGHLIGHTS */}
              <section className="mt-8">
                <div className="grid gap-4 md:grid-cols-2">
                  {tourHighlights.map((item) => {
                    const Icon = item.icon;

                    return (
                      <article
                        key={item.title}
                        className="group rounded-xl border border-slate-200/80 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#dca121]/50 hover:shadow-[0_16px_35px_rgba(8,46,82,0.08)]"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#f4f7fa] text-[#0a4f82] transition group-hover:bg-[#fff5d9] group-hover:text-[#c98d15]">
                            <Icon size={16} strokeWidth={1.8} />
                          </div>

                          <div>
                            <h4 className="font-manrope text-xs font-bold uppercase tracking-[0.08em] text-[#0a3158]">
                              {item.title}
                            </h4>

                            <p className="mt-2 font-manrope text-xs leading-5 text-[#7a8490]">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            </main>

            {/* SIDEBAR */}
            <EverestTourSidebar />
          </div>
        </div>
      </section>

      {/* WHO THIS FLIGHT IS FOR */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 py-16 md:py-24 lg:py-28">
          <div className="max-w-7xl">
            <p className="flex items-center gap-3 font-manrope text-xs font-bold uppercase tracking-[0.22em] text-[#d89b1d]">
              <span className="h-px w-7 bg-[#d89b1d]" />
              Who This Flight Is For
            </p>

            <h2 className="mt-4 font-fraunces text-3xl font-semibold leading-[1.08] tracking-[-0.02em] text-[#092c52] md:text-4xl">
              Who this flight is
              <br />
              <span className="text-[#e3a62a]">
                designed directly for.
              </span>
            </h2>

            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white">
              {designedForItems.map((item, index) => (
                <article
                  key={item.title}
                  className={`px-5 py-6 md:px-7 ${
                    index !== designedForItems.length - 1
                      ? "border-b border-slate-200"
                      : ""
                  }`}
                >
                  <h3 className="font-manrope text-xs font-bold uppercase tracking-[0.13em] text-[#0b3d6b]">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-4xl font-manrope text-sm leading-7 text-slate-500">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROUTE ELEVATION SECTION */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 py-16 md:py-24 lg:py-28">
          <div className="overflow-hidden rounded-[28px] bg-[#061c38] px-5 py-10 md:px-10 md:py-12 lg:px-14">
            <div className="text-center">
              <p className="flex items-center justify-center gap-3 font-manrope text-xs font-bold uppercase tracking-[0.22em] text-[#e1a51f]">
                <span className="h-px w-7 bg-[#e1a51f]" />
                The Route
              </p>

              <h2 className="mt-4 font-fraunces text-3xl font-semibold leading-tight text-white md:text-4xl">
                Kathmandu to Kala Patthar,{" "}
                <span className="text-[#e4ab25]">plotted.</span>
              </h2>
            </div>

            <div className="mt-10 overflow-x-auto">
              <div className="min-w-[760px]">
                <svg
                  viewBox="0 0 1100 250"
                  className="h-auto w-full"
                  role="img"
                  aria-label="Elevation profile from Kathmandu to Kala Patthar and back"
                >
                  <defs>
                    <linearGradient
                      id="routeArea"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#f2b321"
                        stopOpacity="0.18"
                      />
                      <stop
                        offset="100%"
                        stopColor="#f2b321"
                        stopOpacity="0"
                      />
                    </linearGradient>

                    <filter
                      id="pointGlow"
                      x="-50%"
                      y="-50%"
                      width="200%"
                      height="200%"
                    >
                      <feGaussianBlur stdDeviation="5" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* HORIZONTAL GRID */}
                  {[35, 75, 115, 155, 195, 235].map((y) => (
                    <line
                      key={y}
                      x1="65"
                      y1={y}
                      x2="1060"
                      y2={y}
                      stroke="#24405d"
                      strokeWidth="1"
                      opacity="0.55"
                    />
                  ))}

                  {/* ELEVATION LABELS */}
                  <g
                    fill="#7f91a6"
                    fontFamily="Manrope, sans-serif"
                    fontSize="10"
                  >
                    <text x="28" y="39">
                      6k m
                    </text>
                    <text x="28" y="79">
                      5k m
                    </text>
                    <text x="28" y="119">
                      4k m
                    </text>
                    <text x="28" y="159">
                      3k m
                    </text>
                    <text x="28" y="199">
                      2k m
                    </text>
                    <text x="28" y="239">
                      1k m
                    </text>
                  </g>

                  {/* AREA */}
                  <path
                    d="M65 195
                       L225 140
                       L390 38
                       L610 105
                       L920 142
                       L1060 195
                       L1060 235
                       L65 235 Z"
                    fill="url(#routeArea)"
                  />

                  {/* ROUTE LINE */}
                  <path
                    d="M65 195
                       L225 140
                       L390 38
                       L610 105
                       L920 142
                       L1060 195"
                    fill="none"
                    stroke="#f2b321"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* KATHMANDU */}
                  <circle
                    cx="65"
                    cy="195"
                    r="12"
                    fill="#f2b321"
                    opacity="0.12"
                    filter="url(#pointGlow)"
                  />
                  <circle cx="65" cy="195" r="6" fill="#f2b321" />

                  <text
                    x="42"
                    y="182"
                    fill="#ffffff"
                    fontFamily="Manrope, sans-serif"
                    fontSize="9"
                    fontWeight="700"
                  >
                    KTM 1,400m
                  </text>

                  {/* LUKLA */}
                  <circle
                    cx="225"
                    cy="140"
                    r="12"
                    fill="#f2b321"
                    opacity="0.12"
                    filter="url(#pointGlow)"
                  />
                  <circle cx="225" cy="140" r="6" fill="#f2b321" />

                  <text
                    x="207"
                    y="126"
                    fill="#ffffff"
                    fontFamily="Manrope, sans-serif"
                    fontSize="9"
                    fontWeight="700"
                  >
                    LUKLA
                  </text>

                  <text
                    x="214"
                    y="136"
                    fill="#7f91a6"
                    fontFamily="Manrope, sans-serif"
                    fontSize="8"
                  >
                    2,860m
                  </text>

                  {/* KALA PATTHAR */}
                  <circle
                    cx="390"
                    cy="38"
                    r="14"
                    fill="#e34d55"
                    opacity="0.14"
                    filter="url(#pointGlow)"
                  />
                  <circle cx="390" cy="38" r="7" fill="#e34d55" />

                  <text
                    x="360"
                    y="21"
                    fill="#ffffff"
                    fontFamily="Manrope, sans-serif"
                    fontSize="9"
                    fontWeight="700"
                  >
                    KALA PATTHAR
                  </text>

                  <text
                    x="378"
                    y="31"
                    fill="#7f91a6"
                    fontFamily="Manrope, sans-serif"
                    fontSize="8"
                  >
                    5,545m
                  </text>

                  {/* HOTEL EVEREST VIEW */}
                  <circle
                    cx="610"
                    cy="105"
                    r="12"
                    fill="#f2b321"
                    opacity="0.12"
                    filter="url(#pointGlow)"
                  />
                  <circle cx="610" cy="105" r="6" fill="#f2b321" />

                  <text
                    x="600"
                    y="91"
                    fill="#ffffff"
                    fontFamily="Manrope, sans-serif"
                    fontSize="9"
                    fontWeight="700"
                  >
                    HEV
                  </text>

                  <text
                    x="594"
                    y="101"
                    fill="#7f91a6"
                    fontFamily="Manrope, sans-serif"
                    fontSize="8"
                  >
                    3,880m
                  </text>

                  {/* RETURN */}
                  <circle
                    cx="1060"
                    cy="195"
                    r="12"
                    fill="#f2b321"
                    opacity="0.12"
                    filter="url(#pointGlow)"
                  />
                  <circle cx="1060" cy="195" r="6" fill="#f2b321" />

                  <text
                    x="1038"
                    y="182"
                    fill="#ffffff"
                    fontFamily="Manrope, sans-serif"
                    fontSize="9"
                    fontWeight="700"
                  >
                    KTM 1,400m
                  </text>
                </svg>
              </div>
            </div>

            <p className="mt-5 font-manrope text-xs leading-6 text-[#7c8da1]">
              Elevation profile: Kathmandu (1,400 m) to Kala Patthar (5,545 m)
              and back, plotted against elapsed time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
