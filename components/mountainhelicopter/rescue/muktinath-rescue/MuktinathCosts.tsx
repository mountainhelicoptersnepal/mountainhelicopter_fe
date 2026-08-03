const costFactors = [
  {
    factor: "Rescue location",
    reason:
      "Muktinath Temple and nearby high passes have different flight requirements.",
  },
  {
    factor: "Distance from base",
    reason:
      "Longer flight time from Pokhara or Kathmandu increases operational cost.",
  },
  {
    factor: "Landing Difficulty",
    reason:
      "Complex landing zones in the Mustang district may require additional assessment.",
  },
  {
    factor: "Weather Delays",
    reason: "Waiting time or repeated attempts can affect cost.",
  },
  {
    factor: "Patient condition",
    reason:
      "Oxygen, stretcher needs, or medical support can change logistics.",
  },
  {
    factor: "Insurance approval",
    reason: "Some cases need written guarantee before dispatch.",
  },
  {
    factor: "Private vs Shared Evacuation",
    reason:
      "Shared evacuation may reduce cost when safe and practical.",
  },
  {
    factor: "Passenger count",
    reason:
      "Weight affects high-altitude performance (strict 400 kg limit).",
  },
  {
    factor: "Documentation needs",
    reason:
      "Insurance paperwork and post-rescue documents may require coordination.",
  },
];

const includedItems = [
  "Flight by helicopter from the staging point to the rescue location and back is included.",
  "Basic cabin set-up for transporting patients is provided.",
  "Basic oxygen on board the helicopter is supplied.",
  "Coordination with CAAN is managed.",
  "Landing costs and charges at airports are covered.",
  "An ambulance transfer from the helipad to the entrance of the hospital is arranged.",
];

const excludedItems = [
  "Costs associated with admission to the hospital and treatment in the hospital are excluded.",
  "Costs associated with medical evacuation to the home country are not covered.",
  "Hotels and meals in Kathmandu during the recovery period are excluded.",
  "Insurance excess or deductible amounts are not included.",
  "Flight cost from Kathmandu to the home country is excluded.",
  "The cost of replacing lost or abandoned trekking gear is not covered.",
];

function IncludedItem({ children }) {
  return (
    <li className="flex items-start gap-3">
      <span
        aria-hidden="true"
        className="mt-[1px] shrink-0 font-manrope text-[14px] font-bold leading-[18px] text-[#1686D9]"
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

export default function MuktinathCosts() {
  return (
    <section
      id="costs"
      className="scroll-mt-[129px] border-t-[3px] border-t-[#003366]"
    >
      <div className="bg-[#F8FAFC]">
        <div className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-[125px]">
          <div className="w-full max-w-[1100px]">
            <p className="font-manrope text-[9px] font-bold uppercase leading-[14px] tracking-[2px] text-[#B87800]">
              — Main Factors Affecting Cost
            </p>

            <h2 className="mt-3 font-fraunces text-[34px] font-semibold uppercase leading-[40px] tracking-[-0.7px] text-[#003366] sm:text-[42px] sm:leading-[48px] lg:text-[48px] lg:leading-[54px] lg:tracking-[-0.96px]">
              Cost of Muktinath Helicopter Rescue
            </h2>

            <p className="mt-5 w-full max-w-[780px] font-manrope text-[12px] font-normal leading-[20px] tracking-[0px] text-[#0A1929]/70 sm:text-[14px] sm:leading-[21px]">
              Exact pricing varies flight to flight, so instead of listing
              numbers that may not match your situation, here is what actually
              drives the cost.
            </p>
          </div>

          <h3 className="mt-8 font-fraunces text-[26px] font-semibold leading-[32px] tracking-[-0.4px] text-[#003366]">
            Main Factors Affecting Cost
          </h3>

          <div className="mt-5 w-full overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse font-manrope text-left">
              <thead>
                <tr className="bg-[#003366] text-white">
                  <th className="w-[30%] border-r border-white/15 px-4 py-[10px] text-[9px] font-semibold uppercase leading-[14px] tracking-[1.4px]">
                    Cost Factor
                  </th>

                  <th className="px-4 py-[10px] text-[9px] font-semibold uppercase leading-[14px] tracking-[1.4px]">
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
            The safest approach is to share your location and patient condition
            first. Then the rescue team can confirm the possible cost
            structure.
          </p>
        </div>
      </div>

      <div id="included" className="scroll-mt-[129px] bg-white">
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