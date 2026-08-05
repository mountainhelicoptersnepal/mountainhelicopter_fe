import { CheckCircle2, XCircle } from "lucide-react";

const includes = [
  "Roundtrip Airbus H125 helicopter flight",
  "Hotel pickup and drop-off inside Kathmandu city",
  "Airport assistance at Kathmandu Domestic Terminal",
  "Langtang National Park Entry Permit",
  "Kathmandu domestic airport departure taxes",
  "Government VAT 13%",
  "60-90 minutes of ground time at Kyanjin Gompa",
  "Breakfast at a local teahouse in Kyanjin",
  "Oxygen cylinder and first aid kit on each flight",
  "Experienced mountain licensed pilot",
  "Pre-flight safety briefing",
];

const excludes = [
  "Personal travel insurance",
  "Emergency medical evacuation insurance",
  "Warm and windproof clothing",
  "Sunglasses, gloves, beanie, and personal gear",
  "Personal beverages or extra food",
  "Tips for pilot or ground staff",
  "Any cost caused by personal delay or itinerary change",
];

const permits = [
  {
    name: "Langtang National Park Entry Permit",
    authority: "Required for landing inside Langtang National Park",
    usd: "Included",
    npr: "NPR 3,000 average value",
  },
  {
    name: "TIMS Card",
    authority: "Not required for helicopter-only trips",
    usd: "Not needed",
    npr: "Not needed",
  },
];

export default function InclusionsExclusions() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24 lg:px-16 lg:py-28">
        <div className="text-center">
          <p className="flex items-center justify-center gap-3 font-manrope text-xs font-bold uppercase tracking-[0.22em] text-[#d99a1b]">
            <span className="h-px w-7 bg-[#d99a1b]" />
            Inclusions and Exclusions
          </p>

          <h2 className="mt-4 font-fraunces text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#08294d] md:text-4xl">
            Included. Excluded.{" "}
            <span className="text-[#e0a326]">Itemised.</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
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

        <div className="mt-10 overflow-hidden rounded-[24px] bg-[#061b35] px-5 py-8 md:px-8 md:py-10 lg:px-10">
          <p className="text-center font-manrope text-xs font-bold uppercase tracking-[0.2em] text-[#e0a326]">
            Permits Required
          </p>

          <div className="mt-8">
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
          </div>
        </div>
      </div>
    </section>
  );
}
