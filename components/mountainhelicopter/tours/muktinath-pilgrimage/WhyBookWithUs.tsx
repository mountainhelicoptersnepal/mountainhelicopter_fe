import {
  Clock3,
  Headphones,
  ShieldCheck,
  UsersRound,
  Wind,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Experienced Team",
    description:
      "Our pilots have thousands of hours of high-altitude Himalayan flight experience. Our operations team has been running this route since 2009.",
  },
  {
    icon: UsersRound,
    title: "Best Pricing",
    description:
      "We are the direct operator, no agency markup and no third-party commissions. What you pay is the actual operating cost plus our margin, with nothing hidden.",
  },
  {
    icon: Clock3,
    title: "Professional Itinerary",
    description:
      "Every landing, departure time, and breakfast stop has been refined over hundreds of flights. You are not the test case.",
  },
  {
    icon: Headphones,
    title: "24/7 Available",
    description:
      "Our team is reachable around the clock before, during, and after your flight. WhatsApp, phone, and email are all monitored.",
  },
  {
    icon: Wind,
    title: "Environmentally Responsible",
    description:
      "We operate fuel-efficient aircraft on this route and follow Sagarmatha National Park requirements and approved procedures for mountain landing zones.",
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
