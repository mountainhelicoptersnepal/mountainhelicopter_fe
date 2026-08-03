const journey = [
  {
    time: "06:00",
    title: "Kathmandu hotel pickup",
    description:
      "Our driver collects you in the blue-grey half-light. Your captain is already at the airport, checking the Khumbu weather feeds one last time.",
  },
  {
    time: "06:30",
    title: "Lift-off into the sunrise",
    description:
      "The Langtang range catches fire on your left as the sun clears the horizon. Kathmandu's rooftops give way to ridgelines of mist, then to white.",
  },
  {
    time: "07:15",
    title: "Refuel at Lukla (2,860 m)",
    description:
      "Ten minutes at the gateway to the Khumbu while the tanks fill and your captain runs the high-altitude briefing: how the fifteen minutes will work, what to feel for, when to say something.",
  },
  {
    time: "07:45",
    title: "Up-valley: the Khumbu unrolls",
    description:
      "Namche Bazaar in its horseshoe bowl, Tengboche monastery on its ridge, and then the grey tongue of the Khumbu Glacier sliding beneath you as the big peaks close in.",
  },
  {
    time: "08:15",
    title: "Landing at Kala Patthar (5,545 m)",
    description:
      "The skids settle on the black ridge. The door opens. Everest is right there — filling the windscreen, then filling everything.",
    highlighted: true,
  },
  {
    time: "08:15–08:30",
    title: "Your fifteen minutes",
    description:
      "Hot tea from the thermos. Photographs. Then — and we insist on this — one long minute with the camera down, just you and the highest place on earth, breathing the thinnest air you will ever breathe.",
    highlighted: true,
  },
  {
    time: "08:35",
    title: "Optional descent stop",
    description:
      "Drop to Hotel Everest View for the terrace breakfast add-on, or pause at Lukla — either way, thicker air arrives within minutes and feels like a gift.",
  },
  {
    time: "10:00",
    title: "Touch down Kathmandu",
    description:
      "Four hours after leaving your hotel, you are back — with the one story at dinner tonight that nobody can follow.",
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
        className="mb-10 font-fraunces text-[clamp(1.75rem,3.4vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-[#003366]"
      >
        Your morning, minute by minute.
      </h2>

      <ol>
        {journey.map((item, index) => (
          <li
            key={`${item.time}-${item.title}`}
            className="relative flex gap-5"
          >
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
              <h3 className="mb-1 font-bold text-[#0A1929]">
                {item.title}
              </h3>

              <p className="text-sm leading-relaxed text-[#475569]">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </article>
  );
}