import { CheckCircle2, XCircle } from "lucide-react";

const clothingLayers = [
  ["Base Layer", "Thermal top and bottoms", "Regulates temperature during rapid altitude change from Kathmandu to Kyanjin Gompa."],
  ["Mid Layer", "Fleece jacket or light down vest", "Provides insulation when stepping into cold mountain air."],
  ["Outer Layer", "Windproof and waterproof down jacket", "Blocks glacier wind and retains heat during ground time."],
  ["Head", "Warm beanie or thermal hat", "Keeps warmth while standing on the helipad and walking through the village."],
  ["Hands", "Insulated gloves or mittens", "Prevents numbness while using cameras or phones."],
  ["Feet", "Comfortable walking shoes or light hiking boots", "Helps on rocky, uneven, snowy, or icy ground."],
  ["Eyes", "UV-protection sunglasses", "Protects against stronger UV and snow/glacier glare at 3,870 m."],
  ["Sun Protection", "SPF 50+ sunscreen and SPF lip balm", "Exposed skin burns faster at high altitude."],
];

const bringItems = [
  "Camera or smartphone, fully charged",
  "Additional memory cards",
  "Small water bottle, 0.5-1 liter",
  "Personal medications",
  "Cash for tips, souvenirs, yak cheese, or monastery donation",
  "Passport or copy of ID",
  "Lip balm and hand sanitizer",
  "Small snacks such as energy bars or chocolate",
];

const leaveBehindItems = [
  "Large suitcases or bulky luggage",
  "Additional luggage beyond a light daypack",
  "Original documents except required ID copy",
  "Expensive jewelry and unnecessary electronics",
  "Sleeping bags, trekking poles, headlamp, and multi-day trekking gear",
  "Extra clothes or formal clothes",
];

export default function WhatToPack() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24 lg:px-16 lg:py-28">
        <div className="text-center">
          <p className="flex items-center justify-center gap-3 font-manrope text-xs font-bold uppercase tracking-[0.22em] text-[#e2aa22]">
            <span className="h-px w-7 bg-[#e2aa22]" />
            What to Wear and What to Pack
          </p>

          <h2 className="mt-4 font-fraunces text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#08294d] md:text-4xl">
            Dress for{" "}
            <span className="text-[#e2aa22]">Kyanjin Gompa, 3,870 m.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-5xl font-manrope text-sm leading-7 text-slate-500">
            Temperatures can fall below freezing, especially in winter and on
            early morning flights. Layered clothing keeps you comfortable during
            the helicopter ride and 60-90 minutes on the ground.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-[18px] border border-slate-200 bg-white">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse">
              <thead className="bg-[#061f43]">
                <tr>
                  <th className="w-[18%] px-5 py-4 text-left font-manrope text-xs font-bold uppercase tracking-[0.15em] text-white">
                    Layer
                  </th>
                  <th className="w-[34%] px-5 py-4 text-left font-manrope text-xs font-bold uppercase tracking-[0.15em] text-white">
                    Item
                  </th>
                  <th className="px-5 py-4 text-left font-manrope text-xs font-bold uppercase tracking-[0.15em] text-white">
                    Why
                  </th>
                </tr>
              </thead>

              <tbody>
                {clothingLayers.map(([layer, item, reason], index) => (
                  <tr key={layer} className={index % 2 === 0 ? "bg-white" : "bg-[#f5f7f9]"}>
                    <td className="border-b border-slate-200 px-5 py-4 font-manrope text-sm font-semibold text-[#08294d]">
                      {layer}
                    </td>
                    <td className="border-b border-slate-200 px-5 py-4 font-manrope text-sm text-[#263c55]">
                      {item}
                    </td>
                    <td className="border-b border-slate-200 px-5 py-4 font-manrope text-sm leading-6 text-slate-500">
                      {reason}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mx-auto mt-6 grid max-w-5xl gap-5 lg:grid-cols-2">
          <article className="rounded-[18px] border border-slate-200 bg-white px-6 py-7 md:px-7">
            <h3 className="font-manrope text-xs font-bold uppercase tracking-[0.18em] text-[#dc9d16]">
              What to Bring
            </h3>
            <div className="mt-5 space-y-3">
              {bringItems.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={15} strokeWidth={1.8} className="mt-0.5 shrink-0 text-[#0a7bd7]" />
                  <p className="font-manrope text-sm leading-6 text-slate-500">{item}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[18px] border border-slate-200 bg-white px-6 py-7 md:px-7">
            <h3 className="font-manrope text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
              What to Leave at Your Kathmandu Hotel
            </h3>
            <div className="mt-5 space-y-3">
              {leaveBehindItems.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <XCircle size={15} strokeWidth={1.7} className="mt-0.5 shrink-0 text-slate-400" />
                  <p className="font-manrope text-sm leading-6 text-slate-500">{item}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
