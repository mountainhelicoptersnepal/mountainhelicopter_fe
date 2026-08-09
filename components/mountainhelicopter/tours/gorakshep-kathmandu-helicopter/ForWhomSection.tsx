const designedForItems = [
  {
    title: "Everest region trekkers",
    description:
      "Everest region trekkers who want to reach Kathmandu the same day, without a Lukla stopover.",
  },
  {
    title: "Kala Patthar return passengers",
    description:
      "Passengers returning after a Kala Patthar climb who want a single, uninterrupted journey home.",
  },
  {
    title: "Climbers and expedition members",
    description:
      "Climbers and expedition members traveling from Gorakshep to Kathmandu who have an international flight to catch and cannot risk delays in Lukla.",
  },
  {
    title: "Families and groups",
    description:
      "Families and groups requesting a private charter for full control over timing.",
  },
  {
    title: "Solo travelers",
    description:
      "Solo travelers looking for a shared helicopter seat covering the entire distance.",
  },
  {
    title: "Professional teams",
    description:
      "Guides, researchers, film crews, and project staff needing a direct exit from the upper Khumbu region.",
  },
  {
    title: "Trail-weary trekkers",
    description:
      "Trekkers who want to avoid the long and tiring journey by road from Gorakshep to Kathmandu.",
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
