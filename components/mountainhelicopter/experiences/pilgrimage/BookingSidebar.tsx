import Link from "next/link";
import {
  Check,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

const phoneNumber = "9779712082949";

const whatsappMessage =
  "Hello! I would like to plan a Pilgrimage by Air journey to Muktinath, Gosaikunda, Damodar Kund or Kailash.";

const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
  whatsappMessage,
)}`;

const benefits = [
  "Elderly-friendly crew assistance",
  "Oxygen onboard high-altitude flights",
  "Priest and puja coordination available",
];

const addOns = [
  {
    title: "Priest and puja arrangement",
    description: "Ceremony coordinated in advance",
    price: "+ USD 120",
  },
  {
    title: "Photographer",
    description: "Edited gallery after the journey",
    price: "+ USD 350",
  },
  {
    title: "Garland and offering kit",
    description: "Flowers, incense, cloth and coins",
    price: "+ USD 40",
  },
];

const bestMonths = [
  { month: "Mar", peak: true },
  { month: "Apr", peak: true },
  { month: "May", peak: true },
  { month: "Sep", peak: true },
  { month: "Oct", peak: true },
  { month: "Nov", peak: true },
  { month: "Feb" },
  { month: "Dec" },
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
            Reserve This Journey
          </p>

          <div className="mb-1 flex items-baseline gap-2">
            <span className="font-fraunces text-4xl font-semibold">
              USD 1,100
            </span>

            <span className="text-sm text-white/70">/ person</span>
          </div>

          <p className="mb-7 text-xs leading-relaxed text-white/70">
            Muktinath half-day. Kailash and other customized pilgrimages are
            quoted separately.
          </p>

          <Link
            href="/contact"
            className="mb-3 flex min-h-[52px] w-full items-center justify-center rounded-xl bg-[#F2B632] px-5 py-4 text-center font-bold text-[#003366] transition hover:bg-[#E5A82D]"
          >
            Plan a sacred journey →
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
          Gold indicates the main pilgrimage periods. Monsoon and winter routes
          remain weather-dependent.
        </p>
      </div>

      <div className="rounded-2xl border border-[#003366]/15 bg-[#E6F0F8] p-6">
        <div className="mb-3 flex items-center gap-3">
          <ShieldCheck size={21} className="text-[#003366]" />

          <p className="text-sm font-bold text-[#003366]">
            Flown by experienced Himalayan crews
          </p>
        </div>

        <p className="text-xs leading-[1.75] text-[#0A1929]/75">
          Each sacred journey is planned according to passenger health, mobility,
          weather, aircraft capability, route permits and the final decision of
          the Pilot in Command.
        </p>
      </div>
    </aside>
  );
}