import { Phone } from "lucide-react";

const emergencyCards = [
  {
    title: "Why Emergency Air Evacuation is Essential",
    items: [
      "Rapid emergency evacuation",
      "Essential for high altitude related emergencies",
      "There is access to remote locations for helicopter rescue services",
      "Support during serious medical emergencies",
      "Rescue and search capabilities are more in air evacuation",
      "More coverage of rescue regions all over the country",
      "Faster transportation promotes increase in life saving",
      "There is proper travel insurance that also promotes in cost savings",
    ],
  },
  {
    title: "What are the Challenges of Emergency Helicopter Evacuation",
    items: [
      "There are difficult terrains and high elevations",
      "Weather are unpredictable most of the times",
      "There are limited landing areas at the destination",
      "Even after air evacuation distance is still long from medical facilities",
      "Communication and location difficulties arise",
      "High operational cost that other rescue facilities",
      "Altitude related flight limitation occur as high environment can cause affect in helicopter performance",
    ],
  },
];

type EmergencyGroup = {
  heading: string;
  items: string[];
};

type EmergencyCardProps = {
  title: string;
  items?: string[];
  groups?: EmergencyGroup[];
  note?: string;
};

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-[2px] pl-[14px]">
      {items.map((item) => (
        <li key={item} className="pl-[1px]">
          {item}
        </li>
      ))}
    </ul>
  );
}

function EmergencyCard({ title, items, groups, note }: EmergencyCardProps) {
  return (
    <article className="h-full overflow-hidden rounded-[8px] border border-[#D9E0E6] bg-white">
      <div className="flex min-h-[57px] items-center bg-[#003366] px-6 py-3">
        <h3 className="font-manrope text-[16px] font-semibold uppercase leading-[1.3] tracking-[0.04em] text-[#F2B632]">
          {title}
        </h3>
      </div>

      <div className="px-6 py-6 font-manrope text-[13px] font-normal leading-[1.48] text-[#263442] sm:px-7">
        {groups?.map((group, index) => (
          <div key={group.heading} className={index > 0 ? "mt-4" : ""}>
            <h4 className="mb-1 font-manrope text-[13.2px] font-normal leading-[1.5] text-[#263442]">
              {group.heading}
            </h4>

            <BulletList items={group.items} />
          </div>
        ))}

        {items && <BulletList items={items} />}

        {note && (
          <p className="mt-5 font-manrope text-[13.2px] font-normal leading-[1.5] text-[#263442]">
            {note}
          </p>
        )}
      </div>
    </article>
  );
}

export default function WhenToCall() {
  return (
    <section
      id="when-to-call"
      className="scroll-mt-[125px] bg-[#F5F7F9]"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-12 md:py-24 lg:px-16 lg:py-28">
        <div className="mb-[50px]">
          <p className="mb-3 font-manrope text-[11px] font-semibold uppercase leading-none tracking-[1.98px] text-[#B97912]">
            — When to Call
          </p>

          <h2 className="max-w-[940px] font-fraunces text-[51.2px] font-semibold leading-[1.06] tracking-[-1px] text-[#003366] sm:text-[38px] lg:text-[47px]">
            Benefits and Challenges of Rescue From Helicopter
          </h2>
        </div>

        <div className="grid gap-x-7 gap-y-8 md:grid-cols-2">
          {emergencyCards.map((card) => (
            <EmergencyCard key={card.title} {...card} />
          ))}
        </div>

        <div className="mt-9 overflow-hidden rounded-[12px] bg-[#003366] px-6 py-9 text-white sm:px-10 lg:px-[72px] lg:py-[46px]">
          <div className="mx-auto max-w-[720px]">
            <h3 className="font-fraunces text-[23px] font-semibold leading-[1.15] tracking-[-0.2px] text-white sm:text-[28px]">
              When is Emergency Air Evacuation Necessary?

            </h3>

            <p className="mt-4 max-w-[680px] font-manrope text-[11px] font-normal leading-[1.65] text-white/80 sm:text-[17px]">
 In most cases of altitude illness the situation warrants evacuation only if an individual is experiencing severe, life-threatening
  altitude sickness such as HAPE or HACE, or if a group is unable to evacuate because of the extent of a serious illness, trauma or injury, 
  other life-threatening medical emergency, or any conditions preventing descent. Air evacuations also occur due to non-medical factors, such as
   inaccessible trails, absent individuals in the party, adverse weather conditions, insufficient supplies or a necessity for early evacuation before worsening conditions.
            </p>

            <div className="mt-6 flex justify-center sm:justify-start sm:pl-[245px]">
              <a
                href="tel:+9779712682949"
                aria-label="Call emergency rescue number"
                className="inline-flex min-h-[44px] w-[166px] items-center justify-center gap-2 rounded-[8px] bg-[#E52B2F] px-4 font-manrope text-[13px] font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#C92227] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Phone
                  aria-hidden="true"
                  className="h-[13px] w-[13px]"
                  strokeWidth={1.8}
                />

                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
