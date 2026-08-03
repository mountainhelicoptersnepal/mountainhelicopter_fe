const comparisonRows = [
  {
    label: "Time to Hotel Everest View",
    trek: "Several days of trekking",
    helicopter: "Approximately 50 minutes",
  },
  {
    label: "Round-trip duration",
    trek: "Usually more than one week",
    helicopter: "One morning",
  },
  {
    label: "Physical requirement",
    trek: "Sustained uphill trekking",
    helicopter: "Minimal walking",
  },
  {
    label: "Acclimatisation",
    trek: "Gradual acclimatisation required",
    helicopter: "Short controlled visit",
  },
  {
    label: "View along the route",
    trek: "Ground-level trail experience",
    helicopter: "Wide aerial view of the valleys",
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
        className="font-fraunces text-[clamp(1.8rem,3.4vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-[#003366]"
      >
        On foot versus by air.
      </h2>

      <p className="mb-8 mt-4 max-w-[620px] leading-[1.75] text-[#475569]">
        Trekking and helicopter travel provide very different Himalayan
        experiences. The right choice depends on your time, physical ability and
        travel goals.
      </p>

      <div className="overflow-x-auto rounded-2xl border border-[#E2E8F0] bg-white">
        <table className="w-full min-w-[620px] border-collapse text-sm">
          <thead>
            <tr className="bg-[#E6F0F8]">
              <th className="p-5 text-left" />

              <th className="p-5 text-left text-[10px] font-bold uppercase tracking-[0.12em] text-[#475569]">
                On Foot
              </th>

              <th className="bg-[#F2B632]/20 p-5 text-left text-[10px] font-bold uppercase tracking-[0.12em] text-[#003366]">
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

      <p className="mt-4 text-xs italic text-[#64748B]">
        Both experiences are meaningful. One provides a trekking journey, while
        the other allows visitors to experience the region within a shorter
        travel schedule.
      </p>
    </article>
  );
}