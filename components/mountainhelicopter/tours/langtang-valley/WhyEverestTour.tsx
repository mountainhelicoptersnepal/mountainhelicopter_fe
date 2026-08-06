const reasons = [["The Langtang Helicopter Tour is a strong choice when time, mountain scenery, and direct valley access matter more than trekking."], ["A private charter can be requested by families, photographers, or small groups."], ["Shared seats may occasionally be arranged when compatible dates, routing, and payload requirements match."], ["The flight can include hotel transfer, permit processing, passenger weighing, and safety briefing in Kathmandu."]];

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
