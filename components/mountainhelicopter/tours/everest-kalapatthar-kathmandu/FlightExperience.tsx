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
            What Does the Everest Mountain Overfly with Kala Patthar Landing and
            Breakfast at HEV <span className="text-[#e0a326]">Feels Like.</span>
          </h2>
        </div>

        {/* DESCRIPTION */}
        <div className="mx-auto mt-8 max-w-7xl space-y-5 font-manrope text-sm leading-7 text-slate-500">
          <p>
            The heli ride to Everest begins gently with a scenic hop from
            Kathmandu to Lukla, which offers sweeping views of Nepal's mid-hills
            and river valleys. After a short refueling stop, the flight
            continues deeper into the mountains, passing over Namche Bazaar and
            Tengboche before climbing into the wide, high-altitude Khumbu
            Valley. Along the way, forested foothills give way to alpine ridges,
            glacial streams, rocky moraines, and the first snow-covered summits.
          </p>

          <p>
            The real highlight comes next. The helicopter climbs close past
            Everest Base Camp and the Khumbu Glacier before touching down at
            Kala Patthar at 5,545 meters. The landing itself lasts around five
            minutes, just enough time to step out onto the high ridgeline and
            take in a completely unobstructed view of Mount Everest and its
            neighboring giants. From this famous viewpoint, the world's highest
            mountain fills the horizon, and there is time to soak in the thin
            air, capture photos, and absorb a panorama that most trekkers spend
            weeks to reach.
          </p>

          <p>
            Once the landing is complete, the whole group flies on together to
            Hotel Everest View, where a relaxed 15- to 20-minute breakfast is
            served with panoramic views of Everest, Ama Dablam, and Thamserku, a
            welcome, unhurried moment after the intensity of the Kala Patthar
            touchdown. From there, the helicopter retraces its route through
            Lukla and back to Kathmandu. Rotor noise, gentle vibration and light
            turbulence over ridgelines and near the high-altitude landing zone
            are normal parts of the experience, and every leg of the flight is
            flown only when conditions are judged safe.
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
