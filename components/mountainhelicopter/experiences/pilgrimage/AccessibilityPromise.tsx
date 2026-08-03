const statistics = [
  {
    value: "2–92",
    label: "Ages flown",
  },
  {
    value: "0",
    label: "Steps required",
  },
  {
    value: "100%",
    label: "Darshan priority",
  },
];

export default function AccessibilityPromise() {
  return (
    <article
      aria-labelledby="accessibility-heading"
      className="relative overflow-hidden rounded-3xl bg-[#003366] p-8 text-white md:p-12"
    >
      <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#F2B632]/10" />

      <div className="relative">
        <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#F2B632]">
          Our Promise
        </p>

        <h2
          id="accessibility-heading"
          className="mb-6 font-fraunces text-[clamp(1.75rem,3.4vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.02em]"
        >
          Every body, every age.
        </h2>

        <div className="space-y-5 leading-[1.8] text-white/85">
          <p>
            Pilgrimage was never meant to be only for the strong. Boarding
            assistance is available for every aircraft. Wheelchairs and walking
            frames can travel secured in the cabin where aircraft capacity and
            safety conditions allow.
          </p>

          <p>
            A crew member remains close from pickup to the temple gate and back,
            helping passengers board, steadying them on the path, and carrying
            offering bags when needed.
          </p>

          <p>
            Cabin oxygen is carried on sacred high-altitude routes. Helipads are
            selected to minimize difficult walking, and the ground plan is
            arranged around the passenger&apos;s ability.
          </p>

          <p>
            There are{" "}
            <strong className="font-semibold text-white">
              no rushed jeep tracks and no unnecessary scrambles
            </strong>
            . When conditions and aircraft scheduling permit, ground time is
            planned around the ceremony rather than forcing the ceremony into a
            narrow schedule.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-5 border-t border-white/15 pt-8">
          {statistics.map((statistic) => (
            <div key={statistic.label}>
              <p className="font-fraunces text-[26px] font-semibold text-[#F2B632] md:text-3xl">
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