const routePoints = [
  { label: "Kathmandu", altitude: "1,400m", x: 65, y: 195, tone: "gold" },
  { label: "Lukla", altitude: "2,860m", x: 225, y: 140, tone: "gold" },
  { label: "Kala Patthar", altitude: "5,545m", x: 390, y: 38, tone: "red" },
  { label: "Hotel Everest View", altitude: "3,880m", x: 610, y: 105, tone: "gold" },
  { label: "Kathmandu", altitude: "1,400m", x: 1060, y: 195, tone: "gold" },
];

export default function RouteElevationSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20 lg:px-16">
        <div className="overflow-hidden rounded-[18px] bg-[#061c38] px-5 py-10 md:px-10 md:py-12 lg:px-14">
          <div className="text-center">
            <p className="flex items-center justify-center gap-3 font-manrope text-xs font-bold uppercase tracking-[0.22em] text-[#e1a51f]">
              <span className="h-px w-7 bg-[#e1a51f]" />
              The Route
            </p>

            <h2 className="mt-4 font-fraunces text-3xl font-semibold leading-tight text-white md:text-4xl">
              Kathmandu to Kala Patthar,{" "}
              <span className="text-[#e4ab25]">plotted.</span>
            </h2>
          </div>

          <div className="mt-10 overflow-x-auto">
            <div className="min-w-[760px]">
              <svg
                viewBox="0 0 1100 250"
                className="h-auto w-full"
                role="img"
                aria-label="Elevation profile from Kathmandu to Kala Patthar and back"
              >
                <defs>
                  <linearGradient id="routeAreaStandalone" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f2b321" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#f2b321" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {[35, 75, 115, 155, 195, 235].map((y) => (
                  <line
                    key={y}
                    x1="65"
                    y1={y}
                    x2="1060"
                    y2={y}
                    stroke="#24405d"
                    strokeWidth="1"
                    opacity="0.55"
                  />
                ))}

                <g fill="#7f91a6" fontFamily="Manrope, sans-serif" fontSize="10">
                  {["6k m", "5k m", "4k m", "3k m", "2k m", "1k m"].map(
                    (label, index) => (
                      <text key={label} x="28" y={39 + index * 40}>
                        {label}
                      </text>
                    ),
                  )}
                </g>

                <path
                  d="M65 195 L225 140 L390 38 L610 105 L920 142 L1060 195 L1060 235 L65 235 Z"
                  fill="url(#routeAreaStandalone)"
                />
                <path
                  d="M65 195 L225 140 L390 38 L610 105 L920 142 L1060 195"
                  fill="none"
                  stroke="#f2b321"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                />

                {routePoints.map((point) => (
                  <g key={`${point.label}-${point.x}`}>
                    <circle
                      cx={point.x}
                      cy={point.y}
                      r={point.tone === "red" ? 14 : 12}
                      fill={point.tone === "red" ? "#e34d55" : "#f2b321"}
                      opacity="0.14"
                    />
                    <circle
                      cx={point.x}
                      cy={point.y}
                      r={point.tone === "red" ? 7 : 6}
                      fill={point.tone === "red" ? "#e34d55" : "#f2b321"}
                    />
                    <text
                      x={point.x - 28}
                      y={point.y - 15}
                      fill="#ffffff"
                      fontFamily="Manrope, sans-serif"
                      fontSize="9"
                      fontWeight="700"
                    >
                      {point.label}
                    </text>
                    <text
                      x={point.x - 16}
                      y={point.y - 5}
                      fill="#7f91a6"
                      fontFamily="Manrope, sans-serif"
                      fontSize="8"
                    >
                      {point.altitude}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </div>

          <p className="mt-5 font-manrope text-xs leading-6 text-[#7c8da1]">
            Elevation profile: Kathmandu (1,400 m) to Kala Patthar (5,545 m)
            and back, plotted against elapsed time.
          </p>
        </div>
      </div>
    </section>
  );
}
