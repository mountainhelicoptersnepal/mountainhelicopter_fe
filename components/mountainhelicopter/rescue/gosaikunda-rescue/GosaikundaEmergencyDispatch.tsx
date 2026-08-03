import Image from "next/image";
import { Mail,  Phone } from "lucide-react";

export default function GosaikundaEmergencyDispatch() {
  return (
    <section
      id="emergency-dispatch"
      className="relative isolate scroll-mt-[123px] overflow-hidden bg-[#00162D] text-white"
    >
      {/* Background image */}
      <Image
        src="/images/rescue/regions/kala-patthar.jpg"
        alt=""
        fill
        aria-hidden="true"
        sizes="100vw"
        className="-z-30 object-cover object-center"
      />

      {/* Figma-style navy gradient */}
      <div aria-hidden="true" className=" absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(0,22,45,0.88)_0%,rgba(0,51,102,0.78)_50%,rgba(0,22,45,0.94)_100%)] " />

      {/* Additional side shading */}
      <div aria-hidden="true" className=" absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,22,45,0.2)_70%,rgba(0,22,45,0.48)_100%)] " />

      <div className=" mx-auto flex min-h-[602px] w-full max-w-[1440px] flex-col items-center justify-center px-5 py-20 text-center sm:px-8 lg:px-12 xl:px-[180px] 2xl:px-[279px] " >
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-[10px]">
          <span
            aria-hidden="true"
            className="h-px w-8 bg-[#F2B632]/70"
          />

          <p className=" font-manrope text-[9px] font-bold uppercase leading-[14px] tracking-[0.24em] text-[#F2B632] " >
            Emergency Dispatch · Everest Region
          </p>

          <span
            aria-hidden="true"
            className="h-px w-8 bg-[#F2B632]/70"
          />
        </div>

        {/* Heading */}
        <h2 className=" mt-5 w-full max-w-[880px] font-fraunces text-[40px] font-semibold leading-[0.98] tracking-[-0.03em] text-white sm:text-[50px] lg:text-[60px] " >
          Call the operator who
          <span className="block">has flown the Khumbu</span>

          <span className="block font-black italic text-[#F2B632]">
            since 2009
            <span className="not-italic text-white">.</span>
          </span>
        </h2>

        {/* Operational status */}
        <div className="mt-6 flex items-center justify-center gap-[10px]">
          <span
            aria-hidden="true"
            className="h-[7px] w-[7px] shrink-0 bg-[#1686D9]"
          />

          <span className=" font-manrope text-[9px] font-bold uppercase leading-[14px] tracking-[0.2em] text-white/85 " >
            24/7 Operational · Everest Region
          </span>
        </div>

        {/* Main action buttons */}
        <div className=" mt-7 flex w-full max-w-[650px] flex-col items-stretch justify-center gap-3 sm:flex-row " >
          <a
           href="mailto:enquiry@moutainhelicoptersnepal.com"
            className=" inline-flex min-h-[46px] items-center justify-center gap-2 border border-white/35 px-6 font-manrope text-[9px] font-bold uppercase leading-[14px] tracking-[0.16em] text-white transition-colors hover:border-[#F2B632] hover:text-[#F2B632] sm:min-w-[190px] " >
            <Mail aria-hidden="true" className="h-[14px] w-[14px]" strokeWidth={1.8} />

            <span>Contact Our Team</span>
          </a>

          <a href="tel:+9779712082949" className=" inline-flex min-h-[46px] items-center justify-center gap-3 bg-[#D62828] px-7 font-manrope text-[10px] font-bold leading-[14px] tracking-[0.08em] text-white transition-colors hover:bg-[#B91F1F] sm:min-w-[220px] " >

            <Phone aria-hidden="true" className="h-[15px] w-[15px]" strokeWidth={2} />
            <span>+977-9712082949</span>
          </a>
        </div>
      </div>
    </section>
  );
}