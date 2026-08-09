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
            What Does the Kathmandu to Lukla Helicopter Flight{" "}
            <span className="text-[#e0a326]">Feels Like?</span>
          </h2>
        </div>

        {/* DESCRIPTION */}
        <div className="mx-auto mt-8 max-w-7xl space-y-5 font-manrope text-sm leading-7 text-slate-500">
          <p>
           Passengers enjoy a comfortable and scenic helicopter flight aboard a modern helicopter, operated by experienced professional pilots with many years of high-altitude flying experience. The journey offers a smooth and efficient transfer from Kathmandu to Lukla, combining convenience with spectacular Himalayan scenery. Throughout the flight, the pilot ensures a safe and enjoyable experience, allowing travelers to relax and take in the breathtaking mountain landscapes before arriving in the heart of the Everest region.
          </p>
          <p>
            Shortly after takeoff, Kathmandu gives way to rolling hills, terraced farmland, winding river valleys, and increasingly dramatic Himalayan landscapes as the helicopter heads toward the Everest region. On clear days, passengers are treated to spectacular views of snow-capped peaks, lush valleys, and traditional mountain villages, making the flight itself a memorable part of the journey. While occasional light turbulence may be experienced when flying through mountain terrain, this is a normal part of helicopter operations, and flights are conducted only when weather conditions are considered safe.
          </p>
          
          <p>
         Upon arrival at Tenzing-Hillary Airport in Lukla, passengers are welcomed to the gateway of the Everest region. After safely disembarking under the guidance of the flight crew, travelers can begin their trek or continue their mountaineering adventure in the heart of the Khumbu region.

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
