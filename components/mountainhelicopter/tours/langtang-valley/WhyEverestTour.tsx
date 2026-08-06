const reasons = [
  [
    "The Langtang Helicopter Tour is a practical choice when time, comfort, and direct access matter more than completing a multi-day trekking itinerary. A conventional Langtang Valley trek generally requires several days of walking, while a helicopter can reach Kyanjin Gompa from Kathmandu in well under an hour when conditions are favorable.",
  ],
  ["A shared seat may be requested by a solo traveler, couple, or small group."],
  [
    "A private charter may be requested by a family, photography team, or private party.",
  ],
  [
    "The flight can help travelers who cannot undertake the trek, subject to medical fitness and safe boarding requirements.",
  ],
  [
    "Hotel transfers, Langtang National Park permit processing, passenger weighing, and a safety briefing can be coordinated in Kathmandu.",
  ],
  [
    "A brief village, monastery, or teahouse visit may be possible during the landing window.",
  ],
  ["The complete journey can normally be completed in the same morning."],
];

export default function WhyEverestTour() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-28">
        <h2 className="text-center font-fraunces text-2xl font-semibold leading-none tracking-[0] text-[#061a3a] sm:text-[42px]">
          Why fly to Langtang Valley by helicopter?
        </h2>

        <div className="mt-12">
          {reasons.map((group, index) => (
            <article
              key={index}
              className="-mt-px rounded-[18px] border border-[#dbe5ef] bg-white px-8 py-9 md:px-9 md:py-10 mb-2"
            >
              {group.map((paragraph) => (
                <p
                  key={paragraph}
                  className="font-manrope text-base leading-8 text-[#203b58]"
                >
                  {paragraph}
                </p>
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
