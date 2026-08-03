const journey = [
  {
    time: "06:30",
    title: "Kathmandu pickup",
    description:
      "Our driver collects you before the city wakes. If you requested puja items, garlands, incense and offerings are already waiting in the cabin.",
  },
  {
    time: "07:00",
    title: "Lift-off along the Himalayan spine",
    description:
      "Manaslu and the Annapurnas rise one after another. Elders board with assistance, mobility equipment is secured, and oxygen is available throughout the flight.",
  },
  {
    time: "07:50",
    title: "Through the Kali Gandaki",
    description:
      "The world's deepest gorge opens below, with Dhaulagiri on one side, Annapurna on the other, and the sacred river running between them.",
  },
  {
    time: "08:15",
    title: "Landing at Muktinath helipad",
    description:
      "The helipad sits a short distance from the temple gate. Crew members assist passengers who need support as prayer flags move overhead.",
    highlighted: true,
  },
  {
    time: "08:20–10:00",
    title: "Darshan, unhurried",
    description:
      "Visit the 108 waterspouts and the eternal flame at Jwala Mai. When arranged, the priest prepares sankalpa, abhisheka, aarti or another requested ceremony.",
    highlighted: true,
  },
  {
    time: "10:15",
    title: "The return flight",
    description:
      "Dhaulagiri and Annapurna fill both windows during the journey home. Most guests are quiet on this flight. Something has been completed.",
  },
  {
    time: "11:30",
    title: "Kathmandu, prasad in hand",
    description:
      "A vow of many years is completed before lunch, with the tika still fresh when you return to your hotel.",
  },
];

export default function Journey() {
  return (
    <article aria-labelledby="journey-heading">
      <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#B8860B]">
        The Journey · Muktinath
      </p>

      <h2
        id="journey-heading"
        className="mb-10 font-fraunces text-[clamp(1.75rem,3.4vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-[#003366]"
      >
        A lifetime&apos;s pilgrimage, before lunch.
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