import Image from "next/image";
import { Mail, MessageCircle, Phone } from "lucide-react";

export default function RescueHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#07131f] text-white">
      {/* Background image */}
      <Image
        src="/images/rescue/regions/everest.jpg"
        alt="Everest mountain range at sunrise"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Dark overlays */}
      <div className="absolute inset-0 bg-[#07131f]/30" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#07131f]/80 via-[#07131f]/40 to-[#07131f]/10" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#07131f]/80 via-transparent to-[#07131f]/25" />

      {/* Main content */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 py-16 pt-28 md:px-12 md:py-24 md:pt-28 lg:px-16 lg:py-28">
        <div className="w-full max-w-[820px]">

          {/* Main heading */}
          <h1 className="font-fraunces text-[47px] font-bold leading-[0.94] tracking-[-2px] text-white sm:text-[62px] md:text-[74px] lg:text-[76px] lg:leading-[0.92] lg:tracking-[-3px]">
            <span className="block">Helicopter Rescue in Nepal </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-[500px] font-manrope text-[14px] font-normal leading-[1.55] text-white/80 sm:text-[16px] lg:mt-8 lg:max-w-[510px] lg:text-[16px]">
            Helicopter rescue service Nepal enables emergency rescue in case of an accident in the mountains, health emergencies in remote and high altitude areas and
             rescue service to tourists including trekkers and climbers. Helicopter service in Nepal for rescue has been instrumental especially in altitude related medical 
             problems and serious injuries where road connection is unavailable or difficult to reach. Emergency helicopter rescue services are available at major trekking regions
              and other isolated parts of Nepal.
          </p>

          {/* Action buttons */}
          <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            {/* Emergency call */}
            <a
              href="tel:+9779712082949"
              aria-label="Call emergency line"
              className="group inline-flex min-h-[44px] items-center justify-center gap-2 bg-[#D9272E] px-[18px] font-manrope text-[10px] font-semibold uppercase tracking-[0.8px] text-white transition-colors hover:bg-[#b91f25] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Phone
                aria-hidden="true"
                strokeWidth={1.8}
                className="h-[15px] w-[15px]"
              />

              <span className="whitespace-nowrap">
                Call emergency line
              </span>

              <span
                aria-hidden="true"
                className="text-[15px] leading-none transition-transform group-hover:translate-x-0.5"
              >
                ›
              </span>
            </a>

            {/* WhatsApp dispatch */}
            <a
              href="https://wa.me/9779712082949"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact WhatsApp dispatch"
              className="group inline-flex min-h-[44px] items-center justify-center gap-2 bg-[#087ABF] px-[18px] font-manrope text-[10px] font-semibold uppercase tracking-[0.8px] text-white transition-colors hover:bg-[#066da9] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <MessageCircle
                aria-hidden="true"
                strokeWidth={1.8}
                className="h-[15px] w-[15px]"
              />

              <span className="whitespace-nowrap">
                WhatsApp dispatch
              </span>

              <span
                aria-hidden="true"
                className="text-[15px] leading-none transition-transform group-hover:translate-x-0.5"
              >
                ›
              </span>
            </a>

            {/* Email coordination */}
            <a
              href="mailto:enquiry@moutainhelicoptersnepal.com"
              aria-label="Email rescue coordination"
              className="group inline-flex min-h-[44px] items-center justify-center gap-2 border border-white/35 bg-transparent px-[18px] font-manrope text-[10px] font-semibold uppercase tracking-[0.8px] text-white transition-colors hover:border-white/70 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Mail
                aria-hidden="true"
                strokeWidth={1.8}
                className="h-[15px] w-[15px]"
              />

              <span className="whitespace-nowrap">
                Email coordination
              </span>

              <span
                aria-hidden="true"
                className="text-[15px] leading-none transition-transform group-hover:translate-x-0.5"
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
