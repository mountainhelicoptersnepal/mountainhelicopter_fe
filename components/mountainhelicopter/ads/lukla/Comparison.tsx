import Reveal from "./Reveal";

const ROWS: Array<[label: string, heli: string, fixed: string]> = [
  [
    "Departure point",
    "Kathmandu, direct",
    "Often shifted to Ramechhap (4 to 5 hr drive)",
  ],
  [
    "Departure frequency",
    "Everyday, both directions",
    "Fixed slots, frequent rolling delays",
  ],
  [
    "If weather closes in",
    "Flexible re-slotting, priority next window",
    "Rebooking queue behind all delayed passengers",
  ],
  ["Group size", "5 passengers max", "15 to 19 passengers"],
  [
    "The flight itself",
    "Low-level Himalayan flying, every seat a view",
    "Standard cabin flight",
  ],
];

export default function Comparison() {
  return (
    <section className="bg-[#F3F7FD] py-[70px]">
      <div className="mx-auto max-w-[1160px] px-[22px]">
        <Reveal className="mb-9 max-w-[700px]">
          <div className="mb-2.5 font-geist-mono text-[12.5px] font-semibold uppercase tracking-[.16em] text-[#D99A00]">
            Why Helicopter
          </div>
          <h2 className="font-fraunces leading-[1.12] text-[clamp(1.55rem,3.5vw,2.3rem)] font-extrabold tracking-[-.01em] text-[#051F49]">
            Travel by helicopter so your trek never waits on a delay.
          </h2>
          <p className="mt-3 text-[#4A5B76]">
            In peak season, most fixed wing Lukla flights relocate to Ramechhap,
            a 4 to 5 hour drive from Kathmandu, and weather backlogs can hold
            trekkers for days.
          </p>
        </Reveal>

        <Reveal className="overflow-x-auto rounded-[14px] border border-[#D7E2F2] bg-white">
          <table className="w-full min-w-[560px] border-collapse text-left">
            <thead>
              <tr>
                <th className="border-b border-[#D7E2F2] px-[18px] py-[15px] text-[13.5px] font-extrabold uppercase tracking-[.05em] text-[#4A5B76]" />
                <th className="border-b border-[#D7E2F2] bg-[#0C4396] px-[18px] py-[15px] text-[13.5px] font-extrabold uppercase tracking-[.05em] text-white">
                  Helicopter with us
                </th>
                <th className="border-b border-[#D7E2F2] px-[18px] py-[15px] text-[13.5px] font-extrabold uppercase tracking-[.05em]">
                  Fixed wing flight
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map(([label, heli, fixed]) => (
                <tr key={label}>
                  <td className="border-b border-[#D7E2F2] px-[18px] py-[15px] text-[14.5px] text-[#4A5B76] last:border-b-0">
                    {label}
                  </td>
                  <td className="border-b border-[#D7E2F2] bg-[#0C4396]/[.05] px-[18px] py-[15px] text-[15.5px] font-semibold text-[#051F49] last:border-b-0">
                    <span className="font-bold text-[#0C4396]">✓</span> {heli}
                  </td>
                  <td className="border-b border-[#D7E2F2] px-[18px] py-[15px] text-[15.5px] last:border-b-0">
                    {fixed}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  );
}
