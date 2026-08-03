// src/components/rescue/mardi/MardiCoverage.jsx

const rescuePoints = [
  {
    location: "Kande",
    altitude: 1770,
    displayAltitude: "1,770 m",
  },
  {
    location: "Australian Camp",
    altitude: 2100,
    displayAltitude: "2,050–2,100 m",
  },
  {
    location: "Pitam Deurali",
    altitude: 2150,
    displayAltitude: "2,100–2,150 m",
  },
  {
    location: "Forest Camp",
    altitude: 2600,
    displayAltitude: "2,520–2,600 m",
  },
  {
    location: "Low Camp",
    altitude: 2970,
    displayAltitude: "2,970 m",
  },
  {
    location: "Badal Danda",
    altitude: 3210,
    displayAltitude: "3,210 m",
  },
  {
    location: "High Camp",
    altitude: 3600,
    displayAltitude: "3,580–3,600 m",
  },
  {
    location: "Mardi Himal Base Camp",
    altitude: 4500,
    displayAltitude: "4,500 m",
  },
];

const maxAltitude = Math.max(...rescuePoints.map((point) => point.altitude));

export default function MardiCoverage() {
  return (
    <section
      id="coverage"
      className="scroll-mt-[123px] bg-[#f6f3ed] px-5 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-[80px] 2xl:px-[125px]"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="max-w-[1000px]">
          <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#a66e00]">
            — Rescue Coverage by Altitude
          </p>

          <h2 className="mt-4 font-fraunces text-[40px] font-semibold leading-[1.03] tracking-[-0.03em] text-[#071825] sm:text-[50px] lg:text-[60px]">
            Common Mardi Himal{" "}
            <span className="italic text-[#9b6b00]">rescue points.</span>
          </h2>

          <p className="mt-5 max-w-[800px] font-manrope text-[11px] leading-[1.8] text-[#4d5963] sm:text-[12px]">
            The Mardi Himal trek follows a narrow ridge northeast of Pokhara,
            gaining roughly 2,700 metres over about 41 kilometres from Kande to
            Base Camp. Rescue conditions change significantly at each stage of
            the route because of altitude, exposed terrain, weather and landing
            access.
          </p>
        </div>

        <div className="mt-9 overflow-x-auto">
          <table className="w-full min-w-[780px] border-collapse font-manrope text-left">
            <thead>
              <tr className="bg-[#061523] text-white">
                <th className="w-[48%] border-r border-white/10 px-4 py-3 text-[9px] font-bold uppercase tracking-[0.18em]">
                  Location
                </th>

                <th className="w-[16%] border-r border-white/10 px-4 py-3 text-right text-[9px] font-bold uppercase tracking-[0.18em]">
                  Altitude
                </th>

                <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-[0.18em]">
                  Elevation
                </th>
              </tr>
            </thead>

            <tbody>
              {rescuePoints.map((point) => {
                const barWidth = `${Math.max(
                  12,
                  (point.altitude / maxAltitude) * 100,
                )}%`;

                return (
                  <tr
                    key={point.location}
                    className="group border-b border-[#d5d7d6] bg-[#f9f7f2] transition-colors duration-300 hover:bg-[#f2eee5]"
                  >
                    <td className="border-x border-[#d5d7d6] px-4 py-4 font-manrope text-[10px] font-medium text-[#071825] transition-colors duration-300 group-hover:text-[#9b6b00] sm:text-[11px]">
                      {point.location}
                    </td>

                    <td className="border-r border-[#d5d7d6] px-4 py-4 text-right font-manrope text-[10px] font-semibold text-[#071825] sm:text-[11px]">
                      {point.displayAltitude}
                    </td>

                    <td className="border-r border-[#d5d7d6] px-4 py-4">
                      <div className="h-[8px] w-full overflow-hidden bg-[#eee9df]">
                        <div
                          className="h-full origin-left bg-[#f2dfb4] transition-all duration-500 group-hover:brightness-95"
                          style={{ width: barWidth }}
                          aria-label={`${point.location} elevation ${point.displayAltitude}`}
                        />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid gap-4 border-t border-[#d5d7d6] pt-6 sm:grid-cols-3">
          <p className="font-manrope text-[10px] leading-[1.7] text-[#5b6872]">
            Lower points such as Kande, Australian Camp and Forest Camp
            generally allow more flexible landing and patient-transfer options.
          </p>

          <p className="font-manrope text-[10px] leading-[1.7] text-[#5b6872]">
            Above 3,500 metres, reduced air density, stronger winds and rapid
            cloud development can affect helicopter payload and performance.
          </p>

          <p className="font-manrope text-[10px] leading-[1.7] text-[#5b6872]">
            High Camp and Mardi Himal Base Camp may require reduced payload,
            shuttle movements or relocation to a safer nearby pickup point.
          </p>
        </div>
      </div>
    </section>
  );
}