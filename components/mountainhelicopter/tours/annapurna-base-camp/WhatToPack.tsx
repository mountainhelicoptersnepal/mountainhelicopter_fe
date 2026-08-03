import { CheckCircle2, XCircle } from "lucide-react";

const clothingLayers = [
  {
    layer: "Base Layer",
    item: "Thermal top and bottom",
    reason:
      "Helps retain body heat during the rapid ascent from Pokhara to Annapurna Base Camp.",
  },
  {
    layer: "Mid Layer",
    item: "Fleece jacket or light down vest",
    reason:
      "Provides insulation and can be removed easily after returning to lower altitude.",
  },
  {
    layer: "Outer Layer",
    item: "Warm, windproof down jacket",
    reason:
      "Protects against cold alpine wind and rapidly changing conditions at 4,130 metres.",
  },
  {
    layer: "Hands",
    item: "Insulated gloves",
    reason:
      "Keeps your hands warm while taking photographs and walking around the landing area.",
  },
  {
    layer: "Head",
    item: "Warm hat or beanie covering the ears",
    reason:
      "Provides protection from cold wind and helps reduce heat loss.",
  },
  {
    layer: "Eyes",
    item: "UV-protective sunglasses",
    reason:
      "Protects your eyes from strong high-altitude sunlight and glare from snow and glaciers.",
  },
  {
    layer: "Feet",
    item: "Comfortable walking shoes or light hiking boots",
    reason:
      "The ground around Annapurna Base Camp may be rocky, uneven, wet or covered with snow.",
  },
  {
    layer: "Skin",
    item: "SPF 50+ sunscreen and lip balm",
    reason:
      "High-altitude sunlight, cold air and dry wind can quickly affect exposed skin and lips.",
  },
];

const bringItems = [
   "Passport or valid government-issued identification",
  "Visa copy where applicable",
  "Digital or printed booking confirmation",
  "Travel and emergency evacuation insurance documents",
  "Camera or smartphone with a full charge",
  "Spare battery or compact power bank",
  "Personal medication and prescribed altitude-related medicine",
  "Motion-sickness tablets if recommended for you",
  "Small water bottle",
  "Cash in NPR for optional food, souvenirs or gratuities",
  "Sunscreen, lip balm and hand sanitiser",
];

const leaveBehindItems = [
   "Large suitcases, duffel bags and bulky luggage",
  "Sleeping bags, tents and camping equipment",
  "Heavy trekking equipment not required for the short landing",
  "Extra clothing beyond one suitable warm outfit",
  "Valuables and unnecessary electronic devices",
  "Formal clothing and unsuitable footwear",
  "Drones without the required aviation and conservation-area permissions",
];

export default function WhatToPack() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 py-16 md:py-24 lg:py-28">
        {/* HEADING */}
        <div className="text-center">
          <p className="flex items-center justify-center gap-3 font-manrope text-xs font-bold uppercase tracking-[0.22em] text-[#e2aa22]">
            <span className="h-px w-7 bg-[#e2aa22]" />
            What to Wear and What to Pack
          </p>

          <h2 className="mt-4 font-fraunces text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#08294d] md:text-4xl">
            Dress for{" "}
            <span className="text-[#e2aa22]">4,310 metres.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-5xl font-manrope text-sm leading-7 text-slate-500">
            Annapurna Base Camp can be cold, windy and exposed even when Pokhara is warm. Dress in removable layers and carry only the essentials needed during the flight and the short landing.
          </p>
        </div>

        {/* CLOTHING TABLE */}
        <div className="mt-10 overflow-hidden rounded-[18px] border border-slate-200 bg-white">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse">
              <thead className="bg-[#061f43]">
                <tr>
                  <th className="w-[14%] px-5 py-4 text-left font-manrope text-xs font-bold uppercase tracking-[0.15em] text-white">
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
                {clothingLayers.map((row, index) => (
                  <tr
                    key={row.layer}
                    className={
                      index % 2 === 0 ? "bg-white" : "bg-[#f5f7f9]"
                    }
                  >
                    <td className="border-b border-slate-200 px-5 py-4 font-manrope text-sm font-semibold text-[#08294d]">
                      {row.layer}
                    </td>

                    <td className="border-b border-slate-200 px-5 py-4 font-manrope text-sm text-[#263c55]">
                      {row.item}
                    </td>

                    <td className="border-b border-slate-200 px-5 py-4 font-manrope text-sm leading-6 text-slate-500">
                      {row.reason}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* BRING / LEAVE BEHIND */}
        <div className="mx-auto mt-6 grid max-w-5xl gap-5 lg:grid-cols-2">
          <article className="rounded-[18px] border border-slate-200 bg-white px-6 py-7 md:px-7">
            <h3 className="font-manrope text-xs font-bold uppercase tracking-[0.18em] text-[#dc9d16]">
              What to Bring
            </h3>

            <div className="mt-5 space-y-3">
              {bringItems.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={15}
                    strokeWidth={1.8}
                    className="mt-0.5 shrink-0 text-[#0a7bd7]"
                  />

                  <p className="font-manrope text-sm leading-6 text-slate-500">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[18px] border border-slate-200 bg-white px-6 py-7 md:px-7">
            <h3 className="font-manrope text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
              What to Leave Behind
            </h3>

            <div className="mt-5 space-y-3">
              {leaveBehindItems.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <XCircle
                    size={15}
                    strokeWidth={1.7}
                    className="mt-0.5 shrink-0 text-slate-400"
                  />

                  <p className="font-manrope text-sm leading-6 text-slate-500">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}