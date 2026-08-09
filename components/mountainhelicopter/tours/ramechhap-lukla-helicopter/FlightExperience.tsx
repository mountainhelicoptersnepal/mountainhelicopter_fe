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
            What Does the Ramechhap to Lukla Helicopter Flight{" "}
            <span className="text-[#e0a326]">Feels Like.</span>
          </h2>
        </div>

        {/* DESCRIPTION */}
        <div className="mx-auto mt-8 max-w-7xl space-y-5 font-manrope text-sm leading-7 text-slate-500">
          <p>
            Soon after takeoff from Ramechhap, the helicopter follows the Tamakoshi Valley before climbing towards the beautiful hills and breathtaking mountain landscapes of the Everest region. As the altitude gradually increases, the scenery transforms from green valleys and terraced farmland to dense forests, steep ridges, and dramatic Himalayan terrain. Headsets are provided throughout the flight so passengers can comfortably hear the pilot's safety announcements and communicate when necessary.
          </p>
          <p>
            One of the highlights of the journey is witnessing the rapid change in landscape. In just 20 to 25 minutes, you travel from the warm lower hills of Ramechhap to the cool mountain environment of Lukla, more than 2,300 meters higher. On clear days, the views become even more spectacular as the surrounding valleys and distant Himalayan peaks come into sight.
          </p>
          <p>
           As the helicopter approaches, Lukla, Tenzing-Hillary Airport, and the surrounding mountain village gradually come into view below, offering a memorable arrival at the gateway to the Everest region. After landing, passengers remain seated until the crew confirms it is safe to disembark. Once you are outside the helicopter, your Everest region adventure begins as you meet your guide or proceed with your onward arrangements.
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
