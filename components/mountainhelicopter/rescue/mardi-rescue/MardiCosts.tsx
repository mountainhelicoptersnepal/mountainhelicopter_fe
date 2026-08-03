// src/components/rescue/mardi/MardiCosts.jsx

const costFactors = [
  {
    title: "Insurance Coverage",
    description:
      "Insured rescues may require policy verification, case approval, a payment guarantee, medical documentation, or authorization from the assistance company before dispatch.",
  },
  {
    title: "Distance from Pokhara",
    description:
      "Flight time from Pokhara or another available staging point affects fuel use, aircraft operating time, crew coordination, and the final rescue cost.",
  },
  {
    title: "Landing Difficulty",
    description:
      "Narrow ridges, uneven terrain, exposed slopes, limited approach paths, and restricted landing zones may require additional assessment or relocation to a safer pickup point.",
  },
  {
    title: "Weather Delays",
    description:
      "Cloud, strong wind, poor visibility, rain, or repeated landing attempts can increase waiting time and affect the overall mission cost.",
  },
  {
    title: "Waiting Time on the Ground",
    description:
      "If the aircraft must remain on the ground while the patient is stabilized, moved to the landing area, or prepared for transport, additional operating time may apply.",
  },
  {
    title: "Medical Staff on Board",
    description:
      "A medic, additional crew member, stretcher configuration, oxygen support, or special cabin preparation may change the rescue logistics and pricing.",
  },
  {
    title: "Private vs. Shared Evacuation",
    description:
      "A shared evacuation may reduce the total cost when medically appropriate and operationally safe. Critical cases should not be delayed while waiting for a shared flight.",
  },
];

function CostFactorCard({ title, description, index }) {
  return (
    <article className="group relative overflow-hidden border border-[#d2d5d4] bg-white px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#d99a19] hover:shadow-[0_18px_40px_rgba(7,24,37,0.11)] sm:px-6">
      <span className="absolute left-0 top-0 h-[3px] w-0 bg-[#f2a10d] transition-all duration-300 group-hover:w-full" />

      <div className="flex items-start gap-4">
        <span className="mt-[3px] flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#b77900] font-manrope text-[8px] font-bold text-[#9b6b00] transition-all duration-300 group-hover:bg-[#b77900] group-hover:text-white">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div>
          <h3 className="font-fraunces text-[17px] font-semibold leading-[1.2] text-[#071825] transition-colors duration-300 group-hover:text-[#9b6b00]">
            {title}
          </h3>

          <p className="mt-3 font-manrope text-[10px] leading-[1.75] text-[#4d5963] sm:text-[11px]">
            {description}
          </p>
        </div>
      </div>

      <span className="mt-5 block h-px w-10 bg-[#d8d9d7] transition-all duration-300 group-hover:w-full group-hover:bg-[#d99a19]" />
    </article>
  );
}

export default function MardiCosts() {
  return (
    <section
      id="costs"
      className="scroll-mt-[123px] bg-[#f6f3ed] px-5 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-[80px] 2xl:px-[125px]"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="max-w-[1080px]">
          <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#a66e00]">
            — What Drives the Cost
          </p>

          <h2 className="mt-4 font-fraunces text-[40px] font-semibold uppercase leading-[1.03] tracking-[-0.03em] text-[#071825] sm:text-[50px] lg:text-[60px]">
            Cost of Mardi Helicopter Rescue
          </h2>

          <p className="mt-5 max-w-[800px] font-manrope text-[11px] leading-[1.8] text-[#4d5963] sm:text-[12px]">
            Exact pricing varies from one rescue flight to another. Rather than
            publishing a fixed amount that may not match your situation, the
            factors below explain what usually determines the final rescue cost.
          </p>
        </div>

        <div className="mt-9">
          <h3 className="font-manrope text-[10px] font-bold uppercase tracking-[0.22em] text-[#263746]">
            Main Factors Affecting Cost
          </h3>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {costFactors.map((factor, index) => (
              <CostFactorCard
                key={factor.title}
                {...factor}
                index={index}
              />
            ))}
          </div>

          <div className="mt-6 max-w-[900px] border-l border-[#d7a03d] bg-[#f1eee7] px-5 py-4">
            <p className="font-manrope text-[10px] leading-[1.75] text-[#5b6872] sm:text-[11px]">
              Most insurers may cover either a private or shared evacuation,
              depending on the policy. A patient with suspected HAPE, HACE,
              severe trauma, breathing difficulty, altered consciousness, or
              another critical condition should not wait for a shared flight to
              become available.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}