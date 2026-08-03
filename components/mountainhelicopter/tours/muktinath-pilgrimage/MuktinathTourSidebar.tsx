import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  Headphones,
  HeartPulse,
  Mail,
  MessageCircle,
  Mountain,
  ShieldCheck,
  Star,
  Users,
  type LucideIcon,
} from "lucide-react";

const phoneNumber = "9779712082949";

const message =
  "Hi, I would like to know more about the Muktinath Helicopter Tour.";

const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
  message,
)}`;

const bookingFacts: Array<{
  icon: LucideIcon;
  label: string;
  value: string;
}> = [
  {
    icon: Clock3,
    label: "Duration",
    value: "About 4 Hours",
  },
  {
    icon: Users,
    label: "Guests",
    value: "5 Passengers",
  },
  {
    icon: Mountain,
    label: "Max Altitude",
    value: "3,710 m",
  },
  {
    icon: CalendarDays,
    label: "Best Season",
    value: "Spring & Autumn",
  },
];

const whyBookItems = [
  "Direct Fleet Operator",
  "ACAP Permit Included",
  "Weather Reschedule Guarantee",
  "CAAN Certified Operations",
  "Professional High-Altitude Pilots",
];

const groupPricing = [
  ["1 Passenger", "USD 4,800"],
  ["2 Passengers", "USD 2,400 pp"],
  ["3 Passengers", "USD 1,600 pp"],
  ["4 Passengers", "USD 1,200 pp"],
  ["5 Passengers", "USD 960 pp"],
];

export default function MuktinathTourSidebar() {
  return (
    <aside className="space-y-5 lg:sticky lg:top-[155px] lg:self-start">
      {/* BOOKING CARD */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_35px_rgba(15,48,78,0.1)]">
        <div className="h-[3px] bg-[#f3ad20]" />

        <div className="p-5">
          <h3 className="font-fraunces text-xl font-semibold leading-tight text-[#0a3158]">
            Muktinath
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
              4.9 | 120+ Verified Reviews
            </span>
          </div>

          <div className="mt-6 flex items-start justify-between gap-3">
            <div>
              <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">
                Starting From
              </p>

              <div className="mt-1 flex items-end">
                <span className="font-fraunces text-4xl font-medium leading-none text-[#0a4e80]">
                  $960
                </span>

                <span className="mb-1 ml-1 font-manrope text-[9px] text-slate-400">
                  /person
                </span>
              </div>

              <p className="mt-2 font-manrope text-[10px] text-slate-400">
                Kathmandu full group
                <br />
                per-person estimate
              </p>
            </div>

            <span className="rounded-full bg-[#fff4d5] px-3 py-1.5 font-manrope text-[8px] font-bold uppercase tracking-[0.12em] text-[#b87d0d]">
              Best Seller
            </span>
          </div>

          {/* BOOKING FACTS */}
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

          {/* WHY BOOK */}
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

          {/* GROUP PRICING */}
          <div className="mt-6">
            <h4 className="font-manrope text-[9px] font-bold uppercase tracking-[0.18em] text-[#0a3158]">
              Group Pricing
            </h4>

            <div className="mt-3">
              {groupPricing.map(([person, price]) => (
                <div
                  key={person}
                  className="flex items-center justify-between border-b border-slate-100 py-2 font-manrope text-[10px]"
                >
                  <span className="text-slate-500">{person}</span>

                  <span className="font-semibold text-[#0a4775]">{price}</span>
                </div>
              ))}
            </div>

            <p className="mt-3 font-manrope text-[9px] leading-4 text-slate-400">
              Kathmandu private charter is USD 4,800 per helicopter. Pokhara
              private charter is USD 2,900 per helicopter.
            </p>
          </div>

          {/* BUTTONS */}
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

          <div className="mt-5 grid grid-cols-3 border-t border-slate-100 pt-4">
            <div className="flex flex-col items-center gap-1 font-manrope text-[8px] uppercase tracking-[0.08em] text-slate-400">
              <ShareIcon />
              Share Tour
            </div>

            <div className="flex flex-col items-center gap-1 border-x border-slate-100 font-manrope text-[8px] uppercase tracking-[0.08em] text-slate-400">
              <HeartPulse size={13} />
              Save
            </div>

            <div className="flex flex-col items-center gap-1 font-manrope text-[8px] uppercase tracking-[0.08em] text-slate-400">
              <Headphones size={13} />
              Easy Tour
            </div>
          </div>
        </div>
      </div>

      {/* EXPERT CARD */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_35px_rgba(15,48,78,0.09)]">
        <div className="p-5">
          <h4 className="font-manrope text-[9px] font-bold uppercase tracking-[0.18em] text-[#0a3158]">
            Talk to a Himalayan Expert
          </h4>

          <div className="mt-4 flex items-center gap-3">
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
              <Image
                src="/images/muktinath-pilgrimage/muktinath-gallary3.png"
                alt="Mountain Helicopters Nepal tour expert"
                fill
                sizes="56px"
                className="object-cover"
              />
            </div>

            <div>
              <h3 className="font-fraunces text-base font-semibold text-[#0a3158]">
                Ojan Parajuli
              </h3>

              <p className="font-manrope text-[9px] font-semibold text-[#d59a1b]">
                Senior Tour Consultant
              </p>

              <p className="mt-1 flex items-center gap-1 font-manrope text-[8px] text-emerald-500">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Usually replies within 15 min
              </p>
            </div>
          </div>

          <div className="mt-4 space-y-1.5 border-y border-slate-100 py-4 font-manrope text-[9px]">
            <div className="flex justify-between gap-4">
              <span className="text-slate-400">Experience</span>
              <span className="text-right font-semibold text-[#0a3158]">
                10+ years in Himalayan tours
              </span>
            </div>

            <div className="flex justify-between gap-4">
              <span className="text-slate-400">Languages</span>
              <span className="text-right font-semibold text-[#0a3158]">
                English, Nepali, Hindi
              </span>
            </div>

            <div className="flex justify-between gap-4">
              <span className="text-slate-400">Specialty</span>
              <span className="text-right font-semibold text-[#0a3158]">
                Muktinath & Mustang Region
              </span>
            </div>
          </div>

          <p className="mt-4 font-manrope text-[10px] leading-5 text-slate-500">
            Need help planning your Muktinath pilgrimage flight? Our Himalayan
            travel specialists are here to guide you.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex min-h-10 w-full items-center justify-center gap-2 rounded-sm bg-[#25d366] px-4 font-manrope text-[10px] font-bold text-white transition hover:bg-[#1fb95a]"
          >
            <MessageCircle size={14} fill="currentColor" />
            WhatsApp Ojan
          </a>

          <div className="mt-3 grid grid-cols-2">
            <a
              href="tel:+9779712082949"
              className="flex min-h-9 items-center justify-center gap-2 border border-slate-200 font-manrope text-[9px] font-semibold text-[#0a3158] transition hover:bg-slate-50"
            >
              <Headphones size={12} />
              Call
            </a>

            <a
              href="mailto:info@mountainlhelicoptersnepal.com"
              className="flex min-h-9 items-center justify-center gap-2 border-y border-r border-slate-200 font-manrope text-[9px] font-semibold text-[#0a3158] transition hover:bg-slate-50"
            >
              <Mail size={12} />
              Email
            </a>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white p-4 font-manrope text-[10px] font-semibold text-[#536170]">
        <ShieldCheck size={15} className="text-emerald-500" />
        Direct helicopter operator in Nepal
      </div>
    </aside>
  );
}

function ShareIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="18" cy="5" r="3" stroke="currentColor" strokeWidth="1.8" />

      <circle cx="6" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />

      <circle cx="18" cy="19" r="3" stroke="currentColor" strokeWidth="1.8" />

      <path
        d="M8.6 10.5 15.4 6.6M8.6 13.5l6.8 3.9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
