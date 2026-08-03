const processSteps = [
  {
    number: "01",
    label: "Rescue Journey",
    title: "Emergency Call and Patient Information",
    duration: "Typical duration: 3–5 min",
    description:
      "The Langtang helicopter rescue process begins when the patient, guide, trekking agency, hotel, family member, or insurance company contacts Mountain Helicopters Nepal. We collect the patient’s name, condition, location, altitude, nationality, insurance details, and emergency contact information.",
  },
  {
    number: "02",
    label: "Rescue Journey",
    title: "Verification of Location and Weather",
    duration: "Typical duration: 5–10 min",
    description:
      "Here we need to verify the location with GPS coordinates, village name, lodge, helipad, trail point, or landmarks such as Kyanjin Gompa, Lama Hotel, Langtang Village, and Syabrubesi. At the same time we will check weather, visibility, wind, cloud level, and landing area.",
  },
  {
    number: "03",
    label: "Rescue Journey",
    title: "Insurance Details or Payment Assurance",
    duration: "Typical duration: 10–20 min",
    description:
      "If the patient has travel insurance, then we need their policy details and assistance company contact details. Some of them may require us to provide a guarantee letter, case number, doctor’s recommendation, guide report, or rescue permission. When there is no insurance, then we need direct payment or payment assurance.",
  },
  {
    number: "04",
    label: "Rescue Journey",
    title: "Helicopter Dispatch",
    duration: "Typical duration: 15–45 min after confirmation",
    description:
      "After verifying the rescue requirement, weather condition, location, and insurance or payment detail, we dispatch the helicopter from Kathmandu. Depending on the route safety, altitude, availability of aircraft, and pilot’s safety considerations, the helicopter will fly to the place.",
  },
  {
    number: "05",
    label: "Rescue Journey",
    title: "Patient Pickup and Medical Evacuation",
    duration: "On-scene time: approximately 5–15 min",
    description:
      "The patient is picked up from the safest available point in the Langtang region, such as Kyanjin Gompa, Lama Hotel, Langtang Village, Syabrubesi, a helipad, open field, ridge, or lodge area. If direct landing is not possible, the patient may be moved to the nearest safe pickup point. The patient is then flown to Kathmandu or the nearest suitable medical facility, with oxygen support if required.",
  },
  {
    number: "06",
    label: "Rescue Journey",
    title: "Documents for Insurance",
    duration: "Prepared after mission completion",
    description:
      "After the Langtang helicopter evacuation, documents such as flight details, rescue route, pickup location, evacuation time, patient information, and invoice can be prepared for insurance or official records.",
  },
];

function ProcessStep({
  number,
  label,
  title,
  duration,
  description,
  isLast,
}) {
  return (
    <article className="relative grid grid-cols-[44px_minmax(0,1fr)] gap-5 md:grid-cols-[56px_minmax(0,1fr)] md:gap-7">
      {/* TIMELINE */}
      <div className="relative flex justify-center">
        {!isLast && (
          <span className="absolute bottom-[-48px] top-11 w-px bg-[#d99f19]" />
        )}

        <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#e0a321] bg-white font-manrope text-[10px] font-bold text-[#0a4b7c] md:h-10 md:w-10">
          {number}
        </span>
      </div>

      {/* STEP CARD */}
      <div className="rounded-[22px] border border-[#3170a7]/70 bg-[#073865]/80 px-5 py-6 shadow-[0_16px_40px_rgba(0,16,40,0.18)] backdrop-blur-[2px] md:px-7 md:py-7">
        <p className="flex items-center gap-3 font-manrope text-[10px] font-bold uppercase tracking-[0.16em] text-[#e1a51f]">
          <span className="h-px w-7 bg-[#e1a51f]" />
          {number} / {label}
        </p>

        <h3 className="mt-4 font-fraunces text-xl font-semibold uppercase leading-tight text-white md:text-2xl">
          {title}
        </h3>

        <p className="mt-3 font-manrope text-xs text-white/55">
          {duration}
        </p>

        <p className="mt-4 font-manrope text-sm leading-7 text-white/70">
          {description}
        </p>
      </div>
    </article>
  );
}

export default function LangtangProcess() {
  return (
    <section
      id="process"
      className="relative scroll-mt-[133px] overflow-hidden bg-[#061b31] px-5 py-16 md:px-8 lg:py-24"
    >
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/images/rescue/regions/annapurna-rescue-process-bg.jpg')",
        }}
      />

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-[#061b31]/88" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#061b31]/40 via-transparent to-[#061b31]/90" />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* HEADING */}
        <div className="text-center">
          <p className="flex items-center justify-center gap-3 font-manrope text-xs font-bold uppercase tracking-[0.22em] text-[#e1a51f]">
            <span className="h-px w-8 bg-[#e1a51f]" />
            Our Process
          </p>

          <h2 className="mx-auto mt-5 max-w-4xl font-fraunces text-4xl font-semibold leading-[1.02] tracking-[-0.03em] text-white md:text-5xl lg:text-6xl">
            Our Langtang Helicopter
            <br />
            <span className="italic text-[#f0ad1f]">
              Rescue Process.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl font-manrope text-sm leading-7 text-white/55 md:text-base">
            A structured rescue journey from the first emergency call through
            patient evacuation, hospital handover, and insurance documentation.
          </p>
        </div>

        {/* INTRODUCTION */}
        <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-white/10 bg-[#073865]/45 p-5 backdrop-blur-sm md:p-7">
          <p className="font-manrope text-sm leading-7 text-white/70">
            The Langtang helicopter rescue process begins when the patient,
            guide, trekking agency, hotel, family member, or insurance company
            contacts Mountain Helicopters Nepal. The dispatch team gathers the
            patient&apos;s condition, altitude, exact location, insurance
            information, and emergency contact details.
          </p>

          <p className="mt-4 font-manrope text-sm leading-7 text-white/70">
            The location, weather, visibility, wind, cloud level, and available
            landing area are verified while insurance or payment confirmation
            is completed. Once the rescue requirement and operating conditions
            are confirmed, a helicopter is dispatched from Kathmandu.
          </p>

          <p className="mt-4 font-manrope text-sm leading-7 text-white/70">
            The patient is collected from the safest suitable pickup point in
            the Langtang region and transferred to Kathmandu or the nearest
            appropriate medical facility, with oxygen support when required.
          </p>
        </div>

        {/* PROCESS TIMELINE */}
        <div className="mt-12 space-y-12">
          {processSteps.map((step, index) => (
            <ProcessStep
              key={step.number}
              {...step}
              isLast={index === processSteps.length - 1}
            />
          ))}
        </div>

        {/* BOTTOM NOTE */}
        <div className="mt-10 flex items-center justify-center gap-3 text-center font-manrope text-xs font-semibold text-[#e1a51f]">
          <span className="h-2 w-2 shrink-0 rounded-full bg-[#e1a51f]" />
          24/7 operational coordination throughout the Langtang region
        </div>
      </div>
    </section>
  );
}