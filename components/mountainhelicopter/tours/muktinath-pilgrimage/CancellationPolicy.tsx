import { CloudRain, PlaneLanding, UserRoundX } from "lucide-react";

const passengerCancellationRules = [
  {
    period: ">30D",
    description:
      "If cancellations are made more than 30 days in advance of departure, we will grant a full refund, less a small USD 50 administrative fee per person to cover costs incurred.",
    accent: "border-[#d4dae2]",
    periodClass: "text-[#0a4f82]",
  },
  {
    period: "7–30D",
    description:
      "Cancellations between 7 to 30 days of departure are 75% refundable.",
    accent: "border-[#d5a023]",
    periodClass: "text-[#a6770c]",
  },
  {
    period: "<7D",
    description:
      "Cancellations less than 7 days of departure or no-shows incur a 50% charge.",
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
            Since weather conditions in Nepal&apos;s mountain regions change
            rapidly and can be unpredictable, we&apos;ve developed the
            following cancellation policy so you aren&apos;t hit with
            unexpected charges:
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
              On your departure day, we check the weather at 4 AM and share
              updates over WhatsApp or Viber by 5 AM. If poor visibility, rain,
              or high wind in Kathmandu, Pokhara, or Muktinath cancels the
              flight, you may claim a full refund or reschedule for the next
              clear morning.
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
              The pilot&apos;s safety decision is final. If visibility, wind,
              clouds, landing conditions, or aircraft performance do not support
              a safe Muktinath landing, the pilot may alter the flight, return,
              or choose the safest operational option. Any applicable partial
              refund is calculated according to flying time and services used.
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
            All refunds are calculated according to the final booking agreement
            and the services already used. Bank charges, payment gateway fees,
            currency conversion differences and non-refundable third-party
            expenses may be deducted where applicable.
          </p>
        </div>
      </div>
    </section>
  );
}
