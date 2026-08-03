const occasions = [
  {
    name: "The Proposal",
    detail: "Our Signature Celebration",
    description:
      "A private landing, hidden photographer and carefully timed reveal arranged around the question you have been preparing to ask.",
    accent: "gold",
  },
  {
    name: "The Anniversary",
    detail: "Re-Vows at Altitude",
    description:
      "Repeat your vows on a private Himalayan ridge and celebrate the years already shared together.",
    accent: "blue",
  },
  {
    name: "The Milestone Birthday",
    detail: "30 · 50 · 75",
    description:
      "A private cake, mountain landing and family celebration arranged for a birthday that deserves more than an ordinary dinner.",
    accent: "blue",
  },
  {
    name: "The Babymoon or Reveal",
    detail: "A Family Announcement",
    description:
      "Celebrate a growing family with a private flight, sealed announcement or carefully coordinated mountain reveal.",
    accent: "gold",
  },
  {
    name: "The Graduation",
    detail: "Family Pride Flight",
    description:
      "Bring the family together above the clouds to celebrate years of work and an important new beginning.",
    accent: "blue",
  },
  {
    name: "The Just-Because",
    detail: "No Occasion Required",
    description:
      "No ring, candles or major date needed. Sometimes a person you love and an extraordinary morning are enough.",
    accent: "blue",
  },
];

export default function Occasions() {
  return (
    <article aria-labelledby="occasions-heading">
      <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#B8860B]">
        Your Moment, Your Script
      </p>

      <h2
        id="occasions-heading"
        className="font-fraunces text-[clamp(1.75rem,3.4vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-[#003366]"
      >
        Occasions we choreograph.
      </h2>

      <p className="mb-8 mt-4 max-w-[600px] leading-[1.75] text-[#475569]">
        Every celebration begins with a private planning conversation and is
        designed around your relationship, occasion and preferred setting.
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {occasions.map((occasion) => (
          <div
            key={occasion.name}
            className={`rounded-2xl border border-[#E2E8F0] bg-white p-5 transition hover:shadow-[0_8px_24px_rgba(0,51,102,0.12)] ${
              occasion.accent === "gold"
                ? "border-t-4 border-t-[#F2B632]"
                : "border-t-4 border-t-[#003366]"
            }`}
          >
            <h3 className="font-fraunces text-xl font-semibold text-[#003366]">
              {occasion.name}
            </h3>

            <p className="mb-3 mt-1 text-[11px] font-bold uppercase tracking-[0.08em] text-[#B8860B]">
              {occasion.detail}
            </p>

            <p className="text-xs leading-[1.7] text-[#475569]">
              {occasion.description}
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}