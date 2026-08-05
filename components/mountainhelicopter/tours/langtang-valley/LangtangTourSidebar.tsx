import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  MessageCircle,
  Mountain,
  Star,
  Users,
} from "lucide-react";

const phoneNumber = "9779712082953";
const message =
  "Hi, I would like to know more about the Langtang Helicopter Tour.";
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
  message,
)}`;

const bookingFacts = [
  { icon: Clock3, label: "Duration", value: "2-4 hours" },
  { icon: Users, label: "Guests", value: "Up to 5 + pilot" },
  { icon: Mountain, label: "Landing", value: "Kyanjin Gompa, 3,870 m" },
  { icon: CalendarDays, label: "Best Season", value: "Spring & Autumn" },
];

const whyBookItems = [
  "Direct Helicopter Fleet Operator",
  "Langtang National Park Permit Included",
  "Breakfast at Kyanjin Gompa",
  "60-90 Minutes Ground Time",
  "CAAN Certified Operations",
];

const groupPricing = [
  ["Shared Seat", "USD 250-350 pp"],
  ["Private Charter", "USD 1,400-2,000"],
  ["Ground Time", "60-90 minutes"],
  ["One-Way Flight", "25-35 minutes"],
];

export default function LangtangTourSidebar() {
  return (
    <aside className="space-y-5 lg:sticky lg:top-[155px] lg:self-start">
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_35px_rgba(15,48,78,0.1)]">
        <div className="h-[3px] bg-[#f3ad20]" />

        <div className="p-5">
          <h3 className="font-fraunces text-xl font-semibold leading-tight text-[#0a3158]">
            Langtang
            <br />
            Helicopter Tour
          </h3>

          <div className="mt-2 flex flex-wrap items-center gap-2">
            <div className="flex text-[#f3ad20]">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  size={11}
                  fill="currentColor"
                  strokeWidth={1.5}
                />
              ))}
            </div>

            <span className="font-manrope text-[10px] text-slate-400">
              Valley of Glaciers
            </span>
          </div>

          <div className="mt-6">
            <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">
              Starting From
            </p>

            <div className="mt-1 flex items-end">
              <span className="font-fraunces text-4xl font-medium leading-none text-[#0a4e80]">
                $250
              </span>

              <span className="mb-1 ml-1 font-manrope text-[9px] text-slate-400">
                /person
              </span>
            </div>

            <p className="mt-2 font-manrope text-[10px] text-slate-400">
              Shared group tour estimate
              <br />
              Private charter from USD 1,400
            </p>
          </div>

          <div className="mt-5 grid grid-cols-2 border-y border-slate-100 py-4">
            {bookingFacts.map((fact, index) => {
              const Icon = fact.icon;

              return (
                <div
                  key={fact.label}
                  className={`flex items-start gap-2 px-2 py-3 ${
                    index % 2 === 0 ? "border-r border-slate-100" : ""
                  }`}
                >
                  <Icon
                    size={15}
                    strokeWidth={1.8}
                    className="mt-0.5 shrink-0 text-[#0a568d]"
                  />

                  <div>
                    <p className="font-manrope text-[8px] font-bold uppercase tracking-[0.12em] text-slate-400">
                      {fact.label}
                    </p>

                    <p className="mt-1 font-manrope text-[10px] font-bold leading-4 text-[#0a3158]">
                      {fact.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-5">
            <h4 className="font-manrope text-[9px] font-bold uppercase tracking-[0.18em] text-[#0a3158]">
              Why Book With MHN
            </h4>

            <div className="mt-3 space-y-2.5">
              {whyBookItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 font-manrope text-[10px] text-[#64707d]"
                >
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
                    <Check size={10} strokeWidth={2.5} />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h4 className="font-manrope text-[9px] font-bold uppercase tracking-[0.18em] text-[#0a3158]">
              Pricing Snapshot
            </h4>

            <div className="mt-3">
              {groupPricing.map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between border-b border-slate-100 py-2 font-manrope text-[10px]"
                >
                  <span className="text-slate-500">{label}</span>
                  <span className="font-semibold text-[#0a4775]">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 space-y-2.5">
            <Link
              href="/contact"
              className="group flex min-h-11 w-full items-center justify-center gap-2 rounded-sm bg-[#073763] px-4 font-manrope text-[10px] font-bold uppercase tracking-[0.13em] text-white transition hover:bg-[#052947]"
            >
              Book Your Journey
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-11 w-full items-center justify-center gap-2 rounded-sm bg-[#25d366] px-4 font-manrope text-[10px] font-bold uppercase tracking-[0.13em] text-white transition hover:bg-[#1fb95a]"
            >
              <MessageCircle size={14} fill="currentColor" />
              WhatsApp Inquiry
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
