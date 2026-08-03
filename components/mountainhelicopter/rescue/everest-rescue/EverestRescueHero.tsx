import Image from "next/image";
import { Mail, MessageCircle, Phone } from "lucide-react";

export default function EverestRescueHero() {
  return (
    <section className="relative min-h-[720px] overflow-hidden bg-slate-950 text-white lg:min-h-screen">
      {/* Background */}
      <Image
        src="/images/rescue/regions/everest.jpg"
        alt="Everest mountain range at sunrise"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Image overlays */}
      <div className="absolute inset-0 bg-slate-950/35" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/35 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30" />

      {/* Hero content */}
      <div className="relative z-20 mx-auto flex min-h-[720px] max-w-7xl items-center px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:min-h-screen lg:px-10 lg:pt-36">
        <div className="max-w-[760px]">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-6 bg-[#F2B632]" />

            <p className="font-manrope text-[11px] font-bold uppercase tracking-[3.5px] text-[#F2B632] sm:text-[10px]">
              Mountain Helicopters Nepal
            </p>
          </div>

          <h1 className="max-w-[760px] font-fraunces text-[34px] font-semibold leading-[1.08] tracking-[-1px] text-[#F8FAFC] sm:text-[44px] md:text-[54px] lg:text-[56px]">
            <span className="block">Everest Helicopter Rescue.</span>

            <span className="block lg:whitespace-nowrap">
              <em className="font-black italic text-[#F2B632]">
                Emergency evacuation
              </em>{" "}
              from
            </span>

            <span className="block">the Everest region.</span>
          </h1>

          <p className="mt-6 w-full max-w-[563px] font-manrope text-[16px] font-normal leading-7 text-[#F8FAFC]/85 sm:text-[17px] md:text-[18px] md:leading-[29px]">
            Same-day extraction from Everest Base Camp, Kala Patthar, Gorak
            Shep, Lobuche, Dingboche, Pheriche, Tengboche, Namche Bazaar and
            Lukla. Operated since 2009 by the team that also flies the daily
            EBC helicopter tours.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex w-full flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="tel:+9779712082949"
              aria-label="Call emergency line"
              className="group inline-flex min-h-[44px] w-full items-center justify-center gap-2 bg-[#D62828] px-5 py-[10.4px] font-manrope text-[13px] font-medium uppercase leading-[19.5px] tracking-[1.3px] text-[#F8FAFC] transition-colors hover:bg-[#bd2020] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F8FAFC] sm:w-fit"
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                <Phone aria-hidden="true" className="h-4 w-4" />
              </span>

              <span className="whitespace-nowrap">Call emergency line</span>

              <span
                aria-hidden="true"
                className="flex h-5 w-5 shrink-0 items-center justify-center transition-transform group-hover:translate-x-0.5"
              >
                ›
              </span>
            </a>

            {/* WhatsApp */}
            <a
             href="https://wa.me/9779712082949"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact WhatsApp dispatch"
              className="group inline-flex min-h-[44px] w-full items-center justify-center gap-2 bg-[#0062B1] px-5 py-[10.4px] font-manrope text-[13px] font-medium uppercase leading-[19.5px] tracking-[1.3px] text-[#F8FAFC] transition-colors hover:bg-[#00559a] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F8FAFC] sm:w-[250px]"
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                <MessageCircle aria-hidden="true" className="h-4 w-4" />
              </span>

              <span className="whitespace-nowrap">WhatsApp dispatch</span>

              <span
                aria-hidden="true"
                className="flex h-5 w-5 shrink-0 items-center justify-center transition-transform group-hover:translate-x-0.5"
              >
                ›
              </span>
            </a>

            {/* Email */}
            <a
              href="mailto:enquiry@moutainhelicoptersnepal.com"
              aria-label="Email rescue coordination"
              className="group box-border inline-flex min-h-[44px] w-full items-center justify-center gap-2 border-[0.67px] border-[#F8F6F1]/50 bg-transparent px-5 py-[10.4px] font-manrope text-[13px] font-medium uppercase leading-[19.5px] tracking-[1.3px] text-[#F8FAFC] transition-colors hover:border-[#F8F6F1]/80 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F8FAFC] sm:w-fit"
            >
              <span className="flex h-4 w-4 shrink-0 items-center justify-center">
                <Mail aria-hidden="true" className="h-4 w-4" />
              </span>

              <span className="whitespace-nowrap">
                Email coordination
              </span>

              <span
                aria-hidden="true"
                className="flex h-4 w-4 shrink-0 items-center justify-center transition-transform group-hover:translate-x-0.5"
              >
                ›
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}