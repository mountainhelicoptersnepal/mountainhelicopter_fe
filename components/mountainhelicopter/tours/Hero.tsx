import Image from "next/image";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import SecondaryButton from "@/components/shared/buttons/SecondaryButton";
import TourTabsNavbar from "@/components/shared/navbar/TourTabsNavbar";

export default function Hero() {
  return (
    <section className="relative w-full">
      {/* Tour quick links */}
      <div className="relative z-10 mt-[75px]">
        <TourTabsNavbar activeHref="/tours" />
      </div>

      {/* Hero image */}
      <div className="relative flex min-h-[600px] w-full items-center overflow-hidden bg-[#071825] sm:min-h-[720px] lg:min-h-[860px]">
        <Image
          src="/images/tour/hero-bg.jpg"
          alt="Snow-capped Himalayan peak seen from a Mountain Helicopters flight"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-16 md:px-12 md:py-24 lg:px-16 lg:py-28">
          <div className="flex flex-col items-start gap-5">
            <div className="flex items-center gap-4">
              <span aria-hidden="true" className="h-px w-8 bg-[#f2b632]" />

              <p className="font-manrope text-[10px] font-bold uppercase leading-[15px] tracking-[3.5px] text-[#f2b632]">
                Mountain Helicopters Nepal
              </p>
            </div>

            <h1 className="font-fraunces text-[clamp(48px,10vw,113.325px)] font-bold leading-[0.9] tracking-[-0.025em] text-white">
              <span className="block">The Himalaya,</span>
              <span className="block">by helicopter.</span>
            </h1>

            <p className="max-w-[500px] font-manrope text-[18px] font-bold leading-[33px] text-white">
              Explore Nepal from a perspective few will ever know. Curated
              helicopter journeys from Everest Base Camp to sacred Himalayan
              destinations.
            </p>

            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-[26px]">
              <PrimaryButton href="/tours" showArrow={false}>
                Explore Journeys
              </PrimaryButton>
              <SecondaryButton href="/contact">
                Custom Charter
              </SecondaryButton>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
