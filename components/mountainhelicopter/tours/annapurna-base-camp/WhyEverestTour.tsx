const reasons = [
  [
    "The Annapurna Base Camp Helicopter Tour is an ideal choice for travellers who value time, comfort, and direct access to one of Nepal's most spectacular mountain destinations.",
  ],
  [
    "While the traditional Annapurna Base Camp trek requires several days of hiking through forests, villages, and alpine landscapes, a helicopter can normally reach the base camp from Kathmandu in approximately 40-50 minutes each way.",
  ],
  [
    "The tour is suitable for solo travellers, couples, families, photographers, filmmakers, corporate groups, and small groups alike.",
  ],
  [
    "Those wishing to reduce costs can reserve individual seats on a shared helicopter with other passengers, while travellers seeking greater privacy, flexibility, or an exclusive experience may choose a private charter dedicated entirely to their group.",
  ],
];

export default function WhyEverestTour() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-28">
        <h2 className="text-center font-fraunces text-2xl font-semibold leading-none tracking-[0] text-[#061a3a] sm:text-[42px]">
          Why fly to Annapurna Base Camp by helicopter?
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
