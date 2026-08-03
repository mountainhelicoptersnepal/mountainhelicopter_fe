"use client";

import { Mail, MessageCircle, Phone } from "lucide-react";

export default function LangtangRescueHero() {
  const phoneNumber = "9779712082949";

  const whatsappMessage =
    "Hello, I need emergency helicopter rescue information for the Langtang region.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  return (
    <section className="relative min-h-[820px] overflow-hidden bg-[#081a2f] text-white">
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/rescue/regions/langtang.jpg')",
        }}
      />

      {/* DARK OVERLAYS */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,18,34,0.30)_0%,rgba(5,18,34,0.52)_35%,rgba(5,18,34,0.84)_100%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,16,31,0.78)_0%,rgba(3,16,31,0.40)_58%,rgba(3,16,31,0.12)_100%)]" />

      {/* HERO CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-[820px] max-w-[1280px] items-center px-5 pb-20 pt-24 sm:px-8 lg:px-10">
        <div className="max-w-[930px]">
          {/* EYEBROW */}
          <div className="mb-7 flex items-center gap-4"></div>

          {/* H1 */}
          <h1 className="max-w-[1000px] font-fraunces text-[44px] font-semibold leading-[0.98] tracking-[-1.4px] text-white sm:text-[56px] sm:tracking-[-1.8px] md:text-[72px] lg:text-[65px]">
            Langtang Helicopter Rescue.
            <br />
            <span className="italic text-[#f3b323]">
              Emergency evacuation
            </span>{" "}
            services and cost.
          </h1>

          {/* DESCRIPTION */}
          <div className="mt-8 max-w-[780px] space-y-4 font-manrope text-[15px] leading-7 text-white/80 sm:text-base sm:leading-8">
            <p>
              Emergency medical evacuation services using a helicopter rescue
              system are provided for trekkers, climbers, and expedition members
              who are trapped in the Langtang Valley. Emergency evacuations are
              conducted using specialized aviation services. If an emergency
              situation occurs in the Himalayas, then the rescue is immediately
              conducted to save lives. Our dispatch team places safety first.
            </p>
          </div>

          {/* ACTION BUTTONS */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="tel:+9779712082949"
              className="inline-flex h-[48px] items-center justify-center gap-2 bg-[#e52b2f] px-6 font-manrope text-[11px] font-bold uppercase tracking-[0.17em] text-white transition duration-300 hover:bg-[#c92125]"
            >
              <Phone size={15} strokeWidth={2} />
              Call Emergency Line
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[48px] items-center justify-center gap-2 bg-[#0873bd] px-6 font-manrope text-[11px] font-bold uppercase tracking-[0.17em] text-white transition duration-300 hover:bg-[#075f9c]"
            >
              <MessageCircle size={15} fill="currentColor" />
              WhatsApp Dispatch
            </a>

            <a
              href="mailto:info@mountainhelicoptersnepal.com"
              className="inline-flex h-[48px] items-center justify-center gap-2 border border-white/45 bg-transparent px-6 font-manrope text-[11px] font-bold uppercase tracking-[0.17em] text-white transition duration-300 hover:border-white hover:bg-white/10"
            >
              <Mail size={15} />
              Email Coordination
            </a>
          </div>

          {/* OPERATIONAL INFORMATION */}
          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 font-manrope text-[11px] uppercase tracking-[0.12em] text-white/55">
            <p className="flex items-center gap-2">
              <span className="h-2 w-2 bg-[#087ac1]" />
              24/7 Emergency Dispatch
            </p>

            <p>Langtang Valley Rescue Coverage</p>

            <p>Kathmandu Operational Base</p>
          </div>
        </div>
      </div>

      {/* BOTTOM FADE */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#061523]" />
    </section>
  );
}
