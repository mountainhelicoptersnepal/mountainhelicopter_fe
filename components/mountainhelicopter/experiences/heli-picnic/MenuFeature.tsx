const statistics = [
  {
    value: "5",
    label: "Guests maximum",
  },
  {
    value: "3 Hrs",
    label: "On site",
  },
  {
    value: "0",
    label: "Other people",
  },
];

export default function MenuFeature() {
  return (
    <article
      aria-labelledby="menu-heading"
      className="relative overflow-hidden rounded-3xl bg-[#003366] p-8 text-white md:p-12"
    >
      <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#F2B632]/10" />

      <div className="relative">
        <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#F2B632]">
          The Table
        </p>

        <h2
          id="menu-heading"
          className="mb-6 font-fraunces text-[clamp(1.75rem,3.4vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.02em]"
        >
          The menu at altitude.
        </h2>

        <div className="space-y-5 leading-[1.8] text-white/85">
          <p>
            Your meal leaves one of Kathmandu&apos;s gourmet kitchens on the
            same morning you do. Hot dishes travel in insulated service, salads
            are dressed at the site, and dessert remains covered until it is
            served.
          </p>

          <p>
            Choose a Nepali menu, a continental menu, or a combination of both.
            Vegetarian, vegan, halal and allergy-sensitive menus can be arranged
            with advance notice.
          </p>

          <p>
            Champagne, celebration cake, flowers and personal dishes can also
            be added to the experience.
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