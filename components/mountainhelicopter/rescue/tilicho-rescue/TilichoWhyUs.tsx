const reasons = [
  "We operate with zero hidden costs and no surprise charges at the end of your rescue case. We provide full pricing upfront from the very beginning.",
  "Every case comes with a ground liaison officer to help the patient’s family with hospital admissions, visa extensions, and arranging accommodation.",
  "Full post-rescue support, including the provision of medical logs and detailed flight logs, is available to help with rapid insurance claims. We use the best power-to-lift helicopters in the world, so we never leave behind critical patients no matter how heavy their payload may be.",
  "We work directly with the leading hospitals in Pokhara and Kathmandu and will pre-book beds and specialist appointments so they are waiting for the patient.",
  "We have customer support team members fluent in languages available 24/7 to help international trekkers and their families through the incredible stress of a medical emergency.",
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

export default function TilichoWhyUs() {
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