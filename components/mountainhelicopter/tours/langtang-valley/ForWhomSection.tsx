const designedForItems = [
  {
    title: "Short-schedule travellers",
    description:
      "Travellers on a short schedule who want to experience the Langtang region without completing the multi-day trek.",
  },
  {
    title: "Same-day Himalayan visitors",
    description:
      "Visitors with limited time in Nepal who prefer a same-day Himalayan excursion.",
  },
  {
    title: "Families and small groups",
    description:
      "Families and small groups seeking the comfort and privacy of a dedicated helicopter charter.",
  },
  {
    title: "Senior travellers",
    description:
      "Senior travellers who want to experience the mountains with minimal physical effort.",
  },
  {
    title: "Photographers and nature enthusiasts",
    description:
      "Photographers and nature enthusiasts looking for aerial views of the Langtang Valley and surrounding peaks.",
  },
  {
    title: "Trek-limited travellers",
    description:
      "Travellers who are unable to complete the trek due to time constraints or physical limitations.",
  },
  {
    title: "Pilgrims and Kyanjin visitors",
    description:
      "Pilgrims and visitors wishing to reach Kyanjin Gompa conveniently.",
  },
  {
    title: "Shared-seat guests",
    description:
      "Solo travellers or couples looking to reserve seats on a shared helicopter flight.",
  },
  {
    title: "Professional teams",
    description:
      "Corporate groups, researchers, filmmakers, and project teams requiring flexible transportation.",
  },
  {
    title: "Private charter guests",
    description:
      "Anyone who prefers a private charter for greater flexibility, privacy, and control over the travel schedule.",
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
