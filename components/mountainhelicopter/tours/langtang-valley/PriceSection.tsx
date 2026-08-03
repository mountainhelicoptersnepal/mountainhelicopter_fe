"use client";

const plans = [
  {
    title: "Group Joining / Shared Tour",
    subtitle: "Kathmandu - Kyanjin Gompa - Kathmandu",
    price: "$250-350",
    unit: "per person",
    button: "Book Shared Seat",
    href: "/contact#inquiry-form",
    featured: false,
    features: [
      "Round-trip helicopter flight",
      "Hotel transfers",
      "Langtang National Park permit",
      "Airport tax and VAT",
      "60 to 90 minutes ground time",
      "Breakfast and safety briefing",
      "Usually requires 4-5 guests",
    ],
  },
  {
    title: "Private Helicopter Charter",
    subtitle: "Full helicopter with flexible timing",
    price: "$1,400-2,000",
    unit: "full helicopter",
    button: "Charter the Helicopter",
    href: "/contact#inquiry-form",
    featured: true,
    features: [
      "Private full helicopter charter",
      "Flexible departure time",
      "Private ground time",
      "Comfortable seating for up to 5 persons",
      "Best for families, VIP clients, photographers, and groups",
      "Same inclusions as shared tour",
    ],
  },
];

type Plan = (typeof plans)[number];

function PriceCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={`group relative flex min-h-[540px] w-full max-w-[430px] flex-col overflow-visible border bg-white px-6 py-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(0,51,102,0.16)] sm:px-8 sm:py-10 ${
        plan.featured
          ? "border-[#F2B632] hover:border-[#003366]"
          : "border-[#e1e8ef] hover:border-[#F2B632]"
      }`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-[#F2B632] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {plan.featured && (
        <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap bg-[#F2B632] px-5 py-2 font-manrope text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#003366] transition-all duration-500 group-hover:bg-[#003366] group-hover:text-white sm:px-7 sm:py-[10px] sm:text-[10px] sm:tracking-[0.24em]">
          Private Option
        </div>
      )}

      <h3 className={`relative z-10 font-fraunces text-[25px] font-semibold leading-none transition-all duration-500 group-hover:translate-x-1 sm:text-[27px] ${plan.featured ? "text-[#F2B632]" : "text-[#003366]"}`}>
        {plan.title}
      </h3>

      <p className={`relative z-10 mt-3 font-manrope text-[13px] leading-6 sm:text-[14px] ${plan.featured ? "text-[#7b8795]" : "text-[#F2B632]"}`}>
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

      <div className="relative z-10 mt-7 h-px w-full bg-[#e8edf2]" />

      <ul className="relative z-10 mt-6 flex-1 space-y-[14px] sm:space-y-[15px]">
        {plan.features.map((feature) => (
          <li key={feature} className="flex gap-3 font-manrope text-[13px] leading-[1.5] text-[#6f7c8d] sm:text-[14px]">
            <span className="mt-[1px] text-[14px] font-bold text-[#F2B632]">✓</span>
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
      </a>
    </div>
  );
}

export default function PriceSection() {
  return (
    <section id="pricing" className="scroll-mt-36 w-full overflow-hidden bg-[#f4f8fc]">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-12 md:py-24 lg:px-16 lg:py-28">
        <div className="text-center">
          <p className="font-manrope text-[10px] font-bold uppercase tracking-[0.35em] text-[#F2B632] sm:tracking-[0.42em]">
            Cost & Pricing 2025/2026
          </p>

          <h2 className="mt-5 font-fraunces text-[36px] font-semibold leading-none tracking-[-0.03em] text-[#003366] sm:text-[44px] md:text-[52px]">
            Two ways to fly Langtang
          </h2>

          <p className="mx-auto mt-5 max-w-[720px] font-manrope text-[14px] leading-7 text-[#7b8795] sm:text-[15px]">
            Pricing depends on whether you select a shared group tour or a
            private charter. Fuel prices, group size, season, and inclusions can
            affect the final quote.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 md:items-stretch md:gap-6">
          {plans.map((plan) => (
            <PriceCard key={plan.title} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
