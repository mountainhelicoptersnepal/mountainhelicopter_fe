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
            What Does the Everest Mountain Overfly with Gokyo Lake Landing from
            Kathmandu <span className="text-[#e0a326]">Feels Like.</span>
          </h2>
        </div>

        {/* DESCRIPTION */}
        <div className="mx-auto mt-8 max-w-7xl space-y-5 font-manrope text-sm leading-7 text-slate-500">
          <p>
            This Everest heli tour with Gokyo landing begins gently with a
            scenic hop from Kathmandu to Lukla, already offering sweeping views
            of Nepal's mid-hills and river valleys. After a short refueling
            stop, the flight continues deeper into the mountains, passing over
            Namche Bazaar and Tengboche before climbing into the wide,
            high-altitude valley that leads toward the Everest region. As the
            aircraft gains altitude, forested foothills give way to alpine
            ridges, glacial streams, rocky moraines, and the first snow-covered
            summits. Along the way, the helicopter turns onto a close aerial
            overfly toward Everest Base Camp and Kala Patthar, flying past the
            Khumbu Icefall, Everest, Lhotse, and Nuptse before continuing on
            toward Gokyo.
          </p>
          <p>
            The real highlight begins as the helicopter descends toward the
            Gokyo Lakes, a chain of glacial lakes cradled high in the Dudh Koshi
            Valley. Touching down for five to ten minutes beside the still,
            turquoise water, passengers step out into the thin mountain air to a
            landscape that feels otherworldly. The landing spot sits beside Dudh
            Pokhari, the biggest of the Gokyo lakes, and the water is so still
            it mirrors the peaks above. The Ngozumpa Glacier, the longest
            glacier in Nepal, spreads across the valley below like a slow river
            of ice. Look up from here, and you can see Cho Oyu, Everest, Lhotse,
            Makalu, and Gauri Shankar all at once, while the Gokyo Ri ridge
            towers overhead, a viewpoint that normally takes trekkers most of a
            day to reach. There's time here to soak in the silence, snap photos
            of the mountains reflected in the lake, and just stand in a spot
            that very few people ever get to see this close.
          </p>
          <p>
            After the landing, the helicopter lifts off again and heads directly
            back toward Kathmandu, stopping briefly at Lukla to refuel before
            continuing home. Rotor noise, gentle vibration, and light turbulence
            over ridgelines and near the high-altitude landing zone are normal
            parts of the experience, and every leg of the flight is flown only
            when conditions are judged safe. From the overfly of the world's
            highest mountains to the serene touchdown beside the Gokyo Lakes,
            the journey offers an unforgettable, close-up view of the Everest
            region from the air.
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
