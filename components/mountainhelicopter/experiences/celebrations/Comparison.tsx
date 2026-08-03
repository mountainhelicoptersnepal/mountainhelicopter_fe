const comparisonRows = [
  {
    label: "Witnesses",
    restaurant: "Other diners nearby",
    mountain: "A private Himalayan setting",
  },
  {
    label: "Photography",
    restaurant: "Phone photographs or selfies",
    mountain: "Optional professional photographer",
  },
  {
    label: "The story afterwards",
    restaurant: "A special dinner",
    mountain: "A private mountain celebration",
  },
  {
    label: "Backup plan",
    restaurant: "Usually fixed to one booking",
    mountain: "Weather alternatives discussed in advance",
  },
  {
    label: "Surprise factor",
    restaurant: "A formal dinner may create suspicion",
    mountain: "Presented as an ordinary scenic flight",
  },
  {
    label: "Photographic setting",
    restaurant: "Indoor or city background",
    mountain: "Himalayan peaks and open sky",
  },
];

export default function Comparison() {
  return (
    <article aria-labelledby="comparison-heading">
      <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#B8860B]">
        The Honest Comparison
      </p>

      <h2
        id="comparison-heading"
        className="font-fraunces text-[clamp(1.75rem,3.4vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-[#003366]"
      >
        Restaurant proposal vs. a Himalayan landing.
      </h2>

      <p className="mb-8 mt-4 max-w-[600px] leading-[1.75] text-[#475569]">
        Both can create an important memory. A private helicopter landing adds a
        setting and story that are difficult to recreate anywhere else.
      </p>

      <div className="overflow-x-auto rounded-2xl border border-[#E2E8F0]">
        <table className="w-full min-w-[620px] bg-white text-sm">
          <thead>
            <tr className="bg-[#E6F0F8]">
              <th className="p-5 text-left" />

              <th className="p-5 text-left text-[11px] font-bold uppercase tracking-[0.12em] text-[#475569]">
                Restaurant
              </th>

              <th className="bg-[#F2B632]/20 p-5 text-left text-[11px] font-bold uppercase tracking-[0.12em] text-[#003366]">
                Himalayan Landing
              </th>
            </tr>
          </thead>

          <tbody>
            {comparisonRows.map((row) => (
              <tr key={row.label} className="border-t border-[#E2E8F0]">
                <th className="p-5 text-left font-semibold text-[#0A1929]">
                  {row.label}
                </th>

                <td className="p-5 text-[#475569]">{row.restaurant}</td>

                <td className="bg-[#F2B632]/5 p-5 font-bold text-[#003366]">
                  {row.mountain}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-xs italic text-[#475569]">
        Both can end with champagne. Only one begins with a helicopter.
      </p>
    </article>
  );
}