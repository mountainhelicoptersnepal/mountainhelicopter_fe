import React from "react";

const stats = [
  {
    title: "17+ Years",
    caption: "OF FLYING BEYOND EXPECTATIONS",
    description: "EST. KATHMANDU, 2009 JULY 20TH",
  },
  {
    title: "365 Days",
    caption: "ALWAYS READY TO FLY",
    description: "PREPARED FOR EVERY MISSION, EVERY DAY.",
  },
  {
    title: "Safety First",
    caption: "MORE THAN A PROMISE, IT IS OUR FOUNDATION.",
    description: "BECAUSE EVERY JOURNEY MATTERS.",
  },
  {
    title: "CAAN Certified",
    caption: "LICENSED TO OPERATE UNDER NEPAL'S CIVIL AVIATION REGULATIONS.",
    description:
      "DELIVERING EVERY FLIGHT WITH SAFETY, PRECISION AND PROFESSIONALISM.",
  },
  {
    title: "Premium Fleet",
    caption: "AIRBUS AS350 | B3E HELICOPTERS",
    description:
      "ENGINEERED TO NAVIGATE NEPAL'S DIVERSE TERRAIN WITH CONFIDENCE.",
  },
];

export default function Stats() {
  return (
    <section className="w-full bg-[#0d1a2d] py-14 md:py-16">
      <div className="mx-auto flex max-w-7xl flex-col flex-wrap justify-center gap-8 px-6 sm:flex-row sm:items-start md:px-12 lg:flex-nowrap lg:px-16">
        {stats.map((stat, i) => (
          <React.Fragment key={stat.title}>
            <div className="flex max-w-[15rem] flex-col gap-2">
              <h3 className="font-fraunces text-[1.75rem] font-bold leading-tight text-[#F2B632] sm:text-[1.9rem]">
                {stat.title}
              </h3>
              <p className="font-manrope text-[0.72rem] font-semibold uppercase tracking-[0.03em] text-white">
                {stat.caption}
              </p>
              <p className="font-manrope text-[0.68rem] font-light uppercase tracking-[0.02em] text-white/45">
                {stat.description}
              </p>
            </div>
            {i < stats.length - 1 && (
              <span className="hidden w-px shrink-0 self-stretch bg-white/15 sm:block" />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
