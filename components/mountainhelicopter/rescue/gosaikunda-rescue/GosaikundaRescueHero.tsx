import Image from "next/image";
import { Mail, MessageCircle, Phone } from "lucide-react";

export default function GosaikundaRescueHero() {
  return (
    <section className="relative min-h-[720px] overflow-hidden bg-[#07131f] text-white lg:min-h-[873px]">
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
      <div className="relative z-10 mx-auto flex min-h-[720px] w-full max-w-[1440px] items-center px-5 pb-20 pt-28 sm:px-10 lg:min-h-[873px] lg:px-[88px] lg:pb-[110px] lg:pt-[120px]">
        <div className="w-full max-w-[820px]">
          {/* Small heading */}
          <div className="mb-5 flex items-center gap-4">
            <span className="h-px w-[21px] bg-[#F2B632]" />

            <p className="font-manrope text-[11px] font-bold uppercase leading-none tracking-[3px] text-[#F2B632] sm:text-[11px]">
              Mountain Helicopters Nepal
            </p>
          </div>

          {/* Main heading */}
          <h1 className="max-w-[760px] font-fraunces text-[34px] font-semibold leading-[1.08] tracking-[-1px] text-[#F8FAFC] sm:text-[44px] md:text-[54px] lg:text-[56px]">
            <span className="block">Gosaikunda Helicopter Rescue</span>

            <span className="block lg:whitespace-nowrap">
              <em className="font-black italic text-[#F2B632]">
                Emergency Evacuation Services and Costs
              </em>
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-[500px] font-manrope text-[14px] font-normal leading-[1.55] text-white/80 sm:text-[16px] lg:mt-8 lg:max-w-[510px] lg:text-[16px]">
            The Gosaikunda Helicopter Rescue is a medical emergency service
            dedicated to the emergency rescue of any pilgrims, trekkers, or
            expedition groups who have encountered any form of medical
            emergency at the altitude in the Langtang area. Even though, the
            Gosaikunda Helicopter Tour Nepal has always been popular for
            sightseeing of the sacred alpine lakes, on medical emergencies,
            trained, specialized high altitude aviator crew is dispatched. The
            emergency rescue operation is performed instantly with immediate
            action if the life of anyone is in danger at the high Himalayas and
            the worst can be avoided by rapid actions of the crews dispatched.
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

              <span className="whitespace-nowrap">Call emergency line</span>

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

              <span className="whitespace-nowrap">WhatsApp dispatch</span>

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

              <span className="whitespace-nowrap">Email coordination</span>

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