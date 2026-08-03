const itineraryItems = [
  {
    number: "01",
    time: "06:15h",
    title: "Hotel Pickup and Airport Transfer",
    description:
      "Your Langtang helicopter tour begins with an early-morning pickup from your hotel in Kathmandu. A private vehicle transfers you to the domestic terminal at Tribhuvan International Airport, where the Mountain Helicopters Nepal ground team assists with check-in and departure preparation.",
    bullets: [
      "Carry your passport or valid identification.",
      "Wear warm, layered clothing suitable for Kyanjin Gompa.",
      "Bring sunglasses, personal medicine and a small water bottle.",
      "Keep luggage light because helicopter weight restrictions apply.",
    ],
  },
  {
    number: "02",
    time: "07:15h",
    title: "Check-In and Takeoff Preparation",
    description:
      "At the domestic terminal, our team assists with passenger check-in, luggage handling, security procedures and boarding-pass collection. The crew confirms the expected departure time before passengers proceed to the helipad.",
    bullets: [
      "Complete passenger and luggage weight checks.",
      "Receive your boarding pass after security clearance.",
      "Meet the pilot and ground operations team.",
      "Confirm the latest weather and route conditions.",
    ],
  },
  {
    number: "03",
    time: "07:20h",
    title: "Pre-Flight Safety Briefing",
    description:
      "Before boarding the Airbus H125 helicopter, the captain provides a mandatory safety briefing. Passengers receive instructions about approaching the aircraft, using the doors, fastening seat belts and safely entering and exiting the helicopter.",
    bullets: [
      "Review boarding and disembarkation procedures.",
      "Learn how to operate the helicopter doors safely.",
      "Receive emergency and communication instructions.",
      "Review high-altitude precautions for Kyanjin Gompa.",
    ],
  },
  {
    number: "04",
    time: "07:30h",
    title: "Departure From Kathmandu",
    description:
      "The helicopter departs Kathmandu and climbs above the city and surrounding green hills. As the aircraft leaves the valley, passengers can see Kathmandu's dense neighbourhoods, temples and colourful streets disappearing beneath the flight path.",
  },
  {
    number: "05",
    time: "07:35h",
    title: "Fly Over Shivapuri and the Trishuli River Corridor",
    description:
      "The route continues above the rolling Shivapuri hills and follows the dramatic Trishuli River corridor toward Langtang National Park. Forested ridges, remote settlements and deep river valleys gradually replace the Kathmandu cityscape.",
  },
  {
    number: "06",
    time: "07:45h",
    title: "Enter Langtang National Park",
    description:
      "As the helicopter enters the Langtang region, oak, pine and rhododendron forests give way to alpine terrain, snow-covered ridgelines and glacial landscapes. The valley begins to open beneath the aircraft.",
    bullets: [
      "Langtang Lirung.",
      "Dorje Lakpa.",
      "Ganesh Himal.",
      "Jugal Himal.",
      "Paldor Peak.",
      "Yala Peak and surrounding Himalayan ridges.",
    ],
  },
  {
    number: "07",
    time: "08:00h",
    title: "Landing at Kyanjin Gompa (3,870m)",
    description:
      "The helicopter lands at Kyanjin Gompa, a traditional Tamang settlement named after its historic Buddhist monastery. The village lies inside Langtang National Park beneath the towering face of Langtang Lirung and the surrounding glaciers.",
    note:
      "The exact landing time and ground duration depend on weather, visibility, aircraft performance, passenger weight and the pilot's operational assessment.",
  },
  {
    number: "08",
    time: "08:05h",
    title: "Explore Kyanjin Gompa Village",
    description:
      "After landing, passengers can experience the peaceful atmosphere of Kyanjin Gompa, surrounded by stone houses, Buddhist prayer flags, grazing yaks and dramatic Himalayan scenery.",
    bullets: [
      "Visit Kyanjin Gompa Monastery.",
      "Walk through the traditional Tamang village.",
      "See the historic yak cheese factory.",
      "Photograph Langtang Lirung and the surrounding peaks.",
      "Enjoy views toward Langtang Glacier.",
    ],
  },
  {
    number: "09",
    time: "08:15h",
    title: "Breakfast and Photography Time",
    description:
      "Depending on the selected package and available ground time, passengers may enjoy breakfast or hot drinks at a local teahouse. The landing also provides time for photography, village exploration and quiet observation of the surrounding mountain landscape.",
  },
  {
    number: "10",
    time: "08:30h",
    title: "Return Flight to Kathmandu",
    description:
      "After exploring Kyanjin Gompa, passengers return to the helicopter for the flight back to Kathmandu. The return route provides another opportunity to view Langtang Valley, surrounding glaciers, Tamang settlements and forested Himalayan ridges.",
  },
  {
    number: "11",
    time: "08:40h",
    title: "Possible Aerial View of Gosaikunda Lake",
    description:
      "When weather, visibility and the approved flight route permit, passengers may receive a bird's-eye view of the sacred Gosaikunda Lake and the surrounding high-altitude landscape during the return journey.",
    note:
      "A Gosaikunda flyover is subject to the day's route, fuel planning, weather and air-traffic conditions and cannot be guaranteed on every departure.",
  },
  {
    number: "12",
    time: "Around 09:00h",
    title: "Arrival in Kathmandu and Hotel Transfer",
    description:
      "The helicopter lands at Tribhuvan International Airport after the scenic return flight. Our ground team assists with disembarkation before a private vehicle transfers you back to your hotel or another agreed location in Kathmandu.",
  },
];

export default function Itinerary() {
  return (
    <section
      id="itinerary"
      className="relative overflow-hidden bg-[#082f59]"
    >
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/images/everest-base-camp/itinerary-bg.jpg')",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-[#062b52]/90" />

      {/* EXTRA GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#062b52]/30 via-transparent to-[#062b52]/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16 py-16 md:py-24 lg:py-28">
        {/* HEADING */}
        <div className="text-center">
          <p className="flex items-center justify-center gap-3 font-manrope text-xs font-bold uppercase tracking-[0.22em] text-[#e0a321]">
            <span className="h-px w-7 bg-[#e0a321]" />
            Know Your Destination
          </p>

          <h2 className="mt-4 font-fraunces text-4xl font-semibold leading-[0.95] tracking-[-0.03em] text-white md:text-5xl lg:text-6xl">
            Your Journey,
            <br />
            <span className="text-[#f0ad1f]">Step by Step.</span>
          </h2>
        </div>

        {/* TIMELINE */}
        <div className="relative mt-16 md:mt-20">
          <div className="absolute bottom-0 left-[22px] top-0 w-px bg-[#dda11f] md:left-[26px]" />

          <div className="space-y-10">
            {itineraryItems.map((item, index) => (
              <article
                key={item.number}
                className="relative grid grid-cols-[46px_minmax(0,1fr)] gap-4 md:grid-cols-[54px_minmax(0,1fr)] md:gap-6"
              >
                {/* NUMBER */}
                <div
                  className={`relative z-10 flex h-11 w-11 items-center justify-center rounded-full border font-manrope text-xs font-bold md:h-[52px] md:w-[52px] ${
                    index === 0
                      ? "border-[#e0a321] bg-[#0b4c82] text-[#f0ad1f]"
                      : "border-white/70 bg-white text-[#0a3d69]"
                  }`}
                >
                  {item.number}
                </div>

                {/* CONTENT */}
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

                  {item.bullets && (
                    <ul className="mt-3 space-y-1.5 pl-5 font-manrope text-sm leading-6 text-white/75">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="list-disc">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.note && (
                    <p className="mt-4 border-l-2 border-[#e0a321] pl-4 font-manrope text-sm leading-7 text-white/70">
                      {item.note}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
        
        {/* OPERATIONAL NOTE */}
        <div className="mt-20 rounded-2xl border border-white/15 bg-white/[0.06] px-5 py-6 backdrop-blur-sm md:px-7">
          <p className="font-manrope text-xs leading-6 text-white/65">
            All flight times are approximate. The final departure time, route,
            ground duration, passenger capacity, and return schedule may change
            according to weather, visibility, aircraft availability, air
            traffic, passenger weight, and operational safety requirements.
          </p>
        </div>
      </div>
    </section>
  );
}