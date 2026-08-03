const itineraryItems = [
  {
    number: "01",
    time: "05:30h",
    title: "Hotel Pickup in Kathmandu",
    description:
      "A private vehicle collects you from your hotel in Kathmandu or Thamel. The 20-minute drive to Tribhuvan International Airport gives you a quiet view of the city before dawn. Bring your passport or identification, warm layers, and approximately USD 51 in cash for permits.",
  },
  {
    number: "02",
    time: "06:00h",
    title:
      "Arrival at Tribhuvan International Airport (Domestic Terminal)",
    description:
      "After pickup, you are taken directly to the domestic terminal helipad area. Our ground team will already have processed your permit documentation from the previous day.",
    bullets: [
      "Receive your Sagarmatha National Park entry permit and Khumbu Pasang Lhamu Rural Municipality permit.",
      "Attend a mandatory pre-flight safety briefing covering oxygen use, emergency procedures, high-altitude precautions, and landing instructions.",
      "Meet your CAAN-certified mountain pilots.",
      "Complete final luggage and passenger weight checks.",
    ],
  },
  {
    number: "03",
    time: "06:30h",
    title: "Departure From Kathmandu",
    description:
      "The helicopter departs Kathmandu and heads northeast. Within minutes, the city and temples disappear beneath the aircraft, revealing the Himalayan foothills and the first line of snow-covered peaks. Your pilot provides commentary and points out major landmarks along the route.",
  },
  {
    number: "04",
    time: "07:15h",
    title: "Refuelling Stop at Lukla, Tenzing-Hillary Airport (2,860m)",
    description:
      "The helicopter makes a short refuelling stop at Lukla Airport, known for its short mountain runway and dramatic location. Passengers may briefly step outside when operational conditions permit and observe one of the world's most famous mountain airstrips.",
  },
  {
    number: "05",
    time: "07:30h",
    title: "Flyover at Namche Bazaar (3,440m)",
    description:
      "Fly above Namche Bazaar, the main trading centre of the Khumbu region. From the aircraft, you can see the curved settlement, terraced slopes, monasteries, trekking trails, and the valley leading deeper into the Everest region.",
  },
  {
    number: "06",
    time: "07:55h",
    title: "Flyover at Tengboche Monastery (3,860m)",
    description:
      "Pass Tengboche Monastery, one of the most important Buddhist sites in the Everest region. The monastery sits on a forested ridge with panoramic views toward Ama Dablam, Everest, Lhotse, and surrounding peaks.",
  },
  {
    number: "07",
    time: "08:05h",
    title: "Flyover at Pheriche (4,240m)",
    description:
      "The helicopter continues over Pheriche, a high-altitude village and acclimatization stop for trekkers. The settlement is also known for its seasonal medical clinic and its position beneath the surrounding Himalayan walls.",
  },
  {
    number: "08",
    time: "08:30h",
    title: "Flyover at Everest Base Camp (5,364m)",
    description:
      "The aircraft flies above Everest Base Camp, the Khumbu Glacier, expedition tents, and the surrounding icefall. Landing directly at Everest Base Camp is not permitted for scheduled tourist helicopter operations, so the flight continues toward Kala Patthar for the landing experience.",
  },
  {
    number: "09",
    time: "10:00h",
    title: "Landing at Kala Patthar (5,545m / 18,192 ft)",
    description:
      "Land at Kala Patthar, one of the most extraordinary viewpoints in the Himalayas. The landing normally lasts around 10 to 15 minutes, depending on weather, aircraft performance, and passenger condition.",
    bullets: [
      "Mount Everest and the Southwest Face.",
      "Lhotse and the South Col.",
      "Nuptse and the surrounding ridgelines.",
      "Pumori rising directly behind Kala Patthar.",
      "The Khumbu Glacier and Khumbu Icefall.",
      "Everest Base Camp beneath the aircraft.",
    ],
    note:
      "At 5,545 metres, oxygen levels are significantly lower than at sea level. Passengers should move slowly, avoid unnecessary exertion, and follow the pilot's instructions throughout the landing.",
  },
  {
    number: "10",
    time: "10:15h",
    title: "Return Flight to Kathmandu",
    description:
      "The return flight follows the Khumbu Valley past Tengboche, Namche Bazaar, and the Dudh Koshi gorge. Depending on fuel and operating conditions, the aircraft may make another short stop at Lukla before continuing to Kathmandu.",
  },
  {
    number: "11",
    time: "10:15h",
    title: "Drop-Off at Kathmandu Hotel",
    description:
      "After landing at Tribhuvan International Airport, our vehicle transfers you back to your hotel in Kathmandu. You return before midday with the rest of the afternoon free.",
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