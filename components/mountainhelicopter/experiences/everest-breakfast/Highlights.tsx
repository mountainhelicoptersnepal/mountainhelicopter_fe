import {
  BadgeCheck,
  Building2,
  Clock3,
  Mountain,
} from "lucide-react";

const highlights = [
  {
    icon: Building2,
    title: "High-altitude hotel",
    description: "Hotel Everest View at 3,880 metres",
  },
  {
    icon: Mountain,
    title: "Major Himalayan peaks",
    description: "Everest, Lhotse, Ama Dablam and more",
  },
  {
    icon: Clock3,
    title: "Approximately 50-minute flight",
    description: "A route trekkers normally cover over several days",
  },
  {
    icon: BadgeCheck,
    title: "Complete experience",
    description: "Flight, permits, breakfast and transfers",
  },
];

export default function Highlights() {
  return (
    <section
      aria-label="Experience highlights"
      className="border-b border-[#F2B632]/20 bg-[#001A33] text-white"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-7 px-6 py-16 md:px-12 md:py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-16 lg:py-16">
        {highlights.map((highlight) => {
          const Icon = highlight.icon;

          return (
            <div key={highlight.title} className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F2B632]/15 text-[#F2B632]">
                <Icon size={24} strokeWidth={1.8} />
              </div>

              <div>
                <h2 className="text-sm font-bold leading-tight">
                  {highlight.title}
                </h2>

                <p className="mt-1 text-xs leading-relaxed text-white/60">
                  {highlight.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}