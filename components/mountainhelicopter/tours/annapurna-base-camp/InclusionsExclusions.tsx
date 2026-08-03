import { CheckCircle2, XCircle } from "lucide-react";

const includes = [
  "Helicopter flight (Kathmandu to Everest and Everest to Kathmandu)",
  "Certified pilot and crew",
  "Hotel pick-up and airport transfers",
  "Fuel, landing, and helipad fees",
  "Emergency oxygen system onboard",
  "Breakfast at Hotel Everest View (landing package)",
];

const excludes = [
  "Nepal entry visa and international air fare",
  "Travel insurance covering high-altitude flights",
  "Personal meals and beverages",
  "Pilot and staff gratuities",
  "Additional filming or landing permits",
  "Weather-related delays or reschedules",
];

const permits = [
  {
    name: "Sagarmatha National Park Entry Permit",
    authority: "Department of National Parks and Wildlife Conservation, Nepal",
    usd: "USD 22",
    npr: "NPR 3,000",
  },
  {
    name: "Khumbu Pasang Lhamu Rural Municipality Permit",
    authority: "Khumbu Pasang Lhamu Rural Municipality",
    usd: "USD 15",
    npr: "NPR 2,000",
  },
];

export default function InclusionsExclusions() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 py-16 md:py-24 lg:py-28">
        {/* SECTION HEADING */}
        <div className="text-center">
          <p className="flex items-center justify-center gap-3 font-manrope text-xs font-bold uppercase tracking-[0.22em] text-[#d99a1b]">
            <span className="h-px w-7 bg-[#d99a1b]" />
            What Your Seat Covers
          </p>

          <h2 className="mt-4 font-fraunces text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#08294d] md:text-4xl">
            Included. Excluded.{" "}
            <span className="text-[#e0a326]">Itemised.</span>
          </h2>
        </div>

        {/* INCLUDES / EXCLUDES */}
        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* INCLUDES */}
          <div>
            <h3 className="font-manrope text-xs font-bold uppercase tracking-[0.18em] text-[#d99a1b]">
              Includes
            </h3>

            <div className="mt-5 space-y-4">
              {includes.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={16}
                    strokeWidth={1.8}
                    className="mt-0.5 shrink-0 text-[#0b7dd8]"
                  />

                  <p className="font-manrope text-sm leading-6 text-slate-500">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* EXCLUDES */}
          <div>
            <h3 className="font-manrope text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
              Excludes
            </h3>

            <div className="mt-5 space-y-4">
              {excludes.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <XCircle
                    size={16}
                    strokeWidth={1.7}
                    className="mt-0.5 shrink-0 text-slate-400"
                  />

                  <p className="font-manrope text-sm leading-6 text-slate-500">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PERMITS CARD */}
        <div className="mt-10 overflow-hidden rounded-[24px] bg-[#061b35] px-5 py-8 md:px-8 md:py-10 lg:px-10">
          <div className="text-center">
            <p className="font-manrope text-xs font-bold uppercase tracking-[0.2em] text-[#e0a326]">
              Permits Included in Your Seat
            </p>
          </div>

          <div className="mt-10">
            <p className="font-manrope text-xs font-bold uppercase tracking-[0.18em] text-[#e0a326]">
              Permits Included in Your Seat
            </p>

            <div className="mt-5">
              {permits.map((permit) => (
                <div
                  key={permit.name}
                  className="grid gap-4 border-b border-white/10 py-5 md:grid-cols-[1fr_auto] md:items-center"
                >
                  <div>
                    <h3 className="font-manrope text-sm font-medium text-white">
                      {permit.name}
                    </h3>

                    <p className="mt-1 font-manrope text-xs leading-5 text-white/35">
                      {permit.authority}
                    </p>
                  </div>

                  <div className="text-left md:text-right">
                    <p className="font-manrope text-sm font-bold text-white">
                      {permit.usd}
                    </p>

                    <p className="mt-1 font-manrope text-xs uppercase tracking-[0.12em] text-white/35">
                      {permit.npr}
                    </p>
                  </div>
                </div>
              ))}

              <div className="grid gap-4 py-5 md:grid-cols-[1fr_auto] md:items-center">
                <p className="font-manrope text-xs font-bold uppercase tracking-[0.16em] text-[#e0a326]">
                  Total Permits Value
                </p>

                <p className="font-manrope text-sm font-bold text-[#e0a326]">
                  USD 37
                </p>
              </div>
            </div>

            <p className="font-manrope text-sm leading-6 text-white/50">
              Important: You don&apos;t need a TIMS card.
            </p>

            <p className="mt-10 text-center font-manrope text-xs leading-6 text-white/35">
              Other Nepal helicopter operators may ask passengers to pay these
              permit fees in cash on the day. Mountain Helicopters Nepal handles
              them upfront as part of the booking process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}