const costFactors = [
  {
    factor: "Rescue location",
    reason:
      "Kyanjin Gompa, Gosaikunda, and remote side valleys have different flight requirements.",
  },
  {
    factor: "Distance from the dispatch base",
    reason:
      "Flight time and fuel use increase with distance.",
  },
  {
    factor: "Landing Difficulty",
    reason:
      "Complex landing zones may require additional assessment or approach time.",
  },
  {
    factor: "Weather Delays",
    reason:
      "Waiting time or repeated attempts can affect cost.",
  },
  {
    factor: "Patient condition",
    reason:
      "Oxygen, stretcher needs, or medical support can change logistics.",
  },
  {
    factor: "Insurance approval",
    reason:
      "Some cases need written guarantee before dispatch.",
  },
  {
    factor: "Private vs Shared Evacuation",
    reason:
      "Shared evacuation may reduce cost when safe and practical.",
  },
  {
    factor: "Passenger count",
    reason:
      "Weight affects high-altitude performance and flight planning.",
  },
  {
    factor: "Documentation needs",
    reason:
      "Insurance paperwork and post-rescue documents may require coordination.",
  },
];

export default function TilichoCosts() {
  return (
    <section
      id="cost"
      className="scroll-mt-[133px] bg-[#f5f7f9] px-5 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-[80px] 2xl:px-[125px]"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* HEADING */}
        <div className="max-w-[1120px]">
          <p className="flex items-center gap-3 font-manrope text-xs font-bold uppercase tracking-[0.22em] text-[#B87800]">
            <span className="h-px w-7 bg-[#b37705]" />
            Cost by Situation
          </p>

          <h2 className="mt-4 max-w-[1100px] font-fraunces text-4xl font-semibold leading-[1.03] tracking-[-0.03em] text-[#073763] sm:text-5xl lg:text-6xl">
            Cost of Tilicho{" "}
            <span className="italic">Helicopter Rescue.</span>
          </h2>

          <p className="mt-5 max-w-[790px] font-manrope text-sm leading-7 text-[#4d5963] md:text-base md:leading-8">
            Exact pricing varies flight to flight, so instead of listing numbers
            that may not match your situation, here is what actually drives the
            cost.
          </p>
        </div>

        {/* COST FACTORS */}
        <div className="mt-10">
          <h3 className="font-manrope text-xs font-bold uppercase tracking-[0.2em] text-[#163a5d]">
            Main Factors Affecting Cost
          </h3>

          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse font-manrope text-left">
              <thead>
                <tr className="bg-[#073763] text-white">
                  <th className="w-[35%] border-r border-white/10 px-5 py-4 text-xs font-bold uppercase tracking-[0.16em]">
                    Cost Factor
                  </th>

                  <th className="px-5 py-4 text-xs font-bold uppercase tracking-[0.16em]">
                    Why It Matters
                  </th>
                </tr>
              </thead>

              <tbody>
                {costFactors.map((item, index) => (
                  <tr
                    key={item.factor}
                    className={
                      index % 2 === 0 ? "bg-white" : "bg-[#f0f3f6]"
                    }
                  >
                    <td className="border border-[#d5dce3] px-5 py-4 align-top font-manrope text-sm font-semibold text-[#071825]">
                      {item.factor}
                    </td>

                    <td className="border border-[#d5dce3] px-5 py-4 font-manrope text-sm leading-7 text-[#4d5963]">
                      {item.reason}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-5 max-w-[920px] font-manrope text-sm leading-7 text-[#4d5963]">
            The safest approach is to share your location and patient condition
            first. Then the rescue team can confirm the possible cost structure.
          </p>
        </div>
      </div>
    </section>
  );
}