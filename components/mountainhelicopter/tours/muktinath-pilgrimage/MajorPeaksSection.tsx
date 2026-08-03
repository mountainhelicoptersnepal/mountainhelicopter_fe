const peaks = [
  ["Dhaulagiri", "8,167 m"],
  ["Annapurna I", "8,091 m"],
  ["Nilgiri North", "7,061 m"],
  ["Nilgiri Central", "6,940 m"],
  ["Nilgiri South", "6,839 m"],
  ["Annapurna South", "7,219 m"],
  ["Baraha Chuli / Mt. Fang", "7,647 m"],
  ["Hiunchuli", "6,441 m"],
  ["Mardi Himal", ""],
];

export default function MajorPeaksSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24 lg:px-16 lg:py-28">
        <div className="text-center">
          <p className="flex items-center justify-center gap-3 font-manrope text-xs font-bold uppercase tracking-[0.22em] text-[#d99a1b]">
            <span className="h-px w-7 bg-[#d99a1b]" />
            Major Mountains Visible
          </p>

          <h2 className="mt-4 font-fraunces text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#08294d] md:text-4xl">
            Annapurna and Dhaulagiri{" "}
            <span className="text-[#e0a326]">from above.</span>
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {peaks.map(([name, elevation]) => (
            <article
              key={name}
              className="border border-slate-200 bg-white px-5 py-5 shadow-[0_10px_30px_rgba(8,41,77,0.04)]"
            >
              <h3 className="font-manrope text-sm font-bold uppercase tracking-[0.12em] text-[#08294d]">
                {name}
              </h3>

              {elevation && (
                <p className="mt-2 font-manrope text-sm text-slate-500">
                  {elevation}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
