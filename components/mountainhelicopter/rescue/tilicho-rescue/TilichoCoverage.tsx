const rescuePoints = [
  {
    location: "Manang",
    shortLabel: "Manang",
    altitude: 3540,
    type: "evacuation",
  },
  {
    location: "Khangsar",
    shortLabel: "Khangsar",
    altitude: 3730,
    type: "evacuation",
  },
  {
    location: "Landslide traverse (Khangsar to Base Camp)",
    shortLabel: "Landslide Traverse",
    altitude: 3950,
    altitudeLabel: "3,800–4,100 m",
    type: "rescue",
  },
  {
    location: "Tilicho Base Camp",
    shortLabel: "Tilicho Base Camp",
    altitude: 4140,
    type: "hra",
  },
  {
    location: "Tilicho Lake",
    shortLabel: "Tilicho Lake",
    altitude: 4919,
    type: "rescue",
  },
  {
    location: "Yak Kharka",
    shortLabel: "Yak Kharka",
    altitude: 4020,
    type: "evacuation",
  },
  {
    location: "Thorong Phedi / High Camp",
    shortLabel: "Thorong Phedi / High Camp",
    altitude: 4600,
    type: "hra",
  },
];

const chartWidth = 1120;
const chartHeight = 520;

const chartPaddingLeft = 70;
const chartPaddingRight = 55;
const chartPaddingTop = 70;
const chartPaddingBottom = 120;

const minAltitude = 3300;
const maxAltitude = 5200;

function formatAltitude(point) {
  if (point.altitudeLabel) {
    return point.altitudeLabel;
  }

  return `${point.altitude.toLocaleString()} m`;
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

export default function TilichoCoverage() {
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
            Tilicho Rescue
            <br />

            <span className="italic text-[#f2ad22]">
              Coverage Map
            </span>
          </h2>

          <p className="mt-6 max-w-[850px] font-manrope text-sm leading-7 text-white/75 md:text-base md:leading-8">
            The Tilicho Lake trek branches off the main Annapurna Circuit at
            Manang and climbs through increasingly remote terrain to one of the
            highest lakes in the world. Rescue conditions change significantly
            at each stage of that route.
          </p>
        </div>

        {/* ALTITUDE MAP */}
        <div className="mt-12 overflow-x-auto">
          <div className="min-w-[920px]">
            <svg
              viewBox={`0 0 ${chartWidth} ${chartHeight}`}
              className="h-auto w-full"
              role="img"
              aria-label="Tilicho rescue coverage altitude map"
            >
              <defs>
                <filter
                  id="tilichoPointGlow"
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

              {/* HIGH-ALTITUDE SHUTTLE LIMIT */}
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
                        filter="url(#tilichoPointGlow)"
                      />
                    )}

                    <circle
                      cx={x}
                      cy={y}
                      r={isHighlighted ? 7 : 6}
                      fill="#f2ad22"
                    />

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
                      {formatAltitude(point)}
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
                {formatAltitude(point)}
              </p>
            </article>
          ))}
        </div>

        {/* COVERAGE NOTES */}
        <div className="mt-10 grid gap-5 border-t border-white/15 pt-7 md:grid-cols-3">
          <p className="font-manrope text-sm leading-7 text-white/65">
            Manang and Khangsar are lower points on the route, but weather,
            terrain and landing-site availability must still be verified before
            dispatch.
          </p>

          <p className="font-manrope text-sm leading-7 text-white/65">
            The landslide traverse, Tilicho Base Camp and Tilicho Lake involve
            increasingly remote and challenging high-altitude conditions.
          </p>

          <p className="font-manrope text-sm leading-7 text-white/65">
            Tilicho Lake and Thorong Phedi / High Camp may require reduced
            payload, shuttle operations or movement to the nearest safe pickup
            point.
          </p>
        </div>
      </div>
    </section>
  );
}