const itineraryItems = [
  {
    number: "01",
    title: "Booking Request",
    description: [
      "Share your preferred travel date, number of passengers, exact body weights, baggage details, and your Lukla flight status with Mountain Helicopters Nepal.",
      "Our operations team checks helicopter availability, crew scheduling, weather conditions, and the possibility of matching shared passengers. Once everything is confirmed, you will receive your final reporting time, meeting point, and baggage allowance.",
    ],
  },
  {
    number: "02",
    title: "Weather and Ramechhap Airport Assessment",
    description: [
      "Before departure, our operations team reviews weather conditions in Ramechhap and Lukla, including visibility, wind, air traffic, and airport status, to determine whether the flight can operate safely. A booking request is not considered a confirmed departure until the helicopter, flight route, and operating window have been approved. Once confirmed, passengers report to the agreed meeting point with their passport and the baggage declared during booking, ready for check-in and departure.",
    ],
  },
  {
    number: "03",
    title: "Passenger and Baggage Weighing",
    description: [
      "Before departure, the passenger's body weight and baggage are verified to ensure the helicopter remains within its safe operating limits. If the combined load exceeds the permitted payload, non-essential baggage may need to be left behind or transported on a separate flight at an additional cost. Once the final load has been confirmed, passenger details are recorded, a comprehensive safety briefing is provided, and seating is carefully assigned in accordance with weight-and-balance requirements for a safe and comfortable flight.",
    ],
  },
  {
    number: "04",
    title: "Helicopter Flight from Ramechhap to Lukla",
    description: [
      "Once final weather and operational clearance are received, the helicopter departs Manthali and climbs toward the Solu-Khumbu region. The flight typically takes 20–25 minutes, although weather conditions, air traffic, routing, or operational stops may affect the duration. Throughout the journey, passengers must remain seated with their seat belts securely fastened until instructed otherwise by the crew. Cameras, mobile phones, and other loose belongings should be kept secure while the helicopter is in operation.",
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
            Detailed Ramechhap to Lukla,
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
