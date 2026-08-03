const itineraryItems = [
  {
    number: "01",
    time: "06:15h",
    title: "Hotel to Tribhuvan International Airport",
    description:
      "Our agent picks you up early in the morning by private car and transfers you to Tribhuvan International Airport Domestic Terminal.",
  },
  {
    number: "02",
    time: "07:15h",
    title: "Takeoff Preparations",
    description:
      "Have your ticket and passport ready for check-in, security clearance, luggage handling, boarding pass, captain safety briefing, and helicopter door instructions.",
  },
  {
    number: "03",
    time: "07:30h",
    title: "Flight Departs to Langtang",
    description:
      "Fly north from Kathmandu over Shivapuri Ridge, the Trishuli River corridor, Rasuwa District, Syabrubesi, and into Langtang National Park with views of Jugal Himal, Shishapangma, Dorje Lakpa, Ganesh Himal, and Langtang Lirung.",
  },
  {
    number: "04",
    time: "08:00h",
    title: "Arrival at Kyanjin Gompa",
    description:
      "Land at Kyanjin Gompa, a traditional Tamang settlement inside Langtang National Park. Explore the monastery, stone village, yak cheese factory, teahouses, prayer flags, yaks, and glacier views.",
  },
  {
    number: "05",
    time: "08:30h",
    title: "Flight Back to Kathmandu",
    description:
      "After exploration, return to Kathmandu with aerial views of Langtang Valley, Gosaikunda Lake, and villages along the Tamang Heritage Trail.",
  },
];

const routeParts = [
  [
    "Kathmandu Takeoff and Shivapuri Ridge",
    "Lift off from Tribhuvan International Airport Domestic Terminal and head north over Kathmandu toward Shivapuri Nagarjun National Park.",
  ],
  [
    "Trishuli River Corridor and Rasuwa District",
    "Follow the Trishuli River corridor across terraced hills, waterfalls, remote settlements, and the route toward Syabrubesi.",
  ],
  [
    "Syabrubesi and Langtang Valley",
    "See the valley narrow and open again as the helicopter follows forests, suspension bridges, stone huts, and the trekking corridor.",
  ],
  [
    "Entering the Langtang Himalayan Region",
    "Green hills turn into glacial mountains and alpine peaks as Langtang Lirung, Ganesh Himal, Dorje Lakpa, Yala Peak, and Langtang Glacier come into view.",
  ],
  [
    "Kyanjin Gompa Landing",
    "Land at approximately 3,870 m among stone houses, Buddhist prayer flags, grazing yaks, and close views of Langtang Lirung and Dorje Lakpa.",
  ],
];

export default function Itinerary() {
  return (
    <section id="itinerary" className="relative overflow-hidden bg-[#082f59]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/langtang-valley/langtang-valley.png')" }}
      />
      <div className="absolute inset-0 bg-[#062b52]/90" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#062b52]/30 via-transparent to-[#062b52]/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24 lg:px-16 lg:py-28">
        <div className="text-center">
          <p className="flex items-center justify-center gap-3 font-manrope text-xs font-bold uppercase tracking-[0.22em] text-[#e0a321]">
            <span className="h-px w-7 bg-[#e0a321]" />
            Comprehensive Itinerary
          </p>

          <h2 className="mt-4 font-fraunces text-4xl font-semibold leading-[0.95] tracking-[-0.03em] text-white md:text-5xl lg:text-6xl">
            Kathmandu to
            <br />
            <span className="text-[#f0ad1f]">Kyanjin Gompa.</span>
          </h2>
        </div>

        <div className="relative mt-16 md:mt-20">
          <div className="absolute bottom-0 left-[22px] top-0 w-px bg-[#dda11f] md:left-[26px]" />

          <div className="space-y-10">
            {itineraryItems.map((item, index) => (
              <article
                key={item.number}
                className="relative grid grid-cols-[46px_minmax(0,1fr)] gap-4 md:grid-cols-[54px_minmax(0,1fr)] md:gap-6"
              >
                <div
                  className={`relative z-10 flex h-11 w-11 items-center justify-center rounded-full border font-manrope text-xs font-bold md:h-[52px] md:w-[52px] ${
                    index === 0
                      ? "border-[#e0a321] bg-[#0b4c82] text-[#f0ad1f]"
                      : "border-white/70 bg-white text-[#0a3d69]"
                  }`}
                >
                  {item.number}
                </div>

                <div className="pb-1 pt-1">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="font-manrope text-xs font-bold uppercase tracking-[0.08em] text-[#f0ad1f]">
                      {item.time}
                    </span>

                    <h3 className="font-fraunces text-lg font-semibold leading-7 text-white md:text-xl">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-3 font-manrope text-sm leading-7 text-white/75">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-2xl border border-white/15 bg-white/[0.06] px-5 py-6 backdrop-blur-sm md:px-7">
          <h3 className="font-manrope text-xs font-bold uppercase tracking-[0.18em] text-[#f0ad1f]">
            Route Places of Interest
          </h3>

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {routeParts.map(([title, description]) => (
              <article key={title}>
                <h4 className="font-manrope text-sm font-semibold text-white">
                  {title}
                </h4>
                <p className="mt-2 font-manrope text-xs leading-6 text-white/65">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <p className="mt-8 font-manrope text-xs leading-6 text-white/65">
          All flight times are approximate. Early morning departures are used
          because mountain visibility is generally clearer before noon.
        </p>
      </div>
    </section>
  );
}
