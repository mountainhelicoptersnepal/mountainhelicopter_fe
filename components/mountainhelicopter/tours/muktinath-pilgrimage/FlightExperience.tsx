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
            What The Muktinath Helicopter Tour {" "}
            <span className="text-[#e0a326]">Feels Like.</span>
          </h2>
        </div>

        {/* DESCRIPTION */}
        <div className="mx-auto mt-8 max-w-7xl space-y-5 font-manrope text-sm leading-7 text-slate-500">
          <p>
            From Kathmandu, the helicopter leaves the green valley and heads
            towards the deep Kali Gandaki corridor. The longer route crosses
            Nepal&apos;s middle hills before approaching the Annapurna region, with
            a fuel stop possible according to the aircraft and operating plan.
          </p>
          <p>
            The landscape changes dramatically during the journey. Forested
            slopes and river valleys lead towards the vast Himalayan massifs.
            Dhaulagiri rises to the west, Annapurna to the east, and the
            Nilgiri peaks above the approach into Mustang.
          </p>
          <p>
            Beyond the wetter southern slopes, the terrain becomes dry, brown,
            and wind-carved. Jomsom, Marpha, Kagbeni, and other settlements may
            be visible depending on the route. The helicopter continues towards
            the Muktinath Valley and lands near Ranipauwa when wind, visibility,
            payload, and landing-site conditions permit.
          </p>
          <p>
            The pilgrimage continues on foot from the helipad. The approach is
            uphill and may include steps or uneven ground. Walking time varies
            with the actual landing point, the passenger&apos;s pace, and crowd
            conditions. At 3,710 meters, even a short walk can feel more
            demanding than it would at sea level.
          </p>
          <p>
            At the temple complex, passengers may receive darshan, pass beneath
            the 108 water spouts, and visit Jwala Mai if opening hours and the
            operational schedule allow. Ritual bathing is optional and should be
            approached cautiously because the water and air can be extremely
            cold.
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
