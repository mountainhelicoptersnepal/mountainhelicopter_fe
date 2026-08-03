import { Camera, Check, Heart, RefreshCw } from "lucide-react";

const travellers = [
  {
    icon: Check,
    title: "The bucket-lister",
    description:
      "There are perhaps five landings on earth in this league. This is the one where the planet's highest mountain stands close enough to fill your whole field of view. Cross it off properly.",
  },
  {
    icon: RefreshCw,
    title: "The trekker the weather beat",
    description:
      "You walked eleven days and the clouds rolled in on the twelfth. It still stings. Come back for the fifteen minutes the mountain owes you — this time, we pick the morning.",
  },
  {
    icon: Camera,
    title: "The photographer",
    description:
      "Dawn light on the Southwest Face, the Icefall in shadow-relief below, air so clear it reads like a filter. Fifteen minutes here outshoots a week almost anywhere else.",
  },
  {
    icon: Heart,
    title: "The milestone-marker",
    description:
      "A fortieth, a recovery, a promise kept, a person remembered. Some moments deserve the biggest backdrop there is — and this is, literally, the biggest there is.",
  },
];

export default function DesignedFor() {
  return (
    <article aria-labelledby="designed-for-heading">
      <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#B8860B]">
        Is This Your Experience?
      </p>

      <h2
        id="designed-for-heading"
        className="mb-8 font-fraunces text-[clamp(1.75rem,3.4vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-[#003366]"
      >
        Made for moments like yours.
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

              <p className="text-sm leading-relaxed text-[#475569]">
                {traveller.description}
              </p>
            </div>
          );
        })}
      </div>
    </article>
  );
}