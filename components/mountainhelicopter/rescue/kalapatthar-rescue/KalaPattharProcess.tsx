// src/components/rescue/kala-patthar/KalaPattharProcess.jsx

const processSteps = [
  {
    number: "01",
    title: "Emergency Call and Patient Information",
    description:
      "The rescue process begins when the patient, guide, trekking company, expedition leader, lodge, family member, or insurance assistance company contacts Mountain Helicopters Nepal. Our dispatch team collects the patient’s name, symptoms, exact location, altitude, nationality, insurance details, and emergency contact information.",
    accent: "from-[#f2a10d]/16 via-[#f2a10d]/5 to-transparent",
  },
  {
    number: "02",
    title: "Location and Weather Verification",
    description:
      "Before dispatch, we verify the rescue point using GPS coordinates, lodge or village names, helipad details, trail markers, or known locations such as Kala Patthar, Gorak Shep, Everest Base Camp, Lobuche, Pheriche, and Dingboche. Visibility, wind, cloud cover, terrain, and landing safety are checked.",
    accent: "from-[#1e5aa8]/14 via-[#1e5aa8]/5 to-transparent",
  },
  {
    number: "03",
    title: "Insurance or Payment Confirmation",
    description:
      "For insured patients, policy details and the assistance-company contact are confirmed. The insurer may request a case number, payment guarantee, medical note, guide report, or rescue approval. When insurance is unavailable or delayed, direct payment or a payment guarantee may be required before dispatch.",
    accent: "from-[#d96920]/14 via-[#d96920]/5 to-transparent",
  },
  {
    number: "04",
    title: "Helicopter Dispatch",
    description:
      "Once the rescue requirement, patient condition, location, weather, insurance or payment details, and landing access are confirmed, an aircraft is prepared from Kathmandu, Lukla, or the nearest suitable staging point. The pilot makes the final safety decision based on weather, altitude, payload, route, and landing conditions.",
    accent: "from-[#2f8b68]/14 via-[#2f8b68]/5 to-transparent",
  },
  {
    number: "05",
    title: "Patient Pickup and Medical Evacuation",
    description:
      "The patient is collected from the safest available pickup point. If direct landing is not possible, the patient may be moved to a nearby helipad, open field, ridge, lodge area, or another suitable landing site. The patient is then transferred to Lukla, Kathmandu, or an appropriate hospital according to the medical condition.",
    accent: "from-[#7a5aa6]/14 via-[#7a5aa6]/5 to-transparent",
  },
  {
    number: "06",
    title: "Documents for Insurance",
    description:
      "After the evacuation, supporting records are prepared for the patient, hospital, trekking agency, and insurer. These may include flight details, rescue route, pickup point, evacuation time, patient information, dispatch notes, medical coordination records, and the rescue invoice.",
    accent: "from-[#8a6a2a]/14 via-[#8a6a2a]/5 to-transparent",
  },
];

function ProcessCard({ number, title, description, accent }) {
  return (
    <article className="group relative flex h-full min-h-[255px] flex-col overflow-hidden border border-[#cfd3d5] bg-white p-5 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#d99a19] hover:shadow-[0_22px_55px_rgba(7,24,37,0.14)] sm:p-6">
      <span className="absolute left-0 top-0 z-20 h-[3px] w-0 bg-[#f2a10d] transition-all duration-300 group-hover:w-full" />

      <span
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
      />

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

export default function KalaPattharProcess() {
  return (
    <section
      id="process"
      className="scroll-mt-[123px] bg-[#f6f3ed] px-5 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-[80px] 2xl:px-[125px]"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="max-w-[1050px]">
          <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#a66e00]">
            — How a Rescue Unfolds
          </p>

          <h2 className="mt-4 max-w-[1120px] font-fraunces text-[40px] font-semibold leading-[1.03] tracking-[-0.03em] text-[#071825] sm:text-[50px] lg:text-[60px]">
            Our Helicopter Rescue Process
          </h2>

          <div className="mt-5 max-w-[860px] space-y-5 font-manrope text-[11px] leading-[1.8] text-[#4d5963] sm:text-[12px]">
            <p>
              Every Kala Patthar and Gorak Shep rescue follows a structured
              emergency process designed to verify the patient&apos;s
              condition, exact location, current altitude, weather, landing
              access, aircraft requirements, and insurance or payment details
              as quickly as possible.
            </p>

            <p>
              Because upper Khumbu rescues operate at extreme altitude, the
              pilot makes the final go or no-go decision after reviewing
              visibility, wind, payload, terrain, route safety, and the safest
              available pickup point.
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