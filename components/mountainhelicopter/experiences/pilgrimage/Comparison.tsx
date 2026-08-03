const comparisonRows = [
  {
    label: "Journey time",
    overland: "7–10 days of buses, jeeps and walking",
    helicopter: "One morning",
  },
  {
    label: "Physical demand",
    overland: "High — multiple altitude days on foot",
    helicopter: "Minimal walking with crew assistance",
  },
  {
    label: "Who can go",
    overland: "Best suited to physically capable travellers",
    helicopter: "Suitable for a wider range of ages and abilities",
  },
  {
    label: "Road risk",
    overland: "Long mountain roads and seasonal landslide exposure",
    helicopter: "Direct aerial route, subject to weather",
  },
  {
    label: "Time at the temple",
    overland: "Often limited by the return journey",
    helicopter: "Ground time arranged around the flight plan",
  },
  {
    label: "Typical cost",
    overland: "USD 700–1,200 over multiple days",
    helicopter: "From USD 1,100",
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
        The trek vs. the flight.
      </h2>

      <p className="mb-8 mt-4 max-w-[600px] leading-relaxed text-[#475569]">
        The overland pilgrimage is meaningful for travellers whose health, time
        and mobility permit it. Helicopter travel provides an alternative for
        those who cannot complete the longer route.
      </p>

      <div className="overflow-x-auto rounded-2xl border border-[#E2E8F0]">
        <table className="w-full min-w-[620px] bg-white text-sm">
          <thead>
            <tr className="bg-[#E6F0F8]">
              <th className="p-5 text-left" />

              <th className="p-5 text-left text-[11px] font-bold uppercase tracking-[0.12em] text-[#475569]">
                Overland
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

                <td className="p-5 text-[#475569]">{row.overland}</td>

                <td className="bg-[#F2B632]/5 p-5 font-bold text-[#003366]">
                  {row.helicopter}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-xs italic text-[#475569]">
        Both routes lead to the same sacred destination. The helicopter route is
        designed to reduce time and physical strain.
      </p>
    </article>
  );
}