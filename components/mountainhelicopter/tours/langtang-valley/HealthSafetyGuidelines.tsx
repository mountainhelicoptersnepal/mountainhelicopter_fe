import { CircleX } from "lucide-react";

const landingExpectations = [
  "A little shortness of breath when walking.",
  "Possible mild headache or faster heart rate.",
  "Cold and wind exposure at Kyanjin Gompa.",
  "Low risk of serious altitude sickness due to short ground time.",
];

const safetyActions = [
  "Do not run or exert yourself unnecessarily.",
  "Keep ground time within the planned 60-90 minutes.",
  "Inform the pilot immediately if you feel unwell.",
  "Use onboard oxygen if needed.",
];

const contraindications = [
  "Major heart conditions.",
  "Major chronic respiratory problems such as asthma or COPD.",
  "Pregnancy beyond 24 weeks.",
];

export default function HealthSafetyGuidelines() {
  return (
    <section className="bg-[#071b33]">
      <div className="mx-auto max-w-7xl bg-[#061a31] px-6 py-16 md:px-12 md:py-24 lg:px-16 lg:py-28">
        <div className="text-center">
          <p className="flex items-center justify-center gap-3 font-manrope text-xs font-bold uppercase tracking-[0.24em] text-[#e0a321]">
            <span className="h-px w-7 bg-[#e0a321]" />
            Health, Safety, and Altitude Guidelines
          </p>

          <h2 className="mt-5 font-fraunces text-3xl font-semibold leading-tight tracking-[-0.02em] text-white md:text-4xl">
            Health, Safety, and Altitude Guidelines{" "}
            <span className="text-[#e0a321]">(AMS)</span>
          </h2>
        </div>

        <div className="mt-10 border-t border-white/10 pt-9">
          <h3 className="font-manrope text-xs font-bold uppercase tracking-[0.2em] text-[#e0a321]">
            Oxygen and Atmospheric Pressure
          </h3>

          <p className="mt-6 font-manrope text-sm leading-7 text-white/65 md:text-base md:leading-8">
            Kyanjin Gompa is at 3,870 m, where oxygen is around 65% of sea
            level. Because the helicopter lands directly from Kathmandu, your
            body has little time to adapt, so mild temporary symptoms can occur.
          </p>

          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h4 className="font-manrope text-sm font-semibold text-white">
                Possible side effects:
              </h4>
              <ul className="mt-4 space-y-3">
                {landingExpectations.map((item) => (
                  <li key={item} className="flex items-start gap-3 font-manrope text-sm leading-6 text-white/60">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e0a321]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-manrope text-sm font-semibold text-white">
                Preventative measures:
              </h4>
              <ul className="mt-4 space-y-3">
                {safetyActions.map((item) => (
                  <li key={item} className="flex items-start gap-3 font-manrope text-sm leading-6 text-white/60">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e0a321]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-9">
          <h3 className="font-manrope text-xs font-bold uppercase tracking-[0.2em] text-[#e0a321]">
            Who Should Not Fly Without Medical Advice
          </h3>

          <ul className="mt-6 space-y-4">
            {contraindications.map((item) => (
              <li key={item} className="flex items-start gap-3 font-manrope text-sm leading-6 text-white/60">
                <CircleX size={16} strokeWidth={1.7} className="mt-1 shrink-0 text-white/50" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
