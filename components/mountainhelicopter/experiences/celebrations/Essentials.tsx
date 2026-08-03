import { Check, Info } from "lucide-react";

const included = [
  "Private planning with a dedicated flight coordinator",
  "Pre-assessed landing site and celebration setup",
  "Private communication channel",
  "Weather alternative discussed during planning",
  "Basic champagne or non-alcoholic celebration service where requested",
  "Decoy scenic-flight itinerary when appropriate",
];

const know = [
  "Book early when professional photography is required",
  "Important items must be declared before the flight",
  "Photo and video delivery times depend on the selected package",
  "The celebration can be added to a picnic, scenic flight or private charter",
  "Landing location and timing remain weather-dependent",
];

const bring = [
  "The ring, gift or personal item required for the moment",
  "Warm layers suitable for the selected landing altitude",
  "Comfortable shoes for the landing site",
  "Personal documents and identification",
  "Any private words, letters or vows you wish to include",
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