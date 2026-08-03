// src/components/rescue/kala-patthar/KalaPattharCoverage.jsx

const trustItems = [
  "Since 2009",
  "10,000+ Flights",
  "Zero Fatal Accidents",
  "<5 Min Dispatch",
  "CAAN Certified",
  "AS 350 B3e Fleet",
];

const rescuePoints = [
  {
    location: "Lukla",
    altitude: 2860,
    displayAltitude: "2,860 m",
  },
  {
    location: "Pheriche",
    altitude: 4371,
    displayAltitude: "4,371 m",
  },
  {
    location: "Lobuche",
    altitude: 4940,
    displayAltitude: "4,940 m",
  },
  {
    location: "Gorak Shep",
    altitude: 5140,
    displayAltitude: "5,140 m",
  },
  {
    location: "Everest Base Camp",
    altitude: 5364,
    displayAltitude: "5,364 m",
  },
  {
    location: "Kala Patthar",
    altitude: 5545,
    displayAltitude: "5,545 m",
  },
];

const maxAltitude = Math.max(...rescuePoints.map((point) => point.altitude));

function TrustItem({ item, index }) {
  return (
    <div
      className={`flex min-h-[74px] items-center justify-center px-3 text-center ${
        index !== trustItems.length - 1
          ? "lg:border-r lg:border-[#d7a03d]"
          : ""
      }`}
    >
      <span className="font-manrope text-[9px] font-bold uppercase tracking-[0.2em] text-[#071825] sm:text-[10px]">
        {item}
      </span>
    </div>
  );
}

export default function KalaPattharCoverage() {
  return (
    <section id="coverage" className="scroll-mt-[123px] bg-[#f6f3ed]">
      {/* Trust bar */}
      <div className="border-b border-[#d7d9d7]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 px-5 sm:grid-cols-3 sm:px-8 lg:grid-cols-6 lg:px-12 xl:px-[80px] 2xl:px-[125px]">
          {trustItems.map((item, index) => (
            <TrustItem key={item} item={item} index={index} />
          ))}
        </div>
      </div>

      <div className="px-5 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-[80px] 2xl:px-[125px]">
        <div className="mx-auto max-w-[1440px]">
          {/* Optional status notice */}
          <div className="border border-[#dfbd78] bg-[#f1eee7] px-6 py-6 sm:px-8">
            <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#a66e00]">
              — Regional Rescue Information
            </p>

            <p className="mt-3 max-w-[900px] font-manrope text-[11px] leading-[1.8] text-[#46545f] sm:text-[12px]">
              Kala Patthar and Gorak Shep rescue operations follow the same
              Everest-region dispatch, insurance and patient-transfer process.
              Every mission remains subject to current weather, aircraft
              availability, landing access, payload limitations and the
              pilot&apos;s final safety decision.
            </p>
          </div>

          <div className="mt-16 max-w-[1180px]">
            <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#a66e00]">
              — Rescue Coverage by Altitude
            </p>

            <h2 className="mt-4 font-fraunces text-[40px] font-semibold leading-[1.03] tracking-[-0.03em] text-[#071825] sm:text-[50px] lg:text-[60px]">
              Common Kala Patthar &amp; Gorak Shep{" "}
              <span className="italic text-[#9b6b00]">rescue points.</span>
            </h2>

            <p className="mt-5 max-w-[820px] font-manrope text-[11px] leading-[1.8] text-[#4d5963] sm:text-[12px]">
              The upper Everest corridor climbs from Lukla through Pheriche and
              Lobuche to Gorak Shep, Everest Base Camp and Kala Patthar. Rescue
              planning becomes increasingly sensitive to altitude, payload,
              weather, landing access and patient condition at each stage.
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
              Lukla and Pheriche may be used for staging, stabilization and
              onward patient transfer when upper-region weather is restricted.
            </p>

            <p className="font-manrope text-[10px] leading-[1.7] text-[#5b6872]">
              Above 4,500 metres, CAAN payload limits, wind and reduced air
              density can require fewer passengers or shuttle movements.
            </p>

            <p className="font-manrope text-[10px] leading-[1.7] text-[#5b6872]">
              Kala Patthar, Gorak Shep and Everest Base Camp rescues may require
              relocation to the safest available landing point.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}