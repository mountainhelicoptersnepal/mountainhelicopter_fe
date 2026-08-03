import Image from "next/image";

const seasons = [
  {
    name: "Spring",
    months: "March–May",
    temperature: "-3°C to 10°C",
    visibility: "Excellent",
    cancellationRisk: "Low",
    status: "Highly Recommended",
    statusClass: "bg-[#2f8f57] text-white",
    image: "/images/gosaikunda-lake/gosaikunda-lake4.png",
    description:
      "Spring brings relatively warm daytime conditions, stable mornings and clear views of Gosaikunda, Langtang Lirung and the Ganesh Himal range. It is one of the most reliable seasons for the helicopter tour.",
  },
  {
    name: "Autumn",
    months: "September–November",
    temperature: "-5°C to 8°C",
    visibility: "Excellent",
    cancellationRisk: "Lowest",
    status: "Best Season",
    statusClass: "bg-[#2f8f57] text-white",
    image: "/images/gosaikunda-lake/gosaikunda-lake3.png",
    description:
      "Autumn follows the monsoon and usually provides the clearest mountain visibility of the year. Clean air, dry weather and stable mornings create excellent conditions for pilgrimage, sightseeing and photography.",
  },
  {
    name: "Winter",
    months: "December–February",
    temperature: "Down to -15°C",
    visibility: "Good to Excellent",
    cancellationRisk: "Moderate",
    status: "With Caution",
    statusClass: "bg-[#e59b20] text-white",
    image: "/images/gosaikunda-lake/gosaikunda-lake1.png",
    description:
      "Winter transforms Gosaikunda into a dramatic frozen landscape surrounded by snow-covered ridges. Visibility can be excellent, but severe cold, snowfall and icy landing conditions may affect operations.",
  },
  {
    name: "Monsoon",
    months: "June–August",
    temperature: "4°C to 14°C",
    visibility: "Poor to Variable",
    cancellationRisk: "High",
    status: "Not Recommended",
    statusClass: "bg-[#ef3434] text-white",
    image: "/images/gosaikunda-lake/gosaikunda-lake2.png",
    description:
      "Frequent cloud, rainfall and reduced visibility make the monsoon less suitable for helicopter operations. Flights may operate during short clear-weather windows, but delays and cancellations are more common.",
  },
];

export default function BestTime() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 py-16 md:py-24 lg:py-28">
       <div className="text-center">
          <p className="flex items-center justify-center gap-3 font-manrope text-xs font-bold uppercase tracking-[0.22em] text-[#d99a1b]">
            <span className="h-px w-7 bg-[#d99a1b]" />
            Best Time to Fly
          </p>

          <h2 className="mt-4 font-fraunces text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#08294d] md:text-4xl">
            When to take the Gosaikunda{" "}
            <span className="text-[#e0a326]">helicopter tour.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-4xl font-manrope text-sm leading-7 text-slate-500">
            The Gosaikunda helicopter tour depends heavily on clear visibility
            and suitable visual flight conditions. Spring and autumn normally
            provide the most stable weather, while winter offers dramatic
            scenery with colder and more demanding landing conditions.
          </p>
        </div>

        {/* SEASON CARDS */}
        <div className="mt-12 grid gap-5 md:grid-cols-2">
           {seasons.map((season) => (
            <article
              key={season.name}
              className="group relative min-h-[370px] overflow-hidden rounded-[22px] bg-[#dce4eb]"
            >
              <Image
                src={season.image}
                alt={`${season.name} season at Gosaikunda Lake`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />


              {/* IMAGE OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#061b35]/80 via-[#061b35]/20 to-transparent" />

              {/* SEASON INFORMATION */}
              <div className="absolute inset-x-5 bottom-5 rounded-xl border border-white/20 bg-white/70 px-5 py-5 shadow-lg backdrop-blur-md md:inset-x-7">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="font-manrope text-[10px] font-bold uppercase tracking-[0.16em] text-[#d99a1b]">
                      {season.months}
                    </p>

                    <h3 className="mt-1 font-fraunces text-2xl font-semibold text-[#0a4d83]">
                      {season.name}
                    </h3>
                  </div>

                  <span
                    className={`rounded-sm px-3 py-1.5 font-manrope text-[9px] font-bold uppercase tracking-[0.12em] ${season.statusClass}`}
                  >
                    {season.status}
                  </span>
                </div>

                <p className="mt-3 font-manrope text-xs leading-5 text-[#5f6f80]">
                  {season.description}
                </p>

                <div className="mt-5 grid grid-cols-3 gap-3 border-t border-slate-300/60 pt-4">
                  <div>
                    <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.12em] text-slate-500">
                      Temperature
                    </p>

                    <p className="mt-1 font-manrope text-xs font-semibold text-[#25384b]">
                      {season.temperature}
                    </p>
                  </div>

                  <div>
                    <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.12em] text-slate-500">
                      Visibility
                    </p>

                    <p className="mt-1 font-manrope text-xs font-semibold text-[#25384b]">
                      {season.visibility}
                    </p>
                  </div>

                  <div>
                    <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.12em] text-slate-500">
                      Cancellation Risk
                    </p>

                    <p className="mt-1 font-manrope text-xs font-semibold text-[#25384b]">
                      {season.cancellationRisk}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* WEATHER NOTE */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5 text-center md:px-8">
          <p className="font-manrope text-xs leading-6 text-slate-500">
            Gosaikunda flights normally operate in the morning when winds are
            lighter and visibility is clearer. The final departure, route and
            landing decision remains with the pilot and depends on cloud,
            visibility, wind, snowfall and landing-zone conditions.
          </p>
        </div>
      </div>
    </section>
  );
}