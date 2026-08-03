import { Phone } from "lucide-react";

const emergencyCards = [
  {
    title: "Altitude Illness (AMS / HAPE / HACE)",
    items: [
      "Acute Mountain Sickness (AMS)",
      "High Altitude Pulmonary Edema (HAPE)",
      "High Altitude Cerebral Edema (HACE)",
    ],
  },
  {
    title: "Trauma & Injury",
    items: [
      "Falls and Fractures",
      "Head Injuries",
      "Avalanche Exposure",
    ],
  },
  {
    title: "Medical Emergencies",
    items: [
      "Exhaustion and Severe Dehydration",
      "Food Poisoning and Gastrointestinal Illness",
      "Cardiac Events",
      "Stroke and Respiratory Illness",
    ],
  },
  {
    title: "Stranded & Weather",
    items: [
      "Hypothermia",
      "Lost or Separated Trekkers",
      "Weather-Related Emergencies",
    ],
  },
];

function EmergencyCard({ title, items }) {
  return (
    <article className="flex h-full flex-col border border-[#cfd3d5] bg-white">
      <div className="border-b border-[#d99a19] bg-[#003366] px-4 py-3">
        <h3 className="font-manrope text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#f2a10d]">
          {title}
        </h3>
      </div>

      <div className="flex flex-1 flex-col px-5 py-5 sm:px-6">
        <ul className="space-y-3">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 font-manrope text-[11px] leading-[1.65] text-[#263746] sm:text-[14px]"
            >
              <span className="mt-[7px] h-[5px] w-[5px] shrink-0 rounded-full border border-[#b77900]" />

              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function TilichoWhenToCall() {
  return (
    <section
      id="when-to-call"
      className="scroll-mt-[133px] bg-[#F8FAFC] px-5 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-[80px] 2xl:px-[125px]"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="max-w-[900px]">
          <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#B87800]">
            — When to Call
          </p>

          <h2 className="mt-4 max-w-[980px] font-fraunces text-[40px] font-semibold leading-[1.03] tracking-[-0.03em] text-[#003366] sm:text-[50px] lg:text-[60px]">
            When Is Helicopter Rescue Necessary Near Tilicho Lake?
          </h2>

          <div className="mt-5 max-w-[820px] space-y-5 font-manrope text-[11px] leading-[1.8] text-[#4d5963] sm:text-[18px]">
            <p>
              Not every symptom on the trail requires a helicopter. Recognizing
              the line between &quot;monitor and descend on foot&quot; and
              &quot;evacuate now&quot; is the single most important judgment
              call a guide or trekker makes on this route, where the terrain
              offers fewer easy bailout points than most Nepal treks.
            </p>

            <p>Some of the scenarios where rescues are common:</p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {emergencyCards.map((card) => (
            <EmergencyCard key={card.title} {...card} />
          ))}
        </div>

        <div className="mt-6">
          <div className="w-full px-5 py-8 md:px-8">
            <div className="mx-auto flex min-h-[330px] w-full max-w-[1091px] items-center justify-center rounded-[18px] border-l-2 border-[#c65c00] bg-[#003366] px-6 py-10 text-white sm:px-8 lg:px-12">
              <div className="flex min-h-[235px] w-full max-w-[672px] flex-col justify-center gap-[22px]">
                <h3 className="font-fraunces text-2xl font-semibold leading-[1.15] text-[#f6f2ea] sm:text-3xl">
                  Uncertain whether it&apos;s an emergency?
                </h3>

                <p className="max-w-[650px] font-manrope text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
                  At altitude, decisions must be made before symptoms become
                  unmistakable. If someone is deteriorating, cannot continue
                  safely, or cannot descend without increased medical risk, do
                  not wait to be certain. Call us so the rescue situation can be
                  assessed.
                </p>

                <a
                  href="tel:+9779712082949"
                  className="inline-flex h-11 w-fit items-center justify-center gap-2 bg-[#e52b2f] px-5 font-manrope text-xs font-extrabold uppercase tracking-[0.15em] text-white transition hover:bg-[#c92125]"
                >
                  <Phone size={14} strokeWidth={2} />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}