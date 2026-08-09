import Image from "next/image";

const stats = [
  { value: "4,105+", label: "Lives assisted through rescue support" },
  {
    value: "Rescue Operation",
    label: "All Over Nepal",
  },
  { value: "12 min", label: "Avg. response coordination time" },
  { value: "Sunrise to Sunset", label: "Emergency operations readiness" },
] as const;

const photos = [
  {
    src: "/images/rescue/section/khumbu-glacier-landing.jpg",
    alt: "Mountain Helicopters aircraft making a high-altitude landing beside the Khumbu glacier",
    caption: "High-altitude landing, Khumbu glacier",
  },
  {
    src: "/images/rescue/section/everest-search-rescue.jpg",
    alt: "Search and rescue helicopter operation over the Everest region",
    caption: "Search and rescue, Everest region",
  },
  {
    src: "/images/rescue/section/emergency-medical-evacuation.jpg",
    alt: "Paramedics transferring a patient during an emergency medical evacuation",
    caption: "Emergency medical evacuation in progress",
  },
] as const;

export default function Rescue() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16 py-16 md:py-24 lg:py-28">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-6 bg-[#DCA62E]" />

              <p className="font-manrope text-[10px] font-bold uppercase leading-[15px] tracking-[3.8px] text-[#DCA62E]">
                Emergency, Rescue &amp; Relief Operations
              </p>
            </div>

            <h2 className="font-fraunces text-[26px] font-bold leading-[0.92] tracking-[-0.025em] lg:whitespace-nowrap lg:text-[33px] xl:text-[43.108px]">
              <span className="text-[#003366]">When Every Minute </span>
              <span className="text-[#DCA62E]">Matters</span>
            </h2>

            <div className="flex flex-col gap-5">
              <p className="font-manrope text-[16px] font-medium leading-[26px] text-[#4a5568]">
                When lives are on the line, every minute counts. Mountain
                Helicopters Nepal responds to emergencies across the whole
                country, from the high Himalaya down to the Terai, from crowded
                city streets to the most remote settlements. Behind every
                response to an emergency call is a team that understands the
                weight of every call: pilots with years of flying Nepal's
                hardest routes under their belt, and crew members trained for
                the moments you can't plan for.
              </p>

              <p className="font-manrope text-[16px] font-medium leading-[26px] text-[#4a5568]">
                Every mission is planned around the two things that matter most:
                speed and safety. Our crews have carried climbers down from high
                camps, airlifted the injured from remote roads, evacuated
                patients from small district hospitals, and delivered food and
                medicine to communities affected by floods, landslides, and
                earthquakes. There is no room for error when people are counting
                on us. Our pilots plan every rescue carefully and train
                year-round for the situations you can't plan for. When it goes
                well, the reward is simple: someone gets their life back.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center justify-center gap-1.5 rounded-[10px] border border-[#003366]/[0.08] bg-white px-6 py-5 text-center"
                >
                  <p className="font-fraunces text-[28px] font-bold leading-[28px] text-[#DCA62E]">
                    {stat.value}
                  </p>

                  <p className="font-manrope text-[10px] font-medium uppercase leading-[15px] tracking-[1.6px] text-[#4a5568]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-[530/531] w-full overflow-hidden border border-white/[0.08] lg:mt-[52px]">
            <Image
              src="/images/rescue/landing-rescue-section.jpg"
              alt="Helicopter crew winching a climber to safety during a high-altitude rescue operation"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:mt-10">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="relative h-48 w-full overflow-hidden bg-[#040d18] sm:h-52"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover opacity-65"
              />

              {/* <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#040d18] to-transparent px-4 pb-4 pt-10">
                <p className="font-manrope text-[12px] font-normal leading-[19.5px] text-white/55">
                  {photo.caption}
                </p>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
