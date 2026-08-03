// src/components/rescue/gosaikunda/GosaikundaWhyUs.jsx

const reasons = [
  "Our flight crews have strong operational knowledge of the Langtang and Gosaikunda region, helping them identify safer routes and suitable landing approaches during changing mountain conditions.",
  "We use transparent rescue pricing and explain the likely cost structure before dispatch whenever the situation allows. There are no intentionally hidden rescue charges.",
  "A ground liaison officer can assist the patient’s family with hospital admission, visa-extension support and accommodation coordination after evacuation.",
  "Post-rescue support may include detailed flight logs, rescue invoices, patient information and other documentation required for insurance processing.",
  "We coordinate with suitable hospitals and medical facilities in Kathmandu so the receiving team can prepare for the patient before arrival.",
  "Our high-altitude-capable aircraft are configured according to the patient’s condition, payload, weather and landing requirements.",
  "Our dispatch and customer-support teams remain available 24/7 to assist trekkers, pilgrims, guides, agencies and families during an emergency.",
];

function ReasonItem({ children }) {
  return (
    <li className="group flex items-start gap-4 font-manrope text-[11px] leading-[1.8] text-[#46545f] sm:text-[12px]">
      <span className="mt-[8px] h-[5px] w-[5px] shrink-0 bg-[#a66e00] transition-all duration-300 group-hover:scale-125 group-hover:bg-[#d99a19]" />

      <span className="transition-colors duration-300 group-hover:text-[#071825]">
        {children}
      </span>
    </li>
  );
}

export default function GosaikundaWhyUs() {
  return (
    <section
      id="why-us"
      className="scroll-mt-[123px] bg-[#f6f3ed] px-5 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-[80px] 2xl:px-[125px]"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="border border-[#cfd2d3] bg-[#f1eee7] px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
          <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#a66e00]">
            — Why Mountain Helicopters
          </p>

          <h2 className="mt-4 max-w-[1180px] font-fraunces text-[40px] font-semibold leading-[1.03] tracking-[-0.03em] text-[#071825] sm:text-[50px] lg:text-[60px]">
            Why Mountain Helicopters Nepal for Rescue?
          </h2>

          <div className="mt-8 grid gap-x-16 gap-y-6 lg:grid-cols-2">
            {reasons.map((reason) => (
              <ReasonItem key={reason}>{reason}</ReasonItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}