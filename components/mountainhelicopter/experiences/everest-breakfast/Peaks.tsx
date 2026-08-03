const peaks = [
  {
    name: "Everest",
    altitude: "8,849 M",
    description:
      "The highest mountain on earth, visible beyond the ridges of the upper Khumbu.",
    accent: "gold",
  },
  {
    name: "Lhotse",
    altitude: "8,516 M",
    description:
      "The world's fourth-highest mountain, standing beside Everest across the South Col.",
    accent: "blue",
  },
  {
    name: "Nuptse",
    altitude: "7,861 M",
    description:
      "A dramatic wall of rock and ice forming part of the Everest skyline.",
    accent: "blue",
  },
  {
    name: "Ama Dablam",
    altitude: "6,812 M",
    description:
      "One of the Himalayas' most distinctive and photographed peaks.",
    accent: "gold",
  },
  {
    name: "Kangtega",
    altitude: "6,782 M",
    description:
      "A double-summit mountain rising above the Khumbu landscape.",
    accent: "blue",
  },
  {
    name: "Thamserku",
    altitude: "6,623 M",
    description:
      "A steep ice-covered mountain visible while approaching Namche Bazaar.",
    accent: "blue",
  },
];

export default function Peaks() {
  return (
    <article aria-labelledby="peaks-heading">
      <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#B8860B]">
        From Your Table
      </p>

      <h2
        id="peaks-heading"
        className="font-fraunces text-[clamp(1.8rem,3.4vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-[#003366]"
      >
        The peaks on your breakfast menu.
      </h2>

      <p className="mb-8 mt-4 max-w-[620px] leading-[1.75] text-[#475569]">
        On a clear morning, these Himalayan peaks may be visible from the Hotel
        Everest View area.
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {peaks.map((peak) => (
          <div
            key={peak.name}
            className={`rounded-2xl border border-[#E2E8F0] bg-white p-5 transition hover:shadow-[0_8px_24px_rgba(0,51,102,0.12)] ${
              peak.accent === "gold"
                ? "border-t-4 border-t-[#F2B632]"
                : "border-t-4 border-t-[#003366]"
            }`}
          >
            <h3 className="font-fraunces text-xl font-semibold text-[#003366]">
              {peak.name}
            </h3>

            <p className="mb-3 mt-1 text-[11px] font-bold tracking-[0.08em] text-[#B8860B]">
              {peak.altitude}
            </p>

            <p className="text-xs leading-[1.7] text-[#475569]">
              {peak.description}
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}