"use client";

const plans = [
  {
    title: "Shared Seat",
    subtitle: "Group joining seat",
    price: "$4000",
    unit: "per person",
    button: "Book Shared Seat",
    href: "/contact#inquiry-form",
    featured: false,
    features: [
      "Kathmandu to Lukla flight",
      "Everest mountain overfly",
      "Gokyo Lake landing",
      "Passenger insurance covered",
      "Pre-flight safety briefing",
      "Oxygen on board (if needed)",
    ],
  },
  {
    title: "Private Charter",
    subtitle: "Based on group size",
    price: "$7000",
    unit: "per helicopter",
    button: "Charter the Helicopter",
    href: "/contact#inquiry-form",
    featured: true,
    features: [
      "Everything in Shared Seat",
      "Private helicopter arrangement",
      "Flexible timing where operationally possible",
      "Dedicated ground coordinator",
      "Route and landing subject to pilot approval",
      "Priority weather coordination",
    ],
  },
];

type Plan = (typeof plans)[number];

function PriceCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={`group relative flex min-h-[579px] w-full max-w-[430px] flex-col overflow-visible border bg-white px-6 py-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(0,51,102,0.16)] sm:px-8 sm:py-10 ${
        plan.featured
          ? "border-[#F2B632] hover:border-[#003366]"
          : "border-[#e1e8ef] hover:border-[#F2B632]"
      }`}
    >
      {/* HOVER TOP LINE */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-[#F2B632] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* HOVER GLOW */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#F2B632]/10 opacity-0 blur-2xl transition-all duration-700 group-hover:opacity-100 sm:-right-20 sm:-top-20 sm:h-40 sm:w-40" />

      {/* FEATURED BADGE */}
      {plan.featured && (
        <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap bg-[#F2B632] px-5 py-2 font-manrope text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#003366] transition-all duration-500 group-hover:bg-[#003366] group-hover:text-white sm:px-7 sm:py-[10px] sm:text-[10px] sm:tracking-[0.24em]">
          Most Exclusive
        </div>
      )}

      <h3
        className={`relative z-10 font-fraunces text-[25px] font-semibold leading-none transition-all duration-500 group-hover:translate-x-1 sm:text-[27px] ${
          plan.featured ? "text-[#F2B632]" : "text-[#003366]"
        }`}
      >
        {plan.title}
      </h3>

      <p
        className={`relative z-10 mt-3 font-manrope text-[13px] leading-6 transition-colors duration-500 sm:text-[14px] ${
          plan.featured ? "text-[#7b8795]" : "text-[#F2B632]"
        }`}
      >
        {plan.subtitle}
      </p>

      <div className="relative z-10 mt-7 flex flex-wrap items-end gap-3">
        <span className="mb-[7px] font-manrope text-[11px] font-bold uppercase tracking-[0.12em] text-[#7b8795]">
          From
        </span>

        <span className="font-fraunces text-[40px] font-semibold leading-none tracking-[-0.04em] text-[#003366] transition-all duration-500 group-hover:text-[#F2B632] sm:text-[44px]">
          {plan.price}
        </span>

        <span className="mb-[7px] font-manrope text-[12px] text-[#7b8795]">
          {plan.unit}
        </span>
      </div>

      <div className="relative z-10 mt-7 h-px w-full bg-[#e8edf2] transition-colors duration-500 group-hover:bg-[#F2B632]/40" />

      <ul className="relative z-10 mt-6 flex-1 space-y-[14px] sm:space-y-[15px]">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className="flex gap-3 font-manrope text-[13px] leading-[1.5] text-[#6f7c8d] sm:text-[14px]"
          >
            <span className="mt-[1px] text-[14px] font-bold text-[#F2B632] transition-transform duration-300 group-hover:scale-125">
              ✓
            </span>

            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href={plan.href}
        className={`relative z-10 mt-8 flex h-[52px] w-full items-center justify-center px-4 text-center font-manrope text-[10px] font-extrabold uppercase tracking-[0.14em] transition-all duration-300 sm:text-[11px] sm:tracking-[0.18em] ${
          plan.featured
            ? "bg-[#F2B632] text-[#003366] hover:bg-[#003366] hover:text-white"
            : "border border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white"
        }`}
      >
        {plan.button}
        {plan.featured && (
          <span className="ml-2 text-[16px] transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        )}
      </a>
    </div>
  );
}

export default function PriceSection() {
  return (
    <section
      id="pricing"
      className="scroll-mt-36 w-full overflow-hidden bg-[#f4f8fc]"
    >
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16 py-16 md:py-24 lg:py-28">
        {/* SECTION HEADING */}
        <div className="text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-5 bg-[#F2B632]" />

            <p className="font-manrope text-[10px] font-bold uppercase tracking-[0.35em] text-[#F2B632] sm:tracking-[0.42em]">
              Fares
            </p>
          </div>

          <h2 className="font-fraunces text-[36px] font-semibold leading-none tracking-[-0.03em] text-[#003366] sm:text-[44px] md:text-[52px]">
            Two ways to fly
          </h2>

          <p className="mx-auto mt-5 max-w-[620px] font-manrope text-[14px] leading-7 text-[#7b8795] sm:text-[15px]">
            Group joining seat, or private charter based on your group size.
            Both follow the same safety-led mountain flight plan.
          </p>
        </div>

        {/* PRICING CARDS */}
        <div className="mt-14 grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 md:items-stretch md:gap-6">
          {plans.map((plan) => (
            <PriceCard key={plan.title} plan={plan} />
          ))}
        </div>

        <p className="mt-8 text-center font-manrope text-[12px] leading-6 text-[#7b8795] sm:text-[13px]">
          Fares exclude: permits, airport taxes, personal meals, gratuities, and
          expenses caused by delays.
        </p>
      </div>
    </section>
  );
}
