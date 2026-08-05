import Image from "next/image";

export default function Safety() {
  return (
    <section className="relative w-full overflow-hidden bg-[#003366] text-white">
      {/* Full-width background image */}
      <Image
        src="/images/experiences/safety-hero.jpg"
        alt="Snow-covered Himalayan mountains"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Blue overlay */}
      <div className="absolute inset-0 bg-[#003366]/55" />

      {/* Bottom gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,51,102,0.08)_0%,rgba(0,51,102,0.28)_50%,rgba(0,35,70,0.62)_100%)]" />

      {/* Full-width frame with 80px vertical padding */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 text-center md:px-12 md:py-24 lg:px-16 lg:py-28">
        {/* Only the content is limited to 1440px */}
        <div>
          <p className="mb-7 [font-family:var(--font-manrope)] text-[11px] font-semibold uppercase leading-[16.5px] tracking-[1.65px] text-[#F2B632]">
            Chapter Four, The Safety Behind the Magic
          </p>

          <h2 className="[font-family:var(--font-fraunces)] text-[38px] font-semibold leading-[1.1] tracking-[-0.8px] sm:text-[46px] md:text-[56px] md:leading-[61.6px] md:tracking-[-1.12px]">
            <span className="block">Wonder in the front of your mind.</span>

            <span className="block text-[#F2B632]">
              Safety in the back of ours.
            </span>
          </h2>

          <p className="mx-auto mt-10 max-w-[1130px] [font-family:var(--font-manrope)] text-[16px] font-normal leading-[25px] text-white/90 sm:text-[18px] sm:leading-[27px] md:text-[20px] md:leading-[28px]">
            Every experience flies on the Airbus AS 350 B3e, the only
            single-engine helicopter certified above 23,000 ft, maintained
            exclusively by our own CAAN-certified engineers. The same crews that
            answer 24/7 rescue calls across the Himalayas are the ones flying
            your celebration.{" "}
            <strong className="font-bold text-white">
              That&apos;s not a coincidence. It&apos;s the point.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}
