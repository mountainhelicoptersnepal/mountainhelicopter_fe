import Image from "next/image";

export default function FlightExperience() {
  return (
    <section className="bg-white px-5 pb-0 pt-8 md:px-8 md:pt-10 lg:pt-12">
      <div className="mx-auto max-w-7xl">
        {/* SECTION HEADING */}
        <div className="text-center">
          <p className="flex items-center justify-center gap-3 font-manrope text-xs font-bold uppercase tracking-[0.22em] text-[#d99a1b]">
            <span className="h-px w-7 bg-[#d99a1b]" />
            What This Flight Feels Like
          </p>

          <h2 className="mt-4 font-fraunces text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#08294d] md:text-4xl">
            What the Annapurna Base Camp Helicopter Tour{" "}
            <span className="text-[#e0a326]">Feels Like.</span>
          </h2>
        </div>

        {/* DESCRIPTION */}
        <div className="mx-auto mt-8 max-w-6xl space-y-5 font-manrope text-sm leading-7 text-slate-500">
          <div>
            <h3 className="font-fraunces text-xl font-semibold text-[#08294d]">
              The Moment the Annapurna Sanctuary Opens
            </h3>

            <p className="mt-3">
              Around twenty minutes after departing Pokhara, the helicopter
              leaves the city, lakes and rice terraces behind and enters the
              narrow Modi Khola gorge. Flying above Ghandruk, Chhomrong and
              Deurali, the Airbus H125 follows the natural gateway into the
              Annapurna Sanctuary—a route trekkers normally take several days
              to complete on foot.
            </p>
          </div>

          <p>
            Then the valley suddenly opens. Annapurna I, Annapurna South,
            Hiunchuli, Gangapurna and Machhapuchhre rise around the aircraft in
            a dramatic 360-degree amphitheatre of rock, snow and ice. Rather
            than seeing the Himalayas from a distant viewpoint, passengers fly
            directly between towering mountain walls, hanging glaciers and
            snow-covered ridgelines.
          </p>

          <div>
            <h3 className="font-fraunces text-xl font-semibold text-[#08294d]">
              Landing at Annapurna Base Camp
            </h3>

            <p className="mt-3">
              The helicopter lands at Annapurna Base Camp at approximately
              4,130 metres. As the rotors slow, the sudden mountain silence,
              freezing alpine air, prayer flags and glacier views create an
              unforgettable sense of arrival inside the sanctuary.
            </p>
          </div>

          <p>
            Passengers normally receive around 20 minutes on the ground,
            depending on weather, wind, passenger condition and operational
            requirements. During this time, you can take photographs, walk
            around the landing area, enjoy hot Nepali tea and stand beneath the
            enormous south face of Annapurna I.
          </p>

          <p>
            The return flight provides another perspective of Machhapuchhre,
            Annapurna South and the deep Modi Valley before descending toward
            Pokhara. Within a single morning, passengers can enter one of
            Nepal&apos;s most spectacular mountain landscapes and return
            without completing the traditional multi-day trek.
          </p>

          <p>
            The Annapurna Base Camp helicopter tour is more than a scenic
            flight. It is a direct journey into the heart of the Annapurna
            Sanctuary, surrounded by some of the highest and most dramatic
            mountains in the Himalayas.
          </p>
        </div>

        {/* ROUTE MAP */}
        <div className="mx-auto mt-10 max-w-3xl overflow-hidden">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/images/annapurna-base-camp/annapurna-helicopter-route-map.png"
              alt="Annapurna Base Camp helicopter tour route map from Pokhara"
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}