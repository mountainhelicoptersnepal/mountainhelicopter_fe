import { CheckCircle2, XCircle } from "lucide-react";

const costFactors = [
  {
    factor: "Rescue location",
    reason:
      "Flight requirements vary by rescue location, including Annapurna Base Camp, Thorong La Pass, Tilicho Lake, Mardi Himal, Manang and other remote areas.",
  },
  {
    factor: "Distance from base",
    reason:
      "Longer flight time from Pokhara or Kathmandu increases fuel use, crew time and aircraft operating costs.",
  },
  {
    factor: "Landing difficulty",
    reason:
      "Restricted landing zones, uneven terrain, steep slopes and confined helipads may require additional planning, repositioning or shuttle operations.",
  },
  {
    factor: "Weather delays",
    reason:
      "Waiting time, repeated attempts or route changes caused by cloud, wind, rain or poor visibility can affect the final rescue cost.",
  },
  {
    factor: "Patient condition",
    reason:
      "Oxygen, stretcher requirements, medical support and additional crew may change the operational requirements and final price.",
  },
  {
    factor: "Insurance approval",
    reason:
      "Some serious rescue cases require insurance paperwork, authorization or a payment guarantee before helicopter dispatch.",
  },
  {
    factor: "Private vs shared evacuation",
    reason:
      "Shared evacuation may reduce the cost when operationally possible, while a private evacuation is dedicated entirely to one rescue case.",
  },
  {
    factor: "Passenger count",
    reason:
      "Passenger weight affects aircraft performance at altitude and may require reduced payload, shuttle flights or separate aircraft movements.",
  },
  {
    factor: "Documentation needs",
    reason:
      "Insurance, hospital and post-rescue documentation may require additional coordination and case processing.",
  },
];

const includedItems = [
  "Helicopter flight from the staging point to the rescue location and back",
  "Basic cabin setup for transporting the patient",
  "Basic oxygen onboard the helicopter",
  "Coordination with the Civil Aviation Authority of Nepal",
  "Landing charges and airport handling fees",
  "Patient transfer from the helipad to the entrance of the hospital",
];

const excludedItems = [
  "Hospital admission fees and medical treatment costs",
  "International medical evacuation to the patient’s home country",
  "Hotel accommodation and meals during the recovery period",
  "Insurance excess or deductible payments",
  "Commercial flight tickets from Kathmandu to the patient’s home country",
  "Replacement costs for lost or abandoned trekking equipment",
];

export default function AnnapurnaCosts() {
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
            Cost of Annapurna{" "}
            <span className="italic">Helicopter Rescue.</span>
          </h2>

          <p className="mt-5 max-w-[790px] font-manrope text-sm leading-7 text-[#4d5963] md:text-base md:leading-8">
            Exact pricing varies from one rescue flight to another. Rather than
            listing a fixed figure that may not match your situation, the
            factors below explain what usually determines the final cost.
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
                  <th className="w-[23%] border-r border-white/10 px-5 py-4 text-xs font-bold uppercase tracking-[0.16em]">
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
            Share the exact rescue location, altitude, patient condition and
            preferred hospital destination with our dispatch team. We will
            verify the operational requirements and explain the likely pricing
            structure before launch.
          </p>
        </div>
      </div>
    </section>
  );
}