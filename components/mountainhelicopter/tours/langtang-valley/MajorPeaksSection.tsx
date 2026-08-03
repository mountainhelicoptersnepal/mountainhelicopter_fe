const peaks = [
  {
    rank: "World’s highest",
    name: "Mount Everest",
    height: "8,848 m / 29,032 ft",
    description:
      "The world’s highest mountain and the defining summit of the Everest region, visible during the approach toward Everest Base Camp and Kala Patthar.",
    featured: true,
  },
  {
    rank: "World’s 4th highest",
    name: "Lhotse",
    height: "8,516 m / 27,940 ft",
    description:
      "Connected to Mount Everest by the South Col and recognised for its immense and dramatic south face.",
  },
  {
    rank: "World’s 5th highest",
    name: "Makalu",
    height: "8,485 m / 27,838 ft",
    description:
      "A remote Himalayan giant distinguished by its striking four-sided pyramid-shaped summit.",
  },
  {
    rank: "World’s 6th highest",
    name: "Cho Oyu",
    height: "8,188 m / 26,864 ft",
    description:
      "An enormous 8,000-metre peak positioned on the Nepal–Tibet border northwest of the Everest region.",
  },
  {
    name: "Nuptse",
    height: "7,861 m / 25,791 ft",
    description:
      "A massive ridgeline forming the western side of the Everest massif and dominating the skyline above the Khumbu Glacier.",
    tag: "EBC flyover",
  },
  {
    name: "Pumori",
    height: "7,161 m / 23,494 ft",
    description:
      "Often called the Daughter of Everest, Pumori rises directly behind Kala Patthar and creates one of the route’s most dramatic views.",
    tag: "Kala Patthar view",
  },
  {
    name: "Ama Dablam",
    height: "6,812 m / 22,349 ft",
    description:
      "One of Nepal’s most recognisable and photogenic mountains, clearly visible above Tengboche and the Khumbu Valley.",
  },
  {
    name: "Thamserku",
    height: "6,608 m / 21,680 ft",
    description:
      "A steep and striking mountain overlooking Namche Bazaar and the lower section of the Khumbu Valley.",
  },
  {
    name: "Cholatse",
    height: "6,440 m / 21,129 ft",
    description:
      "A sharply defined mountain recognised for its beautiful twin-summit ridge near the Gokyo Valley.",
  },
  {
    name: "Kongde Ri",
    height: "6,187 m / 20,299 ft",
    description:
      "A broad snow-covered mountain dominating the western skyline above Namche Bazaar.",
  },
];

const chartPeaks = [
  {
    name: "Kongde Ri",
    height: 6187,
  },
  {
    name: "Cholatse",
    height: 6440,
  },
  {
    name: "Thamserku",
    height: 6608,
  },
  {
    name: "Ama Dablam",
    height: 6812,
  },
  {
    name: "Pumori",
    height: 7161,
  },
  {
    name: "Nuptse",
    height: 7861,
  },
  {
    name: "Cho Oyu",
    height: 8188,
  },
  {
    name: "Makalu",
    height: 8485,
  },
  {
    name: "Lhotse",
    height: 8516,
  },
  {
    name: "Everest",
    height: 8848,
    featured: true,
  },
];

export default function MajorPeaksSection() {
  return (
    <section className="bg-[#020d1c] px-5 py-16 md:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[30px] bg-[#062a55] px-5 py-10 md:px-8 md:py-12 lg:px-10">
        {/* HEADING */}
        <div className="text-center">
          <p className="flex items-center justify-center gap-3 font-manrope text-xs font-bold uppercase tracking-[0.24em] text-[#e3a51f]">
            <span className="h-px w-7 bg-[#e3a51f]" />
            In the Flight Window
          </p>

          <h2 className="mt-4 font-fraunces text-3xl font-semibold leading-tight tracking-[-0.02em] text-white md:text-4xl">
            Major Peaks{" "}
            <span className="text-[#e4a923]">
              Encountered on the Everest Tour.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-4xl font-manrope text-sm leading-7 text-white/45">
            From Ama Dablam and Pumori to Lhotse and Mount Everest, the flight
            reveals the most iconic Himalayan peaks rising above the Khumbu
            Valley, Everest Base Camp and Kala Patthar.
          </p>
        </div>

        {/* PEAK CHART */}
        <div className="relative mt-10 overflow-x-auto rounded-2xl border border-white/10 bg-[#031426] px-4 pb-4 pt-6 md:px-6 md:pb-5 md:pt-8">
          <div className="relative h-[250px] min-w-[820px] md:h-[290px]">
            {/* GRID LINES */}
            <div className="absolute inset-x-0 top-[13%] border-t border-dashed border-white/10" />

            <div className="absolute inset-x-0 top-[35%] border-t border-dashed border-white/10" />

            <div className="absolute inset-x-0 top-[58%] border-t border-dashed border-white/10" />

            {/* GRID LABELS */}
            <span className="absolute left-0 top-[10%] font-manrope text-[10px] text-[#dca41f]">
              9,000 m
            </span>

            <span className="absolute left-0 top-[32%] font-manrope text-[10px] text-white/25">
              8,000 m
            </span>

            <span className="absolute left-0 top-[55%] font-manrope text-[10px] text-white/25">
              7,000 m
            </span>

            {/* MOUNTAINS */}
            <div className="absolute inset-x-4 bottom-0 flex h-[90%] items-end gap-1">
              {chartPeaks.map((peak, index) => {
                const minHeight = 6000;
                const maxHeight = 8848;

                const normalized =
                  ((peak.height - minHeight) /
                    (maxHeight - minHeight)) *
                    68 +
                  22;

                return (
                  <div
                    key={peak.name}
                    className="group relative flex h-full flex-1 items-end justify-center"
                  >
                    {/* PEAK LABEL */}
                    <span
                      className={`absolute left-1/2 z-10 -translate-x-1/2 whitespace-nowrap font-manrope text-[8px] font-bold uppercase transition-colors duration-300 md:text-[9px] ${
                        peak.featured
                          ? "text-[#efb01f]"
                          : "text-white/45 group-hover:text-white/80"
                      }`}
                      style={{
                        bottom: `${Math.min(normalized + 3, 94)}%`,
                      }}
                    >
                      {peak.featured
                        ? `${peak.name} · ${peak.height.toLocaleString()} m`
                        : peak.name}
                    </span>

                    {/* MOUNTAIN SHAPE */}
                    <div
                      className={`relative w-full max-w-[130px] transition-all duration-500 group-hover:opacity-100 ${
                        peak.featured
                          ? "bg-[#efb01f]"
                          : "bg-gradient-to-t from-[#04376d] to-[#0a69aa]"
                      }`}
                      style={{
                        height: `${normalized}%`,
                        clipPath:
                          "polygon(50% 0, 100% 100%, 0 100%)",
                        opacity: peak.featured
                          ? 1
                          : 0.68 + index * 0.025,
                      }}
                    />

                    {/* BASE POINT */}
                    <span className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1 rounded-full bg-white/55 transition-transform duration-300 group-hover:scale-150 group-hover:bg-[#efb01f]" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* PEAK CARDS */}
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {peaks.map((peak) => (
            <article
              key={peak.name}
              className={`group rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,0.18)] ${
                peak.featured
                  ? "border-[#d9a229]/50 bg-[#162b3e] hover:border-[#e5a923]"
                  : "border-white/10 bg-white/[0.035] hover:border-[#e5a923]/40 hover:bg-white/[0.06]"
              }`}
            >
              {peak.rank && (
                <p
                  className={`font-manrope text-xs font-bold tracking-[0.14em] ${
                    peak.featured
                      ? "text-[#e5a923]"
                      : "text-white/20"
                  }`}
                >
                  {peak.rank}
                </p>
              )}

              <h3 className="mt-3 font-fraunces text-lg font-semibold text-white transition-colors duration-300 group-hover:text-[#e5a923]">
                {peak.name}
              </h3>

              <p className="mt-2 font-manrope text-sm font-bold text-[#e5a923]">
                {peak.height}
              </p>

              <p className="mt-3 font-manrope text-xs leading-5 text-white/35 transition-colors duration-300 group-hover:text-white/55">
                {peak.description}
              </p>

              {peak.tag && (
                <span className="mt-4 inline-flex rounded-full border border-white/5 bg-white/5 px-3 py-1 font-manrope text-[10px] text-white/35 transition-colors duration-300 group-hover:border-[#e5a923]/20 group-hover:bg-[#e5a923]/10 group-hover:text-[#e5a923]">
                  {peak.tag}
                </span>
              )}
            </article>
          ))}
        </div>

        {/* VISIBILITY NOTE */}
        <p className="mt-5 text-center font-manrope text-xs text-white/25">
          Visibility of individual peaks depends on departure time, weather,
          cloud cover, flight route and passenger seat position.
        </p>
      </div>
    </section>
  );
}