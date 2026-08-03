import { CheckCircle2, XCircle ,Info} from "lucide-react";

const includes = [
   "Round-trip Airbus H125 helicopter flight from Kathmandu to Gosaikunda",
  "CAAN-certified mountain pilot and operational crew",
  "Hotel pickup and airport transfers within Kathmandu",
  "Langtang National Park entry permit arrangement",
  "Fuel, landing, domestic airport and helipad charges",
  "Approximately 30–40 minutes at Gosaikunda when conditions permit",
  "Supplemental oxygen cylinders and emergency first-aid kit onboard",
  "Pre-flight safety and high-altitude briefing",
  "Applicable local tourism taxes and government charges",
];

const excludes = [
  "Nepal entry visa fees and international airfare",
  "Personal travel and emergency helicopter evacuation insurance",
  "Personal clothing, warm jackets and walking equipment",
  "Meals and beverages not listed in the confirmed package",
  "Pilot and ground-staff gratuities",
  "Special photography, filming or drone permits",
  "Personal expenses, souvenirs and religious offerings",
  "Expenses caused by personal itinerary changes or delays",
];

const permitDetails = [
   {
    label: "Protected Area",
    value: "Langtang National Park",
    description:
      "Gosaikunda lies within Langtang National Park, so visitors must comply with the park’s entry requirements.",
  },
  {
    label: "Foreign Nationals",
    value: "Permit Required",
    description:
      "A Langtang National Park entry permit is mandatory for foreign passengers visiting the protected area.",
  },
  {
    label: "Nepali and SAARC Nationals",
    value: "Discounted Rate",
    description:
      "Nepali citizens and eligible SAARC nationals receive specially reduced permit rates under the applicable park-fee structure.",
  },
  {
    label: "Processing",
    value: "Handled by MHN",
    description:
      "Mountain Helicopters Nepal prepares the required permit documentation before departure using the passenger details provided during booking.",
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
            What Your Flight Covers
          </p>

          <h2 className="mt-4 font-fraunces text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#08294d] md:text-4xl">
            Included. Excluded.{" "}
            <span className="text-[#e0a326]">Itemised.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl font-manrope text-sm leading-7 text-slate-500">
            Review the services included in your Gosaikunda helicopter package
            and the personal arrangements you should prepare separately.
          </p>
        </div>

        {/* INCLUDES / EXCLUDES */}
        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* INCLUDES */}
          <div>
            <h3 className="font-manrope text-xs font-bold uppercase tracking-[0.18em] text-[#d99a1b]">
              Included
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
              Not Included
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

            <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-4">
              <p className="font-manrope text-xs leading-6 text-amber-800">
                Travel insurance should cover high-altitude travel and
                emergency helicopter evacuation above 4,500 metres.
              </p>
            </div>
          </div>
        </div>

        {/* PERMIT CARD */}
        <div className="mt-12 overflow-hidden rounded-[24px] bg-[#061b35] px-5 py-8 md:px-8 md:py-10 lg:px-10">
          {/* HEADING */}
          <div className="text-center">
            <p className="font-manrope text-xs font-bold uppercase tracking-[0.2em] text-[#e0a326]">
              Permit Required for Gosaikunda
            </p>

            <h3 className="mt-3 font-fraunces text-2xl font-semibold text-white md:text-3xl">
              Langtang National Park Entry Permit
            </h3>

            <p className="mx-auto mt-4 max-w-3xl font-manrope text-sm leading-6 text-white/50">
              Unlike the Everest region, which may involve several protected
              area and local-government permits, the Gosaikunda route lies
              within one primary protected area: Langtang National Park.
            </p>
          </div>

          {/* PRIMARY PERMIT SUMMARY */}
          <div className="mt-9 grid gap-5 rounded-2xl border border-[#e0a326]/25 bg-[#e0a326]/[0.06] px-5 py-6 md:grid-cols-[1fr_auto] md:items-center md:px-7">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h4 className="font-manrope text-sm font-semibold text-white">
                  Langtang National Park Entry Permit
                </h4>

                <span className="rounded-full border border-[#e0a326]/30 bg-[#e0a326]/10 px-3 py-1 font-manrope text-[9px] font-bold uppercase tracking-[0.14em] text-[#e0a326]">
                  Mandatory
                </span>
              </div>

              <p className="mt-3 max-w-3xl font-manrope text-xs leading-6 text-white/45">
                The permit is required for foreign passengers entering the
                protected Gosaikunda area. Mountain Helicopters Nepal processes
                the documentation before the flight, helping passengers avoid a
                separate visit to a tourism or park office.
              </p>
            </div>

            <div className="text-left md:text-right">
              <p className="font-manrope text-sm font-bold text-[#e0a326]">
                Included
              </p>

              <p className="mt-1 font-manrope text-[10px] uppercase tracking-[0.12em] text-white/35">
                In confirmed package
              </p>
            </div>
          </div>

          {/* PERMIT DETAILS */}
          <div className="mt-8">
            <p className="font-manrope text-xs font-bold uppercase tracking-[0.18em] text-[#e0a326]">
              Permit Details
            </p>

            <div className="mt-5 overflow-hidden rounded-xl border border-white/10">
              {permitDetails.map((detail, index) => (
                <div
                  key={detail.label}
                  className={`grid gap-4 px-5 py-5 transition-colors duration-300 hover:bg-white/[0.04] md:grid-cols-[1fr_auto] md:items-center ${
                    index !== permitDetails.length - 1
                      ? "border-b border-white/10"
                      : ""
                  }`}
                >
                  <div>
                    <p className="font-manrope text-sm font-medium text-white">
                      {detail.label}
                    </p>

                    <p className="mt-1 max-w-3xl font-manrope text-xs leading-5 text-white/35">
                      {detail.description}
                    </p>
                  </div>

                  <p
                    className={`font-manrope text-sm font-bold md:text-right ${
                      detail.value === "Discounted Rate" ||
                      detail.value === "Handled by MHN"
                        ? "text-[#e0a326]"
                        : "text-white"
                    }`}
                  >
                    {detail.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* SAARC / NEPALI NOTE */}
          <div className="mt-6 rounded-xl border border-sky-400/20 bg-sky-400/[0.06] px-5 py-5">
            <div className="flex items-start gap-3">
              <Info
                size={17}
                strokeWidth={1.8}
                className="mt-0.5 shrink-0 text-sky-300"
              />

              <div>
                <p className="font-manrope text-xs font-bold uppercase tracking-[0.15em] text-sky-300">
                  Nepali and SAARC Passenger Rates
                </p>

                <p className="mt-2 font-manrope text-xs leading-6 text-white/45">
                  Discounted Langtang National Park permit rates apply to
                  eligible Nepali citizens and SAARC nationals. Valid
                  identification or proof of nationality may be required to
                  receive the applicable rate.
                </p>
              </div>
            </div>
          </div>

          {/* DOCUMENT NOTE */}
          <p className="mt-7 text-center font-manrope text-xs leading-6 text-white/35">
            Carry your passport or valid government-issued identification.
            Permit rates and documentation rules may change, so the final
            requirement will be confirmed before departure.
          </p>
        </div>

        {/* FINAL NOTE */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5 md:px-7">
          <p className="font-manrope text-xs leading-6 text-slate-500">
            Final inclusions may vary according to nationality, shared-seat or
            private-charter booking, operating conditions and the services
            listed in your confirmed booking agreement.
          </p>
        </div>
      </div>
    </section>
  );
}