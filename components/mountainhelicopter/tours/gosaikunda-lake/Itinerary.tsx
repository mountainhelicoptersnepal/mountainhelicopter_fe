const itineraryItems = [
   {
    number: "01",
    time: "06:00h",
    title: "Hotel Pickup in Kathmandu",
    description:
      "Your Gosaikunda Helicopter Tour begins with an early-morning pickup from your hotel in Kathmandu or Thamel. A private vehicle transfers you to the domestic terminal at Tribhuvan International Airport.",
    bullets: [
      "Carry your passport or valid identification.",
      "Wear warm, layered and windproof clothing.",
      "Bring sunglasses, sunscreen and personal medication.",
      "Keep your luggage within the confirmed helicopter allowance.",
    ],
  },
  {
    number: "02",
    time: "06:20h",
    title: "Airport Check-In and Safety Briefing",
    description:
      "Upon arrival at the domestic terminal, our ground team assists with passenger registration, identification checks, permit documentation and final weight verification before boarding.",
    bullets: [
      "Receive your Langtang National Park entry permit.",
      "Attend the mandatory pre-flight safety briefing.",
      "Review helicopter boarding and landing procedures.",
      "Receive guidance about rapid altitude gain and oxygen use.",
    ],
  },
  {
    number: "03",
    time: "06:30h",
    title: "Helicopter Departure From Kathmandu",
    description:
      "The Airbus H125 departs Kathmandu and flies north toward the Langtang region. Within minutes, the city disappears beneath the aircraft as forested hills, terraced farmland and Himalayan valleys come into view.",
  },
  {
    number: "04",
    time: "06:35h",
    title: "Flyover of Shivapuri National Park",
    description:
      "The flight crosses the green ridges and dense forests of Shivapuri National Park. On a clear morning, passengers can see the Kathmandu Valley behind them and the first Himalayan ridgelines ahead.",
  },
  {
    number: "05",
    time: "06:40h",
    title: "Tamang Villages and Langtang Valley Views",
    description:
      "The helicopter continues over traditional Tamang settlements, slate-roofed houses, terraced fields and remote valleys leading toward the Langtang Himal.",
    bullets: [
      "Traditional Tamang mountain villages.",
      "Forested valleys and alpine ridges.",
      "Langtang Lirung and Dorje Lakpa.",
      "Ganesh Himal and surrounding peaks.",
    ],
  },
  {
    number: "06",
    time: "Around 06:50h",
    title: "Approach to the Sacred Alpine Lakes",
    description:
      "As the aircraft climbs toward 4,000 metres, the forested landscape gives way to rocky alpine terrain, snow-covered ridges and the sacred lake system surrounding Gosaikunda.",
  },
  {
    number: "07",
    time: "Around 07:00h",
    title: "Landing at Gosaikunda Lake (4,380m)",
    description:
      "When weather and landing conditions permit, the helicopter lands close to Gosaikunda Lake. The sacred lake sits among rocky slopes, prayer flags and high Himalayan ridges.",
    note:
      "The final landing point is selected by the pilot according to wind, visibility, snow, passenger weight, aircraft performance and current ground conditions.",
  },
  {
    number: "08",
    time: "07:00–07:40h",
    title: "Explore Gosaikunda",
    description:
      "Passengers normally receive approximately 30 to 40 minutes beside the lake for sightseeing, photography and religious observance.",
    bullets: [
      "Walk carefully around the permitted landing area.",
      "Offer a short prayer or perform a brief puja.",
      "Touch the sacred water when conditions allow.",
      "Photograph Gosaikunda, Bhairab Kunda and nearby ridges.",
      "Observe the surrounding Langtang and Ganesh Himal mountains.",
    ],
    note:
      "At 4,380 metres, oxygen availability is considerably lower than at sea level. Move slowly, avoid running and immediately inform the pilot if you experience dizziness, nausea, severe headache or unusual breathlessness.",
  },
  {
    number: "09",
    time: "Around 07:40h",
    title: "Return Flight to Kathmandu",
    description:
      "The helicopter departs Gosaikunda and begins the scenic return journey. Passengers receive another aerial view of the Langtang mountains, alpine valleys, Tamang settlements and Shivapuri forests.",
  },
  {
    number: "10",
    time: "Around 08:00h",
    title: "Arrival at Kathmandu Airport",
    description:
      "The helicopter lands at Tribhuvan International Airport’s domestic terminal. The ground team assists passengers with disembarkation and onward transfer arrangements.",
  },
  {
    number: "11",
    time: "Around 08:20h",
    title: "Hotel Drop-Off in Kathmandu",
    description:
      "A private vehicle transfers you back to your hotel, completing the Gosaikunda Helicopter Tour. You return early enough to keep the rest of the day available for sightseeing or relaxation.",
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