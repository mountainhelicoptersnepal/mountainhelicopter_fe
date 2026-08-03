const itineraries = [
  {
    name: "The Grand Traverse",
    detail: "Everest to Annapurna · One Day",
    description:
      "Fly east to the Everest region before continuing west toward Pokhara and the Annapurna range.",
    accent: "gold",
  },
  {
    name: "The Ancestral Village",
    detail: "A Family Journey",
    description:
      "Use family stories, district names, old photographs and maps to plan a return to a meaningful place.",
    accent: "blue",
  },
  {
    name: "The Three Lakes",
    detail: "Gokyo · Gosaikunda · Rara",
    description:
      "Connect high-altitude lakes across different Himalayan regions in a carefully planned private itinerary.",
    accent: "blue",
  },
  {
    name: "The Honeymoon Journey",
    detail: "Multi-Day Private Charter",
    description:
      "Combine mountain flights, private lodges, lakes, jungle destinations and celebration arrangements.",
    accent: "gold",
  },
  {
    name: "The Leadership Retreat",
    detail: "Private Group Charter",
    description:
      "Move a leadership team to a remote Himalayan setting for meetings, reflection and private travel.",
    accent: "blue",
  },
  {
    name: "The Remote West",
    detail: "Dolpo and Far-West Nepal",
    description:
      "Explore remote valleys, lakes and settlements that require careful permit and logistics planning.",
    accent: "blue",
  },
];

export default function Itineraries() {
  return (
    <article aria-labelledby="itineraries-heading">
      <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#B8860B]">
        From the Logbook
      </p>

      <h2
        id="itineraries-heading"
        className="font-fraunces text-[clamp(1.75rem,3.4vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-[#003366]"
      >
        Itineraries guests have designed.
      </h2>

      <p className="mb-8 mt-4 max-w-[600px] leading-[1.75] text-[#475569]">
        Use one of these ideas as a starting point or combine several into a
        completely new route.
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {itineraries.map((itinerary) => (
          <div
            key={itinerary.name}
            className={`rounded-2xl border border-[#E2E8F0] bg-white p-5 transition hover:shadow-[0_8px_24px_rgba(0,51,102,0.12)] ${
              itinerary.accent === "gold"
                ? "border-t-4 border-t-[#F2B632]"
                : "border-t-4 border-t-[#003366]"
            }`}
          >
            <h3 className="font-fraunces text-xl font-semibold text-[#003366]">
              {itinerary.name}
            </h3>

            <p className="mb-3 mt-1 text-[11px] font-bold uppercase tracking-[0.08em] text-[#B8860B]">
              {itinerary.detail}
            </p>

            <p className="text-xs leading-[1.7] text-[#475569]">
              {itinerary.description}
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}