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
            What Does the Gorakshep to Kathmandu Helicopter Flight{" "}
            <span className="text-[#e0a326]">Feels Like.</span>
          </h2>
        </div>

        {/* DESCRIPTION */}
        <div className="mx-auto mt-8 max-w-7xl space-y-5 font-manrope text-sm leading-7 text-slate-500">
          <p>
            Because Gorakshep is situated at an altitude of over 5,000 meters,
            the descent from the air is fast and spectacular, with the rugged
            alpine landscape quickly giving way to lush forests, terraced
            farmland, and larger mountain settlements. The helicopter lifts off
            from the high valley and descends out of the Khumbu, offering a
            final sweeping look at the peaks that surround the Everest Base Camp
            trail.
          </p>
          <p>
            From there, the flight continues over the rolling foothills of the
            Khumbu region and the terraced hills of central Nepal, typically
            including a brief refueling stop at Lukla before the final approach
            into the Kathmandu Valley. Light turbulence over mountain ridges is
            a normal part of Himalayan flying, and every stage of the journey is
            operated only when weather and safety conditions are suitable.
          </p>
          <p>
            Upon arrival in Kathmandu, passengers disembark at the domestic
            terminal and collect their baggage, ending their Everest Base Camp
            journey with a comfortable helicopter return from the heart of the
            Himalayas.
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
