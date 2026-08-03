// src/components/rescue/detail/EverestAircraftRoute.jsx

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function EverestAircraftRoute() {
  return (
    <section className="overflow-hidden bg-[#061523] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-20 xl:px-[80px] 2xl:px-[125px]">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        {/* Left image */}
        <div className="relative">
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src="/images/rescue/everest-aircraft-route.jpg"
              alt="Mountain Helicopters Airbus AS 350 B3e flying in the Everest and Khumbu region"
              fill
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover"
            />
          </div>

          <div className="absolute bottom-0 left-0 h-[2px] w-[82%] bg-[#b77900]" />
        </div>

        {/* Right content */}
        <div className="max-w-[700px]">
          <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#f2a10d]">
            — Same Airframe. Same Crew.
          </p>

          <h2 className="mt-4 font-fraunces text-[38px] font-semibold leading-[1.02] tracking-[-0.03em] text-[#f6f2ea] sm:text-[48px] lg:text-[58px]">
            The aircraft flying you back
            <span className="block">
              has flown{" "}
              <span className="italic text-[#f2a10d]">
                this route every
              </span>
            </span>
            <span className="block">
              <span className="italic text-[#f2a10d]">morning</span> since 2009.
            </span>
          </h2>

          <div className="mt-6 space-y-5 font-manrope text-[12px] leading-[1.8] text-white/78 sm:text-[13px]">
            <p>
              Most Nepal helicopter rescue operators are tour companies that
              occasionally arrange rescue flights. Mountain Helicopters is a
              Khumbu operator. Our AS 350 B3e aircraft fly the Everest Base
              Camp helicopter tour daily during flying season. The same pilots,
              the same aircraft, the same route — every clear morning.
            </p>

            <p>
              This means our pilots know the Khumbu flight corridor by season,
              weather pattern, and time of day. They know which lodges have
              accessible helipads. They know the ridge crossings that become
              dangerous at 09:00 in spring. They know Lukla ATC by first name.
              When we fly a rescue at 04:30 from Gorak Shep, our pilots are not
              learning the route.
            </p>

            <p>
              The B3e is the same aircraft class that holds the world altitude
              record for helicopter landing — 8,848 m on Everest&apos;s summit,
              achieved by an AS 350 B3 in 2005.
            </p>
          </div>

          <Link
            href="/tours/everest-base-camp"
            className="mt-7 inline-flex min-h-[42px] items-center justify-center gap-3 border border-white/45 px-5 font-manrope text-[9px] font-bold uppercase tracking-[0.16em] text-white transition hover:border-[#f2a10d] hover:text-[#f2a10d]"
          >
            <span>[</span>
            Learn About Our Everest Tours
            <ArrowRight size={14} />
            <span>]</span>
          </Link>
        </div>
      </div>
    </section>
  );
}