import Image from "next/image";

const seasons = [
  {
    name: "Spring",
    months: "February-May",
    completion: "Most stable",
    visibility: "Excellent",
    status: "Most Recommended",
    statusClass: "bg-[#2f8f57] text-white",
    image: "/images/muktinath-pilgrimage/muktinath-gallary2.png",
  },
  {
    name: "Autumn",
    months: "September–November",
    completion: "High",
    visibility: "Excellent",
    status: "Best Visibility",
    statusClass: "bg-[#2f8f57] text-white",
    image: "/images/muktinath-pilgrimage/muktinath-gallary3.png",
  },
  {
    name: "Monsoon",
    months: "July-August",
    completion: "30-40% cancellation risk",
    visibility: "Challenging",
    status: "Possible",
    statusClass: "bg-[#ef3434] text-white",
    image: "/images/muktinath-pilgrimage/mustang.jpg",
  },
  {
    name: "Winter",
    months: "December-January",
    completion: "Weather dependent",
    visibility: "Very clear on crisp days",
    status: "Cold but Possible",
    statusClass: "bg-[#ef3434] text-white",
    image: "/images/muktinath-pilgrimage/muktinath-gallary5.png",
  },
];

export default function BestTime() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 py-16 md:py-24 lg:py-28">
        {/* SECTION HEADING */}
        <div className="text-center">
          <p className="flex items-center justify-center gap-3 font-manrope text-xs font-bold uppercase tracking-[0.22em] text-[#d99a1b]">
            <span className="h-px w-7 bg-[#d99a1b]" />
            Seasons
          </p>

          <h2 className="mt-4 font-fraunces text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#08294d] md:text-4xl">
            Best Season for the Muktinath{" "}
            <span className="text-[#e0a326]">Helicopter Tour.</span>
          </h2>
        </div>

        {/* SEASON CARDS */}
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {seasons.map((season) => (
            <article
              key={season.name}
              className="group relative min-h-[280px] overflow-hidden"
            >
              <Image
                src={season.image}
                alt={`${season.name} season for the Muktinath Helicopter Tour`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#061b35]/55 via-[#061b35]/10 to-transparent" />

              <div className="absolute inset-x-5 bottom-6 rounded-lg border border-white/20 bg-white/55 px-5 py-4 shadow-lg backdrop-blur-md md:inset-x-12">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-fraunces text-xl font-semibold text-[#0a4d83]">
                    {season.name}
                  </h3>

                  <span
                    className={`rounded-sm px-3 py-1 font-manrope text-[10px] font-bold uppercase tracking-[0.13em] ${season.statusClass}`}
                  >
                    {season.status}
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-4">
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
                      Completion
                    </p>

                    <p className="mt-1 font-manrope text-sm font-medium text-[#25384b]">
                      {season.completion}
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
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
