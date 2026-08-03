const cabinConfigurations = [
  {
    letter: "A",
    title: "Seated Patient",
    items: [
      "Standard passenger seating removed for stretcher access",
      "Patient in seated position with restraints",
      "Supplemental oxygen delivered through nasal cannula",
      "Companion or medic seated adjacent",
    ],
    patientPosition: "Seated, restrained",
    equipment: "Nasal cannula oxygen",
    use: "Altitude sickness, minor trauma",
  },
  {
    letter: "B",
    title: "Prone Patient",
    items: [
      "Reduced passenger seating with one to two seats remaining",
      "Patient on collapsible litter secured to floor rails",
      "Full oxygen delivery and IV pole capability",
      "Medic positioned beside patient with equipment",
    ],
    patientPosition: "Collapsible litter, floor-secured",
    equipment: "Full oxygen, IV pole capable",
    use: "Serious trauma, spinal precautions, acute HAPE/HACE",
  },
  {
    letter: "C",
    title: "Critical Patient",
    items: [
      "Full cabin conversion to stretcher configuration",
      "Patient monitoring equipment mounted where applicable",
      "Continuous oxygen and full medical support",
      "Direct hospital handover with physician coordination",
    ],
    patientPosition: "Full stretcher conversion",
    equipment: "Continuous oxygen, monitoring, full medic support",
    use: "Life-threatening conditions requiring active intervention",
  },
];

function BulletList({
  items,
  light = false,
}: {
  items: string[];
  light?: boolean;
}) {
  return (
    <ul className="space-y-[10px]">
      {items.map((item) => (
        <li
          key={item}
          className={`flex items-start gap-3 font-manrope text-[14px] font-normal leading-[22px] tracking-0 sm:text-[15px] sm:leading-[24px] ${
            light ? "text-white/75" : "text-[#46535E]"
          }`}
        >
          <span className="mt-[9px] h-[4px] w-[4px] shrink-0 rounded-full bg-[#F2B632]" />

          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Fleet() {
  return (
    <section
      id="fleet"
      className="scroll-mt-[125px] bg-[#F6F3ED]"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-12 md:py-24 lg:px-16 lg:py-28">
        {/* Cabin configuration */}
        <div>
          <p className="font-manrope text-[9px] font-semibold uppercase leading-none tracking-[0.18em] text-[#F2B632]">
            — Cabin Configuration
          </p>

          <h2 className="mt-[18px] max-w-[1000px] font-fraunces text-[38px] font-semibold leading-[1.06] tracking-[-0.8px] text-[#003366] sm:text-[44px] lg:text-[51.2px] lg:leading-[54.27px] lg:tracking-[-1.02px]">
            Helicopter cabin configuration: how the aircraft is set up for
            evacuation
          </h2>

          <p className="mt-[20px] max-w-[850px] font-manrope text-[15px] font-normal leading-[24px] tracking-0 text-[#4C5963] sm:text-[16px] sm:leading-[26px] lg:text-[17px] lg:leading-[27.63px]">
            Rescue aircraft are configured before dispatch based on patient
            condition. The AS 350 B3e cabin allows for one of three
            configurations.
          </p>

          <div className="mt-[40px] grid gap-5 lg:grid-cols-3">
            {cabinConfigurations.map((configuration) => (
              <article
                key={configuration.letter}
                className="flex h-full flex-col border border-[#CFD3D5] bg-white px-6 py-7"
              >
                <div className="flex items-center gap-4">
                  <span className="font-fraunces text-[36px] font-bold leading-none tracking-[-0.5px] text-[#B87800] sm:text-[29px] sm:leading-[34px]">
                    {configuration.letter}
                  </span>

                  <h3 className="font-manrope text-[11px] font-semibold uppercase leading-[17px] tracking-[0.16em] text-[#24333E] sm:text-[12px]">
                    {configuration.title}
                  </h3>
                </div>

                <div className="mt-[24px]">
                  <BulletList items={configuration.items} />
                </div>

                <div className="mt-auto pt-[24px]">
                  <div className="border-t border-[#D7D9D9] pt-[16px]">
                    <p className="font-manrope text-[9px] font-semibold uppercase leading-[16px] tracking-[0.14em] text-[#87929B] sm:text-[10px]">
                      Used for: {configuration.use}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Configuration comparison */}
          <div className="mt-12 md:mt-16">
            <h3 className="font-manrope text-[11px] font-bold uppercase leading-[17px] tracking-[0.14em] text-[#173D70] sm:text-[12px]">
              Configuration Comparison
            </h3>

            <p className="mt-4 font-manrope text-[14px] font-normal leading-[22px] text-[#687580] sm:text-[15px] sm:leading-[24px]">
              Quick comparison of the three cabin configurations, patient
              position, and typical use case.
            </p>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[800px] border-collapse font-manrope">
                <thead>
                  <tr className="bg-[#003366] text-left">
                    <th className="w-[14%] px-4 py-3 text-[9px] font-semibold uppercase leading-[15px] tracking-[0.09em] text-white sm:text-[10px]">
                      Configuration
                    </th>

                    <th className="w-[21%] px-4 py-3 text-[9px] font-semibold uppercase leading-[15px] tracking-[0.09em] text-white sm:text-[10px]">
                      Patient Position
                    </th>

                    <th className="w-[32%] px-4 py-3 text-[9px] font-semibold uppercase leading-[15px] tracking-[0.09em] text-white sm:text-[10px]">
                      Oxygen / Equipment
                    </th>

                    <th className="w-[33%] px-4 py-3 text-[9px] font-semibold uppercase leading-[15px] tracking-[0.09em] text-white sm:text-[10px]">
                      Typically Used For
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {cabinConfigurations.map((configuration, index) => (
                    <tr
                      key={configuration.letter}
                      className={`border-b border-[#DEE2E4] ${
                        index % 2 === 1 ? "bg-[#F1F1EF]" : "bg-transparent"
                      }`}
                    >
                      <td className="px-4 py-4 align-top font-manrope text-[13px] font-semibold leading-[20px] text-[#315471] sm:text-[14px] sm:leading-[22px]">
                        {configuration.letter} — {configuration.title}
                      </td>

                      <td className="px-4 py-4 align-top font-manrope text-[13px] font-normal leading-[20px] text-[#46535E] sm:text-[14px] sm:leading-[22px]">
                        {configuration.patientPosition}
                      </td>

                      <td className="px-4 py-4 align-top font-manrope text-[13px] font-normal leading-[20px] text-[#46535E] sm:text-[14px] sm:leading-[22px]">
                        {configuration.equipment}
                      </td>

                      <td className="px-4 py-4 align-top font-manrope text-[13px] font-normal leading-[20px] text-[#46535E] sm:text-[14px] sm:leading-[22px]">
                        {configuration.use}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
