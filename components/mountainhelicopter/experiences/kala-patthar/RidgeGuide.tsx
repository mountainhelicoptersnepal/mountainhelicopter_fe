const ridgeViews = [
  {
    name: "Everest",
    altitude: "8,849 M",
    description:
      "Two and a half kilometres away, face-on. The Southwest Face fills half the sky — this is the closest legal look a non-climber gets.",
    accent: "gold",
  },
  {
    name: "Nuptse",
    altitude: "7,861 M",
    description:
      "A serrated blade of ice standing guard at Everest's right shoulder — from here, the two peaks seem to lean into each other.",
    accent: "blue",
  },
  {
    name: "Pumori",
    altitude: "7,161 M",
    description:
      "Towering directly above you — Kala Patthar is a fold in Pumori's skirt. Tilt your head back until your neck complains.",
    accent: "gold",
  },
  {
    name: "Khumbu Glacier & Icefall",
    altitude: "Below You",
    description:
      "A frozen river of grey ice unrolling beneath the ridge, cracking into the Icefall — the maze every summiteer must thread first.",
    accent: "blue",
  },
  {
    name: "Everest Base Camp",
    altitude: "5,364 M",
    description:
      "In climbing season, a scatter of yellow tents on the glacier below — a village of ambition you can take in with one glance.",
    accent: "blue",
  },
  {
    name: "Changtse",
    altitude: "7,543 M",
    description:
      "Peeking over the Lho La pass from the Tibet side — proof that from this ridge, you are looking clean across a border.",
    accent: "blue",
  },
];

export default function RidgeGuide() {
  return (
    <article aria-labelledby="ridge-heading">
      <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#B8860B]">
        From the Black Rock
      </p>

      <h2
        id="ridge-heading"
        className="font-fraunces text-[clamp(1.75rem,3.4vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-[#003366]"
      >
        What surrounds you on the ridge.
      </h2>

      <p className="mb-8 mt-4 max-w-[560px] leading-relaxed text-[#475569]">
        Kala Patthar is the front-row seat of the Himalayas. Turn a slow circle
        and this is what turns with you.
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {ridgeViews.map((view) => (
          <div
            key={view.name}
            className={`rounded-2xl border border-[#E2E8F0] bg-white p-5 transition hover:shadow-[0_8px_24px_rgba(0,51,102,0.12)] ${
              view.accent === "gold"
                ? "border-t-4 border-t-[#F2B632]"
                : "border-t-4 border-t-[#003366]"
            }`}
          >
            <h3 className="font-fraunces text-xl font-semibold text-[#003366]">
              {view.name}
            </h3>

            <p className="mb-3 mt-1 text-[11px] font-bold uppercase tracking-[0.08em] text-[#B8860B]">
              {view.altitude}
            </p>

            <p className="text-xs leading-relaxed text-[#475569]">
              {view.description}
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}