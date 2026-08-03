const months = [
  {
    name: "Jan",
    description: "Clear air and cold conditions",
    status: "good",
  },
  {
    name: "Feb",
    description: "Clear and comparatively quiet",
    status: "good",
  },
  {
    name: "Mar",
    description: "Warmer light and changing haze",
    status: "good",
  },
  {
    name: "Apr",
    description: "Climbing-season activity",
    status: "peak",
  },
  {
    name: "May",
    description: "Warmer conditions and afternoon haze",
    status: "good",
  },
  {
    name: "Jun",
    description: "Monsoon and limited visibility",
    status: "limited",
  },
  {
    name: "Jul",
    description: "Monsoon and changing weather",
    status: "limited",
  },
  {
    name: "Aug",
    description: "Dramatic clouds but limited reliability",
    status: "limited",
  },
  {
    name: "Sep",
    description: "Skies begin clearing",
    status: "good",
  },
  {
    name: "Oct",
    description: "Sharp visibility and stable weather",
    status: "peak",
  },
  {
    name: "Nov",
    description: "Excellent Himalayan light",
    status: "peak",
  },
  {
    name: "Dec",
    description: "Cold, clear and quiet",
    status: "good",
  },
];

export default function SeasonGuide() {
  return (
    <article aria-labelledby="season-heading">
      <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#B8860B]">
        When to Fly
      </p>

      <h2
        id="season-heading"
        className="mb-8 font-fraunces text-[clamp(1.75rem,3.4vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-[#003366]"
      >
        The light, month by month.
      </h2>

      <div className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-12">
          {months.map((month) => (
            <div
              key={month.name}
              className={`border-b border-r border-[#E2E8F0] p-4 text-center ${
                month.status === "peak"
                  ? "bg-[#F2B632]/10"
                  : month.status === "limited"
                    ? "opacity-50"
                    : ""
              }`}
            >
              <p
                className={`text-[11px] font-bold uppercase ${
                  month.status === "peak"
                    ? "text-[#B8860B]"
                    : month.status === "limited"
                      ? "text-[#64748B]"
                      : "text-[#003366]"
                }`}
              >
                {month.name}
              </p>

              <span
                className={`mx-auto mt-3 block h-3 w-3 rounded-full ${
                  month.status === "peak"
                    ? "bg-[#F2B632]"
                    : month.status === "limited"
                      ? "bg-[#E2E8F0]"
                      : "bg-[#0062B1]"
                }`}
              />

              <p className="mt-3 text-[10px] leading-tight text-[#475569]">
                {month.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-5 border-t border-[#E2E8F0] bg-[#F8FAFC] px-5 py-4">
          <span className="flex items-center gap-2 text-xs text-[#475569]">
            <span className="h-3 w-3 rounded-full bg-[#F2B632]" />
            Peak photography period
          </span>

          <span className="flex items-center gap-2 text-xs text-[#475569]">
            <span className="h-3 w-3 rounded-full bg-[#0062B1]" />
            Good shooting period
          </span>

          <span className="flex items-center gap-2 text-xs text-[#475569]">
            <span className="h-3 w-3 rounded-full bg-[#E2E8F0]" />
            Monsoon and limited reliability
          </span>
        </div>
      </div>
    </article>
  );
}