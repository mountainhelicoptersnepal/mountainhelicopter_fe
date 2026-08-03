import Reveal from "./Reveal";

const STATS = [
  {
    v: "Since 2009",
    k: "Continuous Himalayan operations from Kathmandu",
  },
  {
    v: "23,000 FT",
    k: "Certified operating ceiling of our AS 350 B3e fleet",
  },
  {
    v: "5,000+ HRS",
    k: "Average flight hours per pilot, annual recurrent training",
  },
  {
    v: "24 / 7",
    k: "Rescue and medevac capability behind every flight",
  },
];

export default function Safety() {
  return (
    <section className="py-[70px]">
      <div className="mx-auto max-w-[1160px] px-[22px]">
        <Reveal className="mb-9 max-w-[700px]">
          <div className="mb-2.5 font-jetbrains-mono text-[12.5px] font-semibold uppercase tracking-[.16em] text-[#D99A00]">
            Why Mountain Helicopters
          </div>
          <h2 className="font-fraunces text-[clamp(1.55rem,3.5vw,2.3rem)] font-extrabold tracking-[-.01em] text-[#051F49]">
            Built for high-altitude flying, not sightseeing brochures.
          </h2>
          <p className="mt-3 text-[#4A5B76]">
            We operate the Airbus AS 350 B3e, the airframe that landed on the
            summit of Everest in 2005, maintained in-house by CAAN certified
            engineers.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.v} delay={i * 0.06}>
              <div className="h-full rounded-[10px] border border-[#D7E2F2] border-l-4 border-l-[#0C4396] bg-white p-[22px_20px]">
                <div className="font-jetbrains-mono text-[1.2rem] font-semibold text-[#0C4396]">
                  {stat.v}
                </div>
                <div className="mt-1.5 text-sm text-[#4A5B76]">{stat.k}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
