const designedForItems = [
  {
    title: "Pilgrims",
    description:
      "Pilgrims wishing to visit the sacred Gosaikunda Lake without undertaking the multi-day pilgrimage trek.",
  },
  {
    title: "Short-schedule travellers",
    description:
      "Travellers on a short schedule who want to experience Gosaikunda and return to Kathmandu on the same day.",
  },
  {
    title: "Families and private groups",
    description:
      "Families and private groups looking for the comfort, flexibility, and privacy of a dedicated helicopter charter.",
  },
  {
    title: "Senior travellers",
    description:
      "Senior travellers who wish to visit the sacred lake with minimal physical effort, subject to safe boarding and medical suitability.",
  },
  {
    title: "Photographers and nature enthusiasts",
    description:
      "Photographers, filmmakers, and nature enthusiasts seeking aerial views of Gosaikunda, the Langtang Himal, and surrounding landscapes.",
  },
  {
    title: "Religious and shared-flight groups",
    description:
      "Religious groups, solo travellers, and couples looking to reserve seats on a shared helicopter flight.",
  },
  {
    title: "Production teams",
    description:
      "Documentary crews, researchers, and commercial production teams requiring flexible aerial access.",
  },
  {
    title: "Private charter guests",
    description:
      "Anyone who prefers a private charter for greater privacy, schedule flexibility, and an exclusive flight experience.",
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
