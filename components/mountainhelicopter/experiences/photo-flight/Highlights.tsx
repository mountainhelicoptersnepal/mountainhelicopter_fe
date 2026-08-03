import {
  Check,
  ShieldCheck,
  Sun,
  Video,
} from "lucide-react";

const highlights = [
  {
    icon: ShieldCheck,
    title: "Doors-off preparation",
    description: "Harnesses, communication and briefing",
  },
  {
    icon: Sun,
    title: "Routes planned around light",
    description: "Dawn, dusk and seasonal sun angles",
  },
  {
    icon: Video,
    title: "Professional camera support",
    description: "Heavy equipment reviewed in advance",
  },
  {
    icon: Check,
    title: "Permit coordination",
    description: "Route and filming requirements assessed",
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
            <div
              key={highlight.title}
              className="flex items-center gap-4"
            >
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