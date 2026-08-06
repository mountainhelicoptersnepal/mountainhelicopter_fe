import { CheckCircle2, XCircle } from "lucide-react";

const clothingLayers = [
  {
    layer: "Base Layer",
    item: "Thermal top and bottom (merino or synthetic)",
    reason: "Moisture-wicking against the skin keeps you warm and dry",
  },
  {
    layer: "Mid Layer",
    item: "Fleece jacket or down vest",
    reason: "Insulation, removable when back in Kathmandu",
  },
  {
    layer: "Outer Layer",
    item: "Windproof and waterproof jacket",
    reason: "Wind chill at 5,545 m is significant even in low wind",
  },
  {
    layer: "Hands",
    item: "Insulated gloves or mittens",
    reason: "Fingers go numb fast at altitude",
  },
  {
    layer: "Head",
    item: "Warm hat covering ears",
    reason: "Significant heat loss through the head at altitude",
  },
  {
    layer: "Eyes",
    item: "UV-protective sunglasses",
    reason: "Glacier glare and high-altitude UV intensity",
  },
  {
    layer: "Feet",
    item: "Warm boots (trekking or winter boots)",
    reason: "Cold ground and wind at the landing zone",
  },
  {
    layer: "Skin",
    item: "Sunscreen SPF 50+ and lip balm",
    reason: "UV radiation is much stronger at 5,545 m",
  },
];

const bringItems = [
  "Passport (mandatory, required for permit verification at the airport)",
  "Booking confirmation (digital or printed)",
  "Travel insurance documents",
  "Cash in USD or NPR for optional expenses (breakfast, gratuity)",
  "Camera or smartphone with a full charge",
  "Spare camera batteries (cold drains batteries rapidly)",
  "Personal medication if required",
];

const leaveBehindItems = [
  "Large suitcases or duffel bags, maximum 5 kg per passenger",
  "Trekking poles (not needed, no walking involved)",
  "Sleeping bags, camping gear",
  "Valuables not needed for the flight",
  "Drones, not permitted in Sagarmatha National Park without special permit",
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
            Dress for <span className="text-[#e2aa22]">5,545 metres.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-5xl font-manrope text-sm leading-7 text-slate-500">
            At Kala Patthar the temperature can drop to -10°C even in spring.
            Dress in layers, you will be comfortable in Kathmandu (20–25°C) but
            cold at the summit vantage point.
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
                    className={index % 2 === 0 ? "bg-white" : "bg-[#f5f7f9]"}
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
