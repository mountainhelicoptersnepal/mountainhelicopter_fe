import Image from "next/image";

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
            What The Gosaikunda Lake Helicopter Tour{" "}
            <span className="text-[#e0a326]">Feels Like.</span>
          </h2>
        </div>

        {/* DESCRIPTION */}
        <div className="mx-auto mt-8 max-w-6xl space-y-5 font-manrope text-sm leading-7 text-slate-500">
           <div>
            <h3 className="font-fraunces text-xl font-semibold text-[#08294d]">
              The Instant the Sacred Lakes Come Into View
            </h3>

            <p className="mt-3">
              Less than twenty minutes after departing Kathmandu, the
              helicopter leaves the busy city behind and flies above the green
              ridges and dense forests of Shivapuri National Park. The urban
              landscape quickly gives way to quiet valleys, terraced hills and
              remote Himalayan settlements.
            </p>
          </div>

          <p>
            Flying north, the Airbus H125 passes above traditional Tamang
            villages and forest-covered slopes before climbing toward the
            Langtang Himalayan range. On clear mornings, passengers can see
            Langtang Lirung, Dorje Lakpa, Ganesh Himal and the surrounding
            mountain ridgelines through the helicopter windows.
          </p>

          <p>
            Then the ridges suddenly open. Gosaikunda Lake appears at
            approximately 4,380 metres, resting among dark rocks, snow-covered
            slopes and the open Himalayan sky. Nearby, Bhairab Kunda and
            Saraswati Kunda form part of the sacred cluster of alpine lakes
            revered by Hindu and Buddhist pilgrims.
          </p>

          <div>
            <h3 className="font-fraunces text-xl font-semibold text-[#08294d]">
              Landing Beside Gosaikunda Lake
            </h3>

            <p className="mt-3">
              When conditions allow, the helicopter lands near Gosaikunda Lake.
              As the rotors slow, the sound of the aircraft gives way to cold
              mountain air, prayer flags and the stillness of the sacred
              landscape.
            </p>
          </div>

          <p>
            Passengers normally receive approximately 30 to 40 minutes on the
            ground. This provides time to walk carefully around the permitted
            landing area, take photographs, offer a short prayer, touch the
            sacred water or quietly experience the surrounding mountains.
          </p>

          <p>
            The return flight offers another perspective over the Langtang
            ridges, Tamang villages, alpine valleys and Shivapuri forests before
            descending toward Kathmandu. Within a single morning, passengers
            can complete a journey that would normally require several days of
            trekking.
          </p>

          <p>
            The Gosaikunda helicopter tour is more than a scenic flight. It is
            a direct journey to one of Nepal&apos;s most sacred high-altitude
            lakes, combining pilgrimage, Himalayan scenery and cultural
            significance in one experience.
          </p>
        </div>

        {/* ROUTE MAP */}
        <div className="mx-auto mt-10 max-w-3xl overflow-hidden">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/images/gosaikunda-lake/gosaikunda-helicopter-route-map.png"
              alt="Gosaikunda Lake Helicopter Tour Route Map from Kathmandu"
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover object-top"
            />
          </div>
        </div>
          {/* OPERATIONAL NOTE */}
        <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5 text-center md:px-7">
          <p className="font-manrope text-xs leading-6 text-slate-500">
            The final route, landing location and ground duration depend on
            visibility, wind, cloud cover, passenger weight, lake-area
            conditions and the pilot&apos;s operational assessment.
          </p>
        </div>
      </div>
    </section>
  );
}