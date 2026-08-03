"use client";

import { useEffect, useState } from "react";
import {
  Clock3,
  Gauge,
  Hotel,
  MapPin,
  Mountain,
  Plane,
  Sunrise,
} from "lucide-react";
import MuktinathTourSidebar from "./MuktinathTourSidebar";

const tabs = [
  { label: "Overview", href: "#overview" },
  { label: "Itinerary", href: "#itinerary" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const quickFacts = [
  {
    label: "Temple Elevation",
    value: "3,710 m / 12,172 ft",
  },
  {
    label: "Location",
    value: "Mustang District, Gandaki Province, below Thorong La Pass",
  },
  {
    label: "Tour Type",
    value: "Pilgrimage and scenic helicopter tour",
  },
  {
    label: "Departure Point",
    value: "Tribhuvan International Airport, Kathmandu",
  },
  {
    label: "Kathmandu Flight Time",
    value: "Approximately 75-90 minutes one way",
  },
  {
    label: "Total Duration",
    value: "About 4 hours from Kathmandu",
  },
  {
    label: "Temple Ground Time",
    value: "About 60 minutes for worship, exploration, and puja",
  },
  {
    label: "Walk to Temple",
    value: "Approximately 5 minutes from the helipad",
  },
  {
    label: "Helicopter Model",
    value: "CAAN-certified Airbus H125 (AS350 B3e)",
  },
  {
    label: "Maximum Passengers",
    value: "5 passengers plus 1 pilot",
  },
  {
    label: "Private Charter",
    value: "USD 4,800 per helicopter from Kathmandu",
  },
  {
    label: "Per-Person Cost",
    value: "USD 960 with 5 passengers; USD 2,400 with 2 passengers",
  },
  {
    label: "Required Permits",
    value: "Annapurna Conservation Area Permit (ACAP), included",
  },
  {
    label: "Major Mountains Visible",
    value: "Dhaulagiri, Annapurna I, Nilgiri, Annapurna South, Baraha Chuli, Hiunchuli",
  },
  {
    label: "Best Seasons",
    value: "Spring (February-May) and Autumn (September-November)",
  },
  {
    label: "Tour Availability",
    value: "Year-round, weather permitting, typically 7:00 AM to 12:00 PM",
  },
];

const tourHighlights = [
  {
    icon: Mountain,
    title: "Muktinath Temple",
    description:
      "Visit the sacred Lord of Salvation temple, revered by both Hindus and Buddhists.",
  },
  {
    icon: MapPin,
    title: "108 Holy Taps",
    description:
      "Pilgrims can take a purifying bath from the sacred spring-fed jaladharas.",
  },
  {
    icon: Hotel,
    title: "Shaligram Stones",
    description:
      "See the sacred fossils associated with Lord Vishnu in the Muktinath region.",
  },
  {
    icon: Sunrise,
    title: "Mustang Valley",
    description:
      "Fly into the dry, dramatic desert-like landscapes beyond the Annapurna range.",
  },
  {
    icon: Mountain,
    title: "Kali Gandaki Gorge",
    description:
      "Look down over one of Nepal's most striking river valleys during the flight.",
  },
  {
    icon: Plane,
    title: "Jomsom, Kagbeni and Marpha",
    description:
      "View Mustang's windy headquarters, medieval villages, white houses, and apple country.",
  },
  {
    icon: Gauge,
    title: "Annapurna and Dhaulagiri Views",
    description:
      "See Dhaulagiri, Annapurna I, Nilgiri, Annapurna South, Baraha Chuli, and Hiunchuli.",
  },
  {
    icon: Clock3,
    title: "Lush to Barren Transition",
    description:
      "Watch green hills and rhododendron zones change into Mustang's high desert.",
  },
];

const designedForItems = [
  {
    title: "Travellers on Short Notice",
    description:
      "A short trip to Nepal is not enough for the weeks-long Annapurna Circuit trek. It is enough to fly. The helicopter departs in the morning and completes the sacred pilgrimage and return flight in just 3 to 4 hours.",
  },
  {
    title: "Families and Groups",
    description:
      "No strenuous fitness requirement and no acclimatization needed at this accessible 3,710-meter altitude. Children and grandparents can make the journey together for darshan, puja, and the 108 holy taps.",
  },
  {
    title: "Creatives & Photographers",
    description:
      "Charter privately for full aircraft control, unobstructed window angles, and extended ground time at the temple. The transition from rhododendron forests to Mustang's barren landscapes, framed by Dhaulagiri and Annapurna, is the subject.",
  },
  {
    title: "Travellers With Mobility Limitations",
    description:
      "Knee injuries, joint conditions, wheelchair users, and post-surgery recovery can make the multi-day trek impossible. With porter services available at the helipad and a gentle 5-minute walk to the temple, the helicopter removes the physical barrier.",
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
                  <span className="text-[#dfa11e]">Muktinath Temple.</span>
                </h2>
              </div>

              <div className="space-y-4 font-manrope text-sm leading-7 text-[#657180]">
                <p>
                  The Muktinath Helicopter Tour by Mountain Helicopters Nepal is
                  a fast private flight to one of Nepal&apos;s most revered
                  pilgrimage sites. Muktinath Temple sits at 3,710 m in Mustang,
                  below Thorong La Pass, and is sacred to both Hindus and
                  Buddhists.
                </p>

                <p>
                  Flying by helicopter saves the time and energy required for a
                  multi-day trek while still giving you panoramic views of the
                  Annapurna and Dhaulagiri ranges, lush foothills, Kali Gandaki
                  Gorge, and the barren Mustang valley.
                </p>

                <p>
                  The journey includes temple ground time for worship, puja,
                  exploration, and the 108 holy taps. For elderly visitors or
                  passengers with limited mobility, porter support can be
                  arranged near the helipad.
                </p>
              </div>

              {/* QUICK FACTS */}
              <section className="mt-9">
                <h3 className="font-fraunces text-xl font-semibold text-[#0a3158]">
                  Quick Facts
                </h3>

                <p className="mt-2 max-w-4xl font-manrope text-xs leading-6 text-[#7b8490]">
                  These are the key trip facts for the Muktinath Helicopter
                  Tour, including altitude, timing, permits, aircraft, and
                  pricing expectations.
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
            <MuktinathTourSidebar />
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
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 py-16 md:py-24 lg:py-28">
          <div className="overflow-hidden rounded-[28px] bg-[#061c38] px-5 py-10 md:px-10 md:py-12 lg:px-14">
            <div className="text-center">
              <p className="flex items-center justify-center gap-3 font-manrope text-xs font-bold uppercase tracking-[0.22em] text-[#e1a51f]">
                <span className="h-px w-7 bg-[#e1a51f]" />
                The Route
              </p>

              <h2 className="mt-4 font-fraunces text-3xl font-semibold leading-tight text-white md:text-4xl">
                Kathmandu to Muktinath,{" "}
                <span className="text-[#e4ab25]">plotted.</span>
              </h2>
            </div>

            <div className="mt-10 overflow-x-auto">
              <div className="min-w-[760px]">
                <svg
                  viewBox="0 0 1100 250"
                  className="h-auto w-full"
                  role="img"
                  aria-label="Elevation profile from Kathmandu to Muktinath and back"
                >
                  <defs>
                    <linearGradient id="routeArea" x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="0%"
                        stopColor="#f2b321"
                        stopOpacity="0.18"
                      />
                      <stop offset="100%" stopColor="#f2b321" stopOpacity="0" />
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
                       L225 156
                       L390 105
                       L610 83
                       L920 140
                       L1060 195
                       L1060 235
                       L65 235 Z"
                    fill="url(#routeArea)"
                  />

                  {/* ROUTE LINE */}
                  <path
                    d="M65 195
                       L225 156
                       L390 105
                       L610 83
                       L920 140
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

                  {/* POKHARA */}
                  <circle
                    cx="225"
                    cy="156"
                    r="12"
                    fill="#f2b321"
                    opacity="0.12"
                    filter="url(#pointGlow)"
                  />
                  <circle cx="225" cy="156" r="6" fill="#f2b321" />

                  <text
                    x="207"
                    y="142"
                    fill="#ffffff"
                    fontFamily="Manrope, sans-serif"
                    fontSize="9"
                    fontWeight="700"
                  >
                    POKHARA
                  </text>

                  <text
                    x="214"
                    y="152"
                    fill="#7f91a6"
                    fontFamily="Manrope, sans-serif"
                    fontSize="8"
                  >
                    800m
                  </text>

                  {/* MUKTINATH */}
                  <circle
                    cx="390"
                    cy="83"
                    r="14"
                    fill="#e34d55"
                    opacity="0.14"
                    filter="url(#pointGlow)"
                  />
                  <circle cx="390" cy="83" r="7" fill="#e34d55" />

                  <text
                    x="360"
                    y="66"
                    fill="#ffffff"
                    fontFamily="Manrope, sans-serif"
                    fontSize="9"
                    fontWeight="700"
                  >
                    MUKTINATH
                  </text>

                  <text
                    x="378"
                    y="76"
                    fill="#7f91a6"
                    fontFamily="Manrope, sans-serif"
                    fontSize="8"
                  >
                    3,710m
                  </text>

                  {/* JOMSOM */}
                  <circle
                    cx="610"
                    cy="140"
                    r="12"
                    fill="#f2b321"
                    opacity="0.12"
                    filter="url(#pointGlow)"
                  />
                  <circle cx="610" cy="140" r="6" fill="#f2b321" />

                  <text
                    x="600"
                    y="126"
                    fill="#ffffff"
                    fontFamily="Manrope, sans-serif"
                    fontSize="9"
                    fontWeight="700"
                  >
                    JOMSOM
                  </text>

                  <text
                    x="594"
                    y="136"
                    fill="#7f91a6"
                    fontFamily="Manrope, sans-serif"
                    fontSize="8"
                  >
                    2,743m
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
              Elevation profile: Kathmandu (1,400 m) to Muktinath Temple
              (3,710 m) and back, plotted against elapsed time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
