
const pickupCosts = [
  {
    point: "Namche Bazaar to Kathmandu",
    cost: "USD 2,500 - 4,000",
  },
  {
    point: "Dingboche or Pheriche to Kathmandu",
    cost: "USD 3,000 - 5,000",
  },
  {
    point: "Lobuche to Kathmandu",
    cost: "USD 3,500 - 6,000",
  },
  {
    point: "Gorak Shep to Kathmandu",
    cost: "USD 4,000 - 8,000",
  },
  {
    point: "Everest Base Camp area to Kathmandu",
    cost: "USD 4,000 - 8,000+",
  },
];

const includedItems = [
  "Flight by helicopter from the staging point to the rescue location and back",
  "Basic cabin set-up for transporting patients",
  "Basic oxygen on board the helicopter",
  "Coordination with CAAN",
  "Landing cost and charges at airports",
  "From the helipad to the entrance of the hospital",
];

const excludedItems = [
  "Costs associated with admission to the hospital and treatment in the hospital",
  "Costs associated with medical evacuation to the home country",
  "Hotel and meals in Kathmandu during the recovery period",
  "Insurance excess/deductible",
  "Flight cost from Kathmandu to the home country",
  "Cost of replacing lost or abandoned trekking gear",
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

export default function EverestCosts() {
  return (
    <section
      id="costs"
      className="scroll-mt-[123px] border-t-[3px] border-t-[#003366]"
    >
      {/* Cost by pickup point */}
      <div className="bg-[#F8FAFC]">
        <div className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-[125px]">
          <div className="w-full max-w-[1100px]">
            <p className="font-manrope text-[9px] font-bold uppercase leading-[14px] tracking-[2px] text-[#B87800]">
              — Cost by Point
            </p>

            <h2 className="mt-3 font-fraunces text-[34px] font-semibold leading-[40px] tracking-[-0.7px] text-[#003366] sm:text-[42px] sm:leading-[48px] lg:text-[48px] lg:leading-[54px] lg:tracking-[-0.96px]">
              Everest Helicopter Rescue Cost
            </h2>

            <p className="mt-5 w-full max-w-[780px] font-manrope text-[12px] font-normal leading-[20px] tracking-[0px] text-[#0A1929]/70 sm:text-[14px] sm:leading-[21px]">
              The cost of Everest Helicopter Rescue depends on pickup
              location, altitude, distance, flight route, weather delay,
              aircraft positioning, landing difficulty, patient condition,
              and whether the flight goes to Lukla or Kathmandu.
            </p>
          </div>

          {/* Cost table */}
          <div className="mt-8 w-full overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse font-manrope text-left">
              <thead>
                <tr className="bg-[#003366] text-white">
                  <th className="border-r border-white/15 px-4 py-[10px] text-[9px] font-semibold uppercase leading-[14px] tracking-[1.4px]">
                    Evacuation Point
                  </th>

                  <th className="px-4 py-[10px] text-right text-[9px] font-semibold uppercase leading-[14px] tracking-[1.4px]">
                    Estimated Cost Range
                  </th>
                </tr>
              </thead>

              <tbody>
                {pickupCosts.map((item) => (
                  <tr
                    key={item.point}
                    className="border-b border-[#003366]/10 bg-transparent"
                  >
                    <td className="border-x border-[#003366]/10 px-4 py-[9px] font-manrope text-[14px] font-normal leading-[16px] text-[#003366]">
                      {item.point}
                    </td>

                    <td className="border-r border-[#003366]/10 px-4 py-[9px] text-right font-manrope text-[14px] font-medium leading-[16px] text-[#003366]">
                      {item.cost}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* What the cost covers */}
      <div className="bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-[125px]">
          <p className="font-manrope text-[9px] font-bold uppercase leading-[14px] tracking-[2px] text-[#B87800]">
            — What&apos;s Covered
          </p>

          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-0">
            <div className="lg:pr-12">

          <h2 className=" font-fraunces text-[26px] font-semibold leading-[32px] tracking-[-0.4px] text-[#003366]">
            What is Included in the Rescue Cost?
          </h2>
              <ul className="mt-5 space-y-[7px]">
   
                {includedItems.map((item) => (
                  <IncludedItem key={item}>{item}</IncludedItem>
                ))}
              </ul>
            </div>

            <div className="border-t border-[#F2B632]/45 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              <h3 className="font-fraunces text-[26px] font-semibold leading-[32px] tracking-[-0.4px] text-[#003366]">
                What is not included in the rescue cost?
              </h3>

              <ul className="mt-5 space-y-[7px]">
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