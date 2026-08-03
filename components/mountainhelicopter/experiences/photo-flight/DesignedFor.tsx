import {
  Aperture,
  Briefcase,
  Camera,
  Video,
} from "lucide-react";

const travellers = [
  {
    icon: Aperture,
    title: "The landscape photographer",
    description:
      "Create aerial perspectives of mountain faces, glaciers, valleys and settlements that cannot be reached from a trekking viewpoint.",
  },
  {
    icon: Video,
    title: "The documentary crew",
    description:
      "Plan transport, aerial filming, crew movement and equipment around a production schedule and changing weather window.",
  },
  {
    icon: Briefcase,
    title: "The commercial production",
    description:
      "Coordinate brand campaigns, commercial footage, product filming and production logistics with the flight operations team.",
  },
  {
    icon: Camera,
    title: "The serious photography enthusiast",
    description:
      "Book a professionally planned aerial photography flight with the same safety briefing and route-planning process.",
  },
];

export default function DesignedFor() {
  return (
    <article aria-labelledby="designed-for-heading">
      <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#B8860B]">
        Is This Your Flight?
      </p>

      <h2
        id="designed-for-heading"
        className="mb-8 font-fraunces text-[clamp(1.75rem,3.4vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-[#003366]"
      >
        Designed for photographers and crews.
      </h2>

      <div className="grid gap-5 md:grid-cols-2">
        {travellers.map((traveller) => {
          const Icon = traveller.icon;

          return (
            <div
              key={traveller.title}
              className="rounded-2xl border border-[#E2E8F0] bg-white p-6 transition hover:border-[#F2B632] hover:shadow-[0_8px_24px_rgba(0,51,102,0.12)]"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#E6F0F8] text-[#003366]">
                <Icon size={21} strokeWidth={1.8} />
              </div>

              <h3 className="mb-2 font-bold text-[#0A1929]">
                {traveller.title}
              </h3>

              <p className="text-sm leading-[1.75] text-[#475569]">
                {traveller.description}
              </p>
            </div>
          );
        })}
      </div>
    </article>
  );
}