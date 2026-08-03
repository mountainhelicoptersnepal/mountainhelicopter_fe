import {
  Briefcase,
  Compass,
  Home,
  Users,
} from "lucide-react";

const travellers = [
  {
    icon: Users,
    title: "The once-in-a-lifetime family",
    description:
      "Design a private journey around several generations, mobility needs, preferred destinations and the pace of the group.",
  },
  {
    icon: Compass,
    title: "The returning explorer",
    description:
      "Travel beyond the best-known routes to remote valleys, western Nepal, hidden lakes and less-visited mountain regions.",
  },
  {
    icon: Briefcase,
    title: "The corporate group",
    description:
      "Arrange executive travel, private retreats, site visits or leadership meetings in remote Himalayan locations.",
  },
  {
    icon: Home,
    title: "The family homecoming",
    description:
      "Use a district name, old photograph, family story or hand-drawn map to begin planning a return journey.",
  },
];

export default function DesignedFor() {
  return (
    <article aria-labelledby="designed-for-heading">
      <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#B8860B]">
        Is This Your Experience?
      </p>

      <h2
        id="designed-for-heading"
        className="mb-8 font-fraunces text-[clamp(1.75rem,3.4vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-[#003366]"
      >
        Made for journeys like yours.
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