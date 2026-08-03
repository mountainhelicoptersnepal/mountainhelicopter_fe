import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";

export default function EmergencyDispatch() {
  return (
    <section className="relative min-h-[602px] overflow-hidden bg-[#00162D] text-white">
      {/* Background image */}
      <Image
        src="/images/rescue/regions/tilicho.jpg"
        alt="Snow-covered Himalayan mountains"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Main blue overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,22,45,0.88)_0%,rgba(0,51,102,0.78)_48%,rgba(0,22,45,0.94)_100%)]" />

      {/* Bottom depth overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#00162D]/80 via-transparent to-transparent" />

      {/* CTA content */}
      <div className="relative z-10 mx-auto flex min-h-[602px] w-full max-w-7xl flex-col items-center justify-center px-6 py-16 text-center md:px-12 md:py-24 lg:px-16 lg:py-28">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-[14px]">
          <span className="h-px w-[28px] bg-[#F5A623]/60" />

          <p className="font-manrope text-[11px] font-semibold uppercase leading-none tracking-[0.24em] text-[#F5A623]">
            Begin Your Journey
          </p>

          <span className="h-px w-[28px] bg-[#F5A623]/60" />
        </div>

        {/* Main heading */}
        <h2 className="mt-[28px] max-w-[760px] font-fraunces text-[42px] font-normal italic leading-[0.94] tracking-[-1px] text-white sm:text-[54px] sm:leading-[0.92] lg:text-[64px] lg:leading-[0.9] lg:tracking-[-1.3px]">
          <span className="block">Ready to Experience</span>

          <span className="block">Everest</span>

          <span className="block font-normal italic text-[#F5A623]">
            From Above?
          </span>
        </h2>

        {/* Supporting text */}
        <p className="mt-[26px] max-w-[440px] font-manrope text-[14px] font-normal leading-[21px] tracking-0 text-white/45 sm:text-[14px] sm:leading-[22.75px]">
          Let our experienced team create your unforgettable
          <span className="block">Himalayan journey.</span>
        </p>

        {/* Action buttons */}
        <div className="mt-[34px] flex w-full max-w-[455px] flex-col justify-center gap-[10px] sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex min-h-[52px] flex-1 items-center justify-center bg-[#F5B82E] px-6 font-manrope text-[12px] font-bold uppercase leading-none tracking-[0.12em] text-[#003366] transition-colors hover:bg-[#E2A91E] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Book Journey

            <span
              aria-hidden="true"
              className="ml-[10px] text-[14px] transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>

          <a
            href="mailto:enquiry@moutainhelicoptersnepal.com"
            className="inline-flex min-h-[52px] flex-1 items-center justify-center gap-[8px] border border-white/25 bg-transparent px-6 font-manrope text-[12px] font-semibold uppercase leading-none tracking-[0.12em] text-white transition-colors hover:border-white/60 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <Mail
              aria-hidden="true"
              className="h-[13px] w-[13px]"
              strokeWidth={1.7}
            />

            Contact Our Team
          </a>
        </div>
      </div>
    </section>
  );
}
