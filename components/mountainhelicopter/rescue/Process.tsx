const processSteps = [
  {
    number: "01",
    title: "Emergency Call",
    duration: "Typical duration: 3–5 min",
    description:
      "Caller — patient, guide, expedition leader, agency, or insurance assistance company — reaches MHN dispatch. We collect patient name, condition, current location and altitude, nationality, insurance details, and emergency contact.",
    extra:
      "If unable to reach us by phone: WhatsApp, satellite phone via inReach network, or email. Every incoming channel routes to the same dispatch officer.",
  },
  {
    number: "02",
    title: "Location & Weather Verification",
    duration: "Typical duration: 5–10 min",
    description:
      "Location is confirmed by GPS coordinates, village name, lodge name, established helipad, trail waypoint, or expedition camp identifier. Local weather is cross-checked with our regional Sherpa network and CAAN weather services.",
  },
  {
    number: "03",
    title: "Insurance or Payment Coordination",
    duration: "Typical duration: 10–20 min",
    description:
      "For insured patients: policy details and assistance company contact are confirmed. Some insurance providers require payment guarantee, case number, doctor’s note, or rescue approval before dispatch. Our dispatch officer coordinates this in parallel with helicopter preparation.",
    extra:
      "For uninsured patients: direct payment guarantee arranged. Cost estimate provided upfront. See our Rescue Costs section for typical figures.",
  },
  {
    number: "04",
    title: "Helicopter Dispatch",
    duration: "Typical duration: 15–45 min from confirmed authorization",
    description:
      "Aircraft dispatched considering weather window, route altitude, aircraft availability, and pilot decision. For high-altitude rescues, the final safety call is always the pilot’s. No aircraft launches into unsafe conditions.",
    flightTimes: [
      ["Namche Bazaar", "55 minutes"],
      ["Pheriche", "65 minutes"],
      ["GorakShep / EBC", "75 minutes"],
      ["Annapurna region", "80 minutes (via Pokhara staging)"],
      ["Muktinath", "90 minutes (via Pokhara staging)"],
    ],
  },
  {
    number: "05",
    title: "Patient Pickup & Evacuation",
    duration: "On-scene time: 5–15 min",
    description:
      "Patient collected from safest available pickup point. Where no direct landing site exists, patient may be moved to nearest secure helipad, open field, ridge, or lodge site. Onboard oxygen and medical kit available throughout. Patient transferred to Lukla, Kathmandu, or specific hospital based on medical assessment.",
  },
  {
    number: "06",
    title: "Documentation & Insurance Handover",
    duration: "Provided within 24–48 hours post evacuation",
    description:
      "Complete documentation package prepared for insurance claims: flight log, dispatch timeline, altitude, route, altitude profile, rescue invoice, patient details, GPS coordinates of pickup, medical crew report if applicable. Ground liaison officer available for hospital admission coordination, visa extension assistance, and accommodation arrangements for accompanying family.",
  },
];

const responseRows = [
  {
    region: "Everest region",
    typical: "1h 30m",
    bestCase: "1h 15m",
    extension: "Up to 6h if morning window closed",
  },
  {
    region: "Annapurna region",
    typical: "1h 15m",
    bestCase: "1h",
    extension: "Up to 4h if valley cloud persists",
  },
  {
    region: "Langtang",
    typical: "1h 15m",
    bestCase: "1h",
    extension: "Up to 5h if ridge weather",
  },
  {
    region: "Mustang / Muktinath",
    typical: "1h 45m",
    bestCase: "1h 30m",
    extension: "Up to 6h in monsoon",
  },
  {
    region: "Gokyo",
    typical: "1h 45m",
    bestCase: "1h 30m",
    extension: "Up to 6h if pass conditions",
  },
  {
    region: "Tilicho",
    typical: "2h",
    bestCase: "1h 45m",
    extension: "Up to 8h if approach closed",
  },
  {
    region: "Makalu region",
    typical: "2h 15m",
    bestCase: "2h",
    extension: "Up to 8h — remote staging required",
  },
];

const responseFactors = [
  {
    title: "Weather",
    description:
      "Flying window limited to morning hours in most seasons. Afternoon buildup, monsoon cloud, and winter storms delay dispatch until safe.",
  },
  {
    title: "Insurance Clearance",
    description:
      "Cases requiring insurance authorization may add 15–60 min if the assistance company is slow to respond. Direct-payment cases dispatch fastest.",
  },
  {
    title: "Location Verification",
    description:
      "Remote pickup points without established helipads may require nearest-helipad transfer by ground before extraction.",
  },
  {
    title: "Regulatory Clearance",
    description:
      "CAAN flight clearance for high-altitude rescue routes is real-time in most cases, but can add minutes.",
  },
];

type ProcessStep = {
  number: string;
  title: string;
  duration: string;
  description: string;
  extra?: string;
  flightTimes?: string[][];
};

type ProcessCardProps = ProcessStep & {
  isLast: boolean;
};

function ProcessCard({
  number,
  title,
  duration,
  description,
  extra,
  flightTimes,
  isLast,
}: ProcessCardProps) {
  return (
    <div className="relative grid grid-cols-[48px_1fr] gap-4 sm:grid-cols-[64px_1fr] sm:gap-6">
      {/* Timeline column */}
      <div className="relative flex justify-center">
        {!isLast && (
          <span className="absolute left-1/2 top-[30px] h-[calc(100%+24px)] w-[2px] -translate-x-1/2 bg-[#F2B632]" />
        )}

        <span className="relative z-10 flex h-[16px] w-[16px] items-center justify-center rounded-full border border-[#F2B632] bg-[#F5F3EE] font-manrope text-[11px] font-bold text-[#0B416F]  sm:h-9 sm:w-9 sm:text-[11px]">
          {number}
        </span>
      </div>

      {/* Content card */}
      <article className=" mb-[27px] min-h-[235px] w-full max-w-[930px] rounded-[22px] border border-white/[0.16] bg-[#032549]/[0.78] px-[36px] py-[30px] shadow-[0_16px_38px_rgba(0,0,0,0.22)] backdrop-blur-[10px] ">
        <div className="mb-3">
          <span className="mb-2 block h-px w-6 bg-[#F5F7F9]" />

          <h3 className="font-fraunces text-[16px] font-semibold uppercase leading-[1.15] tracking-[-0.2px] text-white sm:text-[20px]">
            {title}
          </h3>

          <p className="mt-2 font-manrope text-[7px] font-semibold uppercase leading-[1.5] tracking-[0.16em] text-[#F2B632] sm:text-[11px]">
            {duration}
          </p>
        </div>

        <div className="font-manrope text-[14px] font-normal leading-[1.65] text-white/75 sm:text-[14px]">
          <p>{description}</p>

          {extra && <p className="mt-3">{extra}</p>}

          {flightTimes && (
            <div className=" mt-5 w-full max-w-[1058px] rounded-[12px] border border-white/[0.16] bg-white/[0.09] px-[18px] py-[16px] ">
              <p className="mb-3 font-manrope text-[7px] font-semibold uppercase tracking-[0.15em] text-[#F2B632] sm:text-[8px]">
                Typical flight time from staging
              </p>

              <div className="space-y-1.5">
                {flightTimes.map(([place, time]) => (
                  <div
                    key={place}
                    className="grid grid-cols-[1fr_auto] gap-4 border-b border-white/5 pb-1.5 last:border-b-0 last:pb-0"
                  >
                    <span className="text-white/70">{place}</span>

                    <span className="text-right font-semibold text-white">
                      {time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </div>
  );
}

export default function Process() {
  return (
    <>
      {/* Process timeline */}
      <section
        id="process"
        className="relative scroll-mt-[125px] overflow-hidden bg-[#063B69]"
      >
        {/* Background mountain image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/rescue/regions/makalu.jpg')",
          }}
        />

        {/* Blue image overlays */}
        <div className="absolute inset-0 bg-[#003366]/[0.86]" />

        <div className="absolute inset-0 bg-gradient-to-b from-[#003366]/20 via-transparent to-[#003366]/35" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16 md:px-12 md:py-24 lg:px-16 lg:py-28">
          {/* Heading */}
          <div className="mx-auto max-w-[650px] text-center">
            <p className="font-manrope text-[12px] font-semibold uppercase tracking-[2.4px] text-[#F2B632]">
              — Our Process
            </p>

            <h2 className="mt-3 font-fraunces text-[36px] font-semibold leading-[1.02] tracking-[-1px] text-[#ffffff] sm:text-[44px] lg:text-[53px]">
              From call to hospital,
              <span className="mt-1 block text-[#F2B632]">step by step.</span>
            </h2>

            <p className="mx-auto mt-4 max-w-[500px] font-manrope text-[16px] leading-[1.6] text-[#F0F7FC] sm:text-[16px]">
              A clear, coordinated journey from your first call to hospital
              transfer.
            </p>
          </div>

          {/* Vertical timeline */}
          <div className="mt-10 sm:mt-12">
            {processSteps.map((step, index) => (
              <ProcessCard
                key={step.number}
                {...step}
                isLast={index === processSteps.length - 1}
              />
            ))}
          </div>

          <p className="mt-2 text-center font-manrope text-[14px] leading-[1.6] text-white/55">
            <span className="mr-3 inline-block h-[16px] w-[16px] rounded-full bg-[#F2B632]" />
            MHN dispatch stays connected throughout each stage of the rescue.
          </p>
        </div>
      </section>


<section id="response-time" className="bg-[#FFFFFF]">
  <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-12 md:py-24 lg:px-16 lg:py-28">
    {/* Section label */}
    <p className="font-manrope text-[11px] font-semibold uppercase leading-none tracking-[1.98px] text-[#B87800]">
      — Response Time
    </p>

    {/* Main heading */}
    <h2 className="mt-[20px] max-w-[897px] font-fraunces text-[36px] font-semibold leading-[1.06] tracking-[-0.8px] text-[#003366] sm:text-[44px] lg:text-[47.2px] lg:leading-[54.27px] lg:tracking-[-1.02px]">
     Helicopter rescue response times by region:{" "}
      <span className="font-black italic text-[#003366]">
        call to extraction.
      </span>
    </h2>

    {/* Table and response factors */}
    <div className="mt-[40px] grid items-start gap-10 lg:grid-cols-[minmax(0,1.55fr)_minmax(300px,0.9fr)] lg:gap-[46px]">
      {/* Response table */}
      <div className="min-w-0 overflow-x-auto">
        <table className="w-full min-w-[680px] border-collapse font-manrope text-left">
          <thead>
            <tr className="bg-[#F5F7F9] text-white">
              <th className="border-r border-white/10 px-[16px] py-[12px] text-[12px] font-semibold uppercase leading-[1.4] tracking-[0.12em]">
                Region
              </th>

              <th className="w-[112px] border-r border-white/10 px-[16px] py-[12px] text-[12px] font-semibold uppercase leading-[1.4] tracking-[0.12em]">
                Typical
              </th>

              <th className="w-[112px] border-r border-white/10 px-[16px] py-[12px] text-[12px] font-semibold uppercase leading-[1.4] tracking-[0.12em]">
                Best Case
              </th>

              <th className="w-[285px] px-[16px] py-[12px] text-[12px] font-semibold uppercase leading-[1.4] tracking-[0.12em]">
                Weather-Dependent Extension
              </th>
            </tr>
          </thead>

          <tbody>
            {responseRows.map((row) => (
              <tr
                key={row.region}
                className="border-b border-[#DCE3E9] bg-white"
              >
                <td className="border-x border-[#DCE3E9] px-[16px] py-[13px] font-manrope text-[14px] font-medium leading-[1.45] text-[#164C79]">
                  {row.region}
                </td>

                <td className="border-r border-[#DCE3E9] px-[16px] py-[13px] font-manrope text-[14px] font-medium leading-[1.45] text-[#164C79]">
                  {row.typical}
                </td>

                <td className="border-r border-[#DCE3E9] px-[16px] py-[13px] font-manrope text-[14px] font-normal leading-[1.45] text-[#41596C]">
                  {row.bestCase}
                </td>

                <td className="border-r border-[#DCE3E9] px-[16px] py-[13px] font-manrope text-[14px] font-normal leading-[1.45] text-[#41596C]">
                  {row.extension}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* What affects response time */}
      <aside className="border-l border-[#D7A43E] pl-[28px] sm:pl-[32px]">
        <h3 className="font-manrope text-[14px] font-semibold uppercase leading-[1.5] tracking-[0.16em] text-[#28557C]">
          What Affects Response Time
        </h3>

        <div className="mt-[22px] flex flex-col gap-[22px]">
          {responseFactors.map((factor) => (
            <div key={factor.title}>
              <h4 className="font-manrope text-[14px] font-semibold uppercase leading-[1.5] tracking-[0.13em] text-[#C28218]">
                {factor.title}
              </h4>

              <p className="mt-[7px] max-w-[425px] font-manrope text-[14px] font-normal leading-[22.75px] tracking-0 text-[#0A1929]/80">
                {factor.description}
              </p>
            </div>
          ))}
        </div>
      </aside>
    </div>
  </div>
</section>

    </>
  );
}
