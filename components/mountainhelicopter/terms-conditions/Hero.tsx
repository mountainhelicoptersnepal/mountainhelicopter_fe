import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#002347] text-white">
      {/* Full-width background image */}
      <Image
        src="/images/experiences/celebration-bg.png"
        alt="Helicopter on a private Himalayan ridge prepared for a celebration"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Dark left-side overlay for text visibility */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,25,51,0.92)_0%,rgba(0,31,61,0.72)_35%,rgba(0,37,71,0.32)_62%,rgba(0,20,40,0.06)_100%)]" />

      {/* Subtle top and bottom shading */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,20,40,0.24)_0%,rgba(0,20,40,0.02)_48%,rgba(0,20,40,0.45)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-[620px] w-full max-w-7xl items-center px-6 py-16 pt-28 md:px-12 md:py-24 md:pt-28 lg:px-16 lg:py-28">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#F2B632]" />
            <p className="font-manrope text-[11px] font-bold uppercase tracking-[0.22em] text-[#F2B632]">
              Stories From Above
            </p>
          </div>

          <h1 className="mt-6 font-fraunces text-[46px] font-semibold leading-[0.98] tracking-[-1.4px] text-white sm:text-[60px] md:text-[72px]">
            Mountain Helicopters Blog
          </h1>

          <p className="mt-6 max-w-2xl font-manrope text-[16px] leading-7 text-white/78 md:text-[18px] md:leading-8">
            Field notes, destination guides, rescue explainers, aircraft
            insights, and Himalayan flight stories from Nepal&apos;s mountain
            aviation team.
          </p>
        </div>
      </div>
    </section>
  );
}
