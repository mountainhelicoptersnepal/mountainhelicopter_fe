"use client";

import { useEffect, useState } from "react";
import {
  Clock3,
  Compass,
  Download,
  Gauge,
  Hotel,
  MapPin,
  Mountain,
  Plane,
  Sunrise
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
      label: "PRIMARY DEPARTURE POINT",
      value: "Pokhara Airport Helipad, Pokhara",
    },
    {
      label: "SECONDARY DEPARTURE POINT",
      value: "Tribhuvan International Airport Domestic Terminal, Kathmandu",
    },
    {
      label: "FLIGHT DURATION FROM POKHARA",
      value: "Approximately 20–25 minutes each way",
    },
    {
      label: "FLIGHT DURATION FROM KATHMANDU",
      value: "Approximately 50–60 minutes each way",
    },
    {
      label: "LANDING TIME AT ABC",
      value: "Approximately 30–45 minutes for photography and breakfast",
    },
    {
      label: "HELICOPTER MODEL",
      value: "CAAN-certified Airbus H125 (AS350 B3e)",
    },
    {
      label: "HELICOPTER CAPACITY",
      value: "Up to 5 passengers plus 1 pilot",
    },
    {
      label: "SHARED TOUR COST FROM POKHARA",
      value: "From USD 340–480 per person",
    },
    {
      label: "PRIVATE CHARTER FROM POKHARA",
      value: "From USD 1,980–2,400 for the full helicopter",
    },
    {
      label: "PRIVATE CHARTER FROM KATHMANDU",
      value: "From USD 3,000–3,500 for the full helicopter",
    },
    {
      label: "BEST SEASON",
      value: "March–May and September–November",
    },
    {
      label: "REQUIRED PERMIT",
      value: "Annapurna Conservation Area Permit; TIMS card not required",
    },
];

const tourHighlights = [
  {
    icon: Mountain,
    title: "Machhapuchhre – Fishtail Peak",
    description:
      "Fly close to the distinctive 6,993-metre summit of Machhapuchhre, a sacred mountain that dominates the skyline above Pokhara and the Annapurna Sanctuary.",
  },
  {
    icon: Mountain,
    title: "Annapurna Sanctuary Amphitheatre",
    description:
      "Enter the natural mountain amphitheatre formed by Annapurna I, Annapurna South, Gangapurna, Hiunchuli, Machhapuchhre and the surrounding Himalayan walls.",
  },
  {
    icon: Sunrise,
    title: "Pokhara’s Lakes From Above",
    description:
      "Enjoy aerial views of Phewa Lake, Begnas Lake and Rupa Lake as the helicopter climbs north from the Pokhara Valley toward the Annapurna region.",
  },
  {
    icon: MapPin,
    title: "Gurung and Magar Villages",
    description:
      "See the Khumbu Icefall, glaciers and high-altitude valleys from a completely different perspective.",
  },
  {
    icon: Gauge,
    title: "Seti Gorge and Modi Valley",
    description:
      "Fly above the Seti River Gorge and follow the Modi Khola Valley through forested hills, narrow glacial corridors and cascading waterfalls.",
  },
  {
    icon: Hotel,
    title: "Breakfast at 4,130 Metres",
    description:
      "Enjoy a hot breakfast at an Annapurna Base Camp lodge while facing the immense mountain walls of Annapurna I and the surrounding sanctuary.",
  },
  
];

const designedForItems = [
  {
    title: "Travellers on Short Notice",
    description:
      "One day in Pokhara is not enough to complete the traditional Annapurna Base Camp trek, but it is enough to fly. The helicopter departs early in the morning, reaches the sanctuary within minutes and returns before the day is over. This experience is designed for travellers with limited time and tightly planned itineraries.",
  },
  {
    title: "Families and Multi-Generational Groups",
    description:
      "No trekking experience or advanced physical fitness is required. Children aged three and above, parents and grandparents can experience the Annapurna Sanctuary together without carrying heavy luggage or spending several nights in mountain teahouses.",
  },
  {
    title: "Creatives & Photographers",
    description:
      "A private charter provides greater control over timing, cabin positioning and photography opportunities. Capture the Annapurna amphitheatre in the early-morning light through spacious windows, with approximately 30 to 45 minutes available on the ground at 4,130 metres.",
  },
  {
    title: "Travellers With Mobility Limitations",
    description:
      "Knee injuries, joint conditions, limited mobility or post-surgery recovery may make the traditional multi-day trek impractical. The helicopter removes most of the physical barriers between Pokhara and Annapurna Base Camp while still allowing passengers to experience the sanctuary.",
  },
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
              href="/pdfs/itinerary_of_abc.pdf"
              download="Annapurna-Base-Camp-Itinerary.pdf"
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
                  <span className="text-[#dfa11e]">Annapurna Base Camp.</span>
                </h2>
              </div>

              <div className="space-y-4 font-manrope text-sm leading-7 text-[#657180]">
                <p>
                 The Annapurna Base Camp Helicopter Tour is considered one of the best day trips in Nepal because it offers you to explore the beauty of the Annapurna Sanctuary (4,130 m) within a day without undergoing the physical burden of a 10-day trek. At Mountain Helicopter Tour, we arrange this tour every day in our CAAN-licensed Airbus H125 helicopters from the lakeside city Pokhara and even from the capital city Kathmandu.
                </p>

                <p>
                  The helicopter flies along the north-facing range of the Himalayan Mountains, close to the famous Mt. Machapuchare (Fishtail, 6,993 m), before making its stop at the glacial Annapurna Base Camp located at 4,130 m. Unlike other tour operators who will just make their landing, take some pictures of you in ten minutes, and return immediately, we will offer a landing period of 30-45 minutes during which you can enjoy hot tea/coffee or breakfast surrounded by 7,000 m and 8,000 m tall mountains.
                </p>

                <p>
                  No fitness or hiking experience is needed to land in the base camp, whether you're traveling with your family members or old people.
                </p>
              </div>

              {/* QUICK FACTS */}
              <section className="mt-9">
                <h3 className="font-fraunces text-xl font-semibold text-[#0a3158]">
                  Quick Facts
                </h3>

                <p className="mt-2 max-w-4xl font-manrope text-xs leading-6 text-[#7b8490]">
                  These are the trip facts of the helicopter tour to Annapurna Base Camp, which makes the helicopter trip to Annapurna Base Camp more predictable of what we are offering you in your journey.
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
              <span className="text-[#e3a62a]">designed directly for.</span>
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

     {/* ANNAPURNA BASE CAMP ROUTE ELEVATION */}
      <section className="bg-white px-5 pb-16 md:px-8 lg:pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[28px] bg-[#061c38] px-5 py-10 md:px-10 md:py-12 lg:px-14">
            {/* HEADING */}
            <div className="text-center">
              <p className="flex items-center justify-center gap-3 font-manrope text-xs font-bold uppercase tracking-[0.22em] text-[#e1a51f]">
                <span className="h-px w-7 bg-[#e1a51f]" />
                The Route
              </p>

              <h2 className="mt-4 font-fraunces text-3xl font-semibold leading-tight text-white md:text-4xl">
                Pokhara to Annapurna Base Camp,{" "}
                <span className="text-[#e4ab25]">plotted.</span>
              </h2>
            </div>

            {/* ELEVATION GRAPH */}
            <div className="mt-10 overflow-x-auto">
              <div className="min-w-[820px]">
                <svg
                  viewBox="0 0 1100 270"
                  className="h-auto w-full"
                  role="img"
                  aria-label="Elevation profile from Pokhara to Annapurna Base Camp and back"
                >
                  <defs>
                    <linearGradient
                      id="abcRouteArea"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#f2b321" stopOpacity="0.2" />

                      <stop offset="100%" stopColor="#f2b321" stopOpacity="0" />
                    </linearGradient>

                    <filter
                      id="abcPointGlow"
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
                      5k m
                    </text>

                    <text x="28" y="79">
                      4k m
                    </text>

                    <text x="28" y="119">
                      3k m
                    </text>

                    <text x="28" y="159">
                      2k m
                    </text>

                    <text x="28" y="199">
                      1k m
                    </text>

                    <text x="28" y="239">
                      0 m
                    </text>
                  </g>

                  {/* SHADED AREA */}
                  <path
                    d="
                M65 203
                L245 158
                L405 149
                L570 87
                L700 70
                L860 125
                L1060 203
                L1060 235
                L65 235
                Z
              "
                    fill="url(#abcRouteArea)"
                  />

                  {/* ROUTE LINE */}
                  <path
                    d="
                M65 203
                L245 158
                L405 149
                L570 87
                L700 70
                L860 125
                L1060 203
              "
                    fill="none"
                    stroke="#f2b321"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* POKHARA DEPARTURE */}
                  <circle
                    cx="65"
                    cy="203"
                    r="13"
                    fill="#f2b321"
                    opacity="0.13"
                    filter="url(#abcPointGlow)"
                  />

                  <circle cx="65" cy="203" r="6" fill="#f2b321" />

                  <text
                    x="40"
                    y="185"
                    fill="#ffffff"
                    fontFamily="Manrope, sans-serif"
                    fontSize="9"
                    fontWeight="700"
                  >
                    POKHARA
                  </text>

                  <text
                    x="49"
                    y="195"
                    fill="#7f91a6"
                    fontFamily="Manrope, sans-serif"
                    fontSize="8"
                  >
                    822 m
                  </text>

                  {/* GHANDRUK */}
                  <circle
                    cx="245"
                    cy="158"
                    r="12"
                    fill="#f2b321"
                    opacity="0.13"
                    filter="url(#abcPointGlow)"
                  />

                  <circle cx="245" cy="158" r="6" fill="#f2b321" />

                  <text
                    x="219"
                    y="141"
                    fill="#ffffff"
                    fontFamily="Manrope, sans-serif"
                    fontSize="9"
                    fontWeight="700"
                  >
                    GHANDRUK
                  </text>

                  <text
                    x="229"
                    y="151"
                    fill="#7f91a6"
                    fontFamily="Manrope, sans-serif"
                    fontSize="8"
                  >
                    1,940 m
                  </text>

                  {/* CHHOMRONG */}
                  <circle
                    cx="405"
                    cy="149"
                    r="12"
                    fill="#f2b321"
                    opacity="0.13"
                    filter="url(#abcPointGlow)"
                  />

                  <circle cx="405" cy="149" r="6" fill="#f2b321" />

                  <text
                    x="375"
                    y="132"
                    fill="#ffffff"
                    fontFamily="Manrope, sans-serif"
                    fontSize="9"
                    fontWeight="700"
                  >
                    CHHOMRONG
                  </text>

                  <text
                    x="389"
                    y="142"
                    fill="#7f91a6"
                    fontFamily="Manrope, sans-serif"
                    fontSize="8"
                  >
                    2,170 m
                  </text>

                  {/* MACHHAPUCHHRE BASE CAMP */}
                  <circle
                    cx="570"
                    cy="87"
                    r="12"
                    fill="#f2b321"
                    opacity="0.13"
                    filter="url(#abcPointGlow)"
                  />

                  <circle cx="570" cy="87" r="6" fill="#f2b321" />

                  <text
                    x="532"
                    y="68"
                    fill="#ffffff"
                    fontFamily="Manrope, sans-serif"
                    fontSize="9"
                    fontWeight="700"
                  >
                    MBC
                  </text>

                  <text
                    x="553"
                    y="79"
                    fill="#7f91a6"
                    fontFamily="Manrope, sans-serif"
                    fontSize="8"
                  >
                    3,700 m
                  </text>

                  {/* ANNAPURNA BASE CAMP */}
                  <circle
                    cx="700"
                    cy="70"
                    r="16"
                    fill="#e34d55"
                    opacity="0.16"
                    filter="url(#abcPointGlow)"
                  />

                  <circle cx="700" cy="70" r="7" fill="#e34d55" />

                  <text
                    x="653"
                    y="42"
                    fill="#ffffff"
                    fontFamily="Manrope, sans-serif"
                    fontSize="9"
                    fontWeight="700"
                  >
                    ANNAPURNA BASE CAMP
                  </text>

                  <text
                    x="683"
                    y="55"
                    fill="#9aabc0"
                    fontFamily="Manrope, sans-serif"
                    fontSize="8"
                  >
                    4,130 m
                  </text>

                  {/* ANNAPURNA SANCTUARY RETURN */}
                  <circle
                    cx="860"
                    cy="125"
                    r="12"
                    fill="#f2b321"
                    opacity="0.13"
                    filter="url(#abcPointGlow)"
                  />

                  <circle cx="860" cy="125" r="6" fill="#f2b321" />

                  <text
                    x="817"
                    y="108"
                    fill="#ffffff"
                    fontFamily="Manrope, sans-serif"
                    fontSize="9"
                    fontWeight="700"
                  >
                    SANCTUARY
                  </text>

                  <text
                    x="843"
                    y="118"
                    fill="#7f91a6"
                    fontFamily="Manrope, sans-serif"
                    fontSize="8"
                  >
                    RETURN
                  </text>

                  {/* POKHARA RETURN */}
                  <circle
                    cx="1060"
                    cy="203"
                    r="13"
                    fill="#f2b321"
                    opacity="0.13"
                    filter="url(#abcPointGlow)"
                  />

                  <circle cx="1060" cy="203" r="6" fill="#f2b321" />

                  <text
                    x="1012"
                    y="185"
                    fill="#ffffff"
                    fontFamily="Manrope, sans-serif"
                    fontSize="9"
                    fontWeight="700"
                  >
                    POKHARA
                  </text>

                  <text
                    x="1035"
                    y="195"
                    fill="#7f91a6"
                    fontFamily="Manrope, sans-serif"
                    fontSize="8"
                  >
                    822 m
                  </text>
                </svg>
              </div>
            </div>

            {/* DESCRIPTION */}
            <p className="mt-5 font-manrope text-xs leading-6 text-[#7c8da1]">
              Illustrative elevation profile from Pokhara at 822 metres through
              Ghandruk, Chhomrong and Machhapuchhre Base Camp to Annapurna Base
              Camp at 4,130 metres, followed by the return flight to Pokhara.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}