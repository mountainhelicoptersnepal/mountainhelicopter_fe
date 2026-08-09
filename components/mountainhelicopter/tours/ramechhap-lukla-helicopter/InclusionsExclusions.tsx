import { CheckCircle2, XCircle } from "lucide-react";

const includes = [
  "One-way helicopter flight from Ramechhap to Lukla",
  "Certified pilot and crew",
  "Emergency oxygen",
  "Helicopter flight",
  "Medical Insurance up to 20,000 NRS"
];

const excludes = [
  "Personal meals and beverages",
  "Pilots and staff gratuities",
  "Additional filming",
  "Excess or separately transported baggage",
  "Accommodation and meals caused by a delay"
];

const permits = [
  {
    nationality: "SAARC",
    nationalParkFees: "3500",
    luklaAirportTax: "500",
    totalPayable: "4000",
  },
  {
    nationality: "Other foreign countries",
    nationalParkFees: "6000",
    luklaAirportTax: "500",
    totalPayable: "6500",
  },
  {
    nationality: "Nepal",
    nationalParkFees: "100",
    luklaAirportTax: "500",
    totalPayable: "600",
  },
];

export default function InclusionsExclusions() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-12 md:py-20 lg:px-16 lg:py-24">
        <div className="text-center">
          <h2 className="font-fraunces text-[38px] font-semibold leading-none tracking-[-0.03em] text-[#081d44] md:text-[46px]">
            Included. Excluded.{" "}
            <span className="text-[#f2b53a]">Itemised.</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <h3 className="mb-5 font-manrope text-[11px] font-bold uppercase tracking-[0.32em] text-[#f2b53a]">
              Includes
            </h3>

            <div className="space-y-4">
              {includes.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={16}
                    strokeWidth={2}
                    className="mt-0.5 shrink-0 text-[#0a7bd7]"
                  />
                  <p className="font-manrope text-sm leading-6 text-[#6b7b8e]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 font-manrope text-[11px] font-bold uppercase tracking-[0.32em] text-[#9aa6b5]">
              Excludes
            </h3>

            <div className="space-y-4">
              {excludes.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <XCircle
                    size={16}
                    strokeWidth={2}
                    className="mt-0.5 shrink-0 text-[#a9b4c1]"
                  />
                  <p className="font-manrope text-sm leading-6 text-[#6b7b8e]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 overflow-hidden rounded-[24px] bg-[#071c36] px-6 py-8 shadow-[0_24px_45px_rgba(7,28,54,0.18)] md:px-10 md:py-10">
          <div className="text-center">
            <h2 className="font-manrope text-[11px] font-bold uppercase tracking-[0.32em] text-[#f2b53a]">
              Permits Exclude (NPR)
            </h2>
          </div>

          <p className="mx-auto mt-6 max-w-4xl text-center font-manrope text-sm leading-7 text-white/70">
            The airport tax is payable at the airport before departure.
            National park and local permit fees are paid either upon arrival in
            the Everest region or before takeoff, depending on the flight&apos;s
            operating arrangements and the crew&apos;s instructions.
          </p>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-left">
                  <th className="pb-6 font-manrope text-[10px] font-bold uppercase tracking-[0.2em] text-[#f2b53a]">
                    Countries
                  </th>
                  <th className="pb-6 font-manrope text-[10px] font-bold uppercase tracking-[0.2em] text-[#f2b53a]">
                    National Park Fees
                  </th>
                  <th className="pb-6 font-manrope text-[10px] font-bold uppercase tracking-[0.2em] text-[#f2b53a]">
                    Airport Tax of Lukla
                  </th>
                  <th className="pb-6 font-manrope text-[10px] font-bold uppercase tracking-[0.2em] text-[#f2b53a]">
                    Total Payable
                  </th>
                </tr>
              </thead>

              <tbody>
                {permits.map((row) => (
                  <tr key={row.nationality} className="border-b border-white/8">
                    <td className="py-10 font-manrope text-sm text-white">
                      {row.nationality}
                    </td>
                    <td className="py-10 font-manrope text-sm text-white">
                      {row.nationalParkFees}
                    </td>
                    <td className="py-10 font-manrope text-sm text-white">
                      {row.luklaAirportTax}
                    </td>
                    <td className="py-10 font-manrope text-sm font-bold text-[#f2b53a]">
                      {row.totalPayable}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
