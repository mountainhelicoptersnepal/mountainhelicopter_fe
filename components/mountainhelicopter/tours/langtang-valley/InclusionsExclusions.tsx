import { CheckCircle2, XCircle } from "lucide-react";

const includes = [
  "Certified pilot and crew",
  "Emergency oxygen on board for passenger safety",
  "Fuel landing and helipad fees",
  "Helicopter flight",
  "Travel Insurance"
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
    nationality: "Nepal",
    nationalPark: "NPR 100",
    kathmanduAirportTax: "Payable at Kathmandu Airport",
    totalPayable: "Confirm at booking",
  },
  {
    nationality: "SAARC Nationals",
    nationalPark: "NPR 1,500",
    kathmanduAirportTax: "Payable at Kathmandu Airport",
    totalPayable: "Confirm at booking",
  },
  {
    nationality: "Other Foreign Nationals",
    nationalPark: "NPR 3,000",
    kathmanduAirportTax: "Payable at Kathmandu Airport",
    totalPayable: "Confirm at booking",
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
              Permits Excluded (in NPR)
            </h2>
          </div>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-left">
                  <th className="pb-6 font-manrope text-[10px] font-bold uppercase tracking-[0.2em] text-[#f2b53a]">
                    Nationality
                  </th>
                  <th className="pb-6 font-manrope text-[10px] font-bold uppercase tracking-[0.2em] text-[#f2b53a]">
                    Langtang National Park Entry Fee
                  </th>
                  <th className="pb-6 font-manrope text-[10px] font-bold uppercase tracking-[0.2em] text-[#f2b53a]">
                    Kathmandu Airport Tax
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
                      {row.nationalPark}
                    </td>
                    <td className="py-10 font-manrope text-sm text-white">
                      {row.kathmanduAirportTax}
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
