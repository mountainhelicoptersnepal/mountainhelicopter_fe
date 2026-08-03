const processSteps = [
  {
    number: "01",
    title: "Emergency Call and Patient Information",
    duration: "Typical duration: 3–5 min",
    paragraphs: [
      "When someone needs a Muktinath helicopter rescue they can reach out to Mountain Helicopters Nepal either as a patient, trekking agency, guide, or an insurance provider. The 24/7 dispatch center collects information regarding the patient's name, status, whereabouts, altitude, nationality, insurance policy, and the nearest emergency contacts of the victim. Meanwhile, medical advisors who are on call verify the patient's medical condition over a satellite or telephone.",
    ],
  },
  {
    number: "02",
    title: "Location and Weather Verification",
    duration: "Typical duration: 5–10 min",
    paragraphs: [
      "The rescue spot is verified by GPS coordinates, name of the village, or with landmarks like Muktinath Temple, Jomsom or Kagbeni. Safety factors such as wind condition, weather condition, visibility, cloud base, and availability of landing area are reviewed before departure.",
    ],
  },
  {
    number: "03",
    title: "Insurance or Payment Confirmation",
    duration: "Typical duration: 10–20 min",
    paragraphs: [
      "If the patient has travel insurance, policy details and assistance company contacts are required. A guarantee letter or rescue approval is obtained directly from the provider. Without insurance, direct payment or a payment guarantee is required to be processed.",
    ],
  },
  {
    number: "04",
    title: "Helicopter Dispatch",
    duration: "Typical duration: 45–60 min from Pokhara",
    paragraphs: [
      "After the rescue request is confirmed, the helicopter is dispatched from Pokhara or Kathmandu. The transit time is maintained between 45 and 60 minutes from the Pokhara base. The operational parameters are strictly defined: operations are conducted up to 4,200 meters, the maximum passenger capacity is limited to 5 individuals, and the total payload is strictly limited to 400 kg to ensure high-altitude safety.",
    ],
  },
  {
    number: "05",
    title: "Patient Pickup and Medical Evacuation",
    duration: "On-scene time: 5–15 min",
    paragraphs: [
      "The patient is picked up from the safest available point in the Muktinath region. The patient is carefully loaded by the ground crew and the accompanying medic.",
      "During the flight, vital signs are monitored, and supplemental oxygen is administered if needed. A ground ambulance is pre-staged at the helipad in Kathmandu or Pokhara for immediate hospital handover.",
    ],
  },
  {
    number: "06",
    title: "Documents for Insurance",
    duration: "Provided within 24–48 hours",
    paragraphs: [
      "After the Muktinath helicopter evacuation, documents such as flight details, rescue route, pickup location, evacuation time, patient information, and the final invoice are prepared and submitted directly to the insurance company by our claims department.",
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
            Our Muktinath Helicopter Rescue
            <span className="block font-black italic text-[#F2B632]">
              Process
            </span>
          </h2>

          <p className=" mx-auto mt-4 w-full max-w-[1190px] text-center font-manrope text-[16px] font-normal leading-[24px] tracking-[0px] text-white/70 ">
            Our Muktinath helicopter rescue procedures are implemented with an
            efficient round the clock emergency system that assures instant
            medical assistance. Right after receiving the first signs of
            urgency, precise GPS locations of the patients are authenticated
            along with medical status and flight conditions on weather
            feasibility by the operations center. Simultaneous validation with
            travel insurance providers or direct confirmation payment is taken
            to eliminate any operational time lag, whilst a specialist
            low-level altitude aircraft is prepared for air travel by a team of
            certified airline officers. On the landing site, patients are
            stabilized on air with proper oxygen and first aid support before
            landing them at the nearest tertiary medical facilities in
            Kathmandu or Pokhara through uninterrupted continuous monitoring
            service.
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
            24/7 operational coordination · Muktinath region
          </p>
        </div>
      </div>
    </section>
  );
}