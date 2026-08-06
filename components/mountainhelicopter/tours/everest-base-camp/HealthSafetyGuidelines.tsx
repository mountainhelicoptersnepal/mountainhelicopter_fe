import { CircleX } from "lucide-react";

const contraindications = [
  "Have a history of serious heart conditions or unstable high blood pressure.",
  "Suffer from any chronic respiratory problems like COPD or severe asthma.",
  "Active pregnancy (especially past your first trimester; we strongly advise against rapid high-altitude helicopter landings in this situation.)",
  "Have had major surgery within the last six weeks.",
];

export default function HealthSafetyGuidelines() {
  return (
    <section className="bg-[#071b33] px-6 py-20 md:px-12 md:py-24 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-7xl bg-[#061a31] px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-28">
        <div className="text-center">
          <p className="flex items-center justify-center gap-3 font-manrope text-[11px] font-bold uppercase tracking-[0.32em] text-[#e0a321]">
            <span className="h-px w-8 bg-[#e0a321]" />
            Health, Safety, and Altitude Guidelines
          </p>

          <h2 className="mt-6 font-fraunces text-[34px] font-semibold leading-tight tracking-[0] text-white md:text-[46px]">
            Health, Safety, and Altitude Guidelines{" "}
            <span className="text-[#e0a321]">(AMS)</span>
          </h2>
        </div>

        <div className="mt-9 border-t border-white/10 pt-9">
          <h3 className="font-manrope text-[12px] font-bold uppercase tracking-[0.3em] text-[#e0a321]">
            Atmospheric Pressure at Altitude
          </h3>

          <p className="mt-7 max-w-[1180px] font-manrope text-base leading-8 text-white/68">
            At Pheriche (4,240 m) and during the Everest Base Camp landing
            (5,364 m), the atmospheric pressure is significantly lower than at
            sea level. This means that with every breath, your body receives a
            reduced amount of oxygen compared to what it normally would. While
            this can make you feel short of breath, lightheaded, or cause your
            heart to beat a little faster, these are normal responses to the
            sudden altitude gain. Because your time at high altitude is limited
            and the helicopter descends promptly after each shuttle run, most
            healthy passengers experience only mild, temporary effects before
            descending to lower elevations.
          </p>
        </div>

        <div className="mt-11 border-t border-white/10 pt-9">
          <h3 className="font-manrope text-[12px] font-bold uppercase tracking-[0.3em] text-[#e0a321]">
            Medical Contraindications
          </h3>

          <p className="mt-7 font-manrope text-base leading-7 text-white/68">
            Please consult your doctor beforehand if you:
          </p>

          <ul className="mt-7 space-y-4">
            {contraindications.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 font-manrope text-sm leading-6 text-white/55"
              >
                <CircleX
                  size={14}
                  strokeWidth={1.8}
                  className="mt-1 shrink-0 text-white/50"
                />

                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
