import { Check, Info } from "lucide-react";

const included = [
  "Private helicopter with cabin oxygen available",
  "Boarding and ground assistance for elderly and reduced-mobility pilgrims",
  "Applicable landing fees and standard permits",
  "Priest and puja coordination on request",
  "Ground-time planning for darshan and ceremony",
  "Kathmandu hotel pickup and drop where included",
];

const know = [
  "Routes may include Muktinath, Gosaikunda, Damodar Kund, Halesi and Kailash–Mansarovar",
  "Wheelchairs and walking frames must be declared before booking",
  "Aircraft capacity depends on passenger weight, mobility equipment and route",
  "Modest temple clothing is recommended",
  "The main operating periods are March–June and September–November",
];

const bring = [
  "Puja items, or request that the team arrange them",
  "Warm layers for sacred sites between approximately 3,700 and 4,900 metres",
  "Passport or valid identification",
  "Comfortable shoes with good grip",
  "Personal medication and medical documents when relevant",
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