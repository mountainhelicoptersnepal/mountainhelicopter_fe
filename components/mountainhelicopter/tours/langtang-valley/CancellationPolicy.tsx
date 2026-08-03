import { CloudRain, PlaneLanding, UserRoundX } from "lucide-react";

const passengerCancellationRules = [
  {
    period: ">72H",
    description:
      "More than 72 hours in advance: 100% refund minus a USD 50 fee per person for permit preparation, airport slots, and administration.",
    accent: "border-[#d4dae2]",
    periodClass: "text-[#0a4f82]",
  },
  {
    period: "24-48H",
    description: "24-48 hours prior: 75% refund.",
    accent: "border-[#d5a023]",
    periodClass: "text-[#a6770c]",
  },
  {
    period: "<24H",
    description:
      "Under 24 hours or no-shows: 50% refund because payload, fuel, and aircraft slots have already been prepared.",
    accent: "border-[#d92626]",
    periodClass: "text-[#c71919]",
  },
];

export default function CancellationPolicy() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24 lg:px-16 lg:py-28">
        <div className="border-l-4 border-[#f0b323] pl-5 md:pl-6">
          <h2 className="font-fraunces text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#171717] md:text-4xl">
            Cancellation, Weather, and Refund Policies
          </h2>

          <p className="mt-3 max-w-5xl font-manrope text-sm leading-7 text-[#4f5965] md:text-base">
            Aviation in the high Himalayas can be affected by changing weather.
            Mountain Helicopters Nepal prioritizes transparency and passenger
            safety so guests are not unfairly caught by unexpected expenses.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:gap-10">
          <article className="bg-white">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-[#0a6db7] text-white">
              <CloudRain size={20} strokeWidth={1.8} />
            </div>
            <h3 className="mt-6 font-fraunces text-2xl font-semibold text-[#00569a]">
              Weather-related cancellations
            </h3>
            <p className="mt-5 font-manrope text-sm leading-7 text-[#4f5965]">
              If poor visibility, cloud in the Trishuli River corridor, or
              strong wind near Kyanjin Gompa makes flying unsafe, the Chief
              Pilot and CAAN may cancel the tour. You can choose a 100% refund
              or a free reschedule to the next suitable morning.
            </p>
          </article>

          <article className="bg-white">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-[#f3b52e] text-[#6f5200]">
              <PlaneLanding size={20} strokeWidth={2} />
            </div>
            <h3 className="mt-6 font-fraunces text-2xl font-semibold text-[#8a6400]">
              Pilot&apos;s discretion
            </h3>
            <p className="mt-5 font-manrope text-sm leading-7 text-[#4f5965]">
              If landing at Kyanjin Gompa becomes unsafe after departure, the
              pilot may operate an aerial tour, land at a safer lower-altitude
              place such as Chandanbari or Syabrubesi, or return to Kathmandu.
              Partial refund applies when the Kyanjin landing cannot be made.
            </p>
          </article>

          <article className="bg-white">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-[#ffd8d8] text-[#bd0000]">
              <UserRoundX size={20} strokeWidth={2} />
            </div>
            <h3 className="mt-6 font-fraunces text-2xl font-semibold text-[#cc1111]">
              Passenger cancellations
            </h3>
            <div className="mt-5 space-y-4">
              {passengerCancellationRules.map((rule) => (
                <div key={rule.period} className={`grid grid-cols-[52px_1fr] gap-3 border-l-2 pl-3 ${rule.accent}`}>
                  <span className={`pt-1 font-manrope text-xs font-bold uppercase tracking-[0.06em] ${rule.periodClass}`}>
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
      </div>
    </section>
  );
}
