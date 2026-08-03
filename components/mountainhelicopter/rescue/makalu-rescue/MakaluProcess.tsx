// src/components/rescue/makalu/MakaluProcess.jsx

const processSteps = [
  {
    number: "01",
    title: "Emergency Call and Patient Information",
    description:
      "The Makalu rescue process begins when the patient, guide, expedition leader, lodge, trekking agency, family member, or insurance provider contacts Mountain Helicopters Nepal. Our dispatch team collects the patient’s name, symptoms, exact location, altitude, nationality, insurance details, and emergency contact information.",
    accent: "from-[#f2a10d]/16 via-[#f2a10d]/5 to-transparent",
  },
  {
    number: "02",
    title: "Location and Weather Verification",
    description:
      "The rescue point is verified using GPS coordinates, village or lodge names, helipad details, trail markers, or known locations such as Makalu Base Camp, Yangle Kharka, Dobate, Shipton La, Khongma Danda, and Num. Wind, visibility, cloud cover, terrain, route access, and landing safety are checked before departure.",
    accent: "from-[#1e5aa8]/15 via-[#1e5aa8]/5 to-transparent",
  },
  {
    number: "03",
    title: "Insurance or Payment Confirmation",
    description:
      "For insured patients, policy details and assistance-company contacts are confirmed. The insurer may request a case number, guarantee letter, doctor’s note, guide report, or rescue authorization. Uninsured cases generally require direct payment or a payment guarantee before dispatch.",
    accent: "from-[#d96920]/15 via-[#d96920]/5 to-transparent",
  },
  {
    number: "04",
    title: "Helicopter Dispatch",
    description:
      "Once the rescue requirement, location, weather, insurance or payment details, and patient condition are confirmed, an aircraft is prepared from Kathmandu or the nearest suitable staging point. The pilot makes the final decision based on altitude, weather, visibility, payload, landing access, and route safety.",
    accent: "from-[#2f8b68]/15 via-[#2f8b68]/5 to-transparent",
  },
  {
    number: "05",
    title: "Patient Pickup and Medical Evacuation",
    description:
      "The patient is collected from the safest available point in the Makalu region, including Makalu Base Camp, Yangle Kharka, Dobate, Shipton La, Khongma Danda, or another secure landing area. When direct landing is not possible, the patient is moved to the nearest safe pickup point before evacuation to Kathmandu.",
    accent: "from-[#7a5aa6]/15 via-[#7a5aa6]/5 to-transparent",
  },
  {
    number: "06",
    title: "Documents for Insurance",
    description:
      "After the evacuation, supporting documents are prepared for the patient, hospital, agency, and insurer. These may include flight details, rescue route, pickup location, evacuation time, patient information, dispatch records, medical coordination notes, and the rescue invoice.",
    accent: "from-[#8a6a2a]/15 via-[#8a6a2a]/5 to-transparent",
  },
];

function ProcessCard({ number, title, description, accent }) {
  return (
    <article className="group relative flex h-full min-h-[250px] flex-col overflow-hidden border border-[#cfd3d5] bg-white p-5 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#d99a19] hover:shadow-[0_22px_55px_rgba(7,24,37,0.14)] sm:p-6">
      {/* Animated top line */}
      <span className="absolute left-0 top-0 z-20 h-[3px] w-0 bg-[#f2a10d] transition-all duration-300 group-hover:w-full" />

      {/* Soft accent wash */}
      <span
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
      />

      {/* Decorative glow */}
      <span className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#f2a10d]/0 blur-3xl transition-all duration-500 group-hover:bg-[#f2a10d]/10" />

      <div className="relative z-10 flex items-start gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#b77900] bg-white font-manrope text-[10px] font-semibold text-[#9a6700] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#b77900] group-hover:text-white group-hover:shadow-[0_8px_20px_rgba(183,121,0,0.24)]">
          {number}
        </span>

        <h3 className="pt-1 font-fraunces text-[17px] font-semibold leading-[1.15] text-[#071825] transition-colors duration-300 group-hover:text-[#9b6b00] sm:text-[18px]">
          {title}
        </h3>
      </div>

      <p className="relative z-10 mt-5 font-manrope text-[10px] leading-[1.75] text-[#4c5963] transition-colors duration-300 group-hover:text-[#34434f] sm:text-[11px]">
        {description}
      </p>

      <div className="relative z-10 mt-auto pt-6">
        <span className="block h-px w-10 bg-[#d8d9d7] transition-all duration-300 group-hover:w-full group-hover:bg-[#d99a19]" />
      </div>
    </article>
  );
}

export default function MakaluProcess() {
  return (
    <section
      id="process"
      className="scroll-mt-[123px] bg-[#f6f3ed] px-5 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-[80px] 2xl:px-[125px]"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="max-w-[980px]">
          <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#a66e00]">
            — How a Rescue Unfolds
          </p>

          <h2 className="mt-4 max-w-[1180px] font-fraunces text-[40px] font-semibold leading-[1.03] tracking-[-0.03em] text-[#071825] sm:text-[50px] lg:text-[60px]">
            Our Makalu Base Camp Helicopter Rescue Process
          </h2>

          <div className="mt-5 max-w-[850px] space-y-5 font-manrope text-[11px] leading-[1.8] text-[#4d5963] sm:text-[12px]">
            <p>
              Every Makalu Base Camp helicopter rescue follows a structured
              emergency process designed to verify the patient&apos;s
              condition, exact location, weather, landing access, aircraft
              requirements, and insurance or payment arrangements as quickly as
              possible.
            </p>

            <p>
              Aircraft and crew preparation may begin while dispatch verifies
              the rescue details. Because the Makalu-Barun region is remote and
              weather-sensitive, the pilot makes the final go or no-go decision
              after reviewing visibility, wind, payload, terrain, route safety,
              and landing conditions.
            </p>

            <p>
              After pickup, the patient may be transferred to Kathmandu or
              another suitable medical facility. Our team remains in contact
              with the guide, expedition leader, agency, insurer, and receiving
              hospital until the evacuation handover is completed.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {processSteps.map((step) => (
            <ProcessCard key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}