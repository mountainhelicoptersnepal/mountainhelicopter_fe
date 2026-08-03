const comparisonRows = [
  {
    label: "Time to the ridge",
    trek: "12 days of trekking",
    helicopter: "2.5 hours from your hotel",
  },
  {
    label: "Physical demand",
    trek: "Extreme — the hardest day of the EBC trek",
    helicopter: "A short walk on the ridge — fresh legs",
  },
  {
    label: "Acclimatisation days",
    trek: "6–8 built into the itinerary",
    helicopter: "Zero — visit capped at 15 min",
  },
  {
    label: "Time with the summit view",
    trek: "Around 20 minutes, exhausted and cold",
    helicopter: "15 minutes, rested, hot tea in hand",
  },
  {
    label: "Typical cost",
    trek: "USD 1,400–2,200",
    helicopter: "From USD 1,350",
  },
  {
    label: "Success rate",
    trek: "Around 65% — illness and turn-backs take a toll",
    helicopter: "95%+ — we only fly when the window is right",
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
        On foot vs. by air.
      </h2>

      <p className="mb-8 mt-4 max-w-[580px] leading-relaxed text-[#475569]">
        The trek to Kala Patthar is one of the world&apos;s great walks — and we
        salute everyone who makes it. But the ridge does not check how you
        arrived. Here is the honest maths.
      </p>

      <div className="overflow-x-auto rounded-2xl border border-[#E2E8F0]">
        <table className="w-full min-w-[620px] bg-white text-sm">
          <thead>
            <tr className="bg-[#E6F0F8]">
              <th className="p-5 text-left" />

              <th className="p-5 text-left text-[11px] font-bold uppercase tracking-[0.12em] text-[#475569]">
                On Foot
              </th>

              <th className="bg-[#F2B632]/20 p-5 text-left text-[11px] font-bold uppercase tracking-[0.12em] text-[#003366]">
                By Helicopter
              </th>
            </tr>
          </thead>

          <tbody>
            {comparisonRows.map((row) => (
              <tr key={row.label} className="border-t border-[#E2E8F0]">
                <th className="p-5 text-left font-semibold text-[#0A1929]">
                  {row.label}
                </th>

                <td className="p-5 text-[#475569]">{row.trek}</td>

                <td className="bg-[#F2B632]/5 p-5 font-bold text-[#003366]">
                  {row.helicopter}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-xs italic text-[#475569]">
        Both end on the same black rocks. One starts after breakfast and ends
        before lunch.
      </p>
    </article>
  );
}