export default function FlightExperience() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 py-16 md:py-24 lg:py-28">
        {/* SECTION HEADING */}
        <div className="text-center">
          <p className="flex items-center justify-center gap-3 font-manrope text-xs font-bold uppercase tracking-[0.22em] text-[#d99a1b]">
            <span className="h-px w-7 bg-[#d99a1b]" />
            What This Flight Feels Like
          </p>

          <h2 className="mt-4 font-fraunces text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#08294d] md:text-4xl">
            What The Annapurna Base Camp Helicopter Tour {" "}
            <span className="text-[#e0a326]">Feels Like.</span>
          </h2>
        </div>

        {/* DESCRIPTION */}
        <div className="mx-auto mt-8 max-w-7xl space-y-5 font-manrope text-sm leading-7 text-slate-500">
          <p>
            The flight leaves Kathmandu and quickly replaces city views with terraced hills, river valleys, and the green approach to the Annapurna region.
          </p>
          <p>
            As the helicopter enters the Modi Khola corridor, the mountains rise sharply and the Annapurna Sanctuary begins to feel enclosed by snow, ice, and rock.
          </p>
          <p>
            Annapurna I, Annapurna South, Hiunchuli, Gangapurna, and Machhapuchhre dominate the skyline around the base camp.
          </p>
          <p>
            When landing conditions permit, passengers step out briefly at 4,130 meters for photographs and a direct sense of the sanctuary before returning to Kathmandu.
          </p>
        </div>

        {/* ROUTE MAP */}
        {/* <div className="mx-auto mt-10 max-w-3xl overflow-hidden">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/images/everest-base-camp/everest-helicopter-route-map.png"
              alt="Everest Base Camp helicopter tour route map from Kathmandu"
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover object-top"
            />
          </div>
        </div> */}
      </div>
    </section>
  );
}
