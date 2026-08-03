const itineraryItems = [
  {
    number: "01",
    time: "07:00h",
    title: "Hotel Pickup in Kathmandu",
    description:
      "We pick you up from your hotel and transfer you to Tribhuvan International Airport for the Muktinath helicopter flight.",
  },
  {
    number: "02",
    time: "07:30h",
    title: "Depart from Kathmandu to Muktinath",
    description:
      "The helicopter departs Kathmandu and heads toward Mustang. Enjoy aerial views of white Himalayan peaks, lush valleys, and the Annapurna and Dhaulagiri ranges.",
  },
  {
    number: "03",
    time: "08:15h",
    title: "Muktinath Temple Puja and Worship",
    description:
      "Arrive at Muktinath and perform puja, worship, and the 108-tap ritual bath. Ground time is normally about 30 to 60 minutes depending on the package and operating conditions.",
  },
  {
    number: "04",
    time: "08:45h",
    title: "Fly Back to Kathmandu",
    description:
      "After darshan and temple exploration, fly back toward Kathmandu with another chance to see the Mustang valley, Kali Gandaki Gorge, Annapurna, and Dhaulagiri from the air.",
  },
  {
    number: "05",
    time: "10:00h",
    title: "Return to Kathmandu",
    description:
      "Land back at Kathmandu airport and complete the morning pilgrimage flight.",
  },
  {
    number: "06",
    time: "07:00h",
    title: "Pokhara Route: Airport Transfer",
    description:
      "For the Pokhara departure, start with a hotel-to-airport transfer at 7:00 AM.",
  },
  {
    number: "07",
    time: "07:30h",
    title: "Pokhara to Muktinath Flight",
    description:
      "Take off from Pokhara and enjoy the Annapurna range, Mustang valley, and high Himalayan terrain from above.",
  },
  {
    number: "08",
    time: "08:15h",
    title: "Darshan, Puja and Havan at Muktinath",
    description:
      "Arrive at Muktinath Temple for darshan, puja, havan, and time around the sacred temple complex.",
  },
  {
    number: "09",
    time: "08:45h",
    title: "Fly Back to Pokhara",
    description:
      "Depart Muktinath and return to Pokhara while enjoying the aerial scenery again.",
  },
  {
    number: "10",
    time: "09:30h",
    title: "Arrive in Pokhara",
    description:
      "Land in Pokhara. The PDF notes optional Pokhara sightseeing around Phewa Lake and the valley view after arrival.",
  },
  {
    number: "11",
    time: "10:00h",
    title: "Pokhara Tour Completion",
    description:
      "Complete the Pokhara-based Muktinath helicopter tour.",
  },
];

export default function Itinerary() {
  return (
    <section
      id="itinerary"
      className="relative overflow-hidden bg-[#082f59]"
    >
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/images/muktinath-pilgrimage/mustang.jpg')",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-[#062b52]/90" />

      {/* EXTRA GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#062b52]/30 via-transparent to-[#062b52]/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16 py-16 md:py-24 lg:py-28">
        {/* HEADING */}
        <div className="text-center">
          <p className="flex items-center justify-center gap-3 font-manrope text-xs font-bold uppercase tracking-[0.22em] text-[#e0a321]">
            <span className="h-px w-7 bg-[#e0a321]" />
            Know Your Destination
          </p>

          <h2 className="mt-4 font-fraunces text-4xl font-semibold leading-[0.95] tracking-[-0.03em] text-white md:text-5xl lg:text-6xl">
            Your Journey,
            <br />
            <span className="text-[#f0ad1f]">Step by Step.</span>
          </h2>
        </div>

        {/* TIMELINE */}
        <div className="relative mt-16 md:mt-20">
          <div className="absolute bottom-0 left-[22px] top-0 w-px bg-[#dda11f] md:left-[26px]" />

          <div className="space-y-10">
            {itineraryItems.map((item, index) => (
              <article
                key={item.number}
                className="relative grid grid-cols-[46px_minmax(0,1fr)] gap-4 md:grid-cols-[54px_minmax(0,1fr)] md:gap-6"
              >
                {/* NUMBER */}
                <div
                  className={`relative z-10 flex h-11 w-11 items-center justify-center rounded-full border font-manrope text-xs font-bold md:h-[52px] md:w-[52px] ${
                    index === 0
                      ? "border-[#e0a321] bg-[#0b4c82] text-[#f0ad1f]"
                      : "border-white/70 bg-white text-[#0a3d69]"
                  }`}
                >
                  {item.number}
                </div>

                {/* CONTENT */}
                <div className="pb-1 pt-1">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="font-manrope text-xs font-bold uppercase tracking-[0.08em] text-[#f0ad1f]">
                      {item.time}
                    </span>

                    <h3 className="font-fraunces text-lg font-semibold leading-7 text-white md:text-xl">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-3 font-manrope text-sm leading-7 text-white/75">
                    {item.description}
                  </p>

                </div>
              </article>
            ))}
          </div>
        </div>
        
        {/* OPERATIONAL NOTE */}
        <div className="mt-20 rounded-2xl border border-white/15 bg-white/[0.06] px-5 py-6 backdrop-blur-sm md:px-7">
          <p className="font-manrope text-xs leading-6 text-white/65">
            All flight times are approximate. The final departure time, route,
            ground duration, passenger capacity, and return schedule may change
            according to weather, visibility, aircraft availability, air
            traffic, passenger weight, and operational safety requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
