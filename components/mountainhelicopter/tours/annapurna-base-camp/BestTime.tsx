import Image from "next/image";

const seasons = [
  {
    name: "Spring",
    months: "March–May",
    temperature: "-5°C to 10°C",
    visibility: "Excellent",
    cancellationRisk: "Low",
    status: "Highly Recommended",
    statusClass: "bg-[#2f8f57] text-white",
    image: "/images/annapurna-base-camp/annapurna-gallary1.jpg",
    description:
      "Spring brings generally stable mornings, clear mountain views and colourful rhododendron forests below the Annapurna Sanctuary. Fresh snowfall can make the peaks especially bright and photogenic.",
  },
  {
    name: "Autumn",
    months: "September–November",
    temperature: "-5°C to 8°C",
    visibility: "Excellent",
    cancellationRisk: "Lowest",
    status: "Best Season",
    statusClass: "bg-[#2f8f57] text-white",
    image: "/images/annapurna-base-camp/annapurna-gallary2.jpg",
    description:
      "After the monsoon, the atmosphere is often exceptionally clear. Autumn offers crisp skies, stable conditions and some of the finest views of Annapurna I, Machhapuchhre and the surrounding sanctuary.",
  },
  {
    name: "Winter",
    months: "December–February",
    temperature: "-12°C to 4°C",
    visibility: "Good to Excellent",
    cancellationRisk: "Moderate",
    status: "Weather Dependent",
    statusClass: "bg-[#e59b20] text-white",
    image: "/images/annapurna-base-camp/annapurna-gallary3.jpg",
    description:
      "Winter can provide very clear skies and dramatic snow-covered scenery. However, freezing temperatures, fresh snowfall and strong winds may affect the landing area and flight schedule.",
  },
  {
    name: "Monsoon",
    months: "June–August",
    temperature: "2°C to 12°C",
    visibility: "Variable to Poor",
    cancellationRisk: "High",
    status: "Not Recommended",
    statusClass: "bg-[#ef3434] text-white",
    image: "/images/annapurna-base-camp/annapurna-gallary4.jpg",
    description:
      "Cloud, rain and reduced mountain visibility are common during the monsoon. Flights may still operate on suitable mornings, but delays, route changes and cancellations are more likely.",
  },
];

export default function BestTime() {
  return (
    <section className="bg-white px-5 py-16 md:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* SECTION HEADING */}
        <div className="text-center">
          <p className="flex items-center justify-center gap-3 font-manrope text-xs font-bold uppercase tracking-[0.22em] text-[#d99a1b]">
            <span className="h-px w-7 bg-[#d99a1b]" />
            Best Months to Fly
          </p>

          <h2 className="mt-4 font-fraunces text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#08294d] md:text-4xl">
            When to take the Annapurna Base Camp{" "}
            <span className="text-[#e0a326]">helicopter tour.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-4xl font-manrope text-sm leading-7 text-slate-500">
            The Annapurna Base Camp helicopter tour can operate throughout the
            year, but visibility, wind, snowfall and landing conditions vary
            significantly by season. Spring and autumn generally offer the most
            reliable combination of clear skies and stable weather.
          </p>
        </div>

        {/* SEASON CARDS */}
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {seasons.map((season) => (
            <article
              key={season.name}
              className="group relative min-h-[360px] overflow-hidden rounded-[22px] bg-[#dce4eb]"
            >
              <Image
                src={season.image}
                alt={`${season.name} season at Annapurna Base Camp`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              {/* IMAGE OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#061b35]/80 via-[#061b35]/20 to-transparent" />

              {/* SEASON CONTENT */}
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
            Himalayan weather can change quickly in every season. Early-morning
            departures are generally preferred, while the final route, landing
            and departure decision remains with the pilot based on visibility,
            wind, cloud cover, snow conditions and aircraft performance.
          </p>
        </div>
      </div>
    </section>
  );
}