const designedForItems = [
  {
    title: "Limited-time travelers",
    description:
      "Travelers with limited time in Nepal who still want to stand within sight of Mount Everest.",
  },
  {
    title: "Older travelers and mobility-limited guests",
    description:
      "Older travelers, or those with physical limitations, who cannot undertake a multi-day trek to Everest Base Camp or Kala Patthar.",
  },
  {
    title: "Photographers and adventure seekers",
    description:
      "Photographers and adventure seekers looking for one of the most dramatic short helicopter experiences in the world.",
  },
  {
    title: "Honeymooners, families, and small groups",
    description:
      "Honeymooners, families, and small groups wanting a shared, once-in-a-lifetime Himalayan experience with a proper sit-down breakfast.",
  },
  {
    title: "EBC trail finishers",
    description:
      "Trekkers who have already completed the Everest Base Camp trail and want an added Kala Patthar landing experience.",
  },
  {
    title: "Private charter guests",
    description:
      "Anyone seeking a private charter option for a more personalised, flexible-timing tour.",
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
            For Whom Is This Flight{" "}
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
