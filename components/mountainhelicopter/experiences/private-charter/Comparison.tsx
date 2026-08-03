const comparisonRows = [
  {
    label: "The route",
    group: "Predetermined route",
    private: "Designed around your destinations",
  },
  {
    label: "The schedule",
    group: "Shared departure and timing",
    private: "Planned around your group",
  },
  {
    label: "Landing stops",
    group: "Fixed in advance",
    private: "Selected for your itinerary",
  },
  {
    label: "Other passengers",
    group: "Seats may be shared",
    private: "Your invited passengers only",
  },
  {
    label: "Changes during the day",
    group: "Usually not possible",
    private: "May be adjusted when conditions allow",
  },
  {
    label: "Planning support",
    group: "Standard itinerary assistance",
    private: "Dedicated flight planning",
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
        Group tour vs. private charter.
      </h2>

      <p className="mb-8 mt-4 max-w-[600px] leading-[1.75] text-[#475569]">
        Shared flights offer value on established routes. A private charter
        provides greater control over timing, passengers and destinations.
      </p>

      <div className="overflow-x-auto rounded-2xl border border-[#E2E8F0]">
        <table className="w-full min-w-[620px] bg-white text-sm">
          <thead>
            <tr className="bg-[#E6F0F8]">
              <th className="p-5 text-left" />

              <th className="p-5 text-left text-[11px] font-bold uppercase tracking-[0.12em] text-[#475569]">
                Group Tour
              </th>

              <th className="bg-[#F2B632]/20 p-5 text-left text-[11px] font-bold uppercase tracking-[0.12em] text-[#003366]">
                Private Charter
              </th>
            </tr>
          </thead>

          <tbody>
            {comparisonRows.map((row) => (
              <tr key={row.label} className="border-t border-[#E2E8F0]">
                <th className="p-5 text-left font-semibold text-[#0A1929]">
                  {row.label}
                </th>

                <td className="p-5 text-[#475569]">{row.group}</td>

                <td className="bg-[#F2B632]/5 p-5 font-bold text-[#003366]">
                  {row.private}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-xs italic text-[#475569]">
        The best option depends on budget, schedule, passenger count and the
        amount of flexibility required.
      </p>
    </article>
  );
}