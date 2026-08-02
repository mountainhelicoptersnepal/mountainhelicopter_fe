import Image from "next/image";

export default function Showcase() {
  return (
    <section className="relative w-full overflow-hidden bg-[#071825]">
      <Image
        src="/images/fleet/showcase.jpg"
        alt="Aerial view of the Everest Himalaya range"
        fill
        sizes="100vw"
        className="object-cover object-[center_62%] opacity-70"
      />

      <div className="absolute inset-0 bg-[#003366]/80" />

      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16 py-10 md:py-14 lg:py-[74px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-[50px]">
          <div className="flex flex-1 flex-col gap-5">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-5 bg-[#f2b632]" />

              <p className="font-manrope text-[10px] font-bold uppercase leading-[15px] tracking-[3.5px] text-[#f2b632]">
                Aircraft
              </p>
            </div>

            <h2 className="font-fraunces text-[32px] font-light leading-[1.05] tracking-[-0.02em] text-white sm:text-[40px] lg:text-[50.367px]">
              <span className="block">Complete Fleet</span>
              <span className="block italic">Showcase</span>
            </h2>
          </div>

          <p className="flex-1 font-manrope text-[15px] font-light leading-[27.75px] text-white">
            Each aircraft was selected for a specific set of Himalayan
            demands. Together they cover every altitude, every passenger
            requirement, and every mission type in our operation.
          </p>
        </div>
      </div>
    </section>
  );
}
