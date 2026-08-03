const locations = [
  {
    name: "High Meadow",
    detail: "3,200 M · Six 7,000 M Peaks",
    description:
      "A grassy shelf with six Himalayan giants visible in one unbroken view. Our most-requested picnic setting.",
    accent: "gold",
  },
  {
    name: "Lakeside Shelf",
    detail: "Glacial Lake",
    description:
      "Lunch beside still glacial water. On calm days, the mountains appear twice — once in the sky and once in the reflection.",
    accent: "blue",
  },
  {
    name: "Ridge Line",
    detail: "Sunrise or Sunset",
    description:
      "A narrow ridge between two valleys. Time the flight for golden hour and watch light move across the snowfields.",
    accent: "blue",
  },
  {
    name: "Forest Clearing",
    detail: "Spring · Rhododendron",
    description:
      "During March and April, Nepal's national flower covers entire hillsides. Your table can be placed within the bloom.",
    accent: "blue",
  },
  {
    name: "Glacier View Terrace",
    detail: "Icefall Backdrop",
    description:
      "A landing site close enough to hear movement from the glacier while enjoying one of the most dramatic backdrops available.",
    accent: "blue",
  },
  {
    name: "Secret Spot",
    detail: "Pilot's Choice",
    description:
      "Years of local flying leave every pilot with favourite places that do not appear on ordinary maps. Ask us to surprise you.",
    accent: "gold",
  },
];

export default function Locations() {
  return (
    <article aria-labelledby="locations-heading">
      <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#B8860B]">
        Choose Your Table
      </p>

      <h2
        id="locations-heading"
        className="font-fraunces text-[clamp(1.75rem,3.4vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-[#003366]"
      >
        Six kinds of nowhere, all yours.
      </h2>

      <p className="mb-8 mt-4 max-w-[600px] leading-[1.75] text-[#475569]">
        Every site is scouted by our pilots, checked before your flight, and
        selected for the season. Tell us the mood and we will match the
        mountain.
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {locations.map((location) => (
          <div
            key={location.name}
            className={`rounded-2xl border border-[#E2E8F0] bg-white p-5 transition hover:shadow-[0_8px_24px_rgba(0,51,102,0.12)] ${
              location.accent === "gold"
                ? "border-t-4 border-t-[#F2B632]"
                : "border-t-4 border-t-[#003366]"
            }`}
          >
            <h3 className="font-fraunces text-xl font-semibold text-[#003366]">
              {location.name}
            </h3>

            <p className="mb-3 mt-1 text-[11px] font-bold uppercase tracking-[0.08em] text-[#B8860B]">
              {location.detail}
            </p>

            <p className="text-xs leading-[1.7] text-[#475569]">
              {location.description}
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}