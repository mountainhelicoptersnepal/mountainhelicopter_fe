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
            What The Everest Helicopter Tour{" "}
            <span className="text-[#e0a326]">Feels Like.</span>
          </h2>
        </div>

        {/* DESCRIPTION */}
        <div className="mx-auto mt-8 max-w-6xl space-y-5 font-manrope text-sm leading-7 text-slate-500">
          <p>
            The moment the Khumbu Valley opens, just forty-five minutes after
            departing Kathmandu, the helicopter leaves the city sprawl behind
            and enters the dramatic Dudh Koshi river gorge. Flying past the
            famous Lukla airstrip, the horseshoe-shaped Namche Bazaar, and the
            sacred Tengboche Monastery, the Airbus H125 follows the ancient
            trekking route into the heart of the Everest region, a path
            trekkers usually take over a week to complete. Then the landscape
            dramatically shifts.
          </p>

          <p>
            Mount Everest, Lhotse, Nuptse, and Ama Dablam surround the aircraft
            in a breathtaking 360-degree amphitheatre of rock, snow, and ice.
            Rather than viewing the Himalayas from a distance, passengers fly
            directly over the massive Khumbu Glacier, the treacherous Khumbu
            Icefall, and the colourful expedition tents of Everest Base Camp.
          </p>

          <p>
            The helicopter lands at Kala Patthar at an altitude of 5,545
            metres. As the rotors slow, the crisp mountain air, the sheer scale
            of the world&apos;s highest peaks, and the panoramic views create
            an unforgettable atmosphere. Passengers have around 10 to 15
            minutes to step out, take photographs, absorb the surreal altitude,
            and experience the ultimate vantage point of Mount Everest.
          </p>

          <p>
            The return flight offers a relaxing breakfast at the world&apos;s
            highest hotel, Hotel Everest View, with unobstructed views of Ama
            Dablam before gliding back over the Khumbu Valley to Kathmandu.
            Within a single morning, passengers can stand in the lap of the
            world&apos;s highest mountain and return to their hotel before
            mid-morning.
          </p>
        </div>

        {/* ROUTE MAP */}
        <div className="mx-auto mt-10 max-w-3xl overflow-hidden">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/images/everest-base-camp/everest-helicopter-route-map.png"
              alt="Everest Base Camp helicopter tour route map from Kathmandu"
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