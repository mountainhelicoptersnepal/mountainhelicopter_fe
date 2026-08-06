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
            What The Gosaikunda Helicopter Tour {" "}
            <span className="text-[#e0a326]">Feels Like.</span>
          </h2>
        </div>

        {/* DESCRIPTION */}
        <div className="mx-auto mt-8 max-w-7xl space-y-5 font-manrope text-sm leading-7 text-slate-500">
          <p>
            Shortly after the helicopter leaves Kathmandu, the city begins to
            disappear behind the green ridges to the north. Roads and dense
            neighborhoods give way to forested hills, river valleys, terraced
            slopes and small mountain settlements.
          </p>
          <p>
            As the helicopter continues towards Rasuwa, the landscape becomes
            increasingly alpine. On a clear morning, the Ganesh Himal and
            Langtang ranges appear beyond the ridges. Snow-covered summits frame
            the horizon while the helicopter climbs towards the high country of
            Langtang National Park.
          </p>
          <p>
            Then Gosaikunda comes into view: a sacred lake held within a stark
            landscape of rock, water, snow, and sky. Bhairab Kunda, Saraswati
            Kunda, and other lakes form part of the wider pilgrimage setting.
            The contrast with Kathmandu, left behind only minutes earlier, is
            extraordinary.
          </p>
          <p>
            When the pilot confirms that conditions are safe, the helicopter
            lands at the designated site near the lake. The usual ground window
            is approximately 15-30 minutes, although it may be shortened because
            of wind, cloud, snow, passenger wellbeing or operational
            requirements.
          </p>
          <p>
            During the stop, passengers can take photographs, offer a short
            prayer or touch the lake water if the crew confirms that it is safe
            to do so. Entering the water or attempting a full bath is not
            recommended because the lake is extremely cold, the ground may be
            icy, and passengers are exposed to 4,380 metres without
            acclimatisation.
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
