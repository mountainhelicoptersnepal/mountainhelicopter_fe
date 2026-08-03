const peaks = [
  ["Langtang Lirung", "7,227 m", "The highest peak of the Langtang range."],
  ["Dorje Lakpa", "6,966 m", "A triangular-shaped peak visible from Kyanjin Gompa."],
  ["Ganesh Himal", "7,422 m", "Visible toward western Langtang."],
  ["Yala Peak", "5,500 m", "A trekking peak near Langtang Valley."],
  ["Naya Kanga", "5,844 m", "A trekking peak around Langtang Valley."],
  ["Gaurishankar", "", "Part of the broader Himalayan views noted for the tour."],
];

export default function MajorPeaksSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24 lg:px-16 lg:py-28">
        <div className="text-center">
          <p className="flex items-center justify-center gap-3 font-manrope text-xs font-bold uppercase tracking-[0.22em] text-[#d99a1b]">
            <span className="h-px w-7 bg-[#d99a1b]" />
            Surrounding Peaks
          </p>
          <h2 className="mt-4 font-fraunces text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#08294d] md:text-4xl">
            Peaks around{" "}
            <span className="text-[#e0a326]">Langtang Valley.</span>
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {peaks.map(([name, elevation, description]) => (
            <article key={name} className="border border-slate-200 bg-white px-5 py-5 shadow-[0_10px_30px_rgba(8,41,77,0.04)]">
              <h3 className="font-manrope text-sm font-bold uppercase tracking-[0.12em] text-[#08294d]">
                {name}
              </h3>
              {elevation && <p className="mt-2 font-manrope text-sm text-slate-500">{elevation}</p>}
              <p className="mt-3 font-manrope text-xs leading-5 text-slate-500">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
