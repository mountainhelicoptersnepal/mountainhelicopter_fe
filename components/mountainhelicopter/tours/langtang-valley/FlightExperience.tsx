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
            What The Langtang Helicopter Tour{" "}
            <span className="text-[#e0a326]">Feels Like.</span>
          </h2>
        </div>

        {/* DESCRIPTION */}
        <div className="mx-auto mt-8 max-w-7xl space-y-5 font-manrope text-sm leading-7 text-slate-500">
          <p>
            Soon after leaving Kathmandu, the dense city gives way to the green
            northern rim of the valley. Forested hills, winding roads, rivers,
            and terraced slopes pass beneath the helicopter as it continues
            towards Rasuwa.
          </p>
          <p>
            Beyond the foothills, the terrain becomes steeper and more remote.
            The route approaches the Langtang River corridor, where settlements
            and walking trails follow the valley floor. Dense forest gradually
            gives way to alpine pastures, exposed rock, and glacial landscapes.
          </p>
          <p>
            As upper Langtang opens ahead, Langtang Lirung rises above the
            valley. Other peaks, including Dorje Lakpa, Yala Peak, Naya Kanga,
            and sections of Ganesh Himal, may appear depending on visibility and
            the day&apos;s flight path. Rather than viewing the Himalaya from
            Kathmandu, passengers enter a valley enclosed by snow-covered
            summits.
          </p>
          <p>
            When conditions permit, the helicopter lands near Kyanjin Gompa.
            After the engine slows, passengers step into cold mountain air among
            stone buildings, prayer flags, and broad alpine surroundings. The
            typical ground window is approximately 20-45 minutes, although the
            pilot may shorten it because of weather, aircraft performance, or
            passenger well-being.
          </p>
          <p>
            There may be time to walk through part of the village, see the
            monastery exterior, purchase tea or breakfast, or visit the
            cheese-production center if it is open and close enough to the
            landing area. These activities cannot all be guaranteed during a
            short operational stop. The pilot&apos;s boarding time must be
            followed exactly.
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
