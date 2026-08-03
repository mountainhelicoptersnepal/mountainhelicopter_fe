const steps = [
  {
    number: "1",
    title: "You tell us the dream",
    description:
      "A sunrise proposal, a sacred pilgrimage, a Himalayan breakfast, or a completely private journey.",
  },
  {
    number: "2",
    title: "We design the flight",
    description:
      "We arrange the route, timing, weather window, permits, landing permissions, and special details.",
  },
  {
    number: "3",
    title: "You confirm the plan",
    description:
      "Confirm your date and booking. Our team then prepares the aircraft and complete flight operation.",
  },
  {
    number: "4",
    title: "The day arrives",
    description:
      "Hotel pickup, flight briefing, final weather review, and then the ground slowly falls away.",
    highlighted: true,
  },
];

export default function Process() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24 lg:px-16 lg:py-28">
        <div className="mb-16 flex items-end gap-5">
          <span className="select-none font-fraunces text-[72px] font-semibold leading-[0.75] text-[#F2B632] md:text-[110px]">
            03
          </span>

          <div>
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#F2B632]">
              Chapter Three
            </p>

            <h2 className="font-fraunces text-[36px] font-semibold leading-[1.1] tracking-[-1.2px] text-[#003366] md:text-[52px]">
              How your moment comes together.
            </h2>
          </div>
        </div>

        <ol className="grid list-none gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li
              key={step.number}
              className={`rounded-2xl p-7 transition duration-300 ${
                step.highlighted
                  ? "border-2 border-[#F2B632] bg-white shadow-[0_8px_24px_rgba(0,51,102,0.12)]"
                  : "border border-[#E2E8F0] bg-white hover:border-[#F2B632] hover:shadow-[0_8px_24px_rgba(0,51,102,0.12)]"
              }`}
            >
              <div
                className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl font-fraunces text-[21px] font-bold ${
                  step.highlighted
                    ? "bg-[#F2B632] text-[#003366]"
                    : "bg-[#003366] text-white"
                }`}
              >
                {step.number}
              </div>

              <h3 className="mb-3 text-[18px] font-bold text-[#0A1929]">
                {step.title}
              </h3>

              <p className="text-[14px] leading-[1.75] text-[#475569]">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}