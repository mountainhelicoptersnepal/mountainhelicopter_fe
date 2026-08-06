const itineraryItems = [
  {
    number: "01",
    title: "Flight Request and confirmation",
    description: [
      "Share your preferred travel date, the number of passengers, exact passenger weights, and baggage details with Mountain Helicopters Nepal. Our operations team verifies helicopter availability, weather conditions, airport status, and total payload to ensure the flight can be operated safely.",
      "Once everything is confirmed, you receive your final itinerary, reporting time, meeting point, and baggage allowance.",
    ],
  },
  {
    number: "02",
    title: "Arrival at Tribhuvan International Airport",
    description: [
      "At the airport, the ground team checks passenger identification, permit documents, and the flight manifest. Every passenger and piece of baggage must be weighed because total payload affects helicopter performance at high altitude.",
      "If the total weight exceeds the allowed limit, some baggage may need to be stored or sent separately on another helicopter flight at extra cost. The crew then provides a safety briefing covering boarding, seatbelts, headsets, emergency procedures, and safe movement around the helicopter.",
    ],
  },
  {
    number: "03",
    title: "Departure from Kathmandu",
    description: [
      "The helicopter lifts from Kathmandu and heads north. Passengers may see the city, the surrounding valley and the forested Shivapuri hills shortly after takeoff. The precise route depends on weather, visibility and air-traffic instructions.",
    ],
  },
  {
    number: "04",
    title: "Flight Towards the Langtang Region",
    description: [
      "Beyond the Kathmandu Valley, the helicopter passes above a landscape of forested ridges, rivers, terraced hills and settlements. In suitable visibility, passengers can see the Ganesh Himal and Langtang ranges as the aircraft climbs towards Gosaikunda.",
    ],
  },
  {
    number: "05",
    title: "Approach to the Sacred Lakes",
    description: [
      "The terrain becomes rocky and alpine as the helicopter approaches the lake system. Gosaikunda, Bhairab Kunda, and Saraswati Kunda may be visible from the air. Before landing, the pilot assesses clouds, wind, snow cover, visibility, payload, and the condition of the designated landing area.",
    ],
  },
  {
    number: "06",
    title: "Landing Near Gosaikunda Lake (Approximately 4,380 m)",
    description: [
      "When conditions permit, the helicopter lands near Gosaikunda Lake. Passengers generally receive approximately 15-30 minutes on the ground for photographs, sightseeing, and a brief religious observance.",
    ],
  },
  {
    number: "07",
    title: "Return Flight to Kathmandu",
    description: [
      "After the lake stop, the helicopter descends across the Langtang foothills and returns to Tribhuvan International Airport. The return flight normally takes approximately 20-30 minutes.",
      "Our vehicle will then transfer you to your Kathmandu hotel. The complete program is generally finished during the morning, although weather or air-traffic delays can extend the schedule.",
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
