import {
  CloudRain,
  CreditCard,
  PlaneLanding,
  UserRoundX,
  Wrench,
} from "lucide-react";

const weatherOptions = [
  {
    title: "Free Rescheduling",
    description:
      "Move your booking to the next suitable departure date without an additional flight-change charge.",
  },
  {
    title: "Full Refund",
    description:
      "Receive a full refund of the eligible amount paid when Mountain Helicopters Nepal cancels the complete tour.",
  },
];

const pilotOptions = [
  {
    title: "Hold Temporarily",
    description:
      "Wait at the airport while the pilot and operations team continue assessing visibility, wind and landing conditions.",
  },
  {
    title: "Complete an Aerial Tour",
    description:
      "Continue as a scenic flight without landing when the route is safe but conditions at Gosaikunda are unsuitable.",
  },
  {
    title: "Use a Lower-Altitude Landing",
    description:
      "Land at a safer approved location when operationally permitted and suitable for the aircraft.",
  },
  {
    title: "Return to Kathmandu",
    description:
      "Return directly to Kathmandu when continuing toward Gosaikunda is not considered safe.",
  },
];

const passengerCancellationRules = [
  {
    period: ">72H",
    title: "More than 72 hours",
    description:
      "Eligible for a 100% refund, less a USD 50 administrative fee per booking and any non-recoverable payment-processing charges.",
    accent: "border-[#d4dae2]",
    periodClass: "text-[#0a4f82]",
  },
  {
    period: "24–72H",
    title: "Between 24 and 72 hours",
    description:
      "Eligible for a refund of 75% of the confirmed tour amount.",
    accent: "border-[#d5a023]",
    periodClass: "text-[#a6770c]",
  },
  {
    period: "<24H",
    title: "Less than 24 hours",
    description:
      "Eligible for a refund of 50% of the confirmed tour amount.",
    accent: "border-[#df7624]",
    periodClass: "text-[#bd5b12]",
  },
  {
    period: "NO SHOW",
    title: "Passenger no-show",
    description:
      "No refund is available when a passenger does not arrive or cancels after the airport check-in process has started.",
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
            Helicopter operations in Nepal depend on visibility, wind, cloud
            cover and conditions along the complete route. Weather in
            Kathmandu, the Langtang region and Gosaikunda can change quickly,
            so these policies are designed to protect passenger safety while
            keeping the booking process fair and transparent.
          </p>
        </div>

        {/* PRIMARY POLICY CARDS */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:gap-10">
          {/* WEATHER CANCELLATION */}
          <article>
            <div className="flex h-10 w-10 items-center justify-center rounded bg-[#0a6db7] text-white">
              <CloudRain size={20} strokeWidth={1.8} />
            </div>

            <h3 className="mt-6 font-fraunces text-2xl font-semibold text-[#00569a]">
              Weather Cancellation
            </h3>

            <p className="mt-5 font-manrope text-sm leading-7 text-[#4f5965]">
              If Mountain Helicopters Nepal cancels the Gosaikunda tour because
              of poor visibility, heavy rain, strong winds, cloud cover,
              snowfall or unsafe landing conditions, eligible passengers may
              choose one of the following options.
            </p>

            <div className="mt-5 space-y-4">
              {weatherOptions.map((option) => (
                <div
                  key={option.title}
                  className="border-l-2 border-[#0a6db7]/30 pl-4"
                >
                  <h4 className="font-manrope text-sm font-bold text-[#0a4f82]">
                    {option.title}
                  </h4>

                  <p className="mt-1 font-manrope text-xs leading-6 text-[#68727e]">
                    {option.description}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-5 font-manrope text-xs leading-6 text-[#7b8490]">
              Rescheduled departures remain subject to suitable weather,
              passenger weight, aircraft availability and operational
              clearance.
            </p>
          </article>

          {/* PILOT DECISION */}
          <article>
            <div className="flex h-10 w-10 items-center justify-center rounded bg-[#f3b52e] text-[#6f5200]">
              <PlaneLanding size={20} strokeWidth={2} />
            </div>

            <h3 className="mt-6 font-fraunces text-2xl font-semibold text-[#8a6400]">
              Pilot&apos;s Decision and Passenger Safety
            </h3>

            <p className="mt-5 font-manrope text-sm leading-7 text-[#4f5965]">
              The pilot has final authority to decide whether the aircraft can
              depart, continue, land at Gosaikunda or return to Kathmandu. This
              decision may be made before departure or at any stage of the
              flight.
            </p>

            <p className="mt-4 font-manrope text-sm leading-7 text-[#4f5965]">
              Passengers, guides and ground staff cannot require the pilot to
              continue a flight or complete a landing considered unsafe.
            </p>

            <div className="mt-5 space-y-4">
              {pilotOptions.map((option) => (
                <div
                  key={option.title}
                  className="border-l-2 border-[#d5a023]/40 pl-4"
                >
                  <h4 className="font-manrope text-sm font-bold text-[#8a6400]">
                    {option.title}
                  </h4>

                  <p className="mt-1 font-manrope text-xs leading-6 text-[#68727e]">
                    {option.description}
                  </p>
                </div>
              ))}
            </div>
          </article>

          {/* PASSENGER CANCELLATION */}
          <article>
            <div className="flex h-10 w-10 items-center justify-center rounded bg-[#ffd8d8] text-[#bd0000]">
              <UserRoundX size={20} strokeWidth={2} />
            </div>

            <h3 className="mt-6 font-fraunces text-2xl font-semibold text-[#cc1111]">
              Cancellations by Passengers
            </h3>

            <p className="mt-5 font-manrope text-sm leading-7 text-[#4f5965]">
              Passenger cancellation requests must be submitted in writing by
              email or through the official Mountain Helicopters Nepal
              WhatsApp number.
            </p>

            <div className="mt-5 space-y-4">
              {passengerCancellationRules.map((rule) => (
                <div
                  key={rule.period}
                  className={`grid grid-cols-[62px_1fr] gap-3 border-l-2 pl-3 ${rule.accent}`}
                >
                  <span
                    className={`pt-1 font-manrope text-[11px] font-bold uppercase tracking-[0.04em] ${rule.periodClass}`}
                  >
                    {rule.period}
                  </span>

                  <div>
                    <p className="font-manrope text-xs font-bold text-[#303c49]">
                      {rule.title}
                    </p>

                    <p className="mt-1 font-manrope text-sm leading-6 text-[#4f5965]">
                      {rule.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-5 font-manrope text-xs leading-6 text-[#7b8490]">
              Cancellation deadlines are calculated according to Nepal Standard
              Time.
            </p>
          </article>
        </div>

        {/* TECHNICAL CANCELLATION */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-[#f8fafc] px-6 py-7 md:px-8">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-[#073763] text-white">
              <Wrench size={19} strokeWidth={1.8} />
            </div>

            <h3 className="mt-5 font-fraunces text-2xl font-semibold text-[#08294d]">
              Technical or Operational Cancellation
            </h3>

            <p className="mt-4 font-manrope text-sm leading-7 text-[#4f5965]">
              When a flight is cancelled before departure because of an
              aircraft technical issue, airspace restriction, airport closure
              or another operational matter within our control, passengers may
              reschedule without an additional flight-change fee or request an
              eligible refund.
            </p>

            <p className="mt-3 font-manrope text-sm leading-7 text-[#4f5965]">
              Mountain Helicopters Nepal will not operate until the aircraft,
              flight crew, route and operating conditions meet the applicable
              safety requirements.
            </p>
          </article>

          {/* PARTIAL REFUND */}
          <article className="rounded-2xl border border-slate-200 bg-[#f8fafc] px-6 py-7 md:px-8">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-[#e8a520] text-[#5f4300]">
              <CreditCard size={19} strokeWidth={1.8} />
            </div>

            <h3 className="mt-5 font-fraunces text-2xl font-semibold text-[#08294d]">
              Partial Refund for a Changed Flight
            </h3>

            <p className="mt-4 font-manrope text-sm leading-7 text-[#4f5965]">
              When the complete Gosaikunda landing cannot be provided after the
              aircraft has departed, any applicable partial refund will be
              calculated according to the flight time completed, fuel used,
              airport services, permits, ground handling and other services
              already provided.
            </p>

            <p className="mt-3 font-manrope text-sm leading-7 text-[#4f5965]">
              Completing an aerial tour, using a different landing area or
              returning early for safety reasons does not automatically qualify
              as a full cancellation.
            </p>
          </article>
        </div>

        {/* AFTER DEPARTURE NOTE */}
        <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 px-5 py-5 md:px-7">
          <p className="font-manrope text-xs font-bold uppercase tracking-[0.14em] text-red-700">
            Cancellation After Departure
          </p>

          <p className="mt-2 font-manrope text-xs leading-6 text-red-800/75">
            When a passenger voluntarily cancels after the flight has departed,
            no refund is available for unused landing time, sightseeing time or
            services declined by the passenger.
          </p>
        </div>

        {/* REFUND PROCESSING */}
        <div className="mt-5 rounded-2xl border border-[#e7d5a8] bg-[#fffaf0] px-5 py-5 md:px-7">
          <p className="font-manrope text-xs font-bold uppercase tracking-[0.14em] text-[#8a6400]">
            Refund Processing
          </p>

          <p className="mt-2 font-manrope text-xs leading-6 text-[#6f6245]">
            Approved refunds are returned through the original payment method
            whenever possible. Bank fees, card-processing charges,
            international-transfer fees, currency-conversion differences and
            non-refundable third-party costs may be deducted where applicable.
          </p>
        </div>

        {/* FINAL NOTE */}
        <p className="mt-6 text-center font-manrope text-xs leading-6 text-slate-400">
          The final cancellation and refund amount is determined by the terms
          in the confirmed booking agreement and the services already used.
        </p>
      </div>
    </section>
  );
}