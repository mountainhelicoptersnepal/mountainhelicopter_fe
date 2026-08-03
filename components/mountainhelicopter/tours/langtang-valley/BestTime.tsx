import Image from "next/image";

const seasons = [
  {
    name: "Spring",
    months: "March-May",
    visibility: "Excellent",
    status: "Recommended",
    description:
      "Clear morning skies, vivid rhododendron blooms, and Kyanjin Gompa temperatures around -2 C to 12 C depending on month and weather.",
    image: "/images/langtang-valley/langtang-gallary2.jpg",
  },
  {
    name: "Autumn",
    months: "September-November",
    visibility: "Excellent",
    status: "High Season",
    description:
      "Crystal clear post-monsoon skies and crisp views of Langtang Lirung, Ganesh Himal, Dorje Lakpa, and surrounding peaks.",
    image: "/images/langtang-valley/langtang-gallary3.jpg",
  },
  {
    name: "Monsoon",
    months: "June-August",
    visibility: "Reduced",
    status: "Weather Dependent",
    description:
      "Rain and clouds increase cancellation risk, though clear early mornings may operate and the valleys are lush with full waterfalls.",
    image: "/images/langtang-valley/langtang-gallary4.jpg",
  },
  {
    name: "Winter",
    months: "December-February",
    visibility: "Often Clear",
    status: "Cold but Possible",
    description:
      "Cold and snowy at 3,870 m, but often excellent for clear mountain views if you bring warm clothing and suitable footwear.",
    image: "/images/langtang-valley/langtang-gallary5.jpg",
  },
];

export default function BestTime() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24 lg:px-16 lg:py-28">
        <div className="text-center">
          <p className="flex items-center justify-center gap-3 font-manrope text-xs font-bold uppercase tracking-[0.22em] text-[#d99a1b]">
            <span className="h-px w-7 bg-[#d99a1b]" />
            Best Time and Weather
          </p>

          <h2 className="mt-4 font-fraunces text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#08294d] md:text-4xl">
            When to fly{" "}
            <span className="text-[#e0a326]">Langtang Valley.</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {seasons.map((season) => (
            <article key={season.name} className="group relative min-h-[320px] overflow-hidden">
              <Image
                src={season.image}
                alt={`${season.name} season for the Langtang Helicopter Tour`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061b35]/65 via-[#061b35]/20 to-transparent" />
              <div className="absolute inset-x-5 bottom-6 rounded-lg border border-white/20 bg-white/70 px-5 py-4 shadow-lg backdrop-blur-md md:inset-x-12">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-fraunces text-xl font-semibold text-[#0a4d83]">
                    {season.name}
                  </h3>
                  <span className="rounded-sm bg-[#2f8f57] px-3 py-1 font-manrope text-[10px] font-bold uppercase tracking-[0.13em] text-white">
                    {season.status}
                  </span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-manrope text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                      Months
                    </p>
                    <p className="mt-1 font-manrope text-sm font-medium text-[#25384b]">
                      {season.months}
                    </p>
                  </div>
                  <div>
                    <p className="font-manrope text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                      Visibility
                    </p>
                    <p className="mt-1 font-manrope text-sm font-medium text-[#25384b]">
                      {season.visibility}
                    </p>
                  </div>
                </div>
                <p className="mt-4 font-manrope text-xs leading-5 text-slate-600">
                  {season.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
