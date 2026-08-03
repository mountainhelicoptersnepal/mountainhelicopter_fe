import { CloudRain, PlaneLanding, UserRoundX } from "lucide-react";

const passengerCancellationRules = [
  {
    period: ">72H",
    description:
      "Cancellations made more than 72 hours before departure are eligible for a full refund, less a USD 50 administrative fee per passenger for costs already incurred.",
    accent: "border-[#d4dae2]",
    periodClass: "text-[#0a4f82]",
  },
  {
    period: "24–48H",
    description:
      "Cancellations made between 24 and 48 hours before the scheduled departure are eligible for a 75% refund.",
    accent: "border-[#d5a023]",
    periodClass: "text-[#a6770c]",
  },
  {
    period: "<24H",
    description:
      "Cancellations made less than 24 hours before departure, as well as passenger no-shows, incur a 50% cancellation charge.",
    accent: "border-[#d92626]",
    periodClass: "text-[#c71919]",
  },
];

export default function CancellationPolicy() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 py-16 md:py-24 lg:py-28">
        {/* HEADING */}
        <div className="border-l-4 border-[#f0b323] pl-5 md:pl-6">
          <h2 className="font-fraunces text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#171717] md:text-4xl">
            Cancellation, Weather and Refund Policies
          </h2>

          <p className="mt-3 max-w-5xl font-manrope text-sm leading-7 text-[#4f5965] md:text-base">
             Mountain aviation in Nepal is affected by rapidly changing weather,
            visibility and wind conditions. These policies are designed to
            provide clear options when the Annapurna Base Camp flight cannot
            operate as planned.
          </p>
        </div>

        {/* POLICY CARDS */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:gap-10">
          {/* WEATHER CANCELLATION */}
          <article className="bg-white">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-[#0a6db7] text-white">
              <CloudRain size={20} strokeWidth={1.8} />
            </div>

            <h3 className="mt-6 font-fraunces text-2xl font-semibold text-[#00569a]">
              Weather cancellation
            </h3>

            <p className="mt-5 font-manrope text-sm leading-7 text-[#4f5965]">
              If Mountain Helicopters Nepal cancels the flight because of poor
              visibility, rain, cloud, snowfall or strong winds at Pokhara,
              along the route or at Annapurna Base Camp, eligible passengers
              may choose a full refund or move the booking to the next suitable
              departure.
            </p>

            <p className="mt-5 font-manrope text-sm leading-7 text-[#4f5965]">
               Rescheduled flights remain subject to improved weather, aircraft
              availability and the pilot&apos;s operational approval.
            </p>
            
          </article>

          {/* PILOT DECISION */}
          <article className="bg-white">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-[#f3b52e] text-[#6f5200]">
              <PlaneLanding size={20} strokeWidth={2} />
            </div>

            <h3 className="mt-6 font-fraunces text-2xl font-semibold text-[#8a6400]">
              Pilot&apos;s decision over safety
            </h3>

            <p className="mt-5 font-manrope text-sm leading-7 text-[#4f5965]">
             The pilot has final authority over departure, route and landing decisions. If conditions are unsuitable for landing at Annapurna Base Camp, the pilot may continue as a scenic flight, use a lower-altitude landing such as Chhomrong or Mardi Himal Base Camp when permitted and operationally safe, or return directly to Pokhara.
            </p>
             <p className="mt-5 font-manrope text-sm leading-7 text-[#4f5965]">
              When part of the planned flight has already been completed, any applicable refund will be calculated after deducting the flight time, fuel, airport services, permits and other services already used.
             </p>
          </article>

          {/* PASSENGER CANCELLATION */}
          <article className="bg-white">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-[#ffd8d8] text-[#bd0000]">
              <UserRoundX size={20} strokeWidth={2} />
            </div>

            <h3 className="mt-6 font-fraunces text-2xl font-semibold text-[#cc1111]">
              Cancellations by Passengers
            </h3>

            <div className="mt-5 space-y-4">
              {passengerCancellationRules.map((rule) => (
                <div
                  key={rule.period}
                  className={`grid grid-cols-[44px_1fr] gap-3 border-l-2 pl-3 ${rule.accent}`}
                >
                  <span
                    className={`pt-1 font-manrope text-xs font-bold uppercase tracking-[0.06em] ${rule.periodClass}`}
                  >
                    {rule.period}
                  </span>

                  <p className="font-manrope text-sm leading-6 text-[#4f5965]">
                    {rule.description}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </div>

        {/* IMPORTANT NOTE */}
        <div className="mt-10 rounded-2xl border border-[#e7d5a8] bg-[#fffaf0] px-5 py-5 md:px-7">
          <p className="font-manrope text-xs leading-6 text-[#6f6245]">
            Cancellation requests submitted between 48 and 72 hours before departure will be handled according to the terms stated in the confirmed booking agreement. Bank charges, payment-gateway fees, foreign-exchange differences and non-refundable third-party costs may be deducted from any approved refund.
          </p>
        </div>
      </div>
    </section>
  );
}