import { CircleX } from "lucide-react";

const contraindications = [
  "Have a history of serious heart condition and unstable high blood pressure",
  "Suffer from any chronic respiratory problems like COPD and severe asthma",
  "Active pregnancy (especially past your first trimester)",
  "Have had major surgeries within the past 6 weeks",
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
            At Gosaikunda (4,380 m), the atmospheric pressure is significantly
            lower than at sea level, meaning each breath contains less oxygen
            than your body is accustomed to. As a result, some passengers may
            notice mild shortness of breath, lightheadedness, or a slightly
            faster heartbeat after landing. These are normal physiological
            responses to the sudden increase in altitude and usually remain mild
            because the visit is brief. Since the helicopter returns to lower
            elevations shortly after the stop, most healthy passengers
            experience only temporary effects that resolve naturally during the
            descent. Passengers are encouraged to walk slowly, avoid unnecessary
            exertion, stay hydrated, and follow the pilot&apos;s or crew&apos;s
            instructions throughout the visit to ensure a safe and comfortable
            high-altitude experience.
          </p>
        </div>

        <div className="mt-11 border-t border-white/10 pt-9">
          <h3 className="font-manrope text-[12px] font-bold uppercase tracking-[0.3em] text-[#e0a321]">
            What doctors recommend
          </h3>

          <p className="mt-7 font-manrope text-base leading-7 text-white/68">
            Consult the doctor for any of these if you:
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
