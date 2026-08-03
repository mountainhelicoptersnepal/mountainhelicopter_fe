import { Check } from "lucide-react";

const requirements = [
  "Safety harness and restraint system used according to the aircraft configuration",
  "Camera bodies, lenses and accessories secured before takeoff",
  "Communication headset used throughout the photography sequence",
  "Equipment weight and dimensions submitted before the flight",
  "Maximum passenger and crew numbers determined by aircraft performance",
];

const statistics = [
  {
    value: "Very Cold",
    label: "Doors-off conditions",
  },
  {
    value: "3",
    label: "Typical shooter limit",
  },
  {
    value: "Custom",
    label: "Aircraft configuration",
  },
];

export default function DoorsOffBriefing() {
  return (
    <article
      aria-labelledby="doors-off-heading"
      className="relative overflow-hidden rounded-3xl bg-[#003366] p-8 text-white md:p-12"
    >
      <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#F2B632]/10" />

      <div className="relative">
        <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#F2B632]">
          Shooting Doors-Off
        </p>

        <h2
          id="doors-off-heading"
          className="mb-6 font-fraunces text-[clamp(1.75rem,3.4vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.02em]"
        >
          The doors-off briefing.
        </h2>

        <div className="space-y-5 leading-[1.8] text-white/85">
          <p>
            Doors-off photography removes window reflections and creates a clear
            view between the lens and the landscape. It also requires careful
            equipment control, passenger restraint and communication.
          </p>

          <p>
            The exact configuration depends on the aircraft, equipment,
            passenger weight, route, weather and approval of the flight
            operations team.
          </p>
        </div>

        <ul className="mt-7 space-y-4">
          {requirements.map((requirement) => (
            <li key={requirement} className="flex items-start gap-3">
              <Check
                size={17}
                strokeWidth={2.5}
                className="mt-1 shrink-0 text-[#F2B632]"
              />

              <span className="text-sm leading-[1.75] text-white/85">
                {requirement}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-8 grid grid-cols-3 gap-5 border-t border-white/15 pt-8">
          {statistics.map((statistic) => (
            <div key={statistic.label}>
              <p className="font-fraunces text-[20px] font-semibold text-[#F2B632] md:text-3xl">
                {statistic.value}
              </p>

              <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-white/60">
                {statistic.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}