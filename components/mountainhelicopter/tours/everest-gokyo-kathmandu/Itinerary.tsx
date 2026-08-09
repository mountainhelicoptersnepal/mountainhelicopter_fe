const itineraryItems = [
  {
    number: "01",
    title: "Flight Request and Confirmation",
    description: ["Share your preferred travel date, the number of passengers, exact passenger weights, and baggage details with Mountain Helicopters Nepal. Our operations team will verify helicopter availability, weather conditions, airport status, and total payload to ensure the flight can be operated safely.", "Once everything is confirmed, you will receive your final itinerary, reporting time, meeting point, and baggage allowance, so you can prepare for a smooth and hassle-free journey."],
  },
  {
    number: "02",
    title: "Safety Briefing and Boarding",
    description: ["Before boarding, the crew briefs passengers on seating, restraint belts, communication signals, and in-flight procedures.", "If the total weight exceeds the allowed limit, some baggage will need to be stored or sent on the next helicopter flight, and an extra charge will apply."],
  },
  {
    number: "03",
    title: "Flight from Kathmandu to Lukla",
    description: ["The helicopter flies from Kathmandu to the east across hills, farmland, and river valleys to Lukla, where it makes a brief stop to refuel."],
  },
  {
    number: "04",
    title: "Flight to the Khumbu Region",
    description: ["After refueling, the helicopter heads into the Khumbu region, passing over or near Lukla, Namche Bazaar, and Tengboche Monastery before climbing toward the high valleys of the Everest region.", "As the aircraft gains altitude, forested valleys give way to alpine ridges, glacial streams, and the first views of the surrounding Himalayan peaks."],
  },
  {
    number: "05",
    title: "Everest Mountain Overfly and Gokyo Lake Landing",
    description: ["The helicopter completes a close overfly of the Everest Base Camp and Kala Patthar area, revealing the Khumbu Icefall and the summits of Everest, Lhotse, and Nuptse.", "It then continues to Gokyo for a 5-10 minute landing beside the turquoise lake, surrounded by the Ngozumpa Glacier and towering peaks, before returning along the confirmed route."],
  },
  {
    number: "06",
    title: "Return Flight to Kathmandu",
    description: ["After the journey, the helicopter departs and heads directly back toward Kathmandu, with a brief refueling stop at Lukla along the way."],
  },
];

const itineraryBackgroundImage =
  "/images/kathmandu-lukla-helicopter/Iternery_BG.png";

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
            Detailed Everest Mountain Overfly,
            <br />
            <span className="text-[#f0ad1f]">with Gokyo Lake Landing Itinerary.</span>
          </h2>
        </div>

        <div className="relative mx-auto mt-16 max-w-[1120px] md:mt-20">
          <div className="absolute bottom-0 left-[20px] top-0 w-px bg-[#e0a321] md:left-[23px]" />

          <div className="space-y-10 md:space-y-14">
            {itineraryItems.map((item) => (
              <article
                key={item.number}
                className="group relative grid grid-cols-[42px_minmax(0,1fr)] gap-5 md:grid-cols-[48px_minmax(0,1fr)] md:gap-7"
              >
                <div
                  className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#d9e4ee] bg-white font-manrope text-[12px] font-bold text-[#7b92a9] transition-all duration-300 group-hover:border-[#004d93] group-hover:bg-[#005da8] group-hover:text-[#f0ad1f] group-hover:shadow-[0_0_0_4px_rgba(0,93,168,0.25)] md:h-[42px] md:w-[42px]"
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
