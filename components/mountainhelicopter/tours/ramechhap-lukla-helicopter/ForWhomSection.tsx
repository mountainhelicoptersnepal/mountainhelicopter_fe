const designedForItems = [
  {
    title: "Delayed-flight passengers",
    description:
      "Passengers whose scheduled flight to Lukla has been delayed, canceled, or rescheduled.",
  },
  {
    title: "Travelers without fixed-wing tickets",
    description:
      "Travelers unable to find a fixed-wing ticket for their required departure date.",
  },
  {
    title: "Trekkers with confirmed arrangements",
    description:
      "Trekkers with confirmed guides, accommodation, or trekking arrangements in Lukla and beyond.",
  },
  {
    title: "Limited-time travelers",
    description:
      "Travelers with limited time in Nepal who want to avoid losing a valuable day by staying in Ramechhap.",
  },
  {
    title: "Families and trekking groups",
    description:
      "Families and trekking groups that want to reach Lukla together and continue their itinerary as planned.",
  },
  {
    title: "Climbers and expedition teams",
    description:
      "Climbers and expedition teams traveling with essential personnel or pre-approved equipment.",
  },
  {
    title: "Professional teams",
    description:
      "Film crews, researchers, and development teams working to a fixed schedule in the Everest region.",
  },
  {
    title: "Premium transfer guests",
    description:
      "Travelers looking for the comfort, flexibility and convenience of a premium helicopter service.",
  },
];

export default function ForWhomSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20 lg:px-16 lg:py-28">
        <div className="text-center justify-items-center">
          <p className="flex items-center gap-3 font-manrope text-xs font-bold uppercase tracking-[0.22em] text-[#d89b1d]">
            <span className="h-px w-7 bg-[#d89b1d]" />
            Who This Flight Is For
          </p>

          <h2 className="mt-4 font-fraunces text-2xl font-semibold leading-tight text-[#092c52] sm:text-[42px]">
            For Whom is This Flight{" "}
            <span className="text-[#e3a62a]">Designed?</span>
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-7xl divide-y divide-slate-200">
          {designedForItems.map((item) => (
            <article key={item.title} className="py-6">
              <h3 className="font-manrope text-xs font-bold uppercase tracking-[0.13em] text-[#0b3d6b]">
                {item.title}
              </h3>

              <p className="mt-3 font-manrope text-sm leading-7 text-slate-500">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
