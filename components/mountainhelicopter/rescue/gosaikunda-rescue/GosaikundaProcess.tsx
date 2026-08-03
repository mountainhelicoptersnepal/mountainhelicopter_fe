const processSteps = [
  {
    number: "01",
    title: "Emergency Call and Patient Information",
    duration: "Typical duration: 3–5 min",
    paragraphs: [
      "Following the received rescue call from the patients, trekking agency, hotels, guide, relatives, and insurance companies, Mountain Helicopters Nepal launches the rescue mission to Gosaikunda as Gosaikunda Helicopter Rescue. All necessary information regarding the patients is gathered: Name, Situation, Altitude, Location, Nationality, Insurance, and emergency contacts.",
    ],
  },
  {
    number: "02",
    title: "Location and Weather Verification",
    duration: "Typical duration: 5–10 min",
    paragraphs: [
      "The location for the rescue is identified by GPS coordinates, the name of the village, lodge, helipad, trail point, or the names of famous landmarks, like Gosaikunda Lake, Lauribina, Sing Gompa (Chandanbari), or Dhunche. The weather check includes visibility, wind speed, altitude of clouds, security of the landing site, and the weather forecast.",
    ],
  },
  {
    number: "03",
    title: "Insurance or Payment Confirmation",
    duration: "Typical duration: 10–20 min",
    paragraphs: [
      "If the patient is traveling under an insurance plan, proof of the same is needed, including policy numbers and the insurance assistance company. Medical records, a doctor’s note, a guide report, or rescue approval may be sought as a guarantor. In cases where no insurance is held, a promise of full payment or a direct deposit is required to be made.",
    ],
  },
  {
    number: "04",
    title: "Helicopter Dispatch",
    duration: "Typical duration: 45–60 min from Kathmandu",
    paragraphs: [
      "Once the details of the rescue (e.g., destination, weather forecast, insurance, and/or payment information) are finalized, a helicopter from our fleet (based in Kathmandu) is dispatched, as long as route and flight safety are assured based on altitude, distance, availability of the chopper, and decisions made by the pilot.",
    ],
  },
  {
    number: "05",
    title: "Patient Pickup and Medical Evacuation",
    duration: "On-scene time: 5–15 min",
    paragraphs: [
      "The patient is picked up from the most suitable location available within the Gosaikunda region, such as the Gosaikunda lake helipad, Lauribina, or Sing Gompa. In case a direct landing is not feasible, the patient is transferred to the nearest accessible safe zone.",
      "The patient is then airlifted to Kathmandu with oxygen support facilities if necessary.",
    ],
  },
  {
    number: "06",
    title: "Documents for Insurance",
    duration: "Provided within 24–48 hours",
    paragraphs: [
      "Documents like flight details, the route for evacuation, the place from where the patient was rescued, evacuation time, information regarding the patient, and invoice documents for insurance/records are made ready after the evacuation process is completed upon the conclusion of the Gosaikunda helicopter rescue mission.",
    ],
  },
];

function ProcessCard({ number, title, duration, paragraphs }) {
  return (
    <div className=" relative grid w-full grid-cols-[26px_minmax(0,1fr)] items-start gap-4 md:grid-cols-[34px_minmax(0,836px)] md:gap-[34px] ">
      {/* Timeline number */}
      <div className="relative z-10 flex w-full justify-center pt-[18px]">
        <span className=" flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-[#F2B632] bg-white font-manrope text-[10px] font-bold leading-none text-[#003366] ">
          {number}
        </span>
      </div>

      {/* Journey step card */}
      <article className=" w-full max-w-[836px] rounded-[22px] border border-white/12 bg-[#003366]/42 px-5 py-[18px] backdrop-blur-[2px] md:px-7 ">
        {/* Inner content: 780px after 28px side padding */}
        <div className="flex w-full flex-col gap-[14px]">
          {/* Step label */}
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-[2px] w-8 shrink-0 bg-[#F2B632]"
            />

            <p className=" font-manrope text-[10px] font-bold uppercase leading-[15px] tracking-[0px] text-[#F2B632] ">
              {number} / Rescue journey
            </p>
          </div>

          {/* Step title */}
          <h3 className=" font-fraunces text-[22px] font-semibold uppercase leading-[27px] tracking-[0px] text-white ">
            {title}
          </h3>

          {/* Duration */}
          <p className="font-manrope text-[11px] font-normal leading-[18px] text-white/70">
            {duration}
          </p>

          {/* Step description */}
          <div className=" space-y-[10px] font-manrope text-[13px] font-normal leading-[20px] tracking-[0px] text-white/78 ">
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
    <section
      id="process"
      className=" relative isolate scroll-mt-[123px] overflow-hidden bg-[#031A2D] px-5 py-16 sm:px-8 lg:px-12 lg:py-20 "
    >
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
      <div
        aria-hidden="true"
        className=" absolute inset-0 -z-10 bg-gradient-to-b from-[#001628]/80 via-[#06233A]/65 to-[#031A2D]/90 "
      />

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

          <h2 className=" mt-4 w-full text-center font-fraunces text-[36px] font-semibold leading-[44px] tracking-[0px] text-white sm:text-[42px] sm:leading-[50px] lg:text-[48px] lg:leading-[56px] ">
            Our Gosaikunda Helicopter Rescue
            <span className="block font-black italic text-[#F2B632]">
              Process
            </span>
          </h2>

          <p className=" mx-auto mt-4 w-full max-w-[1190px] text-center font-manrope text-[16px] font-normal leading-[24px] tracking-[0px] text-white/70 ">
            If there comes a case for Gosaikunda helicopter rescue, there is a
            standard emergency response mechanism that follows the process to
            provide prompt and efficient rescue response. We will send in a
            Helicopter that operates from our hub in Kathmandu and has vast
            experience in flying at high altitude from our base as soon as the
            patient&apos;s condition, its location (GPS coordinates) and
            possibility of weather are verified with our control room. We will
            have completed the required formalities for the payment or
            insurance approval while our experienced and ready pilots and
            medics will get ready for flight, a helicopter with the available
            oxygen facility and basic first aid equipment will land on the
            desired landing spot (Gosaikunda shores or on Lauribina La pass) for
            a helicopter evacuation for the patient. Our helicopter team,
            ground team and the hospital are regularly updated by the
            trekker&apos;s guide present on the site until the completion of
            the successful rescue operation.
          </p>
        </div>

        {/* Process timeline */}
        <div className="relative mx-auto mt-12 max-w-[900px]">
          <div
            aria-hidden="true"
            className=" absolute bottom-3 left-[10.5px] top-3 w-[2px] bg-[#F2B632]/50 md:left-[14.5px] "
          />

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
            24/7 operational coordination · Gosaikunda region
          </p>
        </div>
      </div>
    </section>
  );
}