const itineraryItems = [
  {
    number: "01",
    title: "Flight Request and Confirmation",
    description: ["Share your preferred travel date, the number of passengers, exact passenger weights, and baggage details with Mountain Helicopters Nepal. Our operations team will verify helicopter availability, weather conditions, airport status, and total payload to ensure the flight can be operated safely. Once everything is confirmed, you will receive your final itinerary, reporting time, meeting point, and baggage allowance, so you can prepare for a smooth and hassle-free journey."],
  },

  {
    number: "02",
    title: "Report at Tribhuvan International Airport",
    description: ["At the airport, please have your passport and approved trekking baggage ready for check-in. Any excess baggage or items not required for your journey can be securely stored at your hotel before departure. In case of your important baggage that should be taken to the destination, we will pick up your baggage on our next flight and provide it to you, but it will incur additional charges."],
  },

  {
    number: "03",
    title: "Safety Briefing and Boarding",
    description: ["Boarding procedures include how to board the helicopter, where to stand, how to fasten and unfasten the restraint belt, how to communicate with the crew, and what to do when you hear the crew's instructions."],
  },
  {
    number: "04",
    title: "Helicopter Flight from Kathmandu to Lukla",
    description: ["The helicopter is flown east across hills, farmland, and river valleys. Airborne time is normally about 40 to 45 minutes. The actual track and duration may change depending on cloud cover, wind, and air traffic control instructions."],
  },
  {
    number: "05",
    title: "Landing at Tenzing-Hillary Airport",
    description: ["After landing, passengers remain seated until the crew confirms that it is safe to leave. The designated walking route is followed, and baggage is collected under staff guidance."],
  },
  {
    number: "06",
    title: "Guide Meeting or Trek Departure",
    description: ["Upon arrival in Lukla, the group meets at the agreed meeting point, where the guide and support team coordinate the next steps. Trekking permits, porter arrangements, and accommodation plans are confirmed before the trek begins. Travelers are advised to allow a reasonable time buffer in their itinerary in case the helicopter arrives later than scheduled due to weather or operational conditions."],
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
            Detailed Kathmandu to Lukla,
            <br />
            <span className="text-[#f0ad1f]">Helicopter Flight Itinerary.</span>
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
