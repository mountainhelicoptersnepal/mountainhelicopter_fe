const journey = [
  {
    time: "06:00",
    title: "Kathmandu departure",
    description:
      "Begin early while mountain visibility is usually strongest and the valleys below are still quiet.",
  },
  {
    time: "07:30",
    title: "Breakfast in the Everest region",
    description:
      "Land for breakfast with views of the Everest range, subject to weather, aircraft performance and landing conditions.",
    highlighted: true,
  },
  {
    time: "09:00",
    title: "Fly west along the Himalayas",
    description:
      "Continue toward Langtang, Ganesh Himal, Manaslu and the central Himalayan range.",
  },
  {
    time: "10:30",
    title: "Pokhara stop",
    description:
      "Pause beside Phewa Lake or at another suitable location before continuing toward the Annapurna region.",
  },
  {
    time: "12:00",
    title: "Annapurna aerial circuit",
    description:
      "Fly through the wider Annapurna landscape according to weather and the route approved by the Pilot in Command.",
  },
  {
    time: "13:30",
    title: "Private ridge picnic",
    description:
      "Land at a suitable private location for lunch, photography and time away from the usual tourist routes.",
    highlighted: true,
  },
  {
    time: "15:30",
    title: "Return to Kathmandu",
    description:
      "Complete the journey after a full day connecting several of Nepal's most important mountain regions.",
  },
];

export default function Journey() {
  return (
    <article aria-labelledby="journey-heading">
      <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#B8860B]">
        Sample Day · Grand Traverse
      </p>

      <h2
        id="journey-heading"
        className="mb-10 font-fraunces text-[clamp(1.75rem,3.4vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-[#003366]"
      >
        One day, drawn around one guest.
      </h2>

      <ol>
        {journey.map((item, index) => (
          <li key={`${item.time}-${item.title}`} className="relative flex gap-5">
            {index !== journey.length - 1 && (
              <span className="absolute bottom-0 left-[27px] top-14 w-[2px] bg-gradient-to-b from-[#F2B632]/70 to-[#F2B632]/10" />
            )}

            <span
              className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl px-1 text-center text-[10px] font-bold leading-tight ${
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