const statistics = [
  {
    value: "5,545 M",
    label: "Landing altitude",
  },
  {
    value: "50% O2",
    label: "Of sea-level oxygen",
  },
  {
    value: "15 Min",
    label: "Hard safety limit",
  },
];

export default function Physiology() {
  return (
    <article
      aria-labelledby="physiology-heading"
      className="relative overflow-hidden rounded-3xl bg-[#003366] p-8 text-white md:p-12"
    >
      <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#F2B632]/10" />

      <div className="relative">
        <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#F2B632]">
          The Science of the Thrill
        </p>

        <h2
          id="physiology-heading"
          className="mb-6 font-fraunces text-[clamp(1.75rem,3.4vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.02em]"
        >
          Why fifteen minutes is the rule.
        </h2>

        <div className="space-y-5 leading-relaxed text-white/85">
          <p>
            At 5,545 metres, every lungful of air delivers roughly half the
            oxygen it does at sea level. Your body notices immediately: your
            heart rate climbs, your breathing deepens, colours seem sharper, and
            a light champagne-fizz euphoria arrives — the honest signature of
            altitude.
          </p>

          <p>
            For a rested visitor with fresh legs, none of this is dangerous in a
            short window. It is exhilarating. It is the point.
          </p>

          <p>
            Stay longer, though, and the body starts writing cheques it cannot
            cash — headache, nausea, the early grammar of altitude sickness.
          </p>

          <p>
            Trekkers earn their hours up here with two weeks of acclimatisation.
            You arrive in ninety minutes from 1,400 metres, so we cap the visit
            at{" "}
            <strong className="font-semibold text-white">
              fifteen minutes — a hard limit, set by physiology, not by us
            </strong>
            .
          </p>

          <p>
            It is long enough to feel everything and short enough that the only
            thing you take back down is the memory.
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