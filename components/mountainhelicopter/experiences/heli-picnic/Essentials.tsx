import { Check, Info } from "lucide-react";

const included = [
  "Exclusive helicopter and a private landing site selected for the season",
  "Gourmet picnic with dietary requirements arranged in advance",
  "Complete setup and pack-down by the ground team",
  "Rugs, cushions and table service at the picnic site",
  "Applicable permits and landing arrangements",
  "Crew support while maintaining your privacy",
];

const know = [
  "The final location varies according to season and weather",
  "Many sites have little or no mobile phone signal",
  "Champagne, cake and flowers can be added on request",
  "Children are welcome when the selected site is suitable",
  "The pilot monitors the weather throughout the picnic",
];

const bring = [
  "Sunhat and sunscreen for strong high-altitude sunlight",
  "Warm layers for rapid temperature changes",
  "Camera or phone with fully charged batteries",
  "Comfortable shoes suitable for uneven ground",
  "Personal medication and a small day bag",
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