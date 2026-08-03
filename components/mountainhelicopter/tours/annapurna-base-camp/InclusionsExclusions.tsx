import { CheckCircle2, Info,XCircle } from "lucide-react";

const includes = [
  "Round-trip helicopter transport in a CAAN-certified Airbus H125",
  "Hotel pickup and drop-off within Pokhara or Kathmandu",
  "Annapurna Conservation Area Permit arrangement",
  "Applicable local government and municipality tourism taxes",
  "Domestic airport or helipad departure taxes in Pokhara or Kathmandu",
  "Approximately 30–45 minutes of landing and exploration time at Annapurna Base Camp",
  "Hot beverages or breakfast at an available Annapurna Base Camp lodge",
  "Supplemental oxygen cylinders and an emergency first-aid kit onboard",
  "Experienced mountain pilot qualified for high-altitude Himalayan operations",
  "Mandatory pre-flight safety and operational briefing",
];

const excludes = [
  "Personal travel insurance covering emergency helicopter evacuation up to at least 5,000 metres",
  "Tips and gratuities for the pilot and airport ground staff",
  "Personal clothing, cold-weather down jackets and walking equipment",
  "Additional food or beverages beyond the confirmed package",
  "Nepal entry visa fees",
  "International airfares and other international travel expenses",
  "Personal expenses, souvenirs and services not listed under inclusions",
];

const permits = [
  {
    name: "Annapurna Conservation Area Permit",
    shortName: "ACAP",
    authority: "Annapurna Conservation Area Project",
    description:
      "Required for entry into the Annapurna Conservation Area, including Annapurna Base Camp.",
    fees: [
      {
        category: "Foreign Nationals",
        price: "USD 30",
      },
      {
        category: "SAARC Nationals",
        price: "USD 10",
      },
    ],
    status: "Arranged by MHN",
  },
  {
    name: "Trekkers’ Information Management System Card",
    shortName: "TIMS",
    authority: "Applicable trekking and tourism authorities",
    description:
      "A TIMS card may be required when the helicopter journey is combined with trekking. The requirement can vary according to the itinerary, passenger nationality and type of trek.",
    fees: [],
    status: "Itinerary Dependent",
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
            <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-4">
              <p className="font-manrope text-xs leading-6 text-amber-800">
                Travel insurance should specifically cover high-altitude travel
                and emergency helicopter evacuation at elevations of at least
                5,000 metres.
              </p>
            </div>
          </div>
          
        </div>
        
{/* PERMIT SECTION */}
        <div className="mt-12 overflow-hidden rounded-[24px] bg-[#061b35] px-5 py-8 md:px-8 md:py-10 lg:px-10">
          <div className="text-center">
            <p className="font-manrope text-xs font-bold uppercase tracking-[0.2em] text-[#e0a326]">
              Permits for the Annapurna Helicopter Tour
            </p>

            <h3 className="mt-3 font-fraunces text-2xl font-semibold text-white md:text-3xl">
              Entry and trekking documentation
            </h3>

            <p className="mx-auto mt-4 max-w-3xl font-manrope text-sm leading-6 text-white/50">
              The permit requirement depends on whether your booking is a
              helicopter-only experience or includes trekking inside the
              Annapurna region.
            </p>
          </div>

          {/* PERMIT CARDS */}
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {permits.map((permit) => (
              <article
                key={permit.shortName}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#e0a326]/40 hover:bg-white/[0.055] md:p-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="rounded-full border border-[#e0a326]/30 bg-[#e0a326]/10 px-3 py-1 font-manrope text-[10px] font-bold uppercase tracking-[0.15em] text-[#e0a326]">
                    {permit.shortName}
                  </span>

                  <span className="font-manrope text-[10px] font-bold uppercase tracking-[0.13em] text-white/45">
                    {permit.status}
                  </span>
                </div>

                <h4 className="mt-5 font-fraunces text-xl font-semibold text-white">
                  {permit.name}
                </h4>

                <p className="mt-2 font-manrope text-xs leading-5 text-white/35">
                  {permit.authority}
                </p>

                <p className="mt-4 font-manrope text-sm leading-7 text-white/55">
                  {permit.description}
                </p>

                {permit.fees.length > 0 && (
                  <div className="mt-6 overflow-hidden rounded-xl border border-white/10">
                    {permit.fees.map((fee, index) => (
                      <div
                        key={fee.category}
                        className={`flex items-center justify-between gap-4 px-4 py-4 ${
                          index !== permit.fees.length - 1
                            ? "border-b border-white/10"
                            : ""
                        }`}
                      >
                        <span className="font-manrope text-xs text-white/50">
                          {fee.category}
                        </span>

                        <span className="font-manrope text-sm font-bold text-[#e0a326]">
                          {fee.price}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>

          {/* ACAP INFORMATION */}
          <div className="mt-6 rounded-xl border border-[#e0a326]/20 bg-[#e0a326]/[0.06] px-5 py-5">
            <div className="flex items-start gap-3">
                <Info
                size={17}
                strokeWidth={1.8}
                className="mt-0.5 shrink-0 text-[#e0a326]"
              />

              <div>
                <p className="font-manrope text-xs font-bold uppercase tracking-[0.15em] text-[#e0a326]">
                  ACAP Permit Arrangement
                </p>

                <p className="mt-2 font-manrope text-xs leading-6 text-white/45">
                  Mountain Helicopters Nepal can prepare the required ACAP
                  documentation using the identification details supplied
                  during booking. Your final confirmation will state whether
                  the permit fee is included in the quoted package price.
                </p>
              </div>
            </div>
          </div>

          {/* TIMS INFORMATION */}
          <div className="mt-5 rounded-xl border border-sky-400/20 bg-sky-400/[0.06] px-5 py-5">
            <div className="flex items-start gap-3">
              <Info
                size={17}
                strokeWidth={1.8}
                className="mt-0.5 shrink-0 text-sky-300"
              />

              <div>
                <p className="font-manrope text-xs font-bold uppercase tracking-[0.15em] text-sky-300">
                  When a TIMS Card May Be Required
                </p>

                <p className="mt-2 font-manrope text-xs leading-6 text-white/45">
                  A TIMS card may be required when the helicopter flight is
                  combined with a trekking itinerary. The requirement can vary
                  according to nationality, trekking route, group type and the
                  agency organising the trek. A standard helicopter-only visit
                  will be reviewed separately during booking.
                </p>
              </div>
            </div>
          </div>

          {/* IDENTIFICATION NOTE */}
          <p className="mt-7 text-center font-manrope text-xs leading-6 text-white/35">
            Carry your passport or valid government-issued identification.
            Permit fees, documentation requirements and applicable rules may
            change, so the final requirement will be confirmed before
            departure.
          </p>
        </div>

        {/* OPERATIONAL NOTE */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5 md:px-7">
          <p className="font-manrope text-xs leading-6 text-slate-500">
            Final inclusions and permit charges may vary according to
            nationality, departure city, selected package, trekking component
            and the services listed in your confirmed booking agreement.
          </p>
        </div>
      </div>
    </section>
  );
}