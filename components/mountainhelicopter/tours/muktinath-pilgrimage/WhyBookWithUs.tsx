import {
  Clock3,
  Headphones,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Direct Helicopter Fleet Operator",
    description:
      "We are a certified aviation operator, so you work directly with the operating company rather than through an intermediary.",
  },
  {
    icon: UsersRound,
    title: "CAAN Certified Safety Standards",
    description:
      "Our Airbus H125 series aircraft are flown by skilled Himalayan pilots with appropriate high-altitude type ratings.",
  },
  {
    icon: Clock3,
    title: "100% Transparency in Total Cost",
    description:
      "We quote the total cost clearly, including ACAP permits, airport tax, and VAT, so there is nothing unexpected to pay.",
  },
  {
    icon: Headphones,
    title: "Weather Flexible Reschedule Guarantee",
    description:
      "If mountain conditions do not support the morning flight, you receive either a reschedule option or a full refund.",
  },
];

export default function WhyBookWithUs() {
  return (
    <section className="bg-[#071a2c]">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 py-16 md:py-24 lg:py-28">
        {/* HEADING */}
        <div className="text-center">
          <p className="flex items-center justify-center gap-3 font-manrope text-xs font-bold uppercase tracking-[0.24em] text-[#e0a321]">
            <span className="h-px w-7 bg-[#e0a321]" />
            Why Book With Mountain Helicopters Nepal
          </p>

          <h2 className="mt-5 font-fraunces text-3xl font-semibold leading-tight tracking-[-0.02em] text-white md:text-4xl lg:text-5xl">
            Why book Muktinath{" "}
            <span className="text-[#e0a321]">directly with us.</span>
          </h2>
        </div>

        {/* REASON CARDS */}
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.title}
                className="rounded-[24px] bg-white px-6 py-7 md:px-8 md:py-8"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#07325f] text-[#f0b323]">
                  <Icon size={21} strokeWidth={2} />
                </div>

                <h3 className="mt-6 font-fraunces text-xl font-semibold text-[#08294d]">
                  {reason.title}
                </h3>

                <p className="mt-3 max-w-xl font-manrope text-sm leading-7 text-slate-500">
                  {reason.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
