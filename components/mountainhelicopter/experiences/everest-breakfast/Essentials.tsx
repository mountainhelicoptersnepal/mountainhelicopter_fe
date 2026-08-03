import {
  Check,
  Eye,
  FileText,
  Heart,
  Info,
  Mountain,
} from "lucide-react";

const included = [
  "Helicopter flight operated according to route and weight conditions",
  "Kathmandu hotel pickup and drop-off where included",
  "Breakfast at Hotel Everest View",
  "Applicable landing fees and standard permits",
  "Onboard oxygen for high-altitude operations",
  "Flight operated by qualified Himalayan pilots",
];

const know = [
  "Passenger weight must be declared accurately before the flight",
  "Short-term altitude effects may occur at approximately 3,880 metres",
  "Departure time may change due to weather or airport traffic",
  "Weather cancellation terms follow the confirmed booking policy",
  "Passport details may be required before the flight",
];

const bring = [
  "Warm layers suitable for cold mountain temperatures",
  "Sunglasses for high-altitude sunlight and snow glare",
  "Camera or phone with charged batteries",
  "Passport or required identification",
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
        className={`mb-5 text-[10px] font-bold uppercase tracking-[0.15em] ${
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

            <span className="text-sm leading-[1.7] text-[#0A1929]/85">
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
      <div className="mb-8 flex items-center gap-3">
        <Mountain className="text-[#B8860B]" size={24} />

        <h2
          id="essentials-heading"
          className="font-fraunces text-[clamp(1.8rem,3.4vw,2.5rem)] font-semibold text-[#003366]"
        >
          Before the flight
        </h2>
      </div>

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

      <div className="mt-5 grid gap-4 sm:grid-cols-3">
        <div className="flex items-center gap-3 rounded-xl border border-[#E2E8F0] bg-white p-4">
          <Eye size={19} className="shrink-0 text-[#003366]" />

          <span className="text-sm leading-[1.6] text-[#475569]">
            Mountain visibility is weather-dependent
          </span>
        </div>

        <div className="flex items-center gap-3 rounded-xl border border-[#E2E8F0] bg-white p-4">
          <FileText size={19} className="shrink-0 text-[#003366]" />

          <span className="text-sm leading-[1.6] text-[#475569]">
            Passenger details are required before departure
          </span>
        </div>

        <div className="flex items-center gap-3 rounded-xl border border-[#E2E8F0] bg-white p-4">
          <Heart size={19} className="shrink-0 text-[#003366]" />

          <span className="text-sm leading-[1.6] text-[#475569]">
            Medical advice is recommended for high-risk passengers
          </span>
        </div>
      </div>
    </article>
  );
}