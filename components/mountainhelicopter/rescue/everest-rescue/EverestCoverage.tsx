
const waypoints = [
  {
    name: "Lukla",
    altitude: 2860,
    type: "point",
  },
  {
    name: "Phakding",
    altitude: 2610,
    type: "point",
  },
  {
    name: "Monjo",
    altitude: 2835,
    type: "point",
  },
  {
    name: "Namche Bazaar",
    altitude: 3440,
    type: "point",
  },
  {
    name: "Tengboche",
    altitude: 3867,
    type: "point",
  },
  {
    name: "Dingboche",
    altitude: 4410,
    type: "point",
  },
  {
    name: "Pheriche",
    altitude: 4371,
    type: "hra",
  },
  {
    name: "Lobuche",
    altitude: 4910,
    type: "point",
  },
  {
    name: "Gorak Shep",
    altitude: 5164,
    type: "point",
  },
  {
    name: "Kala Patthar",
    altitude: 5545,
    type: "point",
  },
  {
    name: "Everest Base Camp",
    altitude: 5364,
    type: "everest-er",
  },
];

const chartWidth = 1000;
const chartHeight = 430;
const chartLeft = 50;
const chartRight = 960;
const chartTop = 45;
const chartBottom = 330;

const minAltitude = 2500;
const maxAltitude = 5700;

function getX(index) {
  if (waypoints.length === 1) return chartLeft;

  return (
    chartLeft +
    (index / (waypoints.length - 1)) * (chartRight - chartLeft)
  );
}

function getY(altitude) {
  const progress =
    (altitude - minAltitude) / (maxAltitude - minAltitude);

  return chartBottom - progress * (chartBottom - chartTop);
}

function getPolylinePoints() {
  return waypoints
    .map((point, index) => `${getX(index)},${getY(point.altitude)}`)
    .join(" ");
}

function CoverageLegend() {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-[#f2a10d]" />
        <span className="font-manrope text-[8px] font-bold uppercase tracking-[0.18em] text-white/75">
          Evacuation Point
        </span>
      </div>

      <div className="flex items-center gap-2">
        <span className="h-2 w-2 bg-[#f2a10d]" />
        <span className="font-manrope text-[8px] font-bold uppercase tracking-[0.18em] text-white/75">
          HRA Post
        </span>
      </div>

      <div className="flex items-center gap-2">
        <span className="font-manrope text-[14px] font-bold text-[#f2a10d]">
          +
        </span>
        <span className="font-manrope text-[8px] font-bold uppercase tracking-[0.18em] text-white/75">
          Everest ER Seasonal
        </span>
      </div>

      <div className="flex items-center gap-2">
        <span className="w-5 border-t border-dashed border-[#f2a10d]" />
        <span className="font-manrope text-[8px] font-bold uppercase tracking-[0.18em] text-white/75">
          CAAN Shuttle Limit (4,500 m)
        </span>
      </div>
    </div>
  );
}

export default function EverestCoverage() {
  const riskZoneY = getY(3500);
  const shuttleLimitY = getY(4500);

  return (
    <section
      id="coverage"
      className="scroll-mt-[123px] overflow-hidden bg-[#061523] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-20 xl:px-[80px] 2xl:px-[125px]"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="max-w-[900px]">
          <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#f2a10d]">
            — Coverage Profile
          </p>

          <h2 className="mt-4 font-fraunces text-[38px] font-semibold leading-[1.03] tracking-[-0.03em] text-[#f6f2ea] sm:text-[48px] lg:text-[58px]">
            Every Everest waypoint.{" "}
            <span className="italic text-[#f2a10d]">
              Every altitude.
            </span>
          </h2>

          <p className="mt-5 max-w-[760px] font-manrope text-[12px] leading-[1.75] text-white/78 sm:text-[13px]">
            Every altitude between Lukla and Everest Base Camp has different
            rescue considerations. Below 3,500 m, altitude illness is uncommon.
            Between 3,500 m and 4,500 m, HAPE and HACE incidence rises sharply.
            Above 4,500 m, CAAN regulations limit helicopters to three
            passengers, and the shuttle system takes over. This chart shows
            every evacuation point in the corridor.
          </p>
        </div>

        {/* Desktop chart */}
        <div className="mt-12 hidden lg:block">
          <div className="overflow-x-auto">
            <svg
              viewBox={`0 0 ${chartWidth} ${chartHeight}`}
              className="h-auto min-w-[1000px] w-full"
              role="img"
              aria-label="Altitude profile from Lukla to Everest Base Camp"
            >
              {/* Risk zone */}
              <line
                x1={chartLeft}
                y1={riskZoneY}
                x2={chartRight}
                y2={riskZoneY}
                stroke="#a97312"
                strokeWidth="1"
                strokeDasharray="6 6"
                opacity="0.85"
              />

              <text
                x={chartRight - 10}
                y={riskZoneY - 10}
                textAnchor="end"
                fill="#d98f10"
                fontSize="11"
                fontFamily="var(--font-manrope-family)"
                letterSpacing="1.2"
              >
                ALTITUDE ILLNESS RISK ZONE — HAPE / HACE POSSIBLE
              </text>

              {/* Shuttle limit */}
              <line
                x1={chartLeft}
                y1={shuttleLimitY}
                x2={chartRight}
                y2={shuttleLimitY}
                stroke="#a97312"
                strokeWidth="1"
                strokeDasharray="6 6"
                opacity="0.85"
              />

              <text
                x={chartRight - 10}
                y={shuttleLimitY - 10}
                textAnchor="end"
                fill="#d98f10"
                fontSize="11"
                fontFamily="var(--font-manrope-family)"
                letterSpacing="1.2"
              >
                CAAN 3-PAX HELICOPTER SHUTTLE LIMIT
              </text>

              {/* Main route line */}
              <polyline
                points={getPolylinePoints()}
                fill="none"
                stroke="#f2a10d"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
              />

              {waypoints.map((point, index) => {
                const x = getX(index);
                const y = getY(point.altitude);
                const isHra = point.type === "hra";
                const isEverestEr = point.type === "everest-er";
                const labelAbove =
                  index !== 1 && index !== 5 && index !== 8;

                return (
                  <g key={point.name}>
                    {isHra && (
                      <g>
                        <rect
                          x={x - 21}
                          y={y - 40}
                          width="42"
                          height="20"
                          rx="1"
                          fill="#f2a10d"
                        />

                        <text
                          x={x}
                          y={y - 26}
                          textAnchor="middle"
                          fill="#071825"
                          fontSize="9"
                          fontWeight="700"
                          fontFamily="var(--font-manrope-family)"
                        >
                          HRA
                        </text>
                      </g>
                    )}

                    {isEverestEr && (
                      <g>
                        <rect
                          x={x - 34}
                          y={y - 42}
                          width="68"
                          height="20"
                          rx="1"
                          fill="#f2a10d"
                        />

                        <text
                          x={x}
                          y={y - 28}
                          textAnchor="middle"
                          fill="#071825"
                          fontSize="8"
                          fontWeight="700"
                          fontFamily="var(--font-manrope-family)"
                        >
                          EVEREST ER
                        </text>
                      </g>
                    )}

                    <circle
                      cx={x}
                      cy={y}
                      r="5"
                      fill="#f2a10d"
                    />

                    <text
                      x={x}
                      y={labelAbove ? y - 16 : y + 22}
                      textAnchor="middle"
                      fill="#f4f1ea"
                      fontSize="10"
                      fontWeight="700"
                      fontFamily="var(--font-manrope-family)"
                    >
                      {point.altitude.toLocaleString()}m
                    </text>

                    <text
                      x={x}
                      y={chartBottom + 46}
                      textAnchor="end"
                      transform={`rotate(-45 ${x} ${chartBottom + 46})`}
                      fill="#8290a0"
                      fontSize="10"
                      fontFamily="var(--font-manrope-family)"
                    >
                      {point.name}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          <CoverageLegend />
        </div>

        {/* Mobile cards */}
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:hidden">
          {waypoints.map((point, index) => (
            <article
              key={point.name}
              className="flex items-center justify-between border border-white/10 bg-[#0b1c2f] px-4 py-4"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#f2a10d]/50 font-manrope text-[9px] font-bold text-[#f2a10d]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3 className="font-manrope text-[10px] font-bold uppercase tracking-[0.14em] text-white">
                    {point.name}
                  </h3>

                  <p className="mt-1 font-manrope text-[8px] uppercase tracking-[0.12em] text-[#8290a0]">
                    Everest Rescue Corridor
                  </p>
                </div>
              </div>

              <div className="text-right">
                <span className="font-fraunces text-[22px] font-semibold text-[#f2a10d]">
                  {point.altitude.toLocaleString()}
                </span>

                <span className="ml-1 font-manrope text-[9px] text-white/60">
                  m
                </span>

                {point.type === "hra" && (
                  <p className="mt-1 font-manrope text-[8px] font-bold uppercase tracking-[0.12em] text-[#f2a10d]">
                    HRA Post
                  </p>
                )}

                {point.type === "everest-er" && (
                  <p className="mt-1 font-manrope text-[8px] font-bold uppercase tracking-[0.12em] text-[#f2a10d]">
                    Seasonal ER
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
          <p className="font-manrope text-[10px] leading-[1.7] text-white/60">
            Altitude labels represent established villages, lodges, medical
            posts, or common helicopter pickup points.
          </p>

          <p className="font-manrope text-[10px] leading-[1.7] text-white/60">
            Flight access remains subject to visibility, wind, cloud, payload,
            landing conditions, and the pilot&apos;s final decision.
          </p>

          <p className="font-manrope text-[10px] leading-[1.7] text-white/60">
            High-altitude points may require shuttle operations, reduced
            passengers, or relocation to a safer nearby helipad.
          </p>
        </div>
      </div>
    </section>
  );
}