const designedForItems = [
  { title: "Short-schedule travellers", description: "Travellers on a short schedule who want to visit Annapurna Base Camp without completing the multi-day trek." },
  { title: "Same-day Himalayan visitors", description: "Visitors with limited time in Nepal seeking a same-day Himalayan experience." },
  { title: "Families and private groups", description: "Families and private groups looking for the comfort and flexibility of a dedicated helicopter charter." },
  { title: "Photographers and creative teams", description: "Photographers, filmmakers, and creative teams requiring aerial perspectives of the Annapurna Sanctuary." },
  { title: "Trek-limited travellers", description: "Travellers who are unable to complete the trek because of time constraints or physical limitations." },
  { title: "Senior travellers", description: "Senior travellers who prefer to experience the Annapurna region with minimal walking." },
  { title: "Pilgrims and mountain enthusiasts", description: "Pilgrims and mountain enthusiasts wishing to reach Annapurna Base Camp quickly and comfortably." },
  { title: "Shared-seat guests", description: "Solo travellers or couples looking to reserve seats on a shared helicopter flight." },
  { title: "Professional teams", description: "Research teams, documentary crews, and commercial production teams requiring flexible air access." },
  { title: "Private charter guests", description: "Anyone who prefers a private charter for greater privacy, schedule flexibility, and an exclusive flight experience." },
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
