const rescuePoints = [
  {
    location: "Jomsom",
    altitude: "2,743 m",
  },
  {
    location: "Kagbeni",
    altitude: "2,810 m",
  },
  {
    location: "Muktinath Temple",
    altitude: "3,710 m",
  },
  {
    location: "Nearby High Passes",
    altitude: "Up to 4,200 m",
  },
];

export default function MuktinathCoverage() {
  return (
    <section
      id="coverage"
      className="scroll-mt-[123px] bg-[#f6f3ed] px-5 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-[80px] 2xl:px-[125px]"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="max-w-[980px]">
          <p className="font-manrope text-[11px] font-bold uppercase tracking-[0.22em] text-[#a66e00]">
            — Coverage Map
          </p>

          <h2 className="mt-4 font-fraunces text-[40px] font-semibold leading-[1.03] tracking-[-0.03em] text-[#003366] sm:text-[50px] lg:text-[60px]">
            Muktinath Rescue Coverage Map
          </h2>

          <p className="mt-5 max-w-[840px] font-manrope text-[14px] leading-[1.8] text-[#4d5963] sm:text-[14px]">
            The Muktinath trails run through the Mustang district, gaining
            significant elevation along the way. Rescue conditions change
            significantly at each stage of that route.
          </p>
        </div>

        <div className="mt-9 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse font-manrope text-left">
            <thead>
              <tr className="bg-[#003366] text-white">
                <th className="w-[70%] border-r border-white/10 px-4 py-3 text-[11px] font-bold uppercase tracking-[0.18em]">
                  Location
                </th>

                <th className="w-[30%] px-4 py-3 text-right text-[11px] font-bold uppercase tracking-[0.18em]">
                  Altitude
                </th>
              </tr>
            </thead>

            <tbody>
              {rescuePoints.map((point) => (
                <tr
                  key={point.location}
                  className="border-b border-[#d5d7d6] bg-[#f9f7f2]"
                >
                  <td className="border-x border-[#d5d7d6] px-4 py-4 font-manrope text-[14px] font-medium text-[#071825] sm:text-[14px]">
                    {point.location}
                  </td>

                  <td className="border-r border-[#d5d7d6] px-4 py-4 text-right font-manrope text-[14px] font-semibold text-[#071825] sm:text-[14px]">
                    {point.altitude}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}