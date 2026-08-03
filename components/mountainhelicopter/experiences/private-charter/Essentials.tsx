import { Check, Info } from "lucide-react";

const included = [
  "Private aircraft and operating crew for the confirmed itinerary",
  "Dedicated route-planning support",
  "Assessment of permits and landing arrangements",
  "Coordination of requested meals and ground services",
  "Multi-day accommodation and transfer planning where included",
  "Operational flexibility when weather, fuel and safety allow",
];

const know = [
  "Pricing depends on flight time, route and landing arrangements",
  "A detailed quotation should be approved before confirmation",
  "Multi-day itineraries require additional aircraft-positioning planning",
  "Larger groups may require more than one aircraft",
  "Restricted regions need additional permit-processing time",
];

const bring = [
  "Your list of preferred destinations and experiences",
  "Passenger names and accurate body weights",
  "Flexibility for weather and operational adjustments",
  "Warm clothing suitable for the highest planned stop",
  "Any old photographs, maps or family information relevant to the route",
];

type InformationCardProps = {
  title: string;
  items: string[];
  type?: "info" | "included" | "bring";
};

function InformationCard({ title, items, type }: InformationCardProps) {
  const isInfo = type === "info";

  return (
    <div
      className={`rounded-2xl border p-6 ${
        isInfo
          ? "border-[#003366]/15 bg-[#E6F0F8]"
          : "border-[#E2E8F0] bg-white"
      }`}
    >
      <p
        className={`mb-5 text-[11px] font-bold uppercase tracking-[0.15em] ${
          isInfo ? "text-[#003366]" : "text-[#B8860B]"
        }`}
      >
        {title}
      </p>

      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            {isInfo ? (
              <Info
                size={16}
                className="mt-1 shrink-0 text-[#003366]"
              />
            ) : (
              <Check
                size={16}
                strokeWidth={2.5}
                className="mt-1 shrink-0 text-[#B8860B]"
              />
            )}

            <span className="text-sm leading-[1.75] text-[#0A1929]/85">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Essentials() {
  return (
    <article aria-labelledby="essentials-heading">
      <h2 id="essentials-heading" className="sr-only">
        What is included, what to know and what to bring
      </h2>

      <div className="grid gap-5 md:grid-cols-3">
        <InformationCard
          title="What's Included"
          items={included}
          type="included"
        />

        <InformationCard
          title="What to Know"
          items={know}
          type="info"
        />

        <InformationCard
          title="What to Bring"
          items={bring}
          type="bring"
        />
      </div>
    </article>
  );
}