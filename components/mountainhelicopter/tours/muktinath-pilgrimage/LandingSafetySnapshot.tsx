const landingExpectations = [
  "Slightly increased heart rate - your body working harder to circulate oxygen",
  "A mild feeling of breathlessness when moving fast",
  "Possible slight headache if you are sensitive to altitude",
  "Feeling colder than usual despite similar outdoor temperatures",
];

const safetyActions = [
  "Move slowly and deliberately - do not run",
  "Breathe steadily and deeply",
  "Stay hydrated - drink water before the flight",
  "Inform the pilot immediately if you feel unwell",
  "Use the supplemental oxygen onboard if needed",
];

function BulletList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="font-manrope text-[15px] font-bold leading-6 text-[#004b82]">
        {title}
      </h3>

      <ul className="mt-3 space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 font-manrope text-[14px] leading-6 text-[#002347]"
          >
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#f2b632]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function LandingSafetySnapshot() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-5xl gap-16 px-6 py-24 md:grid-cols-2 md:px-12 lg:px-0">
        <BulletList
          title="What to expect during the landing:"
          items={landingExpectations}
        />
        <BulletList title="What you should do:" items={safetyActions} />
      </div>
    </section>
  );
}
