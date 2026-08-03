import {
  Briefcase,
  Heart,
  Star,
  Users,
} from "lucide-react";

const travellers = [
  {
    icon: Heart,
    title: "The anniversary couple",
    description:
      "A milestone anniversary deserves more than a corner table. Celebrate with a private mountain range and a glass raised above the valleys.",
  },
  {
    icon: Users,
    title: "The family reunion",
    description:
      "Up to five guests can share an open mountain setting where children have room to explore and every generation can enjoy the view.",
  },
  {
    icon: Briefcase,
    title: "The deal-closer",
    description:
      "A private ridge can create a memorable setting for leadership conversations, business milestones and executive retreats.",
  },
  {
    icon: Star,
    title: "The quiet-luxury traveller",
    description:
      "No queues, no logos, no crowded viewpoint and no need to perform for anyone. Just privacy, space and a Himalayan horizon.",
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
        Made for tables like yours.
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