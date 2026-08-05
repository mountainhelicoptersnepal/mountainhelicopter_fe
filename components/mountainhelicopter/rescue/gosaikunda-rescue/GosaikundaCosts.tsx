const costFactors = [
  {
    factor: "Rescue location",
    reason:
      "Different flight requirements apply for locations such as Gosaikunda Lake, Lauribina La Pass, and the Helambu circuit.",
  },
  {
    factor: "Distance from base",
    reason:
      "Flight time from the Kathmandu base to the rescue destination is included in the cost calculation.",
  },
  {
    factor: "Landing difficulty",
    reason:
      "Difficult landings on rocky shores or steep ridges can increase operational costs.",
  },
  {
    factor: "Weather delays",
    reason:
      "Extended waiting time or repeated flight attempts due to poor weather can increase the total cost.",
  },
  {
    factor: "Patient condition",
    reason:
      "Oxygen, stretcher transport, or onboard medical assistance may increase the evacuation cost.",
  },
  {
    factor: "Insurance approval",
    reason:
      "Insurance verification, guarantees, or additional paperwork may be required before dispatch in some cases.",
  },
  {
    factor: "Private vs. shared evacuation",
    reason:
      "Shared evacuations generally cost less than private helicopter charters.",
  },
  {
    factor: "Passenger count",
    reason:
      "Passenger weight and total load affect helicopter performance at high altitude and may influence flight planning and pricing.",
  },
  {
    factor: "Documentation needs",
    reason:
      "Insurance documentation and post-rescue administrative paperwork may be required, depending on the case.",
  },
];

const includedItems = [
  "Flight by helicopter from the staging point to the rescue location and back.",
  "Basic cabin set-up for transporting patients.",
  "Basic oxygen on board the helicopter.",
  "Coordination with CAAN.",
  "Landing cost and charges at airports.",
  "Ambulance transfer from the helipad to the entrance of the hospital.",
];

const excludedItems = [
  "Costs associated with admission to the hospital and treatment in the hospital.",
  "Costs associated with medical evacuation to the home country.",
  "Hotel and meals in Kathmandu during the recovery period.",
  "Insurance excess/deductible.",
  "Flight cost from Kathmandu to the home country.",
  "Cost of replacing lost or abandoned trekking gear.",
];

function IncludedItem({ children }) {
  return (
    <li className="flex items-start gap-3">
      <span
        aria-hidden="true"
        className="mt-[1px] shrink-0 font-manrope text-[14px] font-bold leading-[18px] text-[#003366]"
      >
        ✓
      </span>

      <span className="font-manrope text-[14px] font-normal leading-[18px] tracking-[0px] text-[#0A1929]/70">
        {children}
      </span>
    </li>
  );
}

function ExcludedItem({ children }) {
  return (
    <li className="flex items-start gap-3">
      <span
        aria-hidden="true"
        className="mt-[1px] shrink-0 font-manrope text-[14px] font-bold leading-[18px] text-[#7D8992]"
      >
        ×
      </span>

      <span className="font-manrope text-[14px] font-normal leading-[18px] tracking-[0px] text-[#0A1929]/65">
        {children}
      </span>
    </li>
  );
}

export default function GosaikundaCosts() {
  return (
    <section id="costs" className="scroll-mt-[123px]  ">
      {/* Cost factors */}
      <div className="bg-[#F8FAFC]">
        <div className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-[125px]">
          <div className="w-full max-w-[1100px]">
            <p className="font-manrope text-[11px] font-bold uppercase leading-[14px] tracking-[2px] text-[#B87800]">
              , Main Factors Affecting Cost
            </p>

            <h2 className="mt-3 font-fraunces text-[34px] font-semibold uppercase leading-[40px] tracking-[-0.7px] text-[#003366] sm:text-[42px] sm:leading-[48px] lg:text-[48px] lg:leading-[54px] lg:tracking-[-0.96px]">
              Cost of Gosaikunda Helicopter Rescue
            </h2>

            <p className="mt-5 w-full max-w-[780px] font-manrope text-[13px] font-normal leading-[20px] tracking-[0px] text-[#0A1929]/70 sm:text-[14px] sm:leading-[21px]">
              Exact pricing varies from flight to flight, so instead of listing
              numbers that may not match your situation, here is what actually
              drives the cost.
            </p>
          </div>

          <h3 className="mt-8 font-fraunces text-[26px] font-semibold leading-[32px] tracking-[-0.4px] text-[#003366]">
            Main Factors Affecting Cost
          </h3>

          {/* Cost factors table */}
          <div className="mt-5 w-full overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse font-manrope text-left">
              <thead>
                <tr className="bg-[#003366] text-white">
                  <th className="w-[30%] border-r border-white/15 px-4 py-[10px] text-[12px] font-semibold uppercase leading-[14px] tracking-[1.4px]">
                    Cost Factor
                  </th>

                  <th className="px-4 py-[10px] text-[12px] font-semibold uppercase leading-[14px] tracking-[1.4px]">
                    Why it Matters
                  </th>
                </tr>
              </thead>

              <tbody>
                {costFactors.map((item) => (
                  <tr
                    key={item.factor}
                    className="border-b border-[#003366]/10 bg-transparent"
                  >
                    <td className="border-x border-[#003366]/10 px-4 py-[9px] font-manrope text-[14px] font-medium leading-[18px] text-[#003366]">
                      {item.factor}
                    </td>

                    <td className="border-r border-[#003366]/10 px-4 py-[9px] font-manrope text-[14px] font-normal leading-[18px] text-[#003366]">
                      {item.reason}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 w-full max-w-[780px] font-manrope text-[12px] font-normal leading-[20px] tracking-[0px] text-[#0A1929]/70 sm:text-[14px] sm:leading-[21px]">
            It is best to share your location and patient status first, and the
            potential pricing structure will be verified by the rescue team.
          </p>
        </div>
      </div>

      {/* What the cost covers */}
      <div className="bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-[125px]">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-0">
            <div className="lg:pr-12">
              <h2 className="font-fraunces text-[34px] font-semibold leading-[40px] tracking-[-0.7px] text-[#003366] sm:text-[42px] sm:leading-[48px] lg:text-[48px] lg:leading-[54px] lg:tracking-[-0.96px]">
                What is Included in the Rescue Cost?
              </h2>

              <ul className="mt-8 space-y-[7px]">
                {includedItems.map((item) => (
                  <IncludedItem key={item}>{item}</IncludedItem>
                ))}
              </ul>
            </div>

            <div className="border-t border-[#F2B632]/45 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              <h2 className="font-fraunces text-[34px] font-semibold leading-[40px] tracking-[-0.7px] text-[#003366] sm:text-[42px] sm:leading-[48px] lg:text-[48px] lg:leading-[54px] lg:tracking-[-0.96px]">
                What is not included in the rescue cost?
              </h2>

              <ul className="mt-8 space-y-[7px]">
                {excludedItems.map((item) => (
                  <ExcludedItem key={item}>{item}</ExcludedItem>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
