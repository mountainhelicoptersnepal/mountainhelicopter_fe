import Link from "next/link";

import {
  Check,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

const phoneNumber = "9779712082949";

const whatsappMessage =
  "Hello! I would like to plan a Golden Hour photography or filming helicopter charter.";

const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
  whatsappMessage,
)}`;

const benefits = [
  "Route planned around your shot list",
  "Equipment configuration reviewed",
  "Permit requirements assessed",
];

const addOns = [
  {
    title: "Second aircraft",
    description: "For air-to-air filming or larger crews",
    price: "Quote",
  },
  {
    title: "Specialized camera setup",
    description: "Subject to equipment and operational approval",
    price: "Quote",
  },
  {
    title: "Additional flight time",
    description: "Extend the shoot while conditions allow",
    price: "Quote",
  },
];

const bestMonths = [
  { month: "Oct", peak: true },
  { month: "Nov", peak: true },
  { month: "Apr", peak: true },
  { month: "Dec" },
  { month: "Jan" },
  { month: "Feb" },
  { month: "Mar" },
  { month: "May" },
  { month: "Sep" },
];

export default function BookingSidebar() {
  return (
    <aside
      id="booking"
      aria-label="Booking information"
      className="space-y-5"
    >
      <div className="relative overflow-hidden rounded-3xl bg-[#003366] p-8 text-white shadow-[0_20px_40px_rgba(0,51,102,0.18)]">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#F2B632]/10" />

        <div className="relative">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.15em] text-[#F2B632]">
            Reserve the Light
          </p>

          <div className="mb-1">
            <span className="font-fraunces text-4xl font-semibold">
              Custom Quote
            </span>
          </div>

          <p className="mb-7 text-xs leading-relaxed text-white/70">
            Pricing depends on route, flight time, equipment, aircraft
            configuration and production requirements.
          </p>

          <Link
            href="/contact"
            className="mb-3 flex min-h-[52px] w-full items-center justify-center rounded-xl bg-[#F2B632] px-5 py-4 text-center font-bold text-[#003366] transition hover:bg-[#E5A82D]"
          >
            Book the light →
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl border-2 border-white/30 px-5 py-3.5 text-center font-semibold text-white transition hover:border-[#F2B632] hover:text-[#F2B632]"
          >
            <MessageCircle size={17} />
            WhatsApp a Flight Designer
          </a>

          <ul className="mt-7 space-y-3 border-t border-white/15 pt-6">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-center gap-3 text-sm text-white/90"
              >
                <Check
                  size={16}
                  strokeWidth={2.5}
                  className="shrink-0 text-[#F2B632]"
                />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6">
        <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.15em] text-[#B8860B]">
          Production Options
        </p>

        <ul className="space-y-3">
          {addOns.map((addOn, index) => (
            <li
              key={addOn.title}
              className={`flex items-start justify-between gap-4 ${
                index !== addOns.length - 1
                  ? "border-b border-[#E2E8F0] pb-3"
                  : ""
              }`}
            >
              <div>
                <p className="text-sm font-bold text-[#0A1929]">
                  {addOn.title}
                </p>

                <p className="mt-1 text-xs leading-relaxed text-[#475569]">
                  {addOn.description}
                </p>
              </div>

              <span className="shrink-0 whitespace-nowrap text-xs font-bold text-[#003366]">
                {addOn.price}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6">
        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.15em] text-[#B8860B]">
          Best Months
        </p>

        <div className="flex flex-wrap gap-2">
          {bestMonths.map((month) => (
            <span
              key={month.month}
              className={`rounded px-2.5 py-1.5 text-[10px] font-bold uppercase ${
                month.peak
                  ? "bg-[#F2B632] text-[#003366]"
                  : "bg-[#E6F0F8] text-[#003366]"
              }`}
            >
              {month.month}
            </span>
          ))}
        </div>

        <p className="mt-3 text-xs leading-relaxed text-[#475569]">
          Gold indicates the main photography periods. Monsoon flights remain
          highly weather-dependent.
        </p>
      </div>

      <div className="rounded-2xl border border-[#003366]/15 bg-[#E6F0F8] p-6">
        <div className="mb-3 flex items-center gap-3">
          <ShieldCheck size={21} className="text-[#003366]" />

          <p className="text-sm font-bold text-[#003366]">
            Planned around aviation safety
          </p>
        </div>

        <p className="text-xs leading-[1.75] text-[#0A1929]/75">
          The final configuration and route depend on weather, equipment,
          passenger weight, aircraft performance, permits and the decision of
          the Pilot in Command.
        </p>
      </div>
    </aside>
  );
}