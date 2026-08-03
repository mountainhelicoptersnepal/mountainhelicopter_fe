import {
  Clock3,
  Heart,
  ShieldCheck,
  Users,
} from "lucide-react";

const travellers = [
  {
    icon: Clock3,
    title: "Travellers with limited time",
    description:
      "A suitable option for visitors who have only a few days in Nepal but want to experience the Everest region.",
  },
  {
    icon: Users,
    title: "Families and multiple generations",
    description:
      "Parents, children and older family members can share the same Himalayan experience without a multi-day trek.",
  },
  {
    icon: Heart,
    title: "Couples and milestone occasions",
    description:
      "Suitable for anniversaries, birthdays, honeymoons and other private celebrations.",
  },
  {
    icon: ShieldCheck,
    title: "Former trekkers returning to Everest",
    description:
      "A way to revisit the Khumbu region with family members who may not be able to complete the trek.",
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
        className="mb-8 font-fraunces text-[clamp(1.8rem,3.4vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-[#003366]"
      >
        Designed for mornings like yours.
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