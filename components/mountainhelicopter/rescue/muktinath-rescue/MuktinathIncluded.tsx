const includedItems = [
  "Helicopter flight from the staging point to the rescue location and back",
  "Basic cabin setup for transporting patients",
  "Basic oxygen onboard the helicopter",
  "Coordination with CAAN",
  "Landing costs and airport charges",
  "Ambulance transfer from the helipad to the hospital entrance",
];

const excludedItems = [
  "Hospital admission and treatment costs",
  "Medical evacuation to the patient’s home country",
  "Hotels and meals in Kathmandu during the recovery period",
  "Insurance excess or deductible amounts",
  "Flight cost from Kathmandu to the patient’s home country",
  "Replacement cost for lost or abandoned trekking gear",
];

function IncludedItem({ children }) {
  return (
    <li className="flex items-start gap-3 font-manrope text-[11px] leading-[1.75] text-[#46545f] sm:text-[12px]">
      <span className="mt-[1px] shrink-0 font-manrope text-[14px] font-bold text-[#2f8b68]">
        ✓
      </span>

      <span>{children}</span>
    </li>
  );
}

function ExcludedItem({ children }) {
  return (
    <li className="flex items-start gap-3 font-manrope text-[11px] leading-[1.75] text-[#56626c] sm:text-[12px]">
      <span className="mt-[1px] shrink-0 font-manrope text-[14px] font-bold text-[#71808b]">
        ×
      </span>

      <span>{children}</span>
    </li>
  );
}

export default function MuktinathIncluded() {
  return (
    <section
      id="included"
      className="scroll-mt-[123px] bg-[#f6f3ed] px-5 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-[80px] 2xl:px-[125px]"
    >
      <div className="mx-auto max-w-[1440px]">
        <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#a66e00]">
          — What&apos;s Included
        </p>

        <h2 className="mt-4 font-fraunces text-[40px] font-semibold leading-[1.03] tracking-[-0.03em] text-[#071825] sm:text-[50px] lg:text-[60px]">
          What is Included in the Rescue Cost?
        </h2>

        <div className="mt-9 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h3 className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#2f8b68]">
              Included
            </h3>

            <ul className="mt-5 space-y-3">
              {includedItems.map((item) => (
                <IncludedItem key={item}>{item}</IncludedItem>
              ))}
            </ul>
          </div>

          <div className="border-t border-[#d7a03d] pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <h3 className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#647386]">
              Not Included
            </h3>

            <ul className="mt-5 space-y-3">
              {excludedItems.map((item) => (
                <ExcludedItem key={item}>{item}</ExcludedItem>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}