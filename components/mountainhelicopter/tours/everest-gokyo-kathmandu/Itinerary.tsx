const itineraryItems = [
  {
    number: "01",
    title: "Flight Request and confirmation",
    description: ["Share your preferred travel date, the number of passengers, exact passenger weights, and baggage details with Mountain Helicopters Nepal. Our operations team will verify helicopter availability, weather conditions, airport status, and total payload to ensure the flight can be operated safely.", "Once everything is confirmed, you will receive your final itinerary, reporting time, meeting point, and baggage allowance."],
  },
  {
    number: "02",
    title: "Arrival at the Airport",
    description: ["At the airport, the ground team checks passenger identification and permit documents. Every passenger and piece of baggage must be weighed because total payload affects helicopter range and performance at altitude.", "If the total weight exceeds the allowed limit, some baggage may need to be stored or sent separately on another helicopter flight at extra cost. The crew provides a safety briefing covering boarding, seatbelts, headsets, and safe movement around the aircraft."],
  },
  {
    number: "03",
    title: "Departure From Kathmandu",
    description: ["The Kathmandu route is substantially longer. The helicopter crosses the middle hills towards the Annapurna region and may make a fuel stop at Jomsom, or another suitable location. Total flight time and routing depend on the helicopter, fuel plan, weather, and air-traffic instructions."],
  },
  {
    number: "04",
    title: "Flight Through the Kali Gandaki and Mustang Region",
    description: ["The route offers a dramatic contrast between the snow-covered Himalaya and the arid terrain of Lower Mustang. Jomsom, Marpha, Kagbeni, and sections of the Kali Gandaki Valley may be visible, but no particular flyover is guaranteed."],
  },
  {
    number: "05",
    title: "Landing Near Ranipauwa",
    description: ["Before landing, the pilot assesses wind, clouds, visibility, payload, and helipad condition. If unsuitable, the landing may be delayed, relocated, or cancelled."],
  },
  {
    number: "06",
    title: "Darshan and Temple Visit",
    description: ["The planned visit may include the main Muktinath temple, the 108 Mukti Dhara water spouts, and Jwala Mai. A typical operational ground allocation is around 60-90 minutes, including the walk in both directions, although the actual duration is controlled by the pilot and may be shortened."],
  },
  {
    number: "07",
    title: "Return Flight",
    description: ["After darshan, passengers return to the helipad for the flight back to Kathmandu. A Kathmandu return may include another fuel stop. Airport pickup and hotel drop-off are provided when included in the confirmed package with extra charges."],
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
