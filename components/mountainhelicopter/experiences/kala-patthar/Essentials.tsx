import { Check, Info } from "lucide-react";

const included = [
  "Private helicopter, weight-limited to 3 guests at altitude",
  "Oxygen supplementation onboard, used routinely above 5,000 m",
  "Down jackets provided on request",
  "Hot tea thermos at the summit stop",
  "All landing fees and Sagarmatha National Park permits",
  "High-altitude briefing from your captain, plus hotel pickup and drop",
];

const know = [
  "15-minute maximum ground time, a hard safety limit, non-negotiable",
  "At 5,545 m you have around 50% of sea-level oxygen, you will feel it",
  "Very cold at dawn, minus 10°C is possible on the ridge",
  "Age 5+ recommended; doctor's approval for 70+ or heart and lung conditions",
  "Departure can shift 1–2 hours for weather, keep the morning flexible",
];

const bring = [
  "Your warmest layers, dress for a freezer with a view",
  "Gloves and a warm hat, fingers go numb fast at minus 10°C",
  "Sunglasses, category 4 ideal; snow glare at 5,500 m is ferocious",
  "A fully charged camera, cold halves battery life",
  "Passport copy, needed for the national park checkpoint",
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
              <Info size={16} className="mt-1 shrink-0 text-[#003366]" />
            ) : (
              <Check
                size={16}
                strokeWidth={2.5}
                className="mt-1 shrink-0 text-[#B8860B]"
              />
            )}

            <span className="text-sm leading-relaxed text-[#0A1929]/85">
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

        <InformationCard title="What to Know" items={know} type="info" />

        <InformationCard title="What to Bring" items={bring} type="bring" />
      </div>
    </article>
  );
}
