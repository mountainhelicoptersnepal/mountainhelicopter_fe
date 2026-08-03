const shots = [
  {
    name: "The Cloud Sea",
    detail: "Gokyo · Dawn",
    description:
      "Morning cloud inversions can fill the valley below the peaks, creating layers that are difficult to photograph from the ground.",
    accent: "gold",
  },
  {
    name: "Ama Dablam Rim Light",
    detail: "Early Morning",
    description:
      "Position the aircraft according to the seasonal sun angle to photograph light running along the mountain ridge.",
    accent: "blue",
  },
  {
    name: "Everest Summit Plume",
    detail: "Everest Region",
    description:
      "Capture high-altitude wind carrying snow from the summit ridge when visibility and atmospheric conditions allow.",
    accent: "blue",
  },
  {
    name: "Terraced Valleys",
    detail: "Nepal Mid-Hills",
    description:
      "Aerial patterns of farmland, rivers and contour lines photographed from directly above or at a low angle.",
    accent: "gold",
  },
  {
    name: "Glacier Textures",
    detail: "Khumbu Region",
    description:
      "Photograph crevasses, seracs, ice formations and glacial movement from an aerial perspective.",
    accent: "blue",
  },
  {
    name: "Mountain Settlements",
    detail: "Blue Hour",
    description:
      "Stone villages, trails, monasteries and early-morning activity framed beneath the larger Himalayan landscape.",
    accent: "blue",
  },
];

export default function Shots() {
  return (
    <article aria-labelledby="shots-heading">
      <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#B8860B]">
        The Portfolio
      </p>

      <h2
        id="shots-heading"
        className="font-fraunces text-[clamp(1.75rem,3.4vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-[#003366]"
      >
        The shots available from the air.
      </h2>

      <p className="mb-8 mt-4 max-w-[600px] leading-[1.75] text-[#475569]">
        Your route can be designed around landscapes, mountain faces, glaciers,
        settlements, commercial filming requirements or a specific shot list.
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {shots.map((shot) => (
          <div
            key={shot.name}
            className={`rounded-2xl border border-[#E2E8F0] bg-white p-5 transition hover:shadow-[0_8px_24px_rgba(0,51,102,0.12)] ${
              shot.accent === "gold"
                ? "border-t-4 border-t-[#F2B632]"
                : "border-t-4 border-t-[#003366]"
            }`}
          >
            <h3 className="font-fraunces text-xl font-semibold text-[#003366]">
              {shot.name}
            </h3>

            <p className="mb-3 mt-1 text-[11px] font-bold uppercase tracking-[0.08em] text-[#B8860B]">
              {shot.detail}
            </p>

            <p className="text-xs leading-[1.7] text-[#475569]">
              {shot.description}
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}