const designedForItems = [
  { title: "Pilgrims", description: "Pilgrims who wish to visit Muktinath Temple without undertaking a long road journey or trek." },
  { title: "Travellers on a short schedule seeking a s", description: "Travellers on a short schedule seeking a same-day pilgrimage from Kathmandu." },
  { title: "Families and religious groups looking to t", description: "Families and religious groups looking to travel together on a private helicopter charter." },
  { title: "Older pilgrims and travellers with limited", description: "Older pilgrims and travellers with limited mobility who can safely board the helicopter and complete the short uphill walk." }
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
