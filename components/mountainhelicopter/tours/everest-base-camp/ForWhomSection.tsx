const designedForItems = [
  {
    title: "Travellers on Short Notice",
    description:
      "A short trip to Nepal isn't enough to trek. It is enough to fly. The helicopter departs at dawn from Kathmandu and returns in just 4 to 5 hours. This is the tour designed for tight itineraries and tighter schedules.",
  },
  {
    title: "Families and Multi-Generational Groups",
    description:
      "No fitness requirement. No acclimatization. No age limit. Children aged 3 and above fly, and so do grandparents. The lap of Mount Everest is not reserved for the young and strong. It is reserved for those who book.",
  },
  {
    title: "Creatives & Photographers",
    description:
      "Charter privately for full aircraft control, unobstructed window angles, and extended ground time at 5,545 meters. The amphitheater of the Khumbu giants lit by first light is not a backdrop. It is the subject. Ask about door-off configuration.",
  },
  {
    title: "Travellers With Mobility Limitations",
    description:
      "Knee injuries. Joint conditions. Wheelchair users. Post-surgery recovery. The two-week trek is not an option, but the destination still is. The helicopter removes every physical barrier between Kathmandu and the foot of Mount Everest.",
  },
];

export default function ForWhomSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20 lg:px-16 lg:py-28">
        <div className="text-center justify-items-center">
          <p className="flex items-center gap-3 font-manrope text-xs font-bold uppercase tracking-[0.22em] text-[#d89b1d]">
            <span className="h-px w-7 bg-[#d89b1d]" />
            Who This Flight Is For
          </p>

          <h2 className="mt-4 font-fraunces text-2xl font-semibold leading-tight text-[#092c52] sm:text-[42px]">
            For whom this flight is{" "}
            <span className="text-[#e3a62a]">designed for.</span>
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-7xl divide-y divide-slate-200">
          {designedForItems.map((item) => (
            <article key={item.title} className="py-6">
              <h3 className="font-manrope text-xs font-bold uppercase tracking-[0.13em] text-[#0b3d6b]">
                {item.title}
              </h3>

              <p className="mt-3 font-manrope text-sm leading-7 text-slate-500">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
