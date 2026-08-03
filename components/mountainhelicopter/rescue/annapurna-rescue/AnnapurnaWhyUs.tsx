const reasons = [
  "Our flight crews have intimate knowledge of the Annapurna Conservation Area and know how to identify stable flight routes, even during challenging visibility conditions.",
  "We operate with transparent pricing, no hidden costs, and no unexpected charges at the end of the rescue case. A likely cost estimate is provided before dispatch whenever circumstances allow.",
  "Every rescue case includes ground coordination to help the patient’s family with hospital admission, visa extensions, accommodation arrangements, and other essential support.",
  "Full post-rescue support is available, including medical records, detailed flight logs, rescue invoices, and supporting documentation for insurance claims.",
  "Our high-altitude helicopters are operated with careful payload planning according to terrain, altitude, weather, landing conditions, and patient requirements.",
  "We work directly with leading hospitals in Pokhara and Kathmandu and can coordinate hospital readiness, beds, and specialist support before the patient arrives.",
  "Our customer support and emergency dispatch teams are available 24/7 to assist international trekkers, guides, trekking agencies, and families during medical emergencies.",
];

function ReasonItem({ children }) {
  return (
    
    <li className="flex items-start gap-4">
      <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#071825]" />

      <span className="font-manrope text-[15px] font-normal leading-[1.75] text-[#27323c]">
        {children}
      </span>
    </li>
  );
}

export default function AnnapurnaWhyUs() {
  return (
    <section
      id="why-us"
      className="scroll-mt-[133px] bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-[80px] 2xl:px-[125px]"
    >
      <div className="mx-auto max-w-[1180px]">
        <p className="flex items-center gap-3 font-manrope text-[11px] font-bold uppercase tracking-[0.22em] text-[#d89b1d]">
          <span className="h-px w-7 bg-[#d89b1d]" />
          Why Mountain Helicopters
        </p>

        <h2 className="mt-5 max-w-[1000px] font-fraunces text-[38px] font-semibold leading-[1.08] tracking-[-0.8px] text-[#071825] sm:text-[44px] lg:text-[51.2px] lg:leading-[54.27px] lg:tracking-[-1.02px]">
          Why Mountain Helicopters Nepal for Rescue?
        </h2>

        <ul className="mt-8 max-w-[980px] space-y-2.5 pl-2">
          {reasons.map((reason) => (
            <ReasonItem key={reason}>{reason}</ReasonItem>
          ))}
        </ul>
      </div>
    </section>
  );
}