const statistics = [
  {
    value: "1971",
    label: "Opening era",
  },
  {
    value: "3,880 M",
    label: "Approximate altitude",
  },
  {
    value: "360°",
    label: "Mountain setting",
  },
];

export default function HotelStory() {
  return (
    <article
      aria-labelledby="hotel-heading"
      className="relative overflow-hidden rounded-3xl bg-[#003366] p-8 text-white md:p-12"
    >
      <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#F2B632]/10" />

      <div className="relative">
        <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#F2B632]">
          The Destination
        </p>

        <h2
          id="hotel-heading"
          className="mb-6 font-fraunces text-[clamp(1.8rem,3.4vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.02em]"
        >
          A hotel built above the trails.
        </h2>

        <div className="space-y-5 leading-[1.8] text-white/85">
          <p>
            Hotel Everest View was developed high above Namche Bazaar, in a
            location without conventional road access.
          </p>

          <p>
            Building and operating at this altitude required materials, supplies
            and services to be carried through the mountain region.
          </p>

          <p>
            Today, its terrace remains one of the most accessible places for
            visitors to enjoy breakfast while looking toward Mount Everest and
            the surrounding peaks.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-5 border-t border-white/15 pt-8">
          {statistics.map((statistic) => (
            <div key={statistic.label}>
              <p className="font-fraunces text-[28px] font-semibold text-[#F2B632] md:text-3xl">
                {statistic.value}
              </p>

              <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-white/60">
                {statistic.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}