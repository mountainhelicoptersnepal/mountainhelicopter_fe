const includedItems = [
  "Helicopter flight from staging point to rescue location and back",
  "Basic cabin set-up for transporting patients",
  "Basic oxygen on board the helicopter",
  "Coordination with CAAN",
  "Landing cost and charges at airports",
  "Transfer from helipad to entrance of the hospital",
];

const excludedItems = [
  "Hospital admission and treatment costs",
  "Medical evacuation to home country",
  "Hotel and meals in Kathmandu during recovery",
  "Insurance excess or deductible",
  "Flight cost from Kathmandu to home country",
  "Cost of replacing lost or abandoned trekking gear",
];

function IncludedItem({ children }) {
  return (
    <li className="flex items-start gap-4">
      <span className="mt-0.5 shrink-0 font-manrope text-lg font-bold leading-none text-[#0062B1]">
        ✓
      </span>

      <span className="font-manrope text-[15px] font-normal leading-[22.5px] tracking-normal text-[#092d53]">
        {children}
      </span>
    </li>
  );
}

function ExcludedItem({ children }) {
  return (
    <li className="flex items-start gap-4">
      <span className="mt-0.5 shrink-0 font-manrope text-xl font-bold leading-none text-[#0062B1]">
        ×
      </span>

      <span className="font-manrope text-[15px] font-normal leading-[22.5px] tracking-normal text-[#092d53]">
        {children}
      </span>
    </li>
  );
}

export default function AnnapurnaWhatsCovered() {
  return (
    <section
      id="whats-covered"
      className="scroll-mt-[133px] bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-[80px] 2xl:px-[125px]"
    >
      <div className="mx-auto max-w-[1200px]">
        <div>
          <p className="flex items-center gap-3 font-manrope text-[11px] font-bold uppercase tracking-[0.22em] text-[#d89b1d]">
            <span className="h-px w-7 bg-[#d89b1d]" />
            What&apos;s Covered
          </p>

          <h2 className="mt-5 font-fraunces text-[40px] font-semibold leading-[1.06] tracking-[-0.8px] text-[#073763] sm:text-[46px] lg:text-[51.2px] lg:leading-[54.27px] lg:tracking-[-1.02px]">
            What the rescue cost covers.
          </h2>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-0">
          <div className="lg:pr-14">
            <h3 className="font-manrope text-[14px] font-medium uppercase leading-5 tracking-[2.24px] text-[#0062B1]">
              Included
            </h3>

            <ul className="mt-7 space-y-5">
              {includedItems.map((item) => (
                <IncludedItem key={item}>{item}</IncludedItem>
              ))}
            </ul>
          </div>

          <div className="border-t border-[#d89b1d] pt-10 lg:border-l lg:border-t-0 lg:pl-14 lg:pt-0">
            <h3 className="font-manrope text-[14px] font-medium uppercase leading-5 tracking-[2.24px] text-[#0062B1]">
              Not Included
            </h3>

            <ul className="mt-7 space-y-5">
              {excludedItems.map((item) => (
                <ExcludedItem key={item}>{item}</ExcludedItem>
              ))}
            </ul>
          </div>
        </div>

        {/* IMPORTANT NOTE */}
        <div className="mt-8 border-l-4 border-[#d89b1d] bg-white px-5 py-5 md:px-6">
          <p className="font-manrope text-sm leading-7 text-[#4d5963]">
            The final cost depends on the confirmed rescue location, aircraft
            staging point, weather, patient condition, required medical support
            and destination hospital. A verified quotation is provided by the
            dispatch team before the mission begins whenever circumstances
            allow.
          </p>
        </div>
      </div>
    </section>
  );
}
