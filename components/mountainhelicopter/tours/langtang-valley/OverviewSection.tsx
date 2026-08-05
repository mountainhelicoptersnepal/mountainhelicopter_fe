"use client";

import { useEffect, useState } from "react";
import { Factory, MapPin, Mountain, Plane, Trees, Users } from "lucide-react";
import LangtangTourSidebar from "./LangtangTourSidebar";

const tabs = [
  { label: "Overview", href: "#overview" },
  { label: "Itinerary", href: "#itinerary" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const quickFacts = [
  [
    "Departure Point",
    "Tribhuvan International Airport Domestic Terminal, Kathmandu",
  ],
  ["Landing Zone", "Kyanjin Gompa / Kyanjin Village, 3,870 m / 12,697 ft"],
  [
    "Major Views",
    "Langtang Lirung, Ganesh Himal, Dorje Lakpa, Yala Peak, Langtang Glacier",
  ],
  ["One-Way Flight Time", "25 to 35 minutes"],
  ["Total Tour Duration", "2 to 4 hours including ground time"],
  ["Ground Time", "60 to 90 minutes at Kyanjin Gompa"],
  ["Helicopter Model", "CAAN-certified Airbus H125 (AS350 B3e)"],
  ["Capacity", "Up to 5 passengers + pilot"],
  ["Shared Tour Price", "From USD 250-350 per person"],
  ["Private Charter", "From USD 1,400-2,000 full helicopter"],
  ["Permit", "Langtang National Park Entry Permit"],
  ["Best Season", "March-May and September-November"],
  ["Difficulty", "Easy, no physical fitness required"],
  ["Meals", "Breakfast at a local teahouse in Kyanjin Gompa"],
  ["Travel Insurance", "Required, minimum 4,000 m altitude coverage"],
];

const highlights = [
  {
    icon: MapPin,
    title: "Kyanjin Gompa Monastery",
    description:
      "Visit the monastery and experience Tibetan Buddhist culture, prayer traditions, and mountain village life.",
  },
  {
    icon: Users,
    title: "Traditional Tamang Village",
    description:
      "Explore stone houses, teahouses, prayer flags, grazing yaks, and the living culture of Langtang Valley.",
  },
  {
    icon: Factory,
    title: "Kyanjin Cheese Factory",
    description:
      "Visit the historic yak cheese factory when open and taste a distinctive local product of the valley.",
  },
  {
    icon: Mountain,
    title: "Langtang Glacier",
    description:
      "Photograph glacier landscapes, Langtang Lirung, Dorje Lakpa, Yala Peak, and surrounding peaks.",
  },
  {
    icon: Trees,
    title: "Forests and Gosaikunda Views",
    description:
      "Fly over oak, maple, pine, rhododendron forests, and enjoy a bird's-eye view toward Gosaikunda Lake.",
  },
  {
    icon: Plane,
    title: "Short Himalayan Flight",
    description:
      "Avoid the 7 to 9 day trek and reach Kyanjin Gompa from Kathmandu in about 25 to 35 minutes.",
  },
];

const designedForItems = [
  {
    title: "Short Trip Travellers",
    description:
      "A normal Langtang Valley trek takes 7 to 9 full days. This helicopter tour gives you one week of mountain scenery in one morning, returning you to Kathmandu by early afternoon.",
  },
  {
    title: "Families, Seniors, and Non-Trekkers",
    description:
      "No strenuous physical activity, heavy luggage, or prolonged trekking is required. Children, senior citizens, and non-trekkers can experience a 3,870 m Himalayan village safely by helicopter.",
  },
  {
    title: "Photographers, Creatives, and Avid Explorers",
    description:
      "Capture the Trishuli River corridor, Shivapuri hills, rhododendron forests, Langtang Glacier, and the face of Langtang Lirung through spacious cabin windows and 60-90 minutes on the ground.",
  },
  {
    title: "Culture and Nature Enthusiasts",
    description:
      "Experience the Valley of Glaciers, Tamang culture, Tibetan Buddhist heritage, Kyanjin Gompa monastery, stone villages, and the yak cheese factory without the physical hardship of trekking.",
  },
  {
    title: "VIP Clients and Special Occasions",
    description:
      "Private charters suit anniversaries, birthdays, corporate offsites, and exclusive mountain breakfasts with close views of Langtang Lirung and Dorje Lakpa.",
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
    window.scrollTo(0, startY + distance * easeInOutCubic(progress));
    if (progress < 1) requestAnimationFrame(animateScroll);
  };

  requestAnimationFrame(animateScroll);
}

export default function OverviewSection() {
  const [activeTab, setActiveTab] = useState("");

  const handleTabClick = (href: string) => {
    setActiveTab(href);
    const section = document.querySelector(href);
    if (!section) return;
    smoothScrollTo(section.getBoundingClientRect().top + window.scrollY - 150);
  };

  useEffect(() => {
    const handleScroll = () => {
      let currentTab = "";
      tabs.forEach((tab) => {
        const section = document.querySelector(tab.href);
        if (!section) return;
        const rect = section.getBoundingClientRect();
        if (rect.top <= 170 && rect.bottom > 170) currentTab = tab.href;
      });
      setActiveTab(currentTab);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
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

      <section id="overview" className="scroll-mt-36 bg-[#fbfbfa]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24 lg:px-16 lg:py-28">
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_320px] xl:grid-cols-[minmax(0,1fr)_340px]">
            <main className="min-w-0">
              <p className="mb-4 flex items-center gap-3 font-manrope text-[11px] font-bold uppercase tracking-[0.24em] text-[#ce8e17]">
                <span className="h-px w-7 bg-[#ce8e17]" />
                About This Flight
              </p>

              <h2 className="font-fraunces text-3xl font-semibold leading-[1.12] tracking-[-0.02em] text-[#0a3158] md:text-4xl">
                Langtang Helicopter Tour to{" "}
                <span className="text-[#dfa11e]">Kyanjin Gompa.</span>
              </h2>

              <div className="mt-6 space-y-4 font-manrope text-sm leading-7 text-[#657180]">
                <p>
                  The Langtang Helicopter Tour is one of the shortest panoramic
                  helicopter tours from Kathmandu. Within 25 to 35 minutes, the
                  flight reaches Langtang Valley and Kyanjin Gompa at 3,870 m,
                  avoiding the usual 7 to 9 day trek.
                </p>

                <p>
                  The route heads north from Kathmandu over Shivapuri hills and
                  the Trishuli River corridor toward Syabrubesi and Langtang
                  National Park. You can see Langtang Lirung, Ganesh Himal,
                  Dorje Lakpa, Yala Peak, and Langtang Glacier before landing.
                </p>

                <p>
                  Ground time at Kyanjin Gompa is normally 60 to 90 minutes for
                  the monastery, stone village, cheese factory, breakfast at a
                  local teahouse, and photographs with the Langtang Himalayas.
                </p>
              </div>

              <section className="mt-9">
                <h3 className="font-fraunces text-xl font-semibold text-[#0a3158]">
                  Quick Facts
                </h3>

                <div className="mt-5 overflow-hidden rounded-xl bg-[#062b55] shadow-[0_15px_35px_rgba(6,43,85,0.12)]">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3">
                    {quickFacts.map(([label, value]) => (
                      <div
                        key={label}
                        className="border-b border-white/10 p-5 sm:border-r"
                      >
                        <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.16em] text-white/50">
                          {label}
                        </p>
                        <p className="mt-2 font-manrope text-xs font-semibold leading-5 text-white">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="mt-8">
                <div className="grid gap-4 md:grid-cols-2">
                  {highlights.map((item) => {
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

            <LangtangTourSidebar />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24 lg:px-16 lg:py-28">
          <p className="flex items-center gap-3 font-manrope text-xs font-bold uppercase tracking-[0.22em] text-[#d89b1d]">
            <span className="h-px w-7 bg-[#d89b1d]" />
            Who This Tour Is Designed For
          </p>

          <h2 className="mt-4 font-fraunces text-3xl font-semibold leading-[1.08] tracking-[-0.02em] text-[#092c52] md:text-4xl">
            A Himalayan morning for{" "}
            <span className="text-[#e3a62a]">many travellers.</span>
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
      </section>
    </>
  );
}
