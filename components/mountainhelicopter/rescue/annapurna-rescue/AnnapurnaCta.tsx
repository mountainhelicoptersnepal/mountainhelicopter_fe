"use client";

import { Phone } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative flex min-h-[620px] w-full items-center justify-center overflow-hidden bg-[#0d1a2d]">
      {/* SAME BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-[center_40%]"
        style={{
          backgroundImage: "url('/images/himalayan.jpg')",
        }}
      />

      {/* DARK BLUE OVERLAY */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,29,54,0.72)_0%,rgba(5,35,67,0.76)_48%,rgba(3,24,47,0.94)_100%)]" />

      {/* SUBTLE CENTRE LIGHT */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(66,122,166,0.20)_0%,rgba(4,25,49,0)_58%)]" />

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-5 py-16 text-center sm:px-8 lg:px-12">
        {/* EYEBROW */}
        <div className="flex items-center justify-center gap-5">
          <span className="h-px w-10 bg-[#f5a623]/70" />

          <p className="font-manrope text-[11px] font-bold uppercase tracking-[0.28em] text-[#f5a623]">
            Begin Your Journey
          </p>

          <span className="h-px w-10 bg-[#f5a623]/70" />
        </div>

        {/* MAIN HEADING */}
        <h2 className="mx-auto mt-8 max-w-[980px] font-fraunces text-[38px] font-semibold leading-[1.02] tracking-[-0.8px] text-white sm:text-[48px] sm:tracking-[-1px] lg:text-[60px] lg:tracking-[-1.4px] xl:text-[68px]">
          Call the operator who has
          <br />
          flown the Annapurna region{" "}
          <span className="italic text-[#f5a623]">
            since 2009.
          </span>
        </h2>

        {/* STATUS */}
        <div className="mt-7 flex items-center justify-center gap-3">
          <span className="h-3 w-3 bg-[#0783d1]" />

          <p className="font-manrope text-[11px] font-semibold uppercase tracking-[0.14em] text-white/85 sm:text-[13px]">
            24/7 Operational · Annapurna Base Camp Helicopter Rescue
          </p>
        </div>

        {/* BUTTONS */}
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/contact"
            className="group relative isolate flex h-[54px] min-w-[250px] items-center justify-center overflow-hidden border border-white/35 bg-transparent px-7 font-manrope text-[12px] font-bold uppercase tracking-[0.14em] text-white transition duration-300 hover:border-white"
          >
            <span className="absolute inset-0 -translate-x-full bg-white transition-transform duration-500 group-hover:translate-x-0" />

            <span className="relative z-10 transition-colors duration-300 group-hover:text-[#073763]">
              Contact Our Team
            </span>
          </a>

          <a
            href="tel:+9779712082949"
            className="group relative isolate flex h-[54px] min-w-[280px] items-center justify-center gap-3 overflow-hidden bg-[#e52b2f] px-7 font-manrope text-[13px] font-bold tracking-[0.02em] text-white transition duration-300 hover:bg-[#c91f23]"
          >
            <span className="font-manrope text-base font-normal"></span>

            <Phone
              size={20}
              strokeWidth={2}
              className="transition-transform duration-300 group-hover:rotate-[-8deg]"
            />

            <span>+977-9712082949</span>

            <span className="font-manrope text-base font-normal"></span>
          </a>
        </div>
      </div>

      {/* BOTTOM FADE */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#07192e]" />
    </section>
  );
}