import Image from "next/image";

import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import SecondaryButton from "@/components/shared/buttons/SecondaryButton";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden bg-[#001A33] text-white">
      {/* Background image */}
      <Image
        src="/images/experiences/experiences-hero.png"
        alt="Mount Everest and the Himalayan mountain range at sunrise"
        fill
        priority
        quality={75}
        sizes="100vw"
        className="object-cover object-[58%_center] sm:object-center"
      />

      {/* Base dark overlay */}
      <div className="absolute inset-0 bg-[#001A33]/30" />

      {/* Responsive overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,26,51,0.58)_0%,rgba(0,26,51,0.2)_42%,rgba(0,13,26,0.78)_100%)]" />

      {/* Stronger left overlay for text */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,20,40,0.62)_0%,rgba(0,20,40,0.3)_48%,transparent_78%)]" />

      {/* Main frame */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 py-16 md:px-12 md:py-24 lg:px-16 lg:py-28 xl:items-center">
        {/* Written frame */}
        <div className="flex w-full max-w-7xl flex-col gap-5">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="h-px w-6 shrink-0 bg-[#F2B632] sm:w-[31px]" />

            <p className="[font-family:var(--font-manrope)] text-[9px] font-bold uppercase leading-[15px] tracking-[2.4px] text-[#F2B632] sm:text-[10px] sm:tracking-[3.5px]">
              Mountain Helicopters Nepal
            </p>
          </div>

          {/* Main heading */}
          <h1 className="[font-family:var(--font-fraunces)] text-[42px] font-semibold leading-[1.03] tracking-[-1.4px] min-[390px]:text-[46px] sm:text-[58px] sm:tracking-[-1.8px] md:text-[68px] lg:text-[72px] lg:leading-[1.06] lg:tracking-[-2.3px] xl:leading-[96.6px] xl:tracking-[-2.76px]">
            <span className="block">Some moments can&apos;t be booked.</span>

            <span className="block text-[#F2B632]">
              They can only be flown to.
            </span>
          </h1>

          {/* Paragraph */}
          <p className="max-w-[586px] [font-family:var(--font-manrope)] text-[16px] font-light leading-[25px] text-white/90 sm:text-[18px] sm:leading-[28px] md:text-[21px] md:leading-[30px] lg:text-[24px] lg:leading-[32px]">
            A photograph of Everest is everywhere. The feeling of standing
            beneath it at sunrise, heart pounding in the thin air, prayer flags
            snapping in the wind, belongs only to the people who go.
          </p>

          {/* Buttons */}
          <div className="mt-1 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-[18px] lg:gap-[26px]">
            <PrimaryButton
              href="#experiences"
              className="w-full px-5 text-center text-[12px] leading-none tracking-[-0.14px] sm:w-[216px] sm:text-[14px]"
              showArrow={false}
            >
              Find Your Experience
            </PrimaryButton>

            <SecondaryButton
              href="/contact"
              className="w-full px-5 text-center text-[12px] leading-none tracking-[-0.14px] sm:w-[222.5px] sm:text-[14px]"
            >
              Talk to a Flight Designer
            </SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
