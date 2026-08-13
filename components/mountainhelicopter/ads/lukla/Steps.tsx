import Reveal from "./Reveal";

const STEPS = [
  {
    n: "STEP 01",
    title: "Send your date",
    body: "Use the form above or message us on WhatsApp with your date, route or tour, and passenger count.",
  },
  {
    n: "STEP 02",
    title: "Confirm your seat",
    body: "We confirm availability, share the exact departure window, and hold your seat with a deposit.",
  },
  {
    n: "STEP 03",
    title: "Fly the Himalayas",
    body: "Meet us at Kathmandu's domestic terminal. Weather check, briefing, and you are airborne on the morning window.",
  },
];

export default function Steps() {
  return (
    <section className="bg-[#051F49] py-[70px] text-white">
      <div className="mx-auto max-w-[1160px] px-[22px]">
        <Reveal className="mb-9 max-w-[700px]">
          <div className="mb-2.5 font-geist-mono text-[12.5px] font-semibold uppercase tracking-[.16em] text-[#F5AF00]">
            Booking
          </div>
          <h2 className="font-fraunces leading-[1.12] text-[clamp(1.55rem,3.5vw,2.3rem)] font-extrabold tracking-[-.01em] text-white">
            From message to mountain in three steps.
          </h2>
          <p className="mt-3 text-[#A9C2E8]">
            No portals, no payment walls. A flight specialist handles your
            booking end to end and replies within 2 hours, 7 days a week.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.08}>
              <div className="h-full rounded-[14px] border border-white/[.14] bg-white/5 p-6">
                <div className="mb-3.5 font-geist-mono text-[13px] font-semibold tracking-[.14em] text-[#F5AF00]">
                  {step.n}
                </div>
                <h3 className="mb-2 font-fraunces leading-[1.12] text-[1.1rem] font-extrabold">
                  {step.title}
                </h3>
                <p className="text-[15px] text-[#C9DAF5]">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
