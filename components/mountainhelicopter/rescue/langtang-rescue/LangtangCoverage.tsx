const rescuePoints = [
  {
    location: "Syabrubesi",
    shortLabel: "Syabrubesi",
    altitude: 1460,
    type: "evacuation",
  },
  {
    location: "Lama Hotel",
    shortLabel: "Lama Hotel",
    altitude: 2470,
    type: "evacuation",
  },
  {
    location: "Ghodatabela",
    shortLabel: "Ghodatabela",
    altitude: 3000,
    type: "evacuation",
  },
  {
    location: "Langtang Village",
    shortLabel: "Langtang Village",
    altitude: 3430,
    type: "evacuation",
  },
  {
    location: "Kyanjin Gompa",
    shortLabel: "Kyanjin Gompa",
    altitude: 3870,
    type: "hra",
  },
  {
    location: "Tserko Ri",
    shortLabel: "Tserko Ri",
    altitude: 4984,
    type: "rescue",
  },
  {
    location: "Langshisha Kharka",
    shortLabel: "Langshisha Kharka",
    altitude: 4000,
    type: "evacuation",
  },
  {
    location: "Gosaikunda",
    shortLabel: "Gosaikunda",
    altitude: 4380,
    type: "hra",
  },
];

const chartWidth = 1120;
const chartHeight = 520;

const chartPaddingLeft = 70;
const chartPaddingRight = 55;
const chartPaddingTop = 70;
const chartPaddingBottom = 120;

const minAltitude = 1200;
const maxAltitude = 5200;

function formatAltitude(altitude) {
  return `${altitude.toLocaleString()} m`;
}

function getPointX(index) {
  const usableWidth =
    chartWidth - chartPaddingLeft - chartPaddingRight;

  return (
    chartPaddingLeft +
    (index / (rescuePoints.length - 1)) * usableWidth
  );
}

function getPointY(altitude) {
  const usableHeight =
    chartHeight - chartPaddingTop - chartPaddingBottom;

  const normalized =
    (altitude - minAltitude) / (maxAltitude - minAltitude);

  return (
    chartPaddingTop +
    usableHeight -
    normalized * usableHeight
  );
}

const routePath = rescuePoints
  .map((point, index) => {
    const x = getPointX(index);
    const y = getPointY(point.altitude);

    return `${index === 0 ? "M" : "L"} ${x} ${y}`;
  })
  .join(" ");

export default function LangtangCoverage() {
  const riskZoneY = getPointY(3500);
  const shuttleLimitY = getPointY(4500);

  return (
    <section
      id="coverage"
      className="scroll-mt-[133px] bg-[#083c72] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-20 xl:px-[80px] 2xl:px-[125px]"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* HEADING */}
        <div className="max-w-[1020px]">
          <p className="flex items-center gap-3 font-manrope text-xs font-bold uppercase tracking-[0.22em] text-[#f2ad22]">
            <span className="h-px w-7 bg-[#f2ad22]" />
            Coverage Profile
          </p>

          <h2 className="mt-5 font-fraunces text-4xl font-semibold leading-[1.02] tracking-[-0.03em] text-white md:text-5xl lg:text-6xl">
            Langtang Rescue
            <br />

            <span className="italic text-[#f2ad22]">
              Coverage Map
            </span>
          </h2>

          <p className="mt-6 max-w-[850px] font-manrope text-sm leading-7 text-white/75 md:text-base md:leading-8">
            Langtang Valley runs roughly forty-five kilometers from Syabrubesi
            to Langshisha Kharka, gaining over 3,000 meters in elevation along
            the way. Rescue conditions change significantly at each stage of
            that route.
          </p>
        </div>

        {/* ALTITUDE MAP */}
        <div className="mt-12 overflow-x-auto">
          <div className="min-w-[920px]">
            <svg
              viewBox={`0 0 ${chartWidth} ${chartHeight}`}
              className="h-auto w-full"
              role="img"
              aria-label="Langtang rescue coverage altitude map"
            >
              <defs>
                <filter
                  id="langtangPointGlow"
                  x="-100%"
                  y="-100%"
                  width="300%"
                  height="300%"
                >
                  <feGaussianBlur
                    stdDeviation="5"
                    result="blur"
                  />

                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* ALTITUDE ILLNESS ZONE */}
              <line
                x1={chartPaddingLeft}
                y1={riskZoneY}
                x2={chartWidth - chartPaddingRight}
                y2={riskZoneY}
                stroke="#f2ad22"
                strokeWidth="1"
                strokeDasharray="6 7"
                opacity="0.65"
              />

              <text
                x={chartWidth - chartPaddingRight}
                y={riskZoneY - 10}
                textAnchor="end"
                fill="#f2ad22"
                fontFamily="Manrope, sans-serif"
                fontSize="11"
                fontWeight="700"
                letterSpacing="1.2"
              >
                ALTITUDE ILLNESS RISK ZONE — AMS / HAPE / HACE POSSIBLE
              </text>

              {/* HIGH-ALTITUDE OPERATING LIMIT */}
              <line
                x1={chartPaddingLeft}
                y1={shuttleLimitY}
                x2={chartWidth - chartPaddingRight}
                y2={shuttleLimitY}
                stroke="#f2ad22"
                strokeWidth="1"
                strokeDasharray="6 7"
                opacity="0.65"
              />

              <text
                x={chartWidth - chartPaddingRight}
                y={shuttleLimitY - 10}
                textAnchor="end"
                fill="#f2ad22"
                fontFamily="Manrope, sans-serif"
                fontSize="11"
                fontWeight="700"
                letterSpacing="1.2"
              >
                REDUCED PAYLOAD / SHUTTLE OPERATIONS ABOVE 4,500 M
              </text>

              {/* ROUTE LINE */}
              <path
                d={routePath}
                fill="none"
                stroke="#f2ad22"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* DATA POINTS */}
              {rescuePoints.map((point, index) => {
                const x = getPointX(index);
                const y = getPointY(point.altitude);

                const isHighlighted =
                  point.type === "rescue" ||
                  point.type === "hra";

                return (
                  <g key={point.location}>
                    {isHighlighted && (
                      <circle
                        cx={x}
                        cy={y}
                        r="16"
                        fill="#f2ad22"
                        opacity="0.12"
                        filter="url(#langtangPointGlow)"
                      />
                    )}

                    <circle
                      cx={x}
                      cy={y}
                      r={isHighlighted ? 7 : 6}
                      fill="#f2ad22"
                    />

                    {/* HRA LABEL */}
                    {point.type === "hra" && (
                      <>
                        <rect
                          x={x - 23}
                          y={y - 45}
                          width="46"
                          height="22"
                          rx="2"
                          fill="#f2ad22"
                        />

                        <text
                          x={x}
                          y={y - 30}
                          textAnchor="middle"
                          fill="#073763"
                          fontFamily="Manrope, sans-serif"
                          fontSize="9"
                          fontWeight="800"
                        >
                          HRA
                        </text>
                      </>
                    )}

                    {/* RESCUE LABEL */}
                    {point.type === "rescue" && (
                      <>
                        <rect
                          x={x - 32}
                          y={y - 45}
                          width="64"
                          height="22"
                          rx="2"
                          fill="#f2ad22"
                        />

                        <text
                          x={x}
                          y={y - 30}
                          textAnchor="middle"
                          fill="#073763"
                          fontFamily="Manrope, sans-serif"
                          fontSize="9"
                          fontWeight="800"
                        >
                          RESCUE
                        </text>
                      </>
                    )}

                    {/* ALTITUDE */}
                    <text
                      x={x}
                      y={y - 14}
                      textAnchor="middle"
                      fill="#ffffff"
                      fontFamily="Manrope, sans-serif"
                      fontSize="11"
                      fontWeight="600"
                    >
                      {formatAltitude(point.altitude)}
                    </text>

                    {/* LOCATION LABEL */}
                    <text
                      x={x - 5}
                      y={chartHeight - 58}
                      transform={`rotate(-45 ${x - 5} ${
                        chartHeight - 58
                      })`}
                      textAnchor="end"
                      fill="#ffffff"
                      opacity="0.45"
                      fontFamily="Manrope, sans-serif"
                      fontSize="11"
                      fontWeight="600"
                    >
                      {point.shortLabel}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        {/* LEGEND */}
        <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-4 font-manrope text-xs font-bold uppercase tracking-[0.16em] text-white/70">
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#f2ad22]" />
            Evacuation Point
          </div>

          <div className="flex items-center gap-3">
            <span className="h-3 w-3 bg-[#f2ad22]" />
            HRA / Medical Post
          </div>

          <div className="flex items-center gap-3">
            <span className="text-lg leading-none text-[#f2ad22]">
              +
            </span>

            Major High-Altitude Rescue Point
          </div>

          <div className="flex items-center gap-3">
            <span className="w-8 border-t border-dashed border-[#f2ad22]" />
            High-Altitude Operating Limit
          </div>
        </div>

        {/* LOCATION / ALTITUDE CARDS */}
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {rescuePoints.map((point) => (
            <article
              key={point.location}
              className="border border-white/15 bg-white/[0.04] px-4 py-4"
            >
              <p className="font-manrope text-xs font-semibold leading-5 text-white">
                {point.location}
              </p>

              <p className="mt-2 font-manrope text-sm font-bold text-[#f2ad22]">
                {formatAltitude(point.altitude)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}