const itineraryItems = [
  {
    number: "01",
    time: "06:00h",
    title: "Hotel Pickup in Pokhara",
    description:
      "Your Annapurna Base Camp Helicopter Tour begins with an early-morning pickup from your hotel in Pokhara. A private vehicle transfers you to Pokhara Airport, where the Mountain Helicopters Nepal ground team assists with check-in and flight preparation.",
    bullets: [
      "Carry your passport or valid identification.",
      "Wear warm, layered and windproof clothing.",
      "Bring sunglasses, personal medication and a small water bottle.",
      "Keep your luggage within the confirmed helicopter weight allowance.",
    ],
  },
  {
    number: "02",
    time: "06:15h",
    title: "Airport Check-In and Safety Briefing",
    description:
      "After arriving at Pokhara Airport, passengers complete check-in, identification verification and final weight checks. The pilot then provides a mandatory safety briefing before boarding the Airbus H125 helicopter.",
    bullets: [
      "Receive instructions for approaching and leaving the helicopter.",
      "Review seat-belt, door and emergency procedures.",
      "Learn about high-altitude precautions at Annapurna Base Camp.",
      "Confirm the latest weather, route and landing conditions.",
    ],
  },
  {
    number: "03",
    time: "06:30h",
    title: "Helicopter Departure From Pokhara",
    description:
      "The helicopter departs Pokhara Airport and heads north toward the Annapurna region. Shortly after takeoff, passengers can enjoy aerial views of Pokhara Valley, Phewa Lake, surrounding hills and terraced farmland.",
  },
  {
    number: "04",
    time: "06:35h",
    title: "Fly Over Phewa Lake and the Pokhara Valley",
    description:
      "As the aircraft gains altitude, the city and lakes spread out beneath the flight path. On a clear morning, the Annapurna range and the distinct summit of Machhapuchhre begin to dominate the northern skyline.",
    bullets: [
      "Phewa Lake and the Pokhara cityscape.",
      "Green hills and terraced agricultural fields.",
      "Annapurna South and Hiunchuli.",
      "Machhapuchhre, also known as Fishtail Mountain.",
    ],
  },
  {
    number: "05",
    time: "06:40h",
    title: "Aerial Views of Ghandruk and Chhomrong",
    description:
      "The helicopter continues above traditional Gurung settlements such as Ghandruk and Chhomrong. From the air, passengers can see stone-roofed houses, cultivated terraces, trekking trails and the deep Modi Khola Valley.",
  },
  {
    number: "06",
    time: "06:45h",
    title: "Flight Through the Modi Khola Gorge",
    description:
      "The aircraft follows the narrow Modi Khola corridor toward the Annapurna Sanctuary. Forested slopes and waterfalls gradually give way to steep Himalayan walls, glaciers and high-alpine terrain.",
  },
  {
    number: "07",
    time: "06:50h",
    title: "Machhapuchhre and Annapurna Range Views",
    description:
      "As the helicopter approaches the sanctuary, Machhapuchhre and Hiunchuli rise on opposite sides of the valley. Passengers can also see Annapurna South, Gangapurna and the immense face of Annapurna I.",
    bullets: [
      "Machhapuchhre at 6,993 metres.",
      "Annapurna South at 7,219 metres.",
      "Hiunchuli at 6,441 metres.",
      "Gangapurna at 7,455 metres.",
      "Annapurna I at 8,091 metres.",
    ],
  },
  {
    number: "08",
    time: "Around 06:55h",
    title: "Landing at Annapurna Base Camp (4,130m)",
    description:
      "The helicopter lands at Annapurna Base Camp inside the natural amphitheatre of the Annapurna Sanctuary. Passengers step out beneath the surrounding walls of Annapurna I, Annapurna South, Hiunchuli, Gangapurna and Machhapuchhre.",
    note:
      "The landing location and ground duration depend on weather, wind, snow, passenger condition, aircraft performance and the pilot’s final operational assessment.",
  },
  {
    number: "09",
    time: "06:55–07:40h",
    title: "Explore Annapurna Base Camp",
    description:
      "Passengers normally receive approximately 30 to 45 minutes at Annapurna Base Camp, with up to around one hour possible when conditions allow. This time may be used for photography, sightseeing, hot tea or breakfast and a short walk around the permitted landing area.",
    bullets: [
      "Photograph the Annapurna Sanctuary amphitheatre.",
      "Enjoy close views of Annapurna I and Machhapuchhre.",
      "See nearby glaciers, prayer flags and mountain lodges.",
      "Enjoy hot Nepali tea or breakfast when available.",
      "Walk slowly and avoid unnecessary physical exertion.",
    ],
    note:
      "At 4,130 metres, the available oxygen is lower than at sea level. Inform the pilot immediately if you experience headache, dizziness, nausea, unusual breathlessness or discomfort.",
  },
  {
    number: "10",
    time: "Around 07:40h",
    title: "Return Flight to Pokhara",
    description:
      "After the base-camp visit, passengers board the helicopter for the return journey. When weather and air-traffic conditions permit, the pilot may use a slightly different return corridor, providing new views of Machhapuchhre, the Modi Valley and surrounding villages.",
  },
  {
    number: "11",
    time: "Around 08:00h",
    title: "Arrival at Pokhara Airport",
    description:
      "The helicopter lands at Pokhara Airport after the scenic return flight. The ground team assists passengers with disembarkation and prepares the onward hotel transfer.",
  },
  {
    number: "12",
    time: "Around 08:15h",
    title: "Hotel Drop-Off in Pokhara",
    description:
      "A private vehicle transfers you from Pokhara Airport back to your hotel, completing the Annapurna Base Camp helicopter experience. The remainder of the day is free for relaxation or additional sightseeing in Pokhara.",
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
            "url('/images/everest-base-camp/itinerary-bg.jpg')",
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

                  {item.bullets && (
                    <ul className="mt-3 space-y-1.5 pl-5 font-manrope text-sm leading-6 text-white/75">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="list-disc">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.note && (
                    <p className="mt-4 border-l-2 border-[#e0a321] pl-4 font-manrope text-sm leading-7 text-white/70">
                      {item.note}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
        
        {/* OPERATIONAL NOTE */}
        <div className="mt-20 rounded-2xl border border-white/15 bg-white/[0.06] px-5 py-6 backdrop-blur-sm md:px-7">
          <p className="font-manrope text-xs leading-6 text-white/65">
           All times are approximate. The final departure time, route, landing location, ground duration, passenger capacity and return schedule may change according to weather, visibility, wind, snow, aircraft availability, air traffic, passenger weight and operational safety requirements. The pilot has final authority over all flight and landing decisions.
          </p>
        </div>
      </div>
    </section>
  );
}