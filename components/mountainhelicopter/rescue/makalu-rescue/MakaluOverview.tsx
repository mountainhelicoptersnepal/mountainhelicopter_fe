// src/components/rescue/makalu/MakaluOverview.jsx

const trustItems = [
  "Since 2009",
  "10,000+ Flights",
  "Zero Fatal Accidents",
  "<5 Min Dispatch",
  "CAAN Certified",
  "AS 350 B3e Fleet",
];

const highlights = [
  "Continuous emergency dispatch coordination is maintained across Makalu-Barun National Park and the surrounding high-altitude trekking region.",
  "Rapid rescue deployment can be coordinated from Kathmandu according to aircraft position, weather, patient condition and the earliest safe flying window.",
  "High-altitude helicopter rescue missions are operated by experienced mountain aviation professionals familiar with remote Himalayan terrain.",
  "All rescue operations are carried out under Civil Aviation Authority of Nepal requirements, with the pilot making the final go or no-go decision.",
  "Patient support may include onboard oxygen, first-aid equipment, stretcher preparation and medical coordination during evacuation.",
  "Pickup and landing operations may be arranged from Makalu Base Camp, Yangle Kharka, Dobate, Shipton La, Khongma Danda and other suitable rescue points.",
  "Local guides, trekking agencies, lodges and field contacts assist with patient-location verification and preparation of the safest available landing area.",
  "Direct hospital transfer can be coordinated to appropriate medical facilities in Kathmandu after the patient is extracted.",
];

function TrustItem({ item, index }) {
  return (
    <div
      className={`flex min-h-[74px] items-center justify-center px-3 text-center ${
        index !== trustItems.length - 1
          ? "lg:border-r lg:border-[#d7a03d]"
          : ""
      }`}
    >
      <span className="font-manrope text-[9px] font-bold uppercase tracking-[0.2em] text-[#071825] sm:text-[10px]">
        {item}
      </span>
    </div>
  );
}

function HighlightItem({ children }) {
  return (
    <li className="group flex items-start gap-3 font-manrope text-[11px] leading-[1.8] text-white/80 sm:text-[12px]">
      <span className="mt-[8px] h-[5px] w-[5px] shrink-0 bg-[#f2a10d] transition-transform duration-300 group-hover:scale-150" />

      <span className="transition-colors duration-300 group-hover:text-white">
        {children}
      </span>
    </li>
  );
}

export default function MakaluOverview() {
  return (
    <section id="overview" className="scroll-mt-[123px]">
      {/* Trust bar */}
      <div className="border-b border-[#d7d9d7] bg-[#f6f3ed]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 px-5 sm:grid-cols-3 sm:px-8 lg:grid-cols-6 lg:px-12 xl:px-[80px] 2xl:px-[125px]">
          {trustItems.map((item, index) => (
            <TrustItem key={item} item={item} index={index} />
          ))}
        </div>
      </div>

      {/* Overview section */}
      <div className="bg-[#f6f3ed] px-5 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-[80px] 2xl:px-[125px]">
        <div className="mx-auto max-w-[1440px]">
          <div className="max-w-[940px]">
            <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#a66e00]">
              — Overview
            </p>

            <h2 className="mt-4 max-w-[1080px] font-fraunces text-[40px] font-semibold leading-[1.03] tracking-[-0.03em] text-[#071825] sm:text-[50px] lg:text-[60px]">
              Overview of Makalu Base Camp Helicopter Rescue Operations
            </h2>

            <div className="mt-6 max-w-[840px] space-y-5 font-manrope text-[11px] leading-[1.8] text-[#46545f] sm:text-[12px]">
              <p>
                The Makalu-Barun region combines extreme altitude, isolated
                trekking routes and rapidly changing mountain weather. In an
                emergency, ground evacuation can take several days, making
                helicopter extraction the fastest route to medical care.
              </p>

              <p>
                Rescue may be coordinated from Makalu Base Camp, Yangle Kharka,
                Dobate, Shipton La, Khongma Danda, Num and other accessible
                points across the wider Makalu and Barun Valley corridor.
              </p>

              <p>
                High-altitude missions require careful assessment of weather,
                wind, visibility, aircraft payload, landing access and patient
                condition. The pilot always makes the final decision on whether
                the mission can proceed safely.
              </p>

              <p>
                Mountain Helicopters Nepal coordinates with guides, trekking
                agencies, insurers, aviation authorities and receiving
                hospitals to support the rescue from initial call through
                patient handover.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Operational highlights */}
      <div
        id="highlights"
        className="scroll-mt-[123px] bg-[#061523] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-20 xl:px-[80px] 2xl:px-[125px]"
      >
        <div className="mx-auto max-w-[1440px]">
          <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#f2a10d]">
            — Operational Highlights
          </p>

          <h2 className="mt-4 max-w-[1150px] font-fraunces text-[40px] font-semibold leading-[1.04] tracking-[-0.03em] text-[#f6f2ea] sm:text-[50px] lg:text-[60px]">
            Highlights of Rescue Operation in Makalu Base Camp Area
          </h2>

          <div className="mt-9 grid gap-x-16 gap-y-5 lg:grid-cols-2">
            {highlights.map((item) => (
              <HighlightItem key={item}>{item}</HighlightItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}