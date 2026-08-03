import {
  Clock3,
  Globe,
  Heart,
  Users,
} from "lucide-react";

const travellers = [
  {
    icon: Heart,
    title: "The elder parent",
    description:
      "They have spoken of the temple for years. Their body may no longer allow the overland journey, but the helicopter creates a practical route to the sacred place.",
  },
  {
    icon: Users,
    title: "The family fulfilling a promise",
    description:
      "A vow made during a difficult year or beside a loved one. Multiple generations can travel together and complete the same promise.",
  },
  {
    icon: Clock3,
    title: "The time-bound devotee",
    description:
      "A traveller with limited days in Nepal can complete darshan without spending more than a week travelling overland.",
  },
  {
    icon: Globe,
    title: "The returning diaspora",
    description:
      "Families returning to Nepal can introduce children to the sacred destination remembered by their parents and grandparents.",
  },
];

export default function DesignedFor() {
  return (
    <article aria-labelledby="designed-for-heading">
      <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#B8860B]">
        Is This Your Journey?
      </p>

      <h2
        id="designed-for-heading"
        className="mb-8 font-fraunces text-[clamp(1.75rem,3.4vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-[#003366]"
      >
        Made for vows like yours.
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