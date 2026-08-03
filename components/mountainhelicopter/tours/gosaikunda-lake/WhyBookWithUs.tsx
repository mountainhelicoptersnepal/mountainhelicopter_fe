import {
  BadgeDollarSign,
  Clock3,
  CloudSun,
  Plane,
  ShieldCheck,
} from "lucide-react";

const reasons = [
  {
    icon: Plane,
    title: "Direct Helicopter Fleet Operator",
    description:
      "Mountain Helicopters Nepal is a licensed aviation operator. You book directly with the company operating the helicopter rather than through a tour agency, broker or intermediary.",
  },
  {
    icon: ShieldCheck,
    title: "CAAN-Certified Safety Standards",
    description:
      "Our Gosaikunda flights are operated using CAAN-certified Airbus H125 helicopters. Experienced Himalayan pilots manage changing weather, confined valleys and high-altitude landing conditions.",
  },
  {
    icon: Clock3,
    title: "30–40 Minutes at Gosaikunda",
    description:
      "When weather and landing conditions allow, passengers normally receive approximately 30 to 40 minutes beside Gosaikunda Lake for photography, sightseeing, prayer and quiet exploration.",
  },
  {
    icon: BadgeDollarSign,
    title: "Transparent, All-Inclusive Pricing",
    description:
      "Your confirmed package clearly explains the helicopter flight, Langtang National Park permit, airport taxes, applicable government charges, hotel transfers and included operational services without hidden intermediary commissions.",
  },
  {
    icon: CloudSun,
    title: "Flexible Weather Rescheduling",
    description:
      "When poor visibility, cloud, rain, snowfall or strong winds make the Gosaikunda route unsafe, eligible bookings may be moved to the next suitable departure or refunded according to the confirmed cancellation terms.",
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
            Five reasons to book{" "}
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