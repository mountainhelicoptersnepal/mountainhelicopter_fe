const destinations = [
  {
    name: "Muktinath",
    altitude: "3,710 M · Half-Day",
    description:
      "The temple of liberation, sacred to Hindus and Buddhists alike. Walk beneath the 108 waterspouts, stand before the eternal flame at Jwala Mai, and receive darshan of Vishnu as Mukti Narayana.",
    accent: "gold",
  },
  {
    name: "Gosaikunda",
    altitude: "4,380 M · 2-Hour Round Trip",
    description:
      "Shiva's alpine lake, born — the scriptures say — when he struck the mountain with his trident to cool the poison in his throat. Frozen for much of the year and mirror-still during the warmer season.",
    accent: "blue",
  },
  {
    name: "Damodar Kund",
    altitude: "4,890 M · Full Day",
    description:
      "Remote sacred lakes behind the Annapurna wall. A full-day flight places you at the water's edge for ritual bathing and offerings in a silence few pilgrims ever experience.",
    accent: "blue",
  },
  {
    name: "Kailash–Mansarovar",
    altitude: "Multi-Day Yatra · Via Simikot–Hilsa",
    description:
      "The axis of the world and abode of Shiva, sacred to four faiths. Travel as a guided multi-day yatra with Tibet permits, accommodation, and ground transport arranged end to end.",
    accent: "gold",
  },
];

export default function Destinations() {
  return (
    <article aria-labelledby="destinations-heading">
      <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#B8860B]">
        Where Faith Flies
      </p>

      <h2
        id="destinations-heading"
        className="font-fraunces text-[clamp(1.75rem,3.4vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-[#003366]"
      >
        The sacred destinations.
      </h2>

      <p className="mb-8 mt-4 max-w-[600px] leading-relaxed text-[#475569]">
        Four of the most revered places in the Hindu and Buddhist worlds — each
        reachable in hours rather than weeks, with unhurried time on the ground.
      </p>

      <div className="grid gap-5 md:grid-cols-2">
        {destinations.map((destination) => (
          <div
            key={destination.name}
            className={`rounded-2xl border border-[#E2E8F0] bg-white p-7 transition hover:shadow-[0_8px_24px_rgba(0,51,102,0.12)] ${
              destination.accent === "gold"
                ? "border-t-4 border-t-[#F2B632]"
                : "border-t-4 border-t-[#003366]"
            }`}
          >
            <h3 className="font-fraunces text-2xl font-semibold text-[#003366]">
              {destination.name}
            </h3>

            <p className="mb-3 mt-1 text-[11px] font-bold uppercase tracking-[0.08em] text-[#B8860B]">
              {destination.altitude}
            </p>

            <p className="text-sm leading-[1.75] text-[#475569]">
              {destination.description}
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}