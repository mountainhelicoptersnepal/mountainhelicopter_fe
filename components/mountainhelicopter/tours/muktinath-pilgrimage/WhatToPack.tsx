import { CheckCircle2 } from "lucide-react";

const clothingLayers = [
  {
    layer: "Clothing",
    item: "Warm down jacket, thermal inner layer, gloves, warm hat",
    reason: "Muktinath is cold at 3,710 m, especially in the morning",
  },
  {
    layer: "Eyewear",
    item: "UV-protected sunglasses",
    reason: "High-altitude light and glare are stronger in the mountains",
  },
  {
    layer: "Documents",
    item: "Passport, visa copy, printed booking confirmation",
    reason: "Required for airport and booking verification",
  },
  {
    layer: "Health",
    item: "Personal medication and motion sickness tablets",
    reason: "Bring your own prescribed or personal-use medicines",
  },
  {
    layer: "Electronics",
    item: "Camera or smartphone, spare battery or power bank",
    reason: "Cold conditions can drain batteries faster than usual",
  },
];

const bringItems = [
  "Change of clothes if you plan to take the 108 taps ritual bath",
  "Small NPR notes for tea, breakfast, porter help, or temple purchases",
  "Puja materials if you prefer to bring your own",
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
            Pack for{" "}
            <span className="text-[#e2aa22]">3,710 metres.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-5xl font-manrope text-sm leading-7 text-slate-500">
            Muktinath is lower than several other helicopter landing points in
            Nepal, but it is still cold, windy, and high-altitude. Keep your
            packing minimal and practical.
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
          <article className="rounded-[18px] border border-slate-200 bg-white px-6 py-7 md:px-7 lg:col-span-2">
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

        </div>
      </div>
    </section>
  );
}
