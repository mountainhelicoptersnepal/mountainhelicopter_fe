import Link from "next/link";

import {
  BadgeCheck,
  Check,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

const phoneNumber = "9779712082949";

const whatsappMessage =
  "Namaste, I would like to inquire about the Everest Breakfast helicopter experience.";

const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
  whatsappMessage,
)}`;

const benefits = [
  "Weather-related rescheduling options",
  "Booking confirmed according to payment terms",
  "Direct response from the flight team",
];

const addOns = [
  {
    title: "Kala Patthar landing",
    description: "High-altitude landing before breakfast",
    price: "On request",
  },
  {
    title: "Celebration arrangement",
    description: "Flowers, cake or private setup",
    price: "On request",
  },
  {
    title: "Professional photographer",
    description: "Subject to availability",
    price: "On request",
  },
];

const bestMonths = [
  {
    month: "Oct",
    peak: true,
  },
  {
    month: "Nov",
    peak: true,
  },
  {
    month: "Mar",
    peak: true,
  },
  {
    month: "Apr",
    peak: true,
  },
  {
    month: "Dec",
  },
  {
    month: "Jan",
  },
  {
    month: "Feb",
  },
  {
    month: "May",
  },
  {
    month: "Sep",
  },
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
            Reserve This Morning
          </p>

          <p className="font-fraunces text-[36px] font-semibold leading-none">
            Contact for price
          </p>

          <p className="mb-7 mt-3 text-xs leading-relaxed text-white/70">
            Final price depends on booking type, passenger count, aircraft
            availability, route and operational conditions.
          </p>

          <Link
            href="/contact"
            className="mb-3 flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-[#F2B632] px-5 py-4 text-center font-bold text-[#003366] transition hover:bg-[#E5A82D]"
          >
            Reserve this morning
            <BadgeCheck size={18} />
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl border-2 border-white/30 px-5 py-3.5 text-center font-semibold text-white transition hover:border-[#F2B632] hover:text-[#F2B632]"
          >
            <MessageCircle size={17} />
            WhatsApp a flight designer
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
          Popular Add-Ons
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

              <span className="shrink-0 text-[10px] font-bold uppercase text-[#003366]">
                {addOn.price}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6">
        <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.15em] text-[#B8860B]">
          Best Months
        </p>

        <div className="flex flex-wrap gap-2">
          {bestMonths.map((month) => (
            <span
              key={month.month}
              className={`rounded px-3 py-2 text-[10px] font-bold uppercase ${
                month.peak
                  ? "bg-[#F2B632] text-[#003366]"
                  : "bg-[#E6F0F8] text-[#003366]"
              }`}
            >
              {month.month}
            </span>
          ))}
        </div>

        <p className="mt-4 text-xs leading-relaxed text-[#475569]">
          Gold indicates the most popular clear-weather periods. All operations
          remain weather-dependent.
        </p>
      </div>

      <div className="rounded-2xl border border-[#003366]/15 bg-[#E6F0F8] p-6">
        <div className="mb-3 flex items-center gap-3">
          <ShieldCheck size={21} className="text-[#003366]" />

          <p className="text-sm font-bold text-[#003366]">
            Operated by experienced Himalayan flight crews
          </p>
        </div>

        <p className="text-xs leading-[1.75] text-[#0A1929]/75">
          Each flight is planned according to weather, visibility, aircraft
          condition, passenger weight and the final safety decision of the Pilot
          in Command.
        </p>
      </div>
    </aside>
  );
}