const emergencyCards = [
  {
    title: "Some of the scenarios where rescues are common:",
    items: [
      "Acute Mountain Sickness (AMS)",
      "High Altitude Pulmonary Edema (HAPE)",
      "High Altitude Cerebral Edema (HACE)",
      "Falls and Fractures on steep rocky trails",
      "Head Injuries",
      "Hypothermia from sudden weather shifts",
      "Exhaustion and Severe Dehydration (especially during the Janai Purnima festival)",
      "Food Poisoning and Gastrointestinal Illness",
      "Cardiac Events",
      "Stroke",
      "Respiratory Illness",
      "Avalanche Exposure",
      "Rockfall Injuries",
      "Lost or Separated Trekkers",
      "Weather-Related Emergencies",
    ],
  },
];

function BulletList({ items }) {
  return (
    <ul className="space-y-0 pt-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex min-h-[24.75px] items-start gap-3 font-manrope text-[18px] font-normal leading-[24.75px] tracking-[0px] text-[rgba(10,25,41,0.85)]"
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

function EmergencyCard({ title, items }) {
  return (
    <article className="flex h-full w-full flex-col overflow-hidden rounded-[10px] border-[0.67px] border-[#003366]/15 bg-white">
      <div className="flex min-h-[69px] w-full shrink-0 flex-col justify-center border-b-[0.67px] border-b-[#F2B632]/40 bg-[#003366] px-6 py-4">
        <h3 className="font-manrope text-[12px] font-medium uppercase leading-[16px] tracking-[1.92px] text-[#F2B632]">
          {title}
        </h3>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <BulletList items={items} />
      </div>
    </article>
  );
}

export default function GosaikundaWhenToCall() {
  return (
    <section id="when-to-call" className="scroll-mt-[123px] bg-[#F8FAFC]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col px-5 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-[125px]">
        <div className="w-full max-w-[1187px]">
          <div className="w-full">
            <h2 className="w-full max-w-[898px] font-fraunces text-[35px] font-semibold leading-[1.08] tracking-[-0.7px] text-[#003366] sm:text-[44px] lg:text-[51.2px] lg:leading-[54.27px] lg:tracking-[-1.02px]">
              When Is Helicopter Rescue Necessary in Gosaikunda?
            </h2>
          </div>

          <p className="mt-4 w-full max-w-[768px] font-manrope text-[16px] font-normal leading-[29.25px] tracking-[0px] text-[rgba(10,25,41,0.85)]">
            Some symptoms aren’t life threatening. One might decide to ‘watch
            and walk out’ until they reach a point where walking down isn’t a
            great distance, or it might become clear a helicopter should be
            sent. This is the biggest, hardest decision a trek leader and the
            rest of the trek team must make: to ‘watch and walk out’, or ‘let’s
            take a helicopter out right now’.
          </p>
        </div>

        <div className="mx-auto mt-10 grid w-full max-w-[1187px] grid-cols-1 items-stretch gap-5">
          {emergencyCards.map((card) => (
            <EmergencyCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}