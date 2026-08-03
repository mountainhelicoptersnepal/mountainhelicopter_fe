const journey = [
  {
    time: "06:00",
    title: "Hotel pickup",
    description:
      "Our driver collects you from your Kathmandu hotel and transfers you to the airport.",
  },
  {
    time: "06:30",
    title: "Flight briefing and departure",
    description:
      "Complete check-in, passenger weighing and a safety briefing before departure.",
  },
  {
    time: "07:15",
    title: "Operational stop near Lukla",
    description:
      "Depending on the flight plan, weather and fuel requirements, the aircraft may make a short operational stop.",
  },
  {
    time: "07:45",
    title: "The Khumbu opens ahead",
    description:
      "Fly above the Dudh Koshi valley as Thamserku, Kangtega and Ama Dablam appear.",
  },
  {
    time: "08:00",
    title: "Landing near Hotel Everest View",
    description:
      "Land in the Syangboche area and follow a short path toward the hotel terrace.",
    highlighted: true,
  },
  {
    time: "08:05",
    title: "Breakfast facing Everest",
    description:
      "Enjoy breakfast while viewing Everest and the surrounding Himalayan peaks.",
    highlighted: true,
  },
  {
    time: "09:10",
    title: "Departure from the Everest region",
    description:
      "Return through the Khumbu valley, with further mountain views along the route.",
  },
  {
    time: "10:30",
    title: "Arrival in Kathmandu",
    description:
      "Land in Kathmandu and transfer back to your hotel.",
  },
];

export default function Journey() {
  return (
    <article aria-labelledby="journey-heading">
      <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#B8860B]">
        The Journey
      </p>

      <h2
        id="journey-heading"
        className="mb-10 font-fraunces text-[clamp(1.8rem,3.4vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-[#003366]"
      >
        Your morning, step by step.
      </h2>

      <ol className="space-y-0">
        {journey.map((item, index) => (
          <li key={`${item.time}-${item.title}`} className="relative flex gap-5">
            {index !== journey.length - 1 && (
              <span className="absolute bottom-0 left-[27px] top-14 w-[2px] bg-gradient-to-b from-[#F2B632]/70 to-[#F2B632]/10" />
            )}

            <span
              className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-[11px] font-bold ${
                item.highlighted
                  ? "bg-[#F2B632] text-[#003366]"
                  : "bg-[#003366] text-white"
              }`}
            >
              {item.time}
            </span>

            <div className="pb-8 pt-2">
              <h3 className="mb-1 font-bold text-[#0A1929]">{item.title}</h3>

              <p className="text-sm leading-[1.75] text-[#475569]">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <p className="mt-3 text-xs italic leading-relaxed text-[#64748B]">
        All times are approximate and may change because of weather, airport
        traffic, aircraft routing and operational requirements.
      </p>
    </article>
  );
}