// src/components/rescue/Insurance.jsx

const insurancePartners = [
  "Global Rescue",
  "World Nomads",
  "BUPA",
  "IHI Bupa",
  "Ripcord Travel Protection",
  "True Traveller",
  "Allianz Travel",
  "MedAire",
];

const insuranceChecklist = [
  "Helicopter evacuation up to $6,000 or higher for climbers",
  "Trekking as your primary activity",
  "Search and rescue coordination",
  "Repatriation and hospital admission",
  "Pre-existing medical conditions, where relevant",
  "Adventure add-on when trekking above 4,500 m",
];

const policyDetails = [
  "Policy number",
  "Assistance company emergency contact",
  "Coverage limit for evacuation",
  "Deductible or excess amount",
];

const documents = [
  {
    number: "01",
    title: "Rescue Invoice",
    description:
      "Full itemized cost breakdown, tax details, currency, and payment reference.",
  },
  {
    number: "02",
    title: "Flight Log",
    description:
      "Aircraft tail number, pilot in command, dispatch time, route flown, altitude profile, on-ground time, destination hospital or terminal.",
  },
  {
    number: "03",
    title: "Patient Report",
    description:
      "Patient identifiers, pickup location, altitude, condition at pickup, onboard care, condition on delivery.",
  },
  {
    number: "04",
    title: "Rescue Point Data",
    description:
      "GPS coordinates, altitude, terrain type, weather at pickup, and coordination with local authorities.",
  },
  {
    number: "05",
    title: "Ground Liaison Statement",
    description:
      "Hospital name, admission time, receiving physician, interim status, and family notification confirmation.",
  },
  {
    number: "06",
    title: "Medical Crew Report (if applicable)",
    description:
      "Where a medic accompanied the flight, their assessment and interventions during transit.",
  },
  {
    number: "07",
    title: "Correspondence Log",
    description:
      "All calls, WhatsApp exchanges, and emails between MHN dispatch and the caller, patient, agency, embassy, and insurer. Timestamped.",
  },
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 font-manrope text-[11px] leading-[1.7] text-white/75"
        >
          <span className="mt-[8px] h-[4px] w-[4px] shrink-0 rounded-full bg-[#d59618]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Insurance() {
  return (
    <>
      <section id="insurance" className="scroll-mt-[125px] bg-[#061523] text-white">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-16 md:px-12 md:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:px-16 lg:py-28">
          <div>
            <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#d59618]">
              — Insurance
            </p>

            <h2 className="mt-3 max-w-[680px] font-fraunces text-[36px] font-semibold leading-[1.05] tracking-[-0.025em] text-[#f7f3ec] sm:text-[46px] lg:text-[54px]">
              How insurance coordination works.
            </h2>

            <div className="mt-6 max-w-[760px] space-y-5 font-manrope text-[12px] leading-[1.8] text-white/75 sm:text-[13px]">
              <p>
                Most experienced trekkers arrive in Nepal with travel insurance
                that covers helicopter evacuation up to a stated altitude
                ceiling—commonly 5,000 m or 6,000 m. Whether your policy covers
                your rescue depends on three factors: the altitude of the pickup
                point, the activity covered, and the specific evacuation clauses
                in your policy.
              </p>

              <p>
                MHN coordinates directly with insurance assistance companies
                for confirmed policy cases. Where the assistance company
                authorizes rescue, we dispatch without requiring upfront
                payment from the patient. Documentation is prepared after the
                rescue for direct billing.
              </p>

              <p>
                Where insurance authorization is delayed or unavailable—which
                happens in a minority of cases, particularly with overnight
                incidents—a payment guarantee arrangement is required before
                dispatch. This can come from the patient&apos;s family, trekking
                agency, expedition sponsor, or embassy.
              </p>

              <p>
                Uninsured cases proceed on direct payment terms. We provide cost
                estimates upfront.
              </p>
            </div>
          </div>

          <aside className="border-l border-[#b57a12] pl-6 sm:pl-8 lg:pl-10">
            <div>
              <h3 className="font-manrope text-[9px] font-bold uppercase tracking-[0.2em] text-[#d59618]">
                Recognized Insurance Partners
              </h3>

              <p className="mt-2 font-manrope text-[9px] uppercase leading-[1.6] tracking-[0.1em] text-[#d59618]">
                [Client verify: the list of insurance companies MHN has direct
                billing relationships with]
              </p>

              <div className="mt-5 grid grid-cols-2 gap-x-8 gap-y-2">
                {insurancePartners.map((partner) => (
                  <span
                    key={partner}
                    className="font-manrope text-[11px] font-semibold text-white/80"
                  >
                    {partner}
                  </span>
                ))}
              </div>

              <p className="mt-5 font-manrope text-[10px] leading-[1.7] text-white/65">
                If your policy is not listed above, we can still coordinate the
                rescue. Direct billing may be replaced by reimbursement—you may
                pay upfront and claim afterward using our documentation package.
              </p>
            </div>

            <div className="mt-10">
              <h3 className="font-manrope text-[9px] font-bold uppercase tracking-[0.2em] text-[#d59618]">
                Checklist for Insurance-Covered Rescue
              </h3>

              <p className="mt-3 font-manrope text-[10px] leading-[1.7] text-white/75">
                Before your trek, confirm your policy covers:
              </p>

              <div className="mt-4">
                <BulletList items={insuranceChecklist} />
              </div>

              <p className="mt-6 font-manrope text-[10px] leading-[1.7] text-white/75">
                Record and save:
              </p>

              <div className="mt-4">
                <BulletList items={policyDetails} />
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-[#f6f3ed]">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-12 md:py-24 lg:px-16 lg:py-28">
          <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#a66e00]">
            — Post-Rescue
          </p>

          <h2 className="mt-3 font-fraunces text-[36px] font-semibold leading-[1.05] tracking-[-0.025em] text-[#071825] sm:text-[46px] lg:text-[54px]">
            Documentation we provide.
          </h2>

          <p className="mt-4 max-w-[760px] font-manrope text-[11px] leading-[1.75] text-[#4a5660] sm:text-[12px]">
            Complete documentation is prepared within 24–48 hours of
            evacuation, delivered by email to the patient or designated family
            member, and directly to the insurance assistance company where
            applicable.
          </p>

          <div className="mt-8 grid border-l border-t border-[#cfd2d3] sm:grid-cols-2 lg:grid-cols-3">
            {documents.map((document, index) => (
              <article
                key={document.number}
                className={`min-h-[155px] border-b border-r border-[#cfd2d3] bg-white p-5 ${
                  index === documents.length - 1
                    ? "lg:col-span-1"
                    : ""
                }`}
              >
                <span className="font-manrope text-[8px] font-bold uppercase tracking-[0.14em] text-[#a66e00]">
                  {document.number}
                </span>

                <h3 className="mt-3 font-fraunces text-[16px] font-semibold leading-[1.2] text-[#071825]">
                  {document.title}
                </h3>

                <p className="mt-3 font-manrope text-[10px] leading-[1.7] text-[#66717b]">
                  {document.description}
                </p>
              </article>
            ))}

            <div className="hidden border-b border-r border-[#cfd2d3] bg-[#dddcd8] lg:block lg:col-span-2" />
          </div>
        </div>
      </section>
    </>
  );
}
