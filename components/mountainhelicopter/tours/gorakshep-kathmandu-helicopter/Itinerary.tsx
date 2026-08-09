const itineraryItems = [
  {
    number: "01",
    title: "Flight Request and Confirmation",
    description: [
      "Share your preferred travel date, the number of passengers, exact passenger weights, and baggage details with Mountain Helicopters Nepal. Our operations team will verify helicopter availability, weather conditions, airport status, and total payload to ensure the flight can be operated safely.",
      "Once everything is confirmed, you will receive your final itinerary, reporting time, meeting point, and baggage allowance, so you can prepare for a smooth and hassle-free journey.",
    ],
  },
  {
    number: "02",
    title: "Helicopter and Shared-Seat Check",
    description: [
      "Our operations team checks the availability and positioning of a suitable helicopter while coordinating with the current Everest region flight schedule.",
      "For shared flights, solo travelers and couples may be matched with other passengers returning to Kathmandu, subject to availability, aircraft capacity, and operational requirements.",
    ],
  },
  {
    number: "03",
    title: "Weather, Landing, and Payload Assessment",
    description: [
      "Before departure, our operations team carefully reviews weather conditions at Gorakshep and along the entire route to Kathmandu, including visibility, wind, and overall flying conditions.",
      "Once the flight is approved for safe operation, passengers receive their final departure instructions and prepare for the return journey to Kathmandu.",
    ],
  },
  {
    number: "04",
    title: "Safety Briefing and Seat Assignment",
    description: [
      "Before boarding, the crew provides a comprehensive safety briefing covering the helicopter approach, proper use of seat belts and headsets, onboard communication, and emergency procedures.",
      "Seating is then carefully assigned according to passenger weight and balance to ensure a safe and comfortable flight. If the total weight exceeds the allowed limit, some baggage will need to be stored or sent on the next helicopter flight, and an extra charge will apply.",
    ],
  },
  {
    number: "05",
    title: "Gorakshep Pickup and Return Readiness",
    description: [
      "The helicopter arrives at Gorakshep, the last settlement on the Everest Base Camp trail, and boards the approved passenger load for the return journey.",
      "As the aircraft lifts off from the high-altitude valley, passengers get one last look at the surrounding peaks before descending out of the Khumbu. Depending on operational requirements, the flight may make a brief refueling stop at Lukla along the way, offering a final view of the gateway airstrip below. From there, the helicopter continues on to Kathmandu, completing the journey and ending the tour in the capital.",
    ],
  },
  {
    number: "06",
    title: "Flight to Kathmandu",
    description: [
      "From Lukla, the helicopter continues on to Kathmandu, completing the journey and ending the tour in the capital.",
      "The helicopter continues over the mid-hills of Solukhumbu and central Nepal on its way to Kathmandu. Passengers disembark only after receiving crew permission and collect their baggage at Tribhuvan International Airport.",
    ],
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
            Detailed Gorakshep to Kathmandu,
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
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#d9e4ee] bg-white font-manrope text-[12px] font-bold text-[#7b92a9] transition-all duration-300 group-hover:border-[#004d93] group-hover:bg-[#005da8] group-hover:text-[#f0ad1f] group-hover:shadow-[0_0_0_4px_rgba(0,93,168,0.25)] md:h-[42px] md:w-[42px]">
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
