const rescueCosts = [
  {
    point: "Namche Bazaar",
    typical: "USD 3,000",
    range: "2,500 – 4,000",
  },
  {
    point: "Lukla",
    typical: "USD 2,800",
    range: "2,300 – 3,800",
  },
  {
    point: "Dingboche",
    typical: "USD 4,000",
    range: "3,000 – 5,000",
  },
  {
    point: "Pheriche",
    typical: "USD 4,000",
    range: "3,000 – 5,000",
  },
  {
    point: "Lobuche",
    typical: "USD 5,000",
    range: "3,500 – 6,000",
  },
  {
    point: "GorakShep",
    typical: "USD 6,000",
    range: "4,000 – 8,000",
  },
  {
    point: "Everest Base Camp",
    typical: "USD 6,000",
    range: "4,000 – 8,000+",
  },
  {
    point: "Kala Patthar Area",
    typical: "USD 6,500",
    range: "5,000 – 8,500+",
  },
  {
    point: "Annapurna Base Camp",
    typical: "USD 3,500",
    range: "3,000 – 5,000",
  },
  {
    point: "Machhapuchhre Base Camp",
    typical: "USD 3,500",
    range: "3,000 – 5,000",
  },
  {
    point: "Ghorepani Area",
    typical: "USD 3,000",
    range: "2,500 – 4,000",
  },
  {
    point: "Langtang Valley",
    typical: "USD 3,500",
    range: "3,000 – 5,000",
  },
  {
    point: "Kyanjin Gompa",
    typical: "USD 4,000",
    range: "3,500 – 5,500",
  },
  {
    point: "Muktinath",
    typical: "USD 4,000",
    range: "3,500 – 6,000",
  },
  {
    point: "Jomsom",
    typical: "USD 3,500",
    range: "3,000 – 5,000",
  },
  {
    point: "Gokyo Valley",
    typical: "USD 5,000",
    range: "4,000 – 7,000",
  },
  {
    point: "Tilicho Base Camp",
    typical: "USD 5,500",
    range: "4,500 – 7,500",
  },
  {
    point: "Mardi Himal",
    typical: "USD 3,000",
    range: "2,500 – 4,500",
  },
  {
    point: "Makalu Base Camp",
    typical: "USD 8,000",
    range: "6,000 – 12,000+",
  },
];

const costFactors = [
  "Multiple aircraft required for relay patient, technical rescue, or difficult terrain",
  "Extended search required due to an imprecise pickup location",
  "Weather-related re-attempts",
  "Multiple-leg routing where direct Kathmandu transfer is not possible",
  "Direct hospital transfer requested",
];

const includedItems = [
  "Helicopter flight from staging point to pickup and back",
  "Basic patient cabin configuration",
  "Onboard oxygen supply",
  "CAAN flight coordination",
  "Landing fees and airport charges",
  "Helipad-to-hospital ambulance handover",
  "Dispatch coordination officer",
  "Documentation package for insurance",
  "Ground liaison officer for hospital coordination",
  "Multi-language dispatch support",
];

const excludedItems = [
  "Hospital admission and treatment costs",
  "Medical evacuation to another country",
  "Hotel and meals during recovery",
  "Insurance excess or deductible",
  "International flights home",
  "Cost of replacing lost or abandoned gear",
  "Family accommodation during hospitalization",
  "Guide costs for evacuation or replacement",
  "Trip cancellation refund",
];

function CheckIcon() {
  return (
    <span
      aria-hidden="true"
      className="mt-[2px] shrink-0 font-manrope text-[12px] font-bold text-[#4D8A6D]"
    >
      ✓
    </span>
  );
}

function CrossIcon() {
  return (
    <span
      aria-hidden="true"
      className="mt-[2px] shrink-0 font-manrope text-[12px] font-bold text-[#7B8791]"
    >
      ×
    </span>
  );
}

export default function Costs() {
  return (
    <section
      id="costs"
      className="scroll-mt-[125px] bg-[#F5F7F9]"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-12 md:py-24 lg:px-16 lg:py-28">
        {/* Rescue cost heading */}
        <div className="max-w-[900px]">
          <p className="font-manrope text-[11px] font-bold uppercase tracking-[0.22em] text-[#A66E00]">
            — Rescue Costs
          </p>

          <h2 className="mt-3 font-fraunces text-[38px] font-semibold leading-[1.06] tracking-[-0.8px] text-[#003366] sm:text-[44px] lg:text-[51.2px] lg:leading-[54.27px] lg:tracking-[-1.02px]">
             Cost of Helicopter Rescue
          </h2>

          <p className="mt-4 max-w-[900px] font-manrope text-[15px] font-normal leading-[24px] tracking-0 text-[#44515C] sm:text-[16px] sm:leading-[26px] lg:text-[17px] lg:leading-[27.63px]">
            Helicopter rescue cost depends on pickup location, altitude,
            distance, flight route, weather delay, aircraft positioning,
            landing difficulty, patient condition, and destination. The ranges
            below are typical for direct extraction to Kathmandu. Exact quotes
            are provided at the time of dispatch.
          </p>
        </div>


        {/* Cost factors */}
        <div className="mt-10">
          <h3 className="font-manrope text-[11px] font-bold uppercase tracking-[0.2em] text-[#53616D]">
            Factors That Increase Cost
          </h3>

          <ul className="mt-5 space-y-3">
            {costFactors.map((factor) => (
              <li
                key={factor}
                className="flex items-start gap-3 font-manrope text-[15px] font-normal leading-[24px] tracking-0 text-[#495660] sm:text-[16px] sm:leading-[26px] lg:text-[17px] lg:leading-[27.63px]"
              >
                <span className="mt-[11px] h-[4px] w-[4px] shrink-0 rounded-full bg-[#BD7900]" />
                <span>{factor}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Included section */}
        <div className="mt-12 md:mt-16">
          <p className="font-manrope text-[10px] font-bold uppercase tracking-[0.22em] text-[#A66E00]">
            — What&apos;s Included
          </p>

          <h2 className="mt-3 font-fraunces text-[38px] font-semibold leading-[1.06] tracking-[-0.8px] text-[#071825] sm:text-[44px] lg:text-[51.2px] lg:leading-[54.27px] lg:tracking-[-1.02px]">
            What the rescue cost covers.
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            {/* Included */}
            <div>
              <h3 className="font-manrope text-[12px] font-bold uppercase tracking-[0.2em] text-[#53616D]">
                Included
              </h3>

              <ul className="mt-5 space-y-3">
                {includedItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 font-manrope text-[15px] font-normal leading-[24px] tracking-0 text-[#495660] sm:text-[16px] sm:leading-[26px] lg:text-[17px] lg:leading-[27.63px]"
                  >
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not included */}
            <div className="border-t border-[#D5A34A] pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <h3 className="font-manrope text-[12px] font-bold uppercase tracking-[0.2em] text-[#53616D]">
                Not Included
              </h3>

              <ul className="mt-5 space-y-3">
                {excludedItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 font-manrope text-[15px] font-normal leading-[24px] tracking-0 text-[#66727C] sm:text-[16px] sm:leading-[26px] lg:text-[17px] lg:leading-[27.63px]"
                  >
                    <CrossIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
