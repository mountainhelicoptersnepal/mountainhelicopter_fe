import { CheckCircle2, XCircle } from "lucide-react";

const includes = [
  "Helicopter flight, Kathmandu to Kala Patthar and return",
  "Certified pilot and crew",
  "Emergency oxygen",
  "Medical Insurance up to 20,000 NRS",
];

const excludes = [
  "Personal meals and beverages",
  "Pilots and staff gratuities",
  "Additional filming",
  "Breakfasts at Hotel Everest View",
  "Excess or separately transported baggage",
  "Accommodation and meals caused by a delay",
];

const permits = [
  {
    country: "SAARC",
    kathmandu: "500",
    nationalPark: "3500",
    lukla: "500",
    total: "4500",
  },
  {
    country: "Other foreign countries",
    kathmandu: "500",
    nationalPark: "6000",
    lukla: "500",
    total: "7000",
  },
  {
    country: "Nepal",
    kathmandu: "500",
    nationalPark: "100",
    lukla: "500",
    total: "1100",
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
              What is Included
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
              What is Excluded
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
              Permits Excluded
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
                    Airport Tax of Kathmandu
                  </th>
                  <th className="pb-6 font-manrope text-[10px] font-bold uppercase tracking-[0.2em] text-[#f2b53a]">
                    National Park Fees
                  </th>
                  <th className="pb-6 font-manrope text-[10px] font-bold uppercase tracking-[0.2em] text-[#f2b53a]">
                    Airport Tax of Lukla
                  </th>
                  <th className="pb-6 font-manrope text-[10px] font-bold uppercase tracking-[0.2em] text-[#f2b53a]">
                    Total
                  </th>
                </tr>
              </thead>

              <tbody>
                {permits.map((row) => (
                  <tr key={row.country} className="border-b border-white/8">
                    <td className="py-10 font-manrope text-sm text-white">
                      {row.country}
                    </td>
                    <td className="py-10 font-manrope text-sm text-white">
                      {row.kathmandu}
                    </td>
                    <td className="py-10 font-manrope text-sm text-white">
                      {row.nationalPark}
                    </td>
                    <td className="py-10 font-manrope text-sm text-white">
                      {row.lukla}
                    </td>
                    <td className="py-10 font-manrope text-sm font-bold text-[#f2b53a]">
                      {row.total}
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
