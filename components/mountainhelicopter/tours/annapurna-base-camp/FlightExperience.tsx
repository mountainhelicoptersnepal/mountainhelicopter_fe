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
            What The Annapurna Base Camp Helicopter Tour{" "}
            <span className="text-[#e0a326]">Feels Like.</span>
          </h2>
        </div>

        {/* DESCRIPTION */}
        <div className="mx-auto mt-8 max-w-7xl space-y-5 font-manrope text-sm leading-7 text-slate-500">
          <p>
            As the helicopter gains altitude, the landscape changes quickly.
            Forested ridges give way to steep rock walls, hanging glaciers, and
            snow-covered summits. Machhapuchhre appears above the valley while
            Annapurna South and Hiunchuli rise ahead. The confined approach then
            opens into the vast natural amphitheater of the Sanctuary.
          </p>
          <p>
            {" "}
            Annapurna I, Annapurna South, Hiunchuli, Gangapurna, and
            Machhapuchhre surround the aircraft in an extraordinary panorama of
            rock, snow, and ice. Instead of seeing the range from a distant
            viewpoint, passengers enter the center of the mountain landscape
            and, when conditions allow, land at Annapurna Base Camp itself.
          </p>
          <p>
            Ground time is deliberately brief because passengers travel from
            Kathmandu to 4,130 meters without acclimatization. The usual landing
            window is approximately 15–30 minutes, although the pilot may
            shorten, relocate, or cancel the landing because of wind, clouds,
            snow, aircraft performance, or other safety considerations. During
            the stop, passengers can take photographs, enjoy the panoramic view,
            and purchase tea or breakfast from a lodge if it is open and time
            permits.
          </p>
          <p>
            The return journey follows the Sanctuary and Modi Khola Valley back
            towards Kathmandu. Within a single morning, passengers can
            experience one of Nepal’s most celebrated mountain settings and
            return to their hotel with the rest of the day still available.
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
