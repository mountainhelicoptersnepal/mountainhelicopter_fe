const reasons = [
  [
    "The helicopter tour to Everest Base camp helicopter tour when time, altitude and direct access is more important to you than a multi-day trekking trekking program. Flying out of Kathmandu straight to Everest Base Camp (or at least the viewpoint over it on Kalapatthar) can save you a few days of hiking in the Khumbu."
  ],
  [
    "The flight from Kathmandu to Everest Base Camp can often be made in about 90 minutes."
  ],
  [
    "A shared seat can be requested by a solo traveler, couple, or small group."
  ],
  [
    "A private charter can be requested by a family, a photography group, or a party with reduced mobility."
  ],
  [
    "A helicopter tour can be requested by travelers who cannot commit to the physical demands of trekking."
  ],
  [
    "The flight can be coordinated with a hotel pickup, permit processing, and safety briefing in Kathmandu."
  ],
  [
    "A return helicopter to Kathmandu can also be completed the same morning."
  ]
];

export default function WhyEverestTour() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-28">
        <h2 className="text-center font-fraunces text-2xl font-semibold leading-none tracking-[0] text-[#061a3a] sm:text-[42px]">
          Why fly to Everest Base Camp on a helicopter tour?
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
