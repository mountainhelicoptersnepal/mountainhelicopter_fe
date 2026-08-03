const journey = [
  {
    time: "04:45",
    title: "Pickup before sunrise",
    description:
      "The departure time is arranged around the selected region, season and expected first light.",
  },
  {
    time: "05:15",
    title: "Equipment and route briefing",
    description:
      "Review the shot list, equipment weight, seating configuration, sun direction, filming positions and communication procedure.",
  },
  {
    time: "05:30",
    title: "Lift-off",
    description:
      "Depart while the sky is still dark so the aircraft can be positioned before the first usable light reaches the mountains.",
  },
  {
    time: "05:50",
    title: "First-light position",
    description:
      "The aircraft arrives at the planned position and the pilot communicates timing through the headset.",
    highlighted: true,
  },
  {
    time: "05:50–07:30",
    title: "Shoot according to the light",
    description:
      "Request changes of altitude, heading, orbit and distance while the pilot maintains safe positioning.",
    highlighted: true,
  },
  {
    time: "07:00",
    title: "Follow the light through the valley",
    description:
      "As the sun rises, move toward glaciers, ridges, settlements and mountain faces according to the shot plan.",
  },
  {
    time: "07:30",
    title: "Final passes",
    description:
      "Complete any remaining angles while visibility, fuel planning and operating conditions permit.",
  },
  {
    time: "08:00",
    title: "Return to Kathmandu",
    description:
      "Dusk departures follow a similar process in reverse, beginning with an afternoon briefing.",
  },
];

export default function Journey() {
  return (
    <article aria-labelledby="journey-heading">
      <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#B8860B]">
        Dawn Flight Example
      </p>

      <h2
        id="journey-heading"
        className="mb-10 font-fraunces text-[clamp(1.75rem,3.4vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-[#003366]"
      >
        A shoot day, minute by minute.
      </h2>

      <ol>
        {journey.map((item, index) => (
          <li key={`${item.time}-${item.title}`} className="relative flex gap-5">
            {index !== journey.length - 1 && (
              <span className="absolute bottom-0 left-[27px] top-14 w-[2px] bg-gradient-to-b from-[#F2B632]/70 to-[#F2B632]/10" />
            )}

            <span
              className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl px-1 text-center text-[9px] font-bold leading-tight ${
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
    </article>
  );
}