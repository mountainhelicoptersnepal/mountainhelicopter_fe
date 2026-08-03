const processSteps = [
  {
    number: "01",
    label: "Rescue Journey",
    title: "Emergency Call and Patient Information",
    duration: "Typical duration: 3–5 min",
    description:
      "When a rescue call comes from a patient, their guide, trekking company, hotel, relatives, or an insurance company, Mountain Helicopters Nepal starts the Annapurna helicopter rescue operation. We gather the patient’s name, medical situation, altitude, exact location, nationality, insurance provider, and emergency contact details.",
  },
  {
    number: "02",
    label: "Rescue Journey",
    title: "Location and Weather Verification",
    duration: "Typical duration: 5–10 min",
    description:
      "The rescue location is identified using GPS coordinates, village name, lodge, helipad, trail point, or a recognised landmark such as Annapurna Base Camp, Machhapuchhre Base Camp, Deurali, or Thorong High Camp. Weather verification includes visibility, wind speed, cloud altitude, landing-site safety, and the latest available forecast.",
  },
  {
    number: "03",
    label: "Rescue Journey",
    title: "Insurance or Payment Confirmation",
    duration: "Typical duration: 10–20 min",
    description:
      "For insured patients, policy numbers and the insurance assistance company contact must be confirmed. Medical reports, a doctor’s note, guide report, or rescue approval may also be requested. For uninsured patients, a full payment guarantee or direct deposit must be arranged before dispatch.",
  },
  {
    number: "04",
    label: "Rescue Journey",
    title: "Helicopter Dispatch",
    duration: "Typical duration: 15–45 min after confirmation",
    description:
      "Once the rescue destination, weather conditions, insurance or payment information, and operational requirements are confirmed, a helicopter from Pokhara or Kathmandu is dispatched. The mission proceeds only when altitude, distance, aircraft availability, landing conditions, and the pilot’s final safety assessment allow it.",
  },
  {
    number: "05",
    label: "Rescue Journey",
    title: "Patient Pickup and Medical Evacuation",
    duration: "On-scene time: approximately 5–15 min",
    description:
      "The patient is collected from the safest suitable location in the Annapurna region, including Annapurna Base Camp, Machhapuchhre Base Camp, Thorong La approaches, established helipads, or nearby open landing areas. When direct landing is not possible, the patient may be moved to the nearest accessible pickup point. The patient is then airlifted to Pokhara or Kathmandu with oxygen support when required.",
  },
  {
    number: "06",
    label: "Rescue Journey",
    title: "Documentation and Insurance Handover",
    duration: "Prepared after mission completion",
    description:
      "After the evacuation, supporting documentation is prepared for insurance, hospital, and official records. This may include flight details, evacuation route, rescue location, mission timing, patient information, invoice documents, and other records required to complete the claim and medical handover.",
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

export default function AnnapurnaProcess() {
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
            Our Annapurna Helicopter 
            <br />
            <span className="italic text-[#f0ad1f]">Rescue Process.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl font-manrope text-sm leading-7 text-white/55 md:text-base">
            A structured rescue journey from the first emergency call through
            patient evacuation, hospital handover, and insurance documentation.
          </p>
        </div>

        {/* INTRODUCTION */}
        <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-white/10 bg-[#073865]/45 p-5 backdrop-blur-sm md:p-7">
          <p className="font-manrope text-sm leading-7 text-white/70">
            When an Annapurna helicopter rescue call is received, a clearly
            defined emergency procedure ensures quick action with the highest
            possible level of care. A high-altitude aircraft from Pokhara or
            Kathmandu is prepared once the patient&apos;s condition, GPS
            coordinates, rescue location, and weather conditions are confirmed
            by the dispatch centre.
          </p>

          <p className="mt-4 font-manrope text-sm leading-7 text-white/70">
            Insurance or payment confirmation is completed in parallel to avoid
            unnecessary delays while experienced pilots and medical support
            personnel prepare for departure. The aircraft carries oxygen and
            basic first-aid equipment to the designated pickup point, such as
            Annapurna Base Camp, Machhapuchhre Base Camp, or the Thorong La
            approaches.
          </p>

          <p className="mt-4 font-manrope text-sm leading-7 text-white/70">
            The flight crew, ground team, guide, dispatch centre, and receiving
            hospital remain updated throughout the operation until the patient
            is safely transferred to the appropriate medical facility.
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
        <div className="mt-10 flex items-center justify-center gap-3 font-manrope text-xs font-semibold text-[#e1a51f]">
          <span className="h-2 w-2 rounded-full bg-[#e1a51f]" />
          24/7 operational coordination throughout the Annapurna region
        </div>
      </div>
    </section>
  );
}