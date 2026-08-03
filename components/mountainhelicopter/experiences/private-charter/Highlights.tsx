import {
  Calendar,
  Map,
  Pencil,
  User,
} from "lucide-react";

const highlights = [
  {
    icon: Map,
    title: "The Himalaya is your route",
    description: "Build an itinerary around your interests",
  },
  {
    icon: User,
    title: "Personal flight designer",
    description: "One coordinator for the complete journey",
  },
  {
    icon: Calendar,
    title: "Multi-day capable",
    description: "Single-day and multi-day planning",
  },
  {
    icon: Pencil,
    title: "Rough ideas are welcome",
    description: "Names, photographs or sketches are enough",
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