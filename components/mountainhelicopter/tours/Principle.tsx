export default function Principle() {
  return (
    <section className="w-full bg-[#003366]">
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-12 md:py-12 lg:px-16 lg:py-14">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-5 bg-[#f2b632]" />

              <p className="font-manrope text-[10px] font-bold uppercase leading-[15px] tracking-[2.8px] text-[#f2b632]">
                The Principle
              </p>
            </div>

            <h2 className="font-fraunces text-[32px] font-normal leading-[1.15] tracking-[-0.025em] text-white sm:text-[36px] lg:text-[40px]">
              <span className="block">We fly small.</span>
              <span className="block">We fly early.</span>
              <span className="block">We fly with care.</span>
            </h2>
          </div>

          <p className="font-manrope text-[18px] font-normal leading-[33px] text-[#8a96a1]">
            Most helicopter operators in Nepal sell volume. We have chosen to
            fly fewer flights, with more care, in a single aircraft
            maintained to standards above regulatory minimum. The result is
            a tour that respects the mountain and respects the passenger.
            Seventeen years. Zero major incidents. The numbers earn
            themselves.
          </p>
        </div>
      </div>
    </section>
  );
}
