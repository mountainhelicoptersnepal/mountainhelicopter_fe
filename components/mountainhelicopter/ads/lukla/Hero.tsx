import BookingForm from "./BookingForm";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-[linear-gradient(160deg,#003366_0%,#003366_52%,#0d1a2d_100%)] py-16 text-white sm:py-[66px]">
      <svg
        className="pointer-events-none absolute -bottom-0.5 left-0 w-full opacity-[.14]"
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 220 220 90 340 150 520 40 660 130 820 20 980 140 1130 70 1290 160 1440 60V220Z"
          fill="#ffffff"
        />
      </svg>

      <div className="relative mx-auto grid max-w-[1160px] gap-8 px-[22px] sm:gap-12 md:grid-cols-[1.15fr_.92fr] md:gap-14">
        <div className="pt-2 md:pt-6 lg:pt-[34px]">
          <span className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#F2B632]/40 bg-[#F2B632]/[.12] px-4 py-2 font-manrope text-xs font-semibold uppercase tracking-[.14em] text-[#F2B632]">
            <span className="h-[7px] w-[7px] animate-pulse rounded-full bg-[#F2B632]" />
            Everyday Departure
          </span>

          <h1 className="font-fraunces text-[clamp(2.05rem,4.8vw,3.5rem)] font-black leading-[1.12] tracking-[-.015em]">
            Kathmandu to Lukla by helicopter.{" "}
            <em className="not-italic text-[#F2B632]">45 minutes, no delays.</em>
            <br/>
             <em className="not-italic text-[#F2B632]">No Cancellation.</em>
          </h1>

          <p className="mt-5 max-w-[520px] text-[clamp(1rem,1.9vw,1.18rem)] text-[#C9DAF5]">
            Fly direct to the gateway of Everest instead of driving five hours to
            Ramechhap and waiting out the fixed wing backlog.
          </p>

          <div className="mt-6 flex flex-wrap gap-x-[22px] gap-y-2 font-manrope text-[13px] uppercase tracking-[.05em] text-[#A9C2E8]">
            <span>Since 2009</span>
            <span>CAAN Certified</span>
            <span>24/7 Rescue Backup</span>
          </div>
        </div>

        <BookingForm idPrefix="hero" />
      </div>
    </div>
  );
}
