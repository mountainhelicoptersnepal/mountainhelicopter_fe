"use client";

import { useEffect, useState } from "react";
import {
 Waves,
 Trees,
 House,
  Download,
  Mountain,
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
    label: "Departure Point",
    value: "Tribhuvan International Airport Domestic Terminal, Kathmandu",
  },
  {
    label: "Maximum Altitude",
    value: "4,380 m / 14,370 ft at Gosaikunda Lake",
  },
  {
    label: "One-Way Flight Time",
    value: "Approximately 15–20 minutes",
  },
  {
    label: "Landing Time",
    value: "Approximately 30–40 minutes at Gosaikunda",
  },
  {
    label: "Helicopter Model",
    value: "CAAN-certified Airbus H125 (AS350 B3e)",
  },
  {
    label: "Helicopter Capacity",
    value: "Up to 4 passengers plus 1 pilot",
  },
  {
    label: "Shared Tour Cost",
    value: "From USD 300–400 per person",
  },
  {
    label: "Private Charter Cost",
    value: "From USD 1,500–1,800 for the complete helicopter",
  },
  {
    label: "Best Seasons",
    value: "March–May and September–November",
  },
  {
    label: "Required Permit",
    value: "Langtang National Park Entry Permit",
  },
];

const tourHighlights = [
    {
    icon: Waves,
    title: "Sacred Gosaikunda Lakes",
    description:
      "Fly above the main Gosaikunda Lake and its sacred neighbouring lakes, including Bhairab Kunda and Saraswati Kunda.",
  },
  {
    icon: Mountain,
    title: "Langtang and Ganesh Himal Views",
    description:
      "See Langtang Lirung, Dorje Lakpa, Ganesh Himal and the surrounding Himalayan ridgelines during the flight north from Kathmandu.",
  },
  {
    icon: Trees,
    title: "Shivapuri National Park",
    description:
      "Fly above the forested hills and protected landscapes of Shivapuri National Park shortly after departing Kathmandu.",
  },
  {
    icon: House,
    title: "Traditional Tamang Villages",
    description:
      "View traditional Tamang settlements, slate-roofed houses, terraced fields and remote mountain communities across the Langtang region.",
  },
];

const designedForItems = [
  {
    title: "Gosaikunda Pilgrims",
    description:
      "Complete a pilgrimage to the sacred Gosaikunda Lake without undertaking the traditional five-to-seven-day trek. The landing normally provides around 30 to 40 minutes for a short puja, photography and quiet time beside the lake.",
  },
  {
    title: "Short-Term Travellers",
    description:
      "Travellers with only a few days in Kathmandu may not have enough time to complete the full Gosaikunda trek. The helicopter journey reaches the lake and returns to the capital within the same morning.",
  },
  {
    title: "Families, Elder Pilgrims and Private Groups",
    description:
      "The helicopter removes most of the physical demands associated with a multi-day mountain trek. Families, older pilgrims and private groups can experience Gosaikunda together, subject to medical suitability and operational conditions.",
  },
  {
    title: "Photographers and First-Time Visitors",
    description:
      "Photograph Shivapuri’s forests, Tamang villages, alpine valleys, Ganesh Himal and the Langtang mountain range from the air. A private charter provides greater flexibility for dedicated photography groups.",
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
              href="/pdfs/itinerary_of_gosaikunda.pdf"
              download="Gosaikunda-Lake-Itinerary.pdf"
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
                  <span className="text-[#dfa11e]">Gosaikunda Lake.</span>
                </h2>
              </div>

              <div className="space-y-4 font-manrope text-sm leading-7 text-[#657180]">
                <p>
                  The Gosaikunda helicopter tour experience is an unforgettable one, as you are transferred from the noisy streets of Kathmandu to the alpine peaks of the Langtang Himalayas within a period of less than 20 minutes. At Mountain Helicopter Tour, our Airbus H125 helicopters offer you this amazing tour experience every day from CAAN-certified aircraft.
                </p>

                <p>
                  Situated at approximately 4,380 m height in the district of Rasuwa, this lake is the most revered and holy among the Hindu pilgrims. The site is actually more than just one lake; Gosaikunda is, in fact, a set of 108 alpine lakes, a number important in both Hinduism and Buddhism.
                </p>

                <p>
                  While the usual trekking tour to Gosaikunda would take about 5 to 7 days, the helicopter tour allows you to enjoy a comfortable landing at a 4,380 m altitude and gives you an ample 30 to 40 minute landing period to walk around the shores of the lake and bathe in the holy water or perform pujas and take photographs of the mountains.
                </p>
              </div>

              {/* QUICK FACTS */}
              <section className="mt-9">
                <h3 className="font-fraunces text-xl font-semibold text-[#0a3158]">
                  Quick Facts
                </h3>

                <p className="mt-2 max-w-4xl font-manrope text-xs leading-6 text-[#7b8490]">
                  These are the trip facts of the helicopter tour to Gosaikunda , which makes the helicopter trip to Gosaikunda more predictable of what we are offering you in your journey..
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

    {/* ROUTE ELEVATION SECTION */}
      {/* GOSAIKUNDA ROUTE ELEVATION */}
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
                Kathmandu to Gosaikunda,{" "}
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
                  aria-label="Illustrative elevation profile from Kathmandu to Gosaikunda Lake and back"
                >
                  <defs>
                    <linearGradient
                      id="gosaikundaRouteArea"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#f2b321" stopOpacity="0.2" />

                      <stop offset="100%" stopColor="#f2b321" stopOpacity="0" />
                    </linearGradient>

                    <filter
                      id="gosaikundaPointGlow"
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

                  {/* GRID LINES */}
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
                M65 179
                L235 126
                L390 171
                L545 157
                L700 60
                L865 111
                L1060 179
                L1060 235
                L65 235
                Z
              "
                    fill="url(#gosaikundaRouteArea)"
                  />

                  {/* ROUTE LINE */}
                  <path
                    d="
                M65 179
                L235 126
                L390 171
                L545 157
                L700 60
                L865 111
                L1060 179
              "
                    fill="none"
                    stroke="#f2b321"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* KATHMANDU DEPARTURE */}
                  <circle
                    cx="65"
                    cy="179"
                    r="13"
                    fill="#f2b321"
                    opacity="0.13"
                    filter="url(#gosaikundaPointGlow)"
                  />

                  <circle cx="65" cy="179" r="6" fill="#f2b321" />

                  <text
                    x="39"
                    y="160"
                    fill="#ffffff"
                    fontFamily="Manrope, sans-serif"
                    fontSize="9"
                    fontWeight="700"
                  >
                    KATHMANDU
                  </text>

                  <text
                    x="48"
                    y="171"
                    fill="#7f91a6"
                    fontFamily="Manrope, sans-serif"
                    fontSize="8"
                  >
                    1,400 m
                  </text>

                  {/* SHIVAPURI */}
                  <circle
                    cx="235"
                    cy="126"
                    r="12"
                    fill="#f2b321"
                    opacity="0.13"
                    filter="url(#gosaikundaPointGlow)"
                  />

                  <circle cx="235" cy="126" r="6" fill="#f2b321" />

                  <text
                    x="205"
                    y="107"
                    fill="#ffffff"
                    fontFamily="Manrope, sans-serif"
                    fontSize="9"
                    fontWeight="700"
                  >
                    SHIVAPURI
                  </text>

                  <text
                    x="219"
                    y="118"
                    fill="#7f91a6"
                    fontFamily="Manrope, sans-serif"
                    fontSize="8"
                  >
                    2,732 m
                  </text>

                  {/* TRISHULI VALLEY */}
                  <circle
                    cx="390"
                    cy="171"
                    r="12"
                    fill="#f2b321"
                    opacity="0.13"
                    filter="url(#gosaikundaPointGlow)"
                  />

                  <circle cx="390" cy="171" r="6" fill="#f2b321" />

                  <text
                    x="350"
                    y="151"
                    fill="#ffffff"
                    fontFamily="Manrope, sans-serif"
                    fontSize="9"
                    fontWeight="700"
                  >
                    TRISHULI VALLEY
                  </text>

                  <text
                    x="372"
                    y="163"
                    fill="#7f91a6"
                    fontFamily="Manrope, sans-serif"
                    fontSize="8"
                  >
                    1,500 m
                  </text>

                  {/* DHUNCHE */}
                  <circle
                    cx="545"
                    cy="157"
                    r="12"
                    fill="#f2b321"
                    opacity="0.13"
                    filter="url(#gosaikundaPointGlow)"
                  />

                  <circle cx="545" cy="157" r="6" fill="#f2b321" />

                  <text
                    x="522"
                    y="138"
                    fill="#ffffff"
                    fontFamily="Manrope, sans-serif"
                    fontSize="9"
                    fontWeight="700"
                  >
                    DHUNCHE
                  </text>

                  <text
                    x="529"
                    y="149"
                    fill="#7f91a6"
                    fontFamily="Manrope, sans-serif"
                    fontSize="8"
                  >
                    1,960 m
                  </text>

                  {/* GOSAIKUNDA */}
                  <circle
                    cx="700"
                    cy="60"
                    r="16"
                    fill="#e34d55"
                    opacity="0.17"
                    filter="url(#gosaikundaPointGlow)"
                  />

                  <circle cx="700" cy="60" r="7" fill="#e34d55" />

                  <text
                    x="663"
                    y="30"
                    fill="#ffffff"
                    fontFamily="Manrope, sans-serif"
                    fontSize="9"
                    fontWeight="700"
                  >
                    GOSAIKUNDA LAKE
                  </text>

                  <text
                    x="682"
                    y="43"
                    fill="#9aabc0"
                    fontFamily="Manrope, sans-serif"
                    fontSize="8"
                  >
                    4,380 m
                  </text>

                  {/* LANGTANG RIDGE RETURN */}
                  <circle
                    cx="865"
                    cy="111"
                    r="12"
                    fill="#f2b321"
                    opacity="0.13"
                    filter="url(#gosaikundaPointGlow)"
                  />

                  <circle cx="865" cy="111" r="6" fill="#f2b321" />

                  <text
                    x="823"
                    y="91"
                    fill="#ffffff"
                    fontFamily="Manrope, sans-serif"
                    fontSize="9"
                    fontWeight="700"
                  >
                    LANGTANG RIDGE
                  </text>

                  <text
                    x="843"
                    y="103"
                    fill="#7f91a6"
                    fontFamily="Manrope, sans-serif"
                    fontSize="8"
                  >
                    RETURN
                  </text>

                  {/* KATHMANDU RETURN */}
                  <circle
                    cx="1060"
                    cy="179"
                    r="13"
                    fill="#f2b321"
                    opacity="0.13"
                    filter="url(#gosaikundaPointGlow)"
                  />

                  <circle cx="1060" cy="179" r="6" fill="#f2b321" />

                  <text
                    x="1010"
                    y="160"
                    fill="#ffffff"
                    fontFamily="Manrope, sans-serif"
                    fontSize="9"
                    fontWeight="700"
                  >
                    KATHMANDU
                  </text>

                  <text
                    x="1035"
                    y="171"
                    fill="#7f91a6"
                    fontFamily="Manrope, sans-serif"
                    fontSize="8"
                  >
                    1,400 m
                  </text>
                </svg>
              </div>
            </div>

            {/* DESCRIPTION */}
            <p className="mt-5 font-manrope text-xs leading-6 text-[#7c8da1]">
              Illustrative elevation profile from Kathmandu at 1,400 metres over
              Shivapuri, the Trishuli Valley and Dhunche to Gosaikunda Lake at
              4,380 metres, followed by the return flight to Kathmandu.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
