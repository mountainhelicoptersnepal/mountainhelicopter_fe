import { Check } from "lucide-react";

const processItems = [
  "Share your destinations, interests, dates and passenger details",
  "Receive a proposed itinerary and transparent quotation",
  "Review permits, landing requirements and ground arrangements",
  "Confirm the route and aircraft according to operational conditions",
  "Keep the itinerary flexible where weather, fuel and safety allow",
];

const statistics = [
  {
    value: "Custom",
    label: "Itinerary design",
  },
  {
    value: "Clear",
    label: "Itemized quotation",
  },
  {
    value: "Flexible",
    label: "Operational planning",
  },
];

export default function DesignProcess() {
  return (
    <article
      aria-labelledby="design-process-heading"
      className="relative overflow-hidden rounded-3xl bg-[#003366] p-8 text-white md:p-12"
    >
      <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#F2B632]/10" />

      <div className="relative">
        <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#F2B632]">
          The Design Process
        </p>

        <h2
          id="design-process-heading"
          className="mb-6 font-fraunces text-[clamp(1.75rem,3.4vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.02em]"
        >
          How a blank map becomes a flight plan.
        </h2>

        <div className="space-y-5 leading-[1.8] text-white/85">
          <p>
            Begin with a place, a purpose, a photograph, a family story or a
            rough idea of the day you want.
          </p>

          <p>
            The flight design team reviews the proposed route and develops an
            itinerary based on distance, fuel planning, permits, suitable
            landing areas, passenger weight and weather patterns.
          </p>

          <p>
            Once the route is approved, the team coordinates applicable
            permits, meals, ground transfers and accommodation for multi-day
            journeys.
          </p>
        </div>

        <ul className="mt-7 space-y-4">
          {processItems.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <Check
                size={17}
                strokeWidth={2.5}
                className="mt-1 shrink-0 text-[#F2B632]"
              />

              <span className="text-sm leading-[1.75] text-white/85">
                {item}
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