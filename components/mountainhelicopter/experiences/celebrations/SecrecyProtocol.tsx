import { Check } from "lucide-react";

const protocol = [
  {
    title: "Private communication",
    description:
      "Planning takes place directly with the person arranging the surprise.",
  },
  {
    title: "Decoy itinerary",
    description:
      "A normal scenic-flight itinerary can be prepared for your partner.",
  },
  {
    title: "Crew briefing",
    description:
      "The flight team is informed about the timing and cover story.",
  },
  {
    title: "Ring or gift safekeeping",
    description:
      "Small important items may be secured with an assigned crew member.",
  },
  {
    title: "Discreet photographer",
    description:
      "The photographer can be introduced as part of the supporting crew.",
  },
];

const statistics = [
  {
    value: "Private",
    label: "Planning channel",
  },
  {
    value: "Custom",
    label: "Flight choreography",
  },
  {
    value: "7 Days",
    label: "Typical film delivery",
  },
];

export default function SecrecyProtocol() {
  return (
    <article
      aria-labelledby="protocol-heading"
      className="relative overflow-hidden rounded-3xl bg-[#003366] p-8 text-white md:p-12"
    >
      <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#F2B632]/10" />

      <div className="relative">
        <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#F2B632]">
          How We Keep It
        </p>

        <h2
          id="protocol-heading"
          className="mb-6 font-fraunces text-[clamp(1.75rem,3.4vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.02em]"
        >
          The secrecy protocol.
        </h2>

        <p className="leading-[1.8] text-white/85">
          A surprise celebration in the mountains involves several moving
          parts. The crew, ground team and photographer are briefed in advance
          so the experience feels natural when the moment arrives.
        </p>

        <ul className="mt-7 space-y-4">
          {protocol.map((item) => (
            <li key={item.title} className="flex items-start gap-3">
              <Check
                size={17}
                strokeWidth={2.5}
                className="mt-1 shrink-0 text-[#F2B632]"
              />

              <span className="text-sm leading-[1.75] text-white/85">
                <strong className="text-white">{item.title}</strong> —{" "}
                {item.description}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-8 grid grid-cols-3 gap-5 border-t border-white/15 pt-8">
          {statistics.map((statistic) => (
            <div key={statistic.label}>
              <p className="font-fraunces text-[22px] font-semibold text-[#F2B632] md:text-3xl">
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