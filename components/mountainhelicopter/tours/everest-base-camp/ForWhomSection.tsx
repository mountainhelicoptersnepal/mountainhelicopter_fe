const designedForItems = [
  {
    title: "Short-schedule travellers",
    description:
      "Travellers on a short schedule who want to experience Mount Everest without completing the two-week trek.",
  },
  {
    title: "Same-day Himalayan visitors",
    description:
      "Visitors with limited time in Nepal seeking a same-day Himalayan adventure.",
  },
  {
    title: "Families and private groups",
    description:
      "Families and private groups looking for the comfort, flexibility, and exclusivity of a dedicated helicopter charter.",
  },
  {
    title: "Photographers and creators",
    description:
      "Photographers, filmmakers, and content creators seeking spectacular aerial views of Everest, the Khumbu Glacier, and the surrounding Himalayan peaks.",
  },
  {
    title: "Travellers with mobility limitations",
    description:
      "Travellers with mobility limitations who are unable to undertake the physically demanding trek but can safely board the helicopter and tolerate the high-altitude flight.",
  },
  {
    title: "Senior travellers",
    description:
      "Senior travellers who wish to experience the Everest region with minimal physical effort.",
  },
  {
    title: "Shared-seat guests",
    description:
      "Solo travellers or couples looking to reserve seats on a shared helicopter flight.",
  },
  {
    title: "Professional teams",
    description:
      "Corporate groups, documentary crews, research teams, and expedition support personnel requiring flexible aerial transportation.",
  },
  {
    title: "Adventure travellers",
    description:
      "Adventure travellers who want to stand near the world's highest mountain within a single day.",
  },
  {
    title: "Private charter guests",
    description:
      "Anyone who prefers a private charter for greater privacy, schedule flexibility, and an exclusive Himalayan flight experience.",
  },
];

export default function ForWhomSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20 lg:px-16 lg:py-28">
        <div className="text-center justify-items-center">
          <p className="flex items-center gap-3 font-manrope text-xs font-bold uppercase tracking-[0.22em] text-[#d89b1d]">
            <span className="h-px w-7 bg-[#d89b1d]" />
            Who This Flight Is For
          </p>

          <h2 className="mt-4 font-fraunces text-2xl font-semibold leading-tight text-[#092c52] sm:text-[42px]">
            For whom this flight is{" "}
            <span className="text-[#e3a62a]">designed for.</span>
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-7xl divide-y divide-slate-200">
          {designedForItems.map((item) => (
            <article key={item.title} className="py-6">
              <h3 className="font-manrope text-xs font-bold uppercase tracking-[0.13em] text-[#0b3d6b]">
                {item.title}
              </h3>

              <p className="mt-3 font-manrope text-sm leading-7 text-slate-500">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
