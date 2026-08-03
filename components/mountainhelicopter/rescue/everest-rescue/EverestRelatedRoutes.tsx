// src/components/rescue/detail/EverestRelatedRoutes.jsx

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const rescueRoutes = [
  {
    title: "Kala Patthar Helicopter Rescue",
    meta: "5,545 m · highest ground evacuation point",
    href: "/helicopter-rescue/kala-patthar-helicopter-rescue",
  },
  {
    title: "GorakShep Helicopter Rescue",
    meta: "5,140 m · staging point for EBC visits",
    href: "/helicopter-rescue/gorak-shep-helicopter-rescue",
  },
  {
    title: "Namche Bazaar Helicopter Rescue",
    meta: "3,440 m · gateway to Khumbu",
    href: "/helicopter-rescue/namche-bazaar-helicopter-rescue",
  },
  {
    title: "Lukla Helicopter Evacuation",
    meta: "2,860 m · Tenzing-Hillary Airport",
    href: "/helicopter-rescue/lukla-helicopter-evacuation",
  },
  {
    title: "Pheriche Rescue (HRA post)",
    meta: "4,371 m · Himalayan Rescue Association coordination",
    href: "/helicopter-rescue/pheriche-helicopter-rescue",
  },
  {
    title: "Dingboche Helicopter Rescue",
    meta: "4,410 m · Khumbu Valley",
    href: "/helicopter-rescue/dingboche-helicopter-rescue",
  },
];

const alsoSeeLinks = [
  {
    label: "Everest Base Camp Helicopter Tour",
    href: "/tours/everest-base-camp",
  },
  {
    label: "24/7 Rescue Services (all regions)",
    href: "/helicopter-rescue",
  },
  {
    label: "Fleet: AS 350 B3e specifications",
    href: "/fleet",
  },
  {
    label: "Insurance Coordination",
    href: "#insurance",
  },
];

const reasons = [
  {
    title: "Experienced Flight Crews",
    description:
      "Our flight crews have intimate knowledge of the Annapurna conservation area and know how to identify the most stable flight routes, even in low-visibility conditions.",
  },
  {
    title: "Zero Hidden Costs",
    description:
      "We operate with zero hidden costs and no surprise charges at the end of your rescue case. Full pricing is provided upfront from the very beginning.",
  },
  {
    title: "Dedicated Ground Liaison",
    description:
      "Every case includes a ground liaison officer who assists the patient’s family with hospital admissions, visa extensions, and accommodation arrangements.",
  },
  {
    title: "Complete Post-Rescue Support",
    description:
      "Full post-rescue support is available, including medical logs and detailed flight logs to support faster insurance claims.",
  },
  {
    title: "High-Performance Rescue Aircraft",
    description:
      "We use helicopters with strong power-to-lift performance, allowing us to transport critical patients safely while managing demanding high-altitude payload conditions.",
  },
  {
    title: "Direct Hospital Coordination",
    description:
      "We work directly with leading hospitals in Pokhara and Kathmandu and can coordinate beds and specialist appointments before the patient arrives.",
  },
  {
    title: "24/7 Multilingual Support",
    description:
      "Our customer support team is available 24/7, with multilingual assistance for international trekkers and their families during the stress of a medical emergency.",
  },
];
function RouteCard({ title, meta, href }) {
  return (
    <Link href={href} className=" group flex h-full min-h-[178px] flex-col border-[0.67px] border-[#003366]/15 bg-white p-5 transition-colors duration-300 hover:border-[#F2B632] sm:p-6 " >
      <p className=" font-manrope text-[11px] font-bold uppercase leading-[13px] tracking-[1.6px] text-[#B87800] " >
        Rescue Point
      </p>

      <h3 className=" mt-3 font-fraunces text-[20px] font-semibold leading-[23px] tracking-[0px] text-[#003366] " >
        {title}
      </h3>

      <p className=" mt-2 font-manrope text-[14px] font-normal leading-[16px] tracking-[0.3px] text-[#0A1929]/60 " >
        {meta}
      </p>

      <span className=" mt-auto inline-flex w-fit items-center gap-2 pt-5 font-manrope text-[12px] font-bold uppercase leading-[14px] tracking-[1.6px] text-[#1686D9] transition-colors group-hover:text-[#003366] " >
        Details

        <ArrowRight aria-hidden="true" className=" h-[13px] w-[13px] transition-transform duration-300 group-hover:translate-x-1 " strokeWidth={1.8} />
      </span>
    </Link>
  );
}

function ReasonCard({ title, description }) {
  return (
    <article className=" h-full border-[0.67px] border-[#003366]/10 bg-white px-5 py-5 sm:px-6 sm:py-6 " >
      <h3 className=" font-manrope text-[14px] font-bold uppercase leading-[14px] tracking-[1.8px] text-[#B87800] " >
        {title}
      </h3>

      <p className=" mt-4 font-manrope text-[14px] font-normal leading-[17px] tracking-[0px] text-[#0A1929]/70 " >
        {description}
      </p>
    </article>
  );
}

export default function EverestRelatedRoutes() {
  return (
    <section
      id="related-routes"
      className="scroll-mt-[123px] overflow-hidden"
    >
      {/* Related routes */}
      <div className="bg-white">
        <div className=" mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-[90px] xl:px-[125px] " >
          <p className=" font-manrope text-[9px] font-bold uppercase leading-[14px] tracking-[1.98px] text-[#B87800] " >
            — Related Everest Evacuation Routes
          </p>

          <h2 className=" mt-4 font-fraunces text-[36px] font-semibold leading-[42px] tracking-[-0.72px] text-[#003366] sm:text-[42px] sm:leading-[49px] lg:text-[48px] lg:leading-[56px] lg:tracking-[-0.96px] " >
            Other Everest region rescue routes.
          </h2>

          {/* Route cards */}
          <div className=" mt-8 grid items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-3 " >
            {rescueRoutes.map((route) => (
              <RouteCard key={route.href} {...route} />
            ))}
          </div>

          {/* Also see */}
          <div className="mt-9">
            <h3 className=" font-manrope text-[14px] font-bold uppercase leading-[14px] tracking-[1.8px] text-[#003366] " >
              Also See
            </h3>

            <div className="mt-4 flex flex-col items-start gap-2">
              {alsoSeeLinks.map((link) => (
                <Link key={link.href} href={link.href} className=" inline-flex items-center gap-1 font-manrope text-[14px] font-normal leading-[16px] tracking-[0px] text-[#1686D9] transition-colors hover:text-[#003366] " >
                  {link.label}

                  <span aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Why Mountain Helicopters */}
      <div className=" border-t-[0.67px] border-t-[#003366]/15 bg-[#EDF4FA] " >
        <div
          className=" mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-[125px] " >
          <p
            className=" font-manrope text-[11px] font-bold uppercase leading-[14px] tracking-[1.98px] text-[#B87800] " >
            — Why Mountain Helicopters
          </p>

          <h2
            className=" mt-4 w-full max-w-[1100px] font-fraunces text-[36px] font-semibold leading-[42px] tracking-[-0.72px] text-[#003366] sm:text-[51.2px] sm:leading-[49px] lg:text-[49px] lg:leading-[56px] lg:tracking-[-1.02px] " >
             Why Mountain Helicopters Nepal for Rescue?
          </h2>

          {/* Reason cards */}
          <div className=" mx-auto mt-8 grid w-full max-w-[1100px] items-stretch gap-5 lg:grid-cols-2 " >
            {reasons.map((reason) => (
              <ReasonCard key={reason.title} {...reason} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}