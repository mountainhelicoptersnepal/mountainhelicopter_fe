const comparisonRows = [
  {
    label: "Operating altitude",
    drone: "Limited by aviation rules and local permissions",
    helicopter: "Route planned according to aircraft performance",
  },
  {
    label: "Range",
    drone: "Limited by battery, signal and visibility",
    helicopter: "Multiple valleys and locations in one flight",
  },
  {
    label: "Camera equipment",
    drone: "Limited payload",
    helicopter: "Professional cameras and approved equipment",
  },
  {
    label: "Positioning",
    drone: "Affected by wind and signal",
    helicopter: "Pilot-controlled aerial positioning",
  },
  {
    label: "Permits",
    drone: "Separate approvals may be required",
    helicopter: "Route and filming requirements reviewed by the team",
  },
  {
    label: "Creative control",
    drone: "Operated remotely",
    helicopter: "Photographer communicates directly with the pilot",
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
        Drone vs. helicopter.
      </h2>

      <p className="mb-8 mt-4 max-w-[600px] leading-[1.75] text-[#475569]">
        Drones and helicopters serve different purposes. A helicopter provides
        greater range, equipment capacity and direct control over the aerial
        position.
      </p>

      <div className="overflow-x-auto rounded-2xl border border-[#E2E8F0]">
        <table className="w-full min-w-[620px] bg-white text-sm">
          <thead>
            <tr className="bg-[#E6F0F8]">
              <th className="p-5 text-left" />

              <th className="p-5 text-left text-[11px] font-bold uppercase tracking-[0.12em] text-[#475569]">
                Drone
              </th>

              <th className="bg-[#F2B632]/20 p-5 text-left text-[11px] font-bold uppercase tracking-[0.12em] text-[#003366]">
                Helicopter
              </th>
            </tr>
          </thead>

          <tbody>
            {comparisonRows.map((row) => (
              <tr key={row.label} className="border-t border-[#E2E8F0]">
                <th className="p-5 text-left font-semibold text-[#0A1929]">
                  {row.label}
                </th>

                <td className="p-5 text-[#475569]">{row.drone}</td>

                <td className="bg-[#F2B632]/5 p-5 font-bold text-[#003366]">
                  {row.helicopter}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-xs italic text-[#475569]">
        The correct platform depends on the shot, location, equipment and
        regulatory requirements.
      </p>
    </article>
  );
}