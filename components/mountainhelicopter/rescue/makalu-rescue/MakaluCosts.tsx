// src/components/rescue/makalu/MakaluCosts.jsx

const costFactors = [
  {
    factor: "Rescue location",
    reason:
      "Makalu Base Camp, Langmale Kharka, Yangle Kharka, Dobate, Shipton La and other remote Makalu-Barun locations have different flight and landing requirements.",
  },
  {
    factor: "Distance from base",
    reason:
      "Long flight time from Kathmandu or another staging point increases fuel use, aircraft operating time and overall mission cost.",
  },
  {
    factor: "Landing difficulty",
    reason:
      "Rocky terrain, steep ridges, narrow valleys and restricted landing areas may require extra assessment, repositioning or transfer to a safer pickup point.",
  },
  {
    factor: "Weather delays",
    reason:
      "Cloud, wind, rain, snowfall, poor visibility or repeated landing attempts can increase waiting time and affect the final rescue cost.",
  },
  {
    factor: "Patient condition",
    reason:
      "Oxygen, stretcher configuration, medical support, additional crew or special cabin preparation can change the rescue logistics and pricing.",
  },
  {
    factor: "Insurance approval",
    reason:
      "Some insured cases require a written guarantee, case reference, medical note, guide report or authorization before dispatch.",
  },
  {
    factor: "Private vs. shared evacuation",
    reason:
      "Shared evacuation may reduce the cost when it is medically appropriate and operationally safe, although shared flights are less common in remote Makalu areas.",
  },
  {
    factor: "Passenger count",
    reason:
      "Passenger weight and total payload affect high-altitude aircraft performance and may require reduced load or additional shuttle flights.",
  },
  {
    factor: "Documentation needs",
    reason:
      "Insurance paperwork, flight logs, rescue invoices and post-rescue records may require additional administrative coordination.",
  },
];

export default function MakaluCosts() {
  return (
    <section
      id="costs"
      className="scroll-mt-[123px] bg-[#f6f3ed] px-5 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-[80px] 2xl:px-[125px]"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="max-w-[1120px]">
          <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#a66e00]">
            — What Drives the Cost
          </p>

          <h2 className="mt-4 max-w-[1120px] font-fraunces text-[40px] font-semibold uppercase leading-[1.03] tracking-[-0.03em] text-[#071825] sm:text-[50px] lg:text-[60px]">
            Cost of Makalu Base Camp Helicopter Rescue
          </h2>

          <p className="mt-5 max-w-[800px] font-manrope text-[11px] leading-[1.8] text-[#4d5963] sm:text-[12px]">
            Exact pricing varies from one rescue flight to another. Rather than
            publishing a fixed amount that may not match your case, the factors
            below explain what usually determines the final rescue cost.
          </p>
        </div>

        <div className="mt-9">
          <h3 className="font-manrope text-[10px] font-bold uppercase tracking-[0.22em] text-[#263746]">
            Main Factors Affecting Cost
          </h3>

          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[780px] border-collapse font-manrope text-left">
              <thead>
                <tr className="bg-[#061523] text-white">
                  <th className="w-[22%] border-r border-white/10 px-4 py-3 text-[9px] font-bold uppercase tracking-[0.18em]">
                    Cost Factor
                  </th>

                  <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-[0.18em]">
                    Why It Matters
                  </th>
                </tr>
              </thead>

              <tbody>
                {costFactors.map((item) => (
                  <tr
                    key={item.factor}
                    className="group border-b border-[#d5d7d6] bg-[#f9f7f2] transition-all duration-300 hover:bg-[#f2eee5]"
                  >
                    <td className="border-x border-[#d5d7d6] px-4 py-3 align-top font-manrope text-[10px] font-semibold text-[#071825] transition-colors duration-300 group-hover:text-[#9b6b00] sm:text-[11px]">
                      {item.factor}
                    </td>

                    <td className="border-r border-[#d5d7d6] px-4 py-3 font-manrope text-[10px] leading-[1.7] text-[#4d5963] transition-colors duration-300 group-hover:text-[#34434f] sm:text-[11px]">
                      {item.reason}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-5 max-w-[860px] border-l border-[#d7a03d] bg-[#f1eee7] px-5 py-4">
            <p className="font-manrope text-[10px] leading-[1.75] text-[#5b6872] sm:text-[11px]">
              Share the patient&apos;s exact location, altitude, condition,
              landing access, number of passengers and insurance details first.
              Our dispatch team can then confirm the likely rescue requirements
              and pricing structure before launch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}