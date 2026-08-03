const policyChecklist = [
  "Helicopter evacuation up to 6,000 m or above Kala Patthar, 5,545 m",
  "Trekking listed as your primary covered activity",
  "Search and rescue (SAR) coordination",
  "Repatriation and hospital admission in Nepal",
  "No Everest-region exclusion in the policy wording",
];

const recordAndCarry = [
  "Policy number",
  "Assistance company 24-hour emergency contact",
  "Coverage limit for evacuation",
  "Deductible or excess amount",
];

function ChecklistItem({ children }) {
  return (
    <li className=" flex items-start gap-3 font-manrope text-[14px] font-normal leading-[1.7] tracking-[0px] text-white/78 " >
      <span aria-hidden="true" className=" mt-[6px] h-[7px] w-[7px] shrink-0 rounded-full border border-white/45 " />

      <span>{children}</span>
    </li>
  );
}

export default function EverestInsurance() {
  return (
    <section id="insurance" className=" scroll-mt-[123px] overflow-hidden bg-[#003366] text-white " >
      <div className=" mx-auto flex w-full max-w-[1440px] flex-col gap-[10px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-[125px] " >
        {/* Policy alert */}
        <div className=" w-full border-[0.67px] border-[#F2B632]/35 px-5 py-6 sm:px-7 lg:px-6 " >
          <p className=" font-manrope text-[11px] font-bold uppercase leading-[14px] tracking-[0.22em] text-[#F2B632] " >
            — Everest Policy Check
          </p>

          <p className=" mt-4 w-full max-w-[900px] font-manrope text-[13px] font-normal leading-[1.8] tracking-[0px] text-white/85 sm:text-[17px] " >
            Most Everest trekking insurance policies cover evacuation up to
            6,000 m. Confirm your policy covers the altitude range between
            Lukla (2,860 m) and Kala Patthar (5,545 m) before departure. Some
            policies exclude the Everest region specifically.
          </p>
        </div>

        {/* Insurance content */}
        <div className="mt-10 w-full lg:mt-12">
          <p className=" font-manrope text-[9px] font-bold uppercase leading-[14px] tracking-[0.22em] text-[#F2B632] " >
            — Insurance
          </p>

          <h2 className=" mt-4 w-full font-fraunces text-[40px] font-semibold leading-[1.02] tracking-[-0.03em] text-white sm:text-[50px] lg:text-[60px] " >
            How insurance coordination works.
          </h2>

          <div className=" mt-8 grid w-full gap-12 lg:grid-cols-[1.3fr_0.85fr] lg:gap-14 " >
            {/* Left content */}
            <div className=" w-full max-w-[820px] space-y-6 font-manrope text-[13px] font-normal leading-[1.8] tracking-[0px] text-white/82 sm:text-[17px] " >
              <p>
                Most experienced Everest trekkers arrive with travel insurance
                that covers helicopter evacuation up to a stated altitude
                ceiling—commonly 6,000 m. Whether your policy covers your rescue
                depends on the altitude of the pickup point, whether trekking is
                your covered activity, and the specific evacuation clauses in
                your policy.
              </p>

              <p>
                MHN coordinates directly with insurance assistance companies
                for confirmed policy cases. Where the assistance company
                authorizes rescue, we dispatch without requiring upfront
                payment from the patient. Documentation is prepared after the
                rescue for direct billing.
              </p>

              <p>
                Where insurance authorization is delayed or unavailable, a
                payment-guarantee arrangement is required before dispatch. This
                may come from the patient&apos;s family, trekking agency,
                expedition sponsor, or embassy. Uninsured cases proceed on
                direct-payment terms with a cost estimate provided upfront.
              </p>
            </div>

            {/* Right checklist */}
            <aside className=" border-t-[0.67px] border-[#F2B632]/45 pt-8 lg:border-l-[0.67px] lg:border-t-0 lg:pl-8 lg:pt-0 " >
              <h3 className=" font-manrope text-[13px] font-bold uppercase leading-[15px] tracking-[0.2em] text-[#F2B632] " >
                Checklist Before Your Trek
              </h3>

              <p className=" mt-2 font-manrope text-[10px] font-normal uppercase leading-[1.6] tracking-[0.08em] text-[#D62828] " >
                [Client verify: direct-billing insurance partners for Everest
                cases]
              </p>

              <ul className="mt-6 space-y-3">
                {policyChecklist.map((item) => (
                  <ChecklistItem key={item}>{item}</ChecklistItem>
                ))}
              </ul>

              <h4 className=" mt-7 font-manrope text-[13px] font-semibold leading-[17px] tracking-[0px] text-white " >
                Record and carry:
              </h4>

              <ul className="mt-4 space-y-3">
                {recordAndCarry.map((item) => (
                  <ChecklistItem key={item}>{item}</ChecklistItem>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}