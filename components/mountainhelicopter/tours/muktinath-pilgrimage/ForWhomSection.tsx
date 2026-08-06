const designedForItems = [
  { title: "Pilgrims", description: "Pilgrims who wish to visit the sacred Muktinath Temple without undertaking a long road journey or trek." },
  { title: "Short-schedule travellers", description: "Travellers on a short schedule seeking a same-day pilgrimage from Kathmandu." },
  { title: "Spiritual travellers", description: "Visitors with limited time in Nepal who want to combine convenience with a spiritual experience." },
  { title: "Families and religious groups", description: "Families and religious groups looking to travel together on a private helicopter charter." },
  { title: "Older pilgrims", description: "Older pilgrims who prefer to minimize the physical demands of reaching Muktinath." },
  { title: "Travellers with limited mobility", description: "Travellers with limited mobility who can safely board the helicopter and complete the short uphill walk from the helipad to the temple." },
  { title: "Shared-seat guests", description: "Solo travellers or couples looking to reserve seats on a shared helicopter flight." },
  { title: "Photographers and nature enthusiasts", description: "Photographers and nature enthusiasts interested in the dramatic landscapes of the Kali Gandaki Valley and Mustang region." },
  { title: "Professional teams", description: "Corporate groups, documentary crews, and research teams requiring flexible aerial transportation." },
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
