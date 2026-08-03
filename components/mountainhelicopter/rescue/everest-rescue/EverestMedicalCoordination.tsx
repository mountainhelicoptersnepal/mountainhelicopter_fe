// src/components/rescue/detail/EverestMedicalCoordination.jsx

const medicalFacilities = [
  {
    title: "HRA Pheriche Post (4,371 m)",
    description:
      "The Himalayan Rescue Association operates a permanent medical post at Pheriche staffed by volunteer physicians during trekking seasons. Mountain Helicopters Nepal dispatch coordinates with the HRA physician on duty when a patient is already under their care.",
    items: [
      "Diagnosis and Lake Louise altitude illness scoring already documented",
      "Insurance case pre-notification handled by HRA where applicable",
      "Patient stabilization completed before extraction",
      "Handover to Kathmandu hospital pre-briefed",
    ],
  },
  {
    title: "Everest ER — EBC (5,364 m)",
    description:
      "During the spring climbing season, Everest ER operates a temporary clinic at Base Camp for expedition members. Mountain Helicopters Nepal coordinates directly with the Everest ER attending physician for climber evacuations.",
    items: [
      "Expedition emergency plans pre-registered with MHN dispatch",
      "Direct radio contact with Everest ER during climbing season",
      "Expedition liaison officer coordination",
      "Priority-sequenced dispatch for climber emergencies",
    ],
  },
];

const stagingRequirements = [
  "Aircraft positioned at Lukla the previous evening",
  "Certified maintenance access at Lukla",
  "Ground crew and refuelling on-site",
];

function BulletList({ items }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 font-manrope text-[10px] leading-[1.7] text-[#4d5963]"
        >
          <span className="mt-[7px] h-[4px] w-[4px] shrink-0 bg-[#a66e00]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function EverestMedicalCoordination() {
  return (
    <section className="bg-[#f6f3ed] px-5 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-[80px] 2xl:px-[125px]">
      <div className="mx-auto max-w-[1440px]">
        <div className="max-w-[980px]">
          <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#a66e00]">
            — Medical Coordination
          </p>

          <h2 className="mt-4 font-fraunces text-[40px] font-semibold leading-[1.02] tracking-[-0.03em] text-[#071825] sm:text-[50px] lg:text-[60px]">
            We work with the doctors{" "}
            <span className="italic text-[#9b6b00]">on the mountain.</span>
          </h2>

          <p className="mt-5 max-w-[800px] font-manrope text-[11px] leading-[1.75] text-[#4d5963] sm:text-[12px]">
            The Everest region has two dedicated medical facilities. Our
            dispatch officers coordinate with both before every
            altitude-illness evacuation. This is why authorized rescue calls
            dispatch faster than uncoordinated ones.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {medicalFacilities.map((facility) => (
            <article
              key={facility.title}
              className="border border-[#cfd3d5] bg-white p-5 sm:p-6"
            >
              <h3 className="font-manrope text-[9px] font-bold uppercase tracking-[0.2em] text-[#a66e00]">
                {facility.title}
              </h3>

              <p className="mt-4 font-manrope text-[10px] leading-[1.75] text-[#56626c]">
                {facility.description}
              </p>

              <div className="mt-5">
                <BulletList items={facility.items} />
              </div>
            </article>
          ))}
        </div>

        <p className="mt-3 font-manrope text-[8px] font-semibold uppercase tracking-[0.12em] text-[#c16600]">
          [Client verify: confirm HRA and Everest ER coordination protocols are
          current and accurate as described]
        </p>

        <div className="mt-20 border border-[#cfd2d3] bg-[#f1eee7] px-6 py-8 sm:px-8 lg:mt-24 lg:px-10 lg:py-10">
          <div className="max-w-[920px]">
            <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#a66e00]">
              — Lukla Staging
            </p>

            <h2 className="mt-4 font-fraunces text-[34px] font-semibold leading-[1.05] tracking-[-0.025em] text-[#071825] sm:text-[42px] lg:text-[50px]">
              When Kathmandu is fog-locked and the Khumbu is clear.
            </h2>

            <div className="mt-5 space-y-5 font-manrope text-[11px] leading-[1.8] text-[#4d5963] sm:text-[12px]">
              <p>
                Certain morning weather patterns close Kathmandu departures
                while the Khumbu remains flyable. On these days, Mountain
                Helicopters can dispatch rescue aircraft directly from Lukla
                (2,860 m), cutting the typical response time to Gorak Shep from
                about 80 minutes to under 30 minutes.
              </p>

              <div>
                <p className="font-semibold text-[#263746]">
                  Lukla staging capability requires:
                </p>

                <div className="mt-4">
                  <BulletList items={stagingRequirements} />
                </div>
              </div>

              <p>
                MHN maintains this capability during peak trekking seasons,
                especially March to May and September to November, when Khumbu
                rescue demand is highest. During off-seasons, Lukla staging is
                arranged case by case according to aircraft availability,
                weather, maintenance planning, and crew deployment.
              </p>

              <p>
                For expedition operators and trekking agencies with
                pre-arranged rescue accounts, standing Lukla staging requests
                are handled through the designated agency contact.
              </p>
            </div>

            <p className="mt-5 font-manrope text-[8px] font-semibold uppercase tracking-[0.12em] text-[#c16600]">
              [Client verify: confirm Lukla staging capability is real and
              current. If not, remove this entire module.]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}