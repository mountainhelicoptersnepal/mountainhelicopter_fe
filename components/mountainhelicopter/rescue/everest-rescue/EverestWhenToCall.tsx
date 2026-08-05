import { Phone } from "lucide-react";

const emergencyCards = [
  {
    title: "Altitude Sickness",
    subtitle: "Symptoms that do not improve with rest or descent",
    items: [
      "Altitude sickness that does not improve with rest or descent",
      "Suspected HAPE or HACE",
      "Mental confusion",
      "Inability to maintain one’s balance",
      "Heavy breathing without any physical exertion",
      "Drowsiness",
      "Coughing up frothy or blood-streaked phlegm",
    ],
  },
  {
    title: "Breathing & Medical Emergencies",
    items: [
      "Difficulties breathing, chest pains, or severe weakness",
      "Severe dehydration, vomiting, diarrhea, or food poisoning",
      "Symptoms that are deteriorating while descent is too slow",
      "Symptoms that make descent too risky or impossible",
    ],
  },
  {
    title: "Injury & Exhaustion",
    items: [
      "Injury from fall, rockfall, ice, trail accident, or climbing accident",
      "Knee, ankle, leg, or back injury preventing descent",
      "Exhaustion after reaching Everest Base Camp or Kala Patthar",
    ],
  },
  {
    title: "Weather & Route Emergencies",
    items: [
      "Weather-related isolation or route blockage",
      "Emergency evacuation from expedition camps or trekking routes",
    ],
    note: "A medical decision should always be made carefully. Mild discomfort does not always require helicopter rescue, but serious symptoms at altitude should never be ignored.",
  },
];

function BulletList({ items }) {
  return (
    <ul className="space-y-0 pt-2">
      {items.map((item) => (
        <li
          key={item}
          className="font-manrope flex min-h-[24.75px] items-start gap-3 text-[18px] font-normal leading-[24.75px] tracking-[0px] text-[rgba(10,25,41,0.85)]"
        >
          <span
            aria-hidden="true"
            className="mt-[8.375px] h-2 w-2 shrink-0 rounded-full border-[0.67px] border-[#B87800]"
          />

          <span className="min-w-0 flex-1">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function EmergencyCard({ title, subtitle, groups, items, note }) {
  return (
    <article className="flex h-full w-full flex-col overflow-hidden rounded-[10px] border-[0.67px] border-[#003366]/15 bg-white">
      {/* Card header */}
      <div className="flex h-[69px] w-full shrink-0 flex-col gap-1 border-b-[0.67px] border-b-[#F2B632]/40 bg-[#003366] px-6 py-4">
        <h3 className="font-manrope text-[12px] font-medium uppercase leading-[16px] tracking-[1.92px] text-[#F2B632]">
          {title}
        </h3>

        {subtitle && (
          <p className="font-manrope text-[11.2px] font-medium leading-[16px] tracking-0 text-[#F8FAFC]/70">
            {subtitle}
          </p>
        )}
      </div>

      {/* Card content */}
      <div className="flex flex-1 flex-col p-6">
        {groups?.map((group, index) => (
          <div key={group.heading} className={index === 0 ? "" : "mt-6"}>
            <h4 className="font-manrope text-[18px] font-normal leading-[28px] tracking-[0px] text-[#003366]">
              {group.heading}
            </h4>

            <BulletList items={group.items} />
          </div>
        ))}

        {items && <BulletList items={items} />}

        {note && (
          <p className="font-manrope mt-6 border-t-[0.67px] border-t-[#003366]/15 pt-4 text-[16px] font-medium leading-[24px] tracking-[0px] text-[#AD1F1F]">
            {note}
          </p>
        )}
      </div>
    </article>
  );
}

export default function EverestWhenToCall() {
  return (
    <section id="when-to-call" className="scroll-mt-[123px] bg-[#F8FAFC]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col px-5 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-[125px]">
        {/* Section heading */}
        <div className="w-full max-w-[1187px]">
          <p className="font-manrope text-[11px] font-medium uppercase leading-[14px] tracking-[1.98px] text-[#F2B632]">
            , When to call
          </p>

          <div className="w-full pt-4 lg:h-[71px]">
            <h2 className="font-fraunces w-full max-w-[1198px] text-[35px] font-semibold leading-[1.08] tracking-[-0.7px] text-[#003366] sm:text-[44px] lg:text-[50.2px] lg:leading-[54.27px] lg:tracking-[-1.02px]">
              When Do You Need Everest Helicopter Rescue?
            </h2>
          </div>

          <p className="font-manrope mt-4 w-full max-w-[768px] text-[16px] font-normal leading-[29.25px] tracking-[0px] text-[rgba(10,25,41,0.85)]">
            An Everest helicopter rescue may be needed if the patient&apos;s
            symptoms are deteriorating and descent is either too slow, too
            risky, or impossible. An ambulance service must be sought if
            symptoms like mental confusion, inability to maintain one&apos;s
            balance, heavy breathing without any physical exertion, drowsiness,
            and coughing up frothy or blood-streaked phlegm have developed.
          </p>
        </div>

        {/* Emergency cards */}
        <div className="mx-auto mt-10 grid w-full max-w-[1187px] grid-cols-1 items-stretch gap-x-5 gap-y-5 md:grid-cols-2 xl:grid-rows-[388.92px_374px]">
          {emergencyCards.map((card) => (
            <EmergencyCard key={card.title} {...card} />
          ))}
        </div>

        {/* Emergency callout */}
        <div className="mx-auto mt-12 w-full max-w-[1094px] overflow-hidden rounded-[20px] border-l-[2.67px] border-l-[#D62828] bg-[#003366] px-6 py-12 text-[#F8FAFC] sm:px-[51px]">
          <div className="mx-auto flex w-full max-w-[533px] flex-col items-start gap-[16px] text-left">
            <h3 className="font-fraunces text-[28px] font-semibold leading-[34px] tracking-[-0.56px] text-[#F8FAFC]">
              Unsure whether helicopter rescue is needed?
            </h3>

            <p className="font-manrope text-[16px] font-normal leading-[24px] tracking-[0px] text-[#F8FAFC]/80">
              A medical decision should always be made carefully. Mild
              discomfort does not always require helicopter rescue, but serious
              symptoms at altitude should never be ignored. If the patient is
              deteriorating and descent is too slow, too risky, or impossible,
              call us immediately.
            </p>

            <a
              href="tel:+9779712082949"
              className="font-manrope mt-[2px] inline-flex min-h-[40px] w-fit items-center justify-center gap-2 rounded-[8px] bg-[#D62828] px-5 text-[9px] font-medium uppercase tracking-[1.5px] text-white transition-colors hover:bg-[#BC2020]"
            >
              <Phone aria-hidden="true" className="h-[20px] w-[20px]" />

              <span>Call now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
