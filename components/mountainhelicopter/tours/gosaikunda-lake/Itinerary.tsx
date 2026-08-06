const itineraryItems = [
  {
    number: "01",
    title: "Flight Request and confirmation",
    description: ["Share your travel date, passenger count, exact weights, and baggage details. The operations team checks helicopter availability, weather, airport status, and total payload."],
  },
  {
    number: "02",
    title: "Arrival at Tribhuvan International Airport",
    description: ["The ground team checks documents, passenger weights, baggage, and gives the safety briefing before boarding."],
  },
  {
    number: "03",
    title: "Departure from Kathmandu",
    description: ["The helicopter departs Kathmandu and heads north towards the Langtang region."],
  },
  {
    number: "04",
    title: "Flight Towards the Langtang Region",
    description: ["The flight crosses forested hills, river valleys, and rugged ridgelines as the terrain becomes increasingly alpine."],
  },
  {
    number: "05",
    title: "Landing Near Gosaikunda Lake (Approximately 4,380 m)",
    description: ["When wind, visibility, payload, and surface conditions are suitable, the helicopter lands near Gosaikunda Lake for a short visit."],
  },
  {
    number: "06",
    title: "Return Flight to Kathmandu",
    description: ["Passengers return to the helicopter and fly back to Kathmandu according to pilot instructions and weather conditions."],
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
