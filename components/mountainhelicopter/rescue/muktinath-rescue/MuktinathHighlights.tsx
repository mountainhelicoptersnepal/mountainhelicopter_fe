
const highlights = [
  "Continuous emergency dispatch services are maintained across the Muktinath and Lower Mustang region.",
  "Rapid rescue deployment can be coordinated from Pokhara or Kathmandu depending on aircraft position, weather and operational availability.",
  "High-altitude rescue missions are operated using aircraft suitable for demanding mountain environments.",
  "Flights are conducted by experienced mountain pilots operating under Civil Aviation Authority of Nepal requirements.",
  "Patient support can include onboard oxygen, first-aid equipment and medical coordination where required.",
  "Landing and pickup operations are coordinated from locations such as Muktinath, Jomsom, Kagbeni, Marpha and nearby Mustang routes.",
  "Rescue documentation and insurance coordination are handled with the patient, agency or assistance company.",
  "Patients can be transferred onward to appropriate hospitals or medical facilities in Pokhara or Kathmandu.",
  "Every rescue remains subject to weather, visibility, payload, landing-site condition and the pilot’s final safety decision.",
  "Ground coordination continues until the patient has been handed over to the receiving medical facility.",
];

function HighlightItem({ children }) {
  return (
    <li className="flex items-start gap-4 font-manrope text-[12px] leading-[1.8] text-white/80 sm:text-[13px]">
      <span className="mt-[9px] h-[5px] w-[5px] shrink-0 bg-[#f2a10d]" />
      <span>{children}</span>
    </li>
  );
}

export default function MuktinathHighlights() {
  return (
    <section
      id="highlights"
      className="scroll-mt-[123px] bg-[#061523] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-20 xl:px-[80px] 2xl:px-[125px]"
    >
      <div className="mx-auto max-w-[1440px]">
        <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#f2a10d]">
          — Operational Highlights
        </p>

        <h2 className="mt-5 max-w-[1200px] font-fraunces text-[40px] font-semibold leading-[1.03] tracking-[-0.03em] text-[#f6f2ea] sm:text-[50px] lg:text-[60px]">
          Highlights of Rescue Operation in Muktinath Area
        </h2>

        <div className="mt-10 grid gap-x-16 gap-y-5 lg:grid-cols-2">
          {highlights.map((highlight) => (
            <HighlightItem key={highlight}>{highlight}</HighlightItem>
          ))}
        </div>
      </div>
    </section>
  );
}