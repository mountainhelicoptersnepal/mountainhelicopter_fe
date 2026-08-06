const itineraryItems = [
  {
    number: "01",
    title: "Flight Request and confirmation",
    description: [
      "Share your preferred travel date, the number of passengers, exact passenger weights, and baggage details with Mountain Helicopters Nepal. Our operations team will verify helicopter availability, weather conditions, airport status, and total payload to ensure the flight can be operated safely.",
      "Once everything is confirmed, you will receive your final itinerary, reporting time, meeting point, and baggage allowance.",
    ],
  },
  {
    number: "02",
    title: "Arrival at Tribhuvan International Airport",
    description: [
      "At the airport, the ground team checks identification, permit documentation and the passenger manifest. Every passenger and piece of baggage must be weighed because total payload affects helicopter performance at high altitude.",
      "The crew then provides a safety briefing covering boarding, seatbelts, headsets, emergency procedures and safe movement around the aircraft.",
    ],
  },
  {
    number: "03",
    title: "Departure from Kathmandu",
    description: [
      "The helicopter lifts from Kathmandu and flies north. Passengers may see the city, Kathmandu Valley, and the forested Shivapuri hills soon after takeoff. The exact route depends on weather, visibility, and air-traffic instructions.",
    ],
  },
  {
    number: "04",
    title: "Flight Towards Rasuwa and Syabrubesi",
    description: [
      "Beyond the valley rim, the aircraft crosses a landscape of rivers, terraced hills, forests, and settlements. The wider Trishuli and Syabrubesi regions may be visible as the helicopter approaches Langtang National Park.",
    ],
  },
  {
    number: "05",
    title: "Entering Langtang Valley",
    description: [
      "The helicopter continues into the Langtang River corridor. Lower forests and settlements lead towards alpine pastures, steep rock walls, and glacial terrain. Langtang Lirung becomes the dominant peak, while other mountains appear according to visibility and the flight path.",
    ],
  },
  {
    number: "06",
    title: "Approach to Kyanjin Gompa",
    description: [
      "As the aircraft reaches upper Langtang, Kyanjin village appears beneath the surrounding peaks. Before landing, the pilot assesses cloud, wind, visibility, temperature, payload and the condition of the designated landing area.",
    ],
  },
  {
    number: "07",
    title: "Landing at Kyanjin Gompa (Approximately 3,870 m)",
    description: [
      "When conditions permit, the helicopter lands at Kyanjin Gompa. Passengers usually have approximately 20-45 minutes on the ground for photographs and a short look around the immediate village area.",
    ],
  },
  {
    number: "08",
    title: "Return Flight to Kathmandu",
    description: [
      "After the Kyanjin stop, the helicopter descends through Langtang Valley and returns to Tribhuvan International Airport. The flight normally takes approximately 25-40 minutes.",
      "Our vehicle will then transfer you to your Kathmandu hotel. Weather or air-traffic delays can extend the program.",
    ],
  }
];

const itineraryBackgroundImage =
  "https://plus.unsplash.com/premium_photo-1697729961187-c70c5f520227?h=1200&w=2000&crop=faces,edges&auto=format&fit=crop&q=80&ixlib=rb-4.1.0";

export default function Itinerary() {
  return (
    <section
      id="itinerary"
      className="relative scroll-mt-36 overflow-hidden bg-[#002347]"
    >
      <img
        src={itineraryBackgroundImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-70"
      />
      <div className="absolute inset-0 bg-[#002347]/85" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24 lg:px-16 lg:py-28">
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

        <div className="relative mx-auto mt-16 max-w-[1120px] md:mt-20">
          <div className="absolute bottom-0 left-[20px] top-0 w-px bg-[#e0a321] md:left-[23px]" />

          <div className="space-y-10 md:space-y-14">
            {itineraryItems.map((item, index) => (
              <article
                key={item.number}
                className="relative grid grid-cols-[42px_minmax(0,1fr)] gap-5 md:grid-cols-[48px_minmax(0,1fr)] md:gap-7"
              >
                <div
                  className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border font-manrope text-[12px] font-bold md:h-[42px] md:w-[42px] ${
                    index === 0
                      ? "border-[#004d93] bg-[#005da8] text-[#f0ad1f] shadow-[0_0_0_4px_rgba(0,93,168,0.25)]"
                      : "border-[#d9e4ee] bg-white text-[#7b92a9]"
                  }`}
                >
                  {item.number}
                </div>

                <div className="pb-1 pt-1">
                  <h3 className="font-fraunces text-lg font-semibold leading-7 text-white md:text-xl">
                    {item.title}
                  </h3>

                  <div className="mt-3 space-y-1 font-manrope text-sm font-medium leading-7 text-white/90">
                    {item.description.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
