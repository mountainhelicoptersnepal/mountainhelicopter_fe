const processSteps = [
  {
    number: "01",
    title: "Emergency Call and Patient Information",
    duration: "Typical duration: 3–5 min",
    paragraphs: [
      "The rescue operation starts with the contact of the patient, guide, trekking company, expedition leader, hotel, or insurance assistance company with Mountain Helicopters Nepal. The patient's name, condition, current location, altitude, nationality, insurance, and emergency contact details are collected as first information.",
    ],
  },
  {
    number: "02",
    title: "Location and Weather Details",
    duration: "Typical duration: 5–10 min",
    paragraphs: [
      "It is essential to verify the location before dispatch. Location details can be given as GPS coordinates, Village name, lodge name, helipad, trail point, or Expedition Camp. Details about weather conditions, cloud level, winds, visibility, and safety of the landing zone are also verified.",
    ],
  },
  {
    number: "03",
    title: "Insurance or Money Details",
    duration: "Typical duration: 10–20 min",
    paragraphs: [
      "In case the patient has any travel insurance, details of that insurance and contact of the assistance company are required. There might be some companies who will want confirmation of payment guarantee, case number, doctor's note, guide's report, or rescue approval before dispatch. In case of no insurance, there may be a requirement for money or a payment guarantee.",
    ],
  },
  {
    number: "04",
    title: "Helicopter Dispatch",
    duration: "Typical duration: 15–45 min from confirmed authorization",
    paragraphs: [
      "Confirmation of rescue leads to dispatch of a helicopter considering weather, route, altitude, availability of the helicopter, and pilot decision. In case of high-altitude rescue, the final call of safety is always taken by the pilot.",
    ],
  },
  {
    number: "05",
    title: "Patient Pickup and Medical Evacuation",
    duration: "On-scene time: 5–15 min",
    paragraphs: [
      "The patient is collected from the most secure pickup spot available. If there is no direct landing spot for the chopper at the patient’s spot, then he or she may have to be moved to a nearby helicopter pad, open field, ridge, lodge site, or any other secure pickup spot.",
      "Once the patient is collected, he or she is taken to Lukla, Kathmandu, or a hospital, based on the nature of his or her illness.",
    ],
  },
  {
    number: "06",
    title: "Documents for Insurance",
    duration: "Provided within 24–48 hours",
    paragraphs: [
      "Following the evacuation, the necessary rescue documents can be prepared. These include the flight details, invoice, patient’s data, route, rescue point, and the time of evacuation.",
    ],
  },
];

function ProcessCard({ number, title, duration, paragraphs }) {
  return (
    <div className=" relative grid w-full grid-cols-[26px_minmax(0,1fr)] items-start gap-4 md:grid-cols-[34px_minmax(0,836px)] md:gap-[34px] " >
      {/* Timeline number */}
      <div className="relative z-10 flex w-full justify-center pt-[18px]">
        <span className=" flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-[#F2B632] bg-white font-manrope text-[10px] font-bold leading-none text-[#003366] " >
          {number}
        </span>
      </div>

      {/* Journey step card */}
      <article className=" w-full max-w-[836px] rounded-[22px] border border-white/12 bg-[#003366]/42 px-5 py-[18px] backdrop-blur-[2px] md:px-7 " >
        {/* Inner content: 780px after 28px side padding */}
        <div className="flex w-full flex-col gap-[14px]">
          {/* Step label */}
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-[2px] w-8 shrink-0 bg-[#F2B632]"
            />

            <p className=" font-manrope text-[10px] font-bold uppercase leading-[15px] tracking-[0px] text-[#F2B632] " >
              {number} / Rescue journey
            </p>
          </div>

          {/* Step title */}
          <h3 className=" font-fraunces text-[22px] font-semibold uppercase leading-[27px] tracking-[0px] text-white " >
            {title}
          </h3>

          {/* Duration */}
          <p className="font-manrope text-[11px] font-normal leading-[18px] text-white/70">
            {duration}
          </p>

          {/* Step description */}
          <div className=" space-y-[10px] font-manrope text-[13px] font-normal leading-[20px] tracking-[0px] text-white/78 " >
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}

export default function EverestProcess() {
  return (
    <section id="process" className=" relative isolate scroll-mt-[123px] overflow-hidden bg-[#031A2D] px-5 py-16 sm:px-8 lg:px-12 lg:py-20 " >
      {/* Background image */}
      <div
        aria-hidden="true"
        className=" absolute inset-0 -z-30 bg-cover bg-center bg-no-repeat "
        style={{
          backgroundImage: "url('/images/rescue/regions/kala-patthar.jpg')",
        }}
      />

      {/* Dark navy overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[#031A2D]/80"
      />

      {/* Extra gradient for text readability */}
      <div aria-hidden="true" className=" absolute inset-0 -z-10 bg-gradient-to-b from-[#001628]/80 via-[#06233A]/65 to-[#031A2D]/90 " />

      <div className="mx-auto w-full max-w-[1180px]">
        {/* Section heading */}
        <div className="mx-auto w-full max-w-[1190px] text-center">
          <div className="flex items-center justify-center gap-3">
            <span
              aria-hidden="true"
              className="h-[1.8px] w-[44px] bg-[#F2B632]"
            />

            <p className="font-manrope text-[12px] font-semibold uppercase leading-[12px] tracking-[1px] text-[#F2B632]">
              Our Process
            </p>
          </div>

          <h2 className=" mt-4 w-full text-center font-fraunces text-[36px] font-semibold leading-[44px] tracking-[0px] text-white sm:text-[42px] sm:leading-[50px] lg:text-[48px] lg:leading-[56px] " >
            From your call to Kathmandu hospital,
            <span className="block font-black italic text-[#F2B632]">
              step by step.
            </span>
          </h2>

          <p className=" mx-auto mt-4 w-full max-w-[1190px] text-center font-manrope text-[16px] font-normal leading-[24px] tracking-[0px] text-white/70 "
          >
            A clear rescue journey, from the first call through to hospital
            handover.
          </p>
        </div>

        {/* Process timeline */}
        <div className="relative mx-auto mt-12 max-w-[900px]">
          <div aria-hidden="true" className=" absolute bottom-3 left-[10.5px] top-3 w-[2px] bg-[#F2B632]/50 md:left-[14.5px] " />

          <div className="space-y-8 md:space-y-10">
            {processSteps.map((step) => (
              <ProcessCard key={step.number} {...step} />
            ))}
          </div>
        </div>

        {/* Journey footer */}
        <div className="mx-auto mt-6 flex w-fit items-center gap-[10px]">
          <span
            aria-hidden="true"
            className="h-2 w-2 shrink-0 rounded-full bg-[#F2B632]"
          />

          <p className="font-manrope text-[12px] font-semibold leading-[18px] tracking-[0px] text-[#F2B632]/90">
            24/7 operational coordination · Everest region
          </p>
        </div>
      </div>
    </section>
  );
}
