const designedForItems = [
  { title: "Adventure seekers", description: "Adventure seekers looking to tick a Himalayan helicopter flight off their bucket list." },
  { title: "Solo travellers, couples, and families", description: "Travelers looking for a comfortable alternative to the long Ramechhap road transfer, as well as a better alternative to the fixed-wing flight that often gets delayed." },
  { title: "Trekkers and expedition teams", description: "Trekkers, trekking groups, climbers, and expedition teams heading to the Everest region with fixed itineraries or pre-approved expedition equipment." },
  { title: "Limited-time travelers", description: "Travelers with limited time in Nepal who want to maximize their time in the mountains." },
  { title: "Delayed-flight passengers", description: "Passengers affected by delayed or canceled Lukla flights who need a faster and more reliable transfer." },
  { title: "Private charter guests", description: "Anyone seeking the privacy, flexibility, and convenience of a private helicopter charter." },
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
            For Whom is This Flight{" "}
            <span className="text-[#e3a62a]">Designed?</span>
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
