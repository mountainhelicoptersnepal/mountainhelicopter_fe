import { CircleX } from "lucide-react";

const landingExpectations = [
  "A slightly faster heartbeat as your body responds to the reduced oxygen level.",
  "Mild shortness of breath when walking quickly or climbing uneven ground.",
  "A light headache, mild dizziness or tiredness in passengers sensitive to altitude.",
  "Feeling significantly colder because of wind, snow and exposed alpine terrain.",
];

const safetyActions = [
   "Walk slowly and avoid running or unnecessary physical exertion.",
  "Breathe steadily and take regular pauses while moving around the lake.",
  "Drink water before the flight and remain properly hydrated.",
  "Stay close to the designated landing area and follow the pilot’s instructions.",
  "Inform the pilot immediately if you feel dizzy, nauseous, confused or unusually breathless.",
  "Use the supplemental oxygen onboard when advised by the pilot or crew.",
];

const contraindications = [
  "A history of serious heart disease, chest pain or unstable high blood pressure.",
  "Chronic respiratory conditions such as COPD, severe asthma or reduced lung capacity.",
  "Pregnancy, particularly after the first trimester, unless approved by a qualified doctor.",
  "Major surgery, serious illness or hospitalisation within the previous six weeks.",
  "Any medical condition that may be affected by rapid travel to high altitude.",
];

export default function HealthSafetyGuidelines() {
  return (
    <section className="bg-[#071b33]">
      <div className="mx-auto max-w-7xl bg-[#061a31] px-6 md:px-12 lg:px-16 py-16 md:py-24 lg:py-28">
        {/* HEADING */}
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

        {/* ATMOSPHERIC PRESSURE */}
        <div className="mt-10 border-t border-white/10 pt-9">
          <h3 className="font-manrope text-xs font-bold uppercase tracking-[0.2em] text-[#e0a321]">
          Atmospheric Pressure and Oxygen Levels
          </h3>

          <p className="mt-6 font-manrope text-sm leading-7 text-white/65 md:text-base md:leading-8">
             At 4,380 metres, the effective oxygen availability is roughly
            58–60% of sea-level conditions. Most healthy passengers can manage
            a short landing, but the rapid altitude gain may still cause mild
            symptoms, particularly during movement or physical exertion.
          </p>

          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* WHAT TO EXPECT */}
            <div>
              <h4 className="font-manrope text-sm font-semibold text-white">
                What to expect during the landing:
              </h4>

              <ul className="mt-4 space-y-3">
                {landingExpectations.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 font-manrope text-sm leading-6 text-white/60"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e0a321]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* WHAT TO DO */}
            <div>
              <h4 className="font-manrope text-sm font-semibold text-white">
                What you should do:
              </h4>

              <ul className="mt-4 space-y-3">
                {safetyActions.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 font-manrope text-sm leading-6 text-white/60"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e0a321]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* MEDICAL CONTRAINDICATIONS */}
        <div className="mt-10 border-t border-white/10 pt-9">
          <h3 className="font-manrope text-xs font-bold uppercase tracking-[0.2em] text-[#e0a321]">
            Medical Contraindications
          </h3>

          <p className="mt-6 font-manrope text-sm leading-7 text-white/65">
            Please consult your doctor before booking if you:
          </p>

          <ul className="mt-6 space-y-4">
            {contraindications.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 font-manrope text-sm leading-6 text-white/60"
              >
                <CircleX
                  size={16}
                  strokeWidth={1.7}
                  className="mt-1 shrink-0 text-white/50"
                />

                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* MEDICAL NOTE */}
        <div className="mt-10 rounded-2xl border border-[#e0a321]/20 bg-[#e0a321]/[0.06] px-5 py-5 md:px-7">
          <p className="font-manrope text-xs leading-6 text-white/55">
            These guidelines provide general travel information and are not a
            substitute for professional medical advice. Passengers with
            existing health conditions should obtain clearance from a qualified
            healthcare professional before travelling rapidly to high altitude.
          </p>
        </div>
      </div>
    </section>
  );
}