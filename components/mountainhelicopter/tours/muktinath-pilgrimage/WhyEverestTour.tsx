const reasons = [
  [
    "The Muktinath Helicopter Tour is a practical choice when pilgrimage, comfort, and time matter more than completing a long road journey or a multi-day trek. It allows elite travelers to reach the sacred site and return to Kathmandu on the same day under favorable conditions.",
  ],
  ["A private charter can be requested by a family, pilgrimage group, or private party."],
  [
    "Shared seats may occasionally be arranged when passengers with compatible dates and payload requirements can be combined.",
  ],
  ["The flight reduces the long road journey and physical demands of the trekking route."],
  [
    "Hotel transfers, permit processing, passenger weighing, and a safety briefing can be coordinated in the departure city.",
  ],
  [
    "A Kathmandu charter may include a planned fuel stop, while Kathmandu offers the shorter flight.",
  ],
];

export default function WhyEverestTour() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-28">
        <h2 className="text-center font-fraunces text-2xl font-semibold leading-none tracking-[0] text-[#061a3a] sm:text-[42px]">
          Why Fly to Muktinath by Helicopter?
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
