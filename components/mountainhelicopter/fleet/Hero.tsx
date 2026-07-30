import Image from "next/image";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import SecondaryButton from "@/components/shared/buttons/SecondaryButton";

export default function Hero() {
  return (
    <section className="relative flex min-h-[600px] w-full items-center overflow-hidden bg-[#071825] sm:min-h-[720px] lg:min-h-[860px]">
      <Image
        src="/images/fleet/home.jpg"
        alt="Mountain Helicopters aircraft in flight against the snow-capped Himalayan range"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16 py-16 md:py-24 lg:py-28">
        <div className="flex flex-col items-start gap-6">
          <div className="flex items-center gap-4">
            <span aria-hidden="true" className="h-px w-8 bg-[#f2b632]" />

            <p className="font-manrope text-[10px] font-bold uppercase leading-[15px] tracking-[3.5px] text-[#f2b632]">
              Mountain Helicopters Nepal
            </p>
          </div>

          <h1 className="font-fraunces text-[clamp(48px,10vw,113.325px)] font-bold leading-[0.9] tracking-[-0.025em] text-white">
            <span className="block">Our</span>
            <span className="block text-[#f2b632]">Fleet.</span>
          </h1>

          <p className="max-w-[500px] font-manrope text-[20px] font-medium leading-[34px] text-white">
            Built for the Himalayas. Trusted for every mission.
          </p>

          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-[26px]">
            <PrimaryButton href="#fleet">Explore Fleet</PrimaryButton>
            <SecondaryButton href="/contact">Charter Enquiry</SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
