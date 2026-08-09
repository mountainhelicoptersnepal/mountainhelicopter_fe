"use client";

import Link from "next/link";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import TourTabsNavbar from "@/components/shared/navbar/TourTabsNavbar";

export default function EverestBaseCamp() {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat pt-[75px]"
      style={{
        backgroundImage: "url('/images/ramechhap-lukla-helicopter/Ramechhap-Lukla-helicopter-Hero.png')",
      }}
    >
      <div className="absolute inset-0 bg-[#06182c]/55" />
      <div className="absolute inset-0 bg-black/20" />

      <TourTabsNavbar activeHref="/tours/ramechhap-lukla-helicopter" />

      {/* Hero Section */}
      <section className="relative z-10 min-h-[560px] py-16 sm:py-20 lg:h-[calc(100vh-168px)] lg:py-0">
        <div className="mx-auto flex h-full max-w-7xl items-center px-6 md:px-12 lg:px-16">
          <div className="max-w-4xl">
            <div className="mb-5 flex items-center gap-3 sm:mb-6 sm:gap-4">
              <span className="h-px w-8 bg-[#f5b82e] sm:w-10" />
              <p className="font-manrope text-[9px] font-bold uppercase text-[#F2B632] tracking-[2.5px] leading-3.75 sm:text-[10px] sm:tracking-[3.5px]">
                Mountain Helicopters Nepal
              </p>
            </div>

            <h1 className="font-fraunces font-bold leading-[0.95] tracking-[-1.5px] text-[#FFFFFF] text-[42px] sm:text-[68px] md:text-[88px] lg:text-[104px] xl:text-[90.32px] sm:tracking-[-2.83px]">
              Ramechhap to Lukla Helicopter Flight.
            </h1>

            <p className="mt-6 max-w-[540px] font-manrope text-[17px] font-bold leading-[1.45] text-white sm:mt-7 sm:text-[20px] md:text-[20px] tracking-normal">
              When scheduled fixed-wing flights are delayed, canceled, fully
              booked, or unavailable
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-10">
              <PrimaryButton
                href="/contact"
                className="w-full sm:w-[157px]"
                showArrow={false}
              >
                Plan Your Flight
              </PrimaryButton>

              <Link
                href="/contact"
                className="group relative isolate flex h-[44px] w-full items-center justify-center overflow-hidden border-2 border-white bg-transparent font-manrope text-[15px] font-extrabold uppercase text-white sm:w-[222.5px]"
              >
                <span className="absolute inset-0 translate-x-[-101%] bg-white transition-transform duration-500 group-hover:translate-x-0" />

                <span className="relative z-10 font-manrope text-[14px] font-bold tracking-[-0.2px] uppercase text-white transition-colors duration-300 group-hover:text-[#003366]">
                  Custom Charter
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
