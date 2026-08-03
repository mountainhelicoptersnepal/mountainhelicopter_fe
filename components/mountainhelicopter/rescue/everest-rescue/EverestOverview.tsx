import Link from "next/link";
import { ArrowRight, Mail, MessageCircle, Phone } from "lucide-react";

const rescuePhone = "+977-9712082949";
const rescuePhoneHref = "tel:+9779712082949";
const whatsappHref = "https://wa.me/9779712082949";
const rescueEmail = "mailto:enquiry@moutainhelicoptersnepal.com";
export default function EverestOverview() {
  return (
    <section
      id="overview"
      className={`  w-full scroll-mt-[129px] bg-[#FFFFFF]`}
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col px-5 py-16 sm:px-8 lg:px-12 lg:py-[72px]">
        {/* Main two-column layout */}
        <div className="mx-auto grid w-full max-w-[1160px] grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,680px)_416px] lg:gap-16">
          {/* Left content */}
          <div className="w-full max-w-[680px]">
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-5 shrink-0 bg-[#F2B632]" />

              <p className="font-manrope text-[11px] font-medium uppercase leading-none tracking-[1.98px] text-[#F2B632]">
                Overview
              </p>
            </div>

            <h2 className="max-w-[670px] font-fraunces text-[38px] font-semibold leading-[1.06] tracking-[-1px] text-[#003366] sm:text-[44px] lg:text-[51.2px] lg:leading-[54.27px] lg:tracking-[-1.02px]">
              <span>Everest Helicopter Rescue -</span>

              <em className="font-[900] italic">
                Emergency Evacuation from Everest Region{" "}
              </em>
            </h2>

            {/* Body text */}
            <div className="mt-6 flex w-full max-w-[672px] flex-col gap-6 font-font-manrope text-[17px] font-normal leading-[27.63px] tracking-[0px] text-[#0A1929]/80">
              <p>
                When it’s a time of crisis in the Everest region, time is
                everything. Mountain Helicopters Nepal offers emergency Everest
                helicopter rescue service in the region, coordinating swift
                helicopter evacuations of trekkers, climbers, guides, expedition
                crews, travel agencies, etc. Who requires urgent transport from
                elevated points in the Everest region, including Everest Base
                Camp, Gorak Shep, Lobuche, Dingboche, Pheriche, Namche Bazaar &
                Lukla? The beauty of the Everest region can be misleading.
              </p>

              <p>
                Being isolated at high altitudes in volatile weather conditions
                and far from motorable roads in the Upper Khumbu (where the
                facilities and services are few), sometimes the safest way to
                bring the suffering individual down to Lukla, Kathmandu, or the
                hospital in an emergency is with a quick helicopter flight from
                that high altitude
              </p>

              <p>
                We ensure swift helicopter emergency service to help you get
                your patient down quickly from the heights of the Everest
                region. To contact Mountain Helicopters Nepal for emergency
                helicopter rescue, please mention the patients location,
                condition, altitude, insurance policy details & your phone
                number.
              </p>
            </div>
          </div>

          {/* Right column */}
          <aside className="flex w-full flex-col gap-4">
            {/* Emergency dispatch card */}
            <div className="box-border flex w-full flex-col border-t-[0.67px] border-t-[#F2B632]/60 bg-[#003366] p-5 text-[#F8FAFC]">
              {/* Operational heading */}

              <div>
                <div className="flex items-center gap-[15px]">
                  <span className="h-3 w-3 shrink-0 bg-[#0062B1]" />

                  <p className="font-manrope text-[12px] font-medium uppercase leading-[15px] tracking-[1.92px]">
                    24/7 operational
                  </p>
                </div>

                {/* Separator container */}
                <div className="flex w-full flex-col pt-6">
                  <span className="h-px w-full bg-[#F2B632]/40" />
                </div>
              </div>

              {/* Dispatch label */}
              <div className="flex h-[33px] w-full flex-col pt-6">
                <p className="w-[153px] font-manrope text-[10px] font-medium uppercase leading-[16.5px] tracking-[1.98px] text-[#F2B632]">
                  Emergency dispatch
                </p>
              </div>

              {/* Contact links */}
              <div className="flex h-[168px] w-full flex-col gap-[12px] pt-6">
                {/* Phone */}
                <Link
                  href={rescuePhoneHref}
                  aria-label={`Call emergency dispatch at ${rescuePhone}`}
                  className="group inline-flex h-11 min-h-11 w-full items-center gap-2 bg-[#D62828] px-5 py-[10.4px] font-manrope text-[13px] font-medium uppercase leading-[19.5px] tracking-[1.3px] text-[#F8FAFC] transition-colors hover:bg-[#BC2020] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F8FAFC]"
                >
                  
                  <Phone aria-hidden="true" className="h-3.5 w-3.5 shrink-0" />

                  <span className="whitespace-nowrap">{rescuePhone}</span>

                </Link>

                {/* WhatsApp */}
                <Link
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contact emergency dispatch through WhatsApp"
                  className="group inline-flex h-11 min-h-11 w-full items-center gap-2 bg-[#0062B1] px-5 py-[10.4px] font-manrope text-[13px] font-medium uppercase leading-[19.5px] tracking-[1.3px] text-[#F8FAFC] transition-colors hover:bg-[#00559A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F8FAFC]"
                >

                  <MessageCircle
                    aria-hidden="true"
                    className="h-3.5 w-3.5 shrink-0"
                  />

                  <span className="whitespace-nowrap">WhatsApp</span>

                </Link>

                {/* Email */}
                <Link
                  href={`mailto:${rescueEmail}`}
                  aria-label={`Email emergency dispatch at ${rescueEmail}`}
                  className="group inline-flex h-11 min-h-11 w-full items-center gap-2 border-[0.67px] border-[#F8F6F1]/50 bg-transparent px-5 py-[10.4px] font-manrope text-[13px] font-medium  leading-[19.5px] tracking-[1.3px] text-[#F8FAFC] transition-colors hover:border-[#F8F6F1]/80 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F8FAFC]"
                >

                  <Mail aria-hidden="true" className="h-3.5 w-3.5 shrink-0" />

                  <span className="min-w-0 truncate">{rescueEmail}</span>
                </Link>
              </div>

              <div className="flex w-full flex-col pt-7">
                <span className="h-px w-full bg-[#F2B632]/50" />
              </div>
              {/* Response information */}
              <div className="mt-4 border-tpt-4">
                <div className="flex w-full flex-col ">
                  <p className=" font-manrope text-[14px]  leading-[22.75px] tracking-[0px] text-[#F8FAFC]/80">
                    Response typical &lt;5 min to coordinate from any Everest
                    region point.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col pt-4">
              <div className="flex w-full flex-col border-[0.67px] border-[#003366]/15 bg-[#EDF4FA] p-6">
                <p className="font-manrope text-[11px] font-medium uppercase leading-[14px] tracking-[2px] text-[#C98900]">
                  Also on this route
                </p>

                <h3 className="mt-3 font-fraunces text-[18px] font-semibold leading-[1.3] tracking-[-0.2px] text-[#003B70]">
                  Everest Base Camp Helicopter Tour
                </h3>

                <p className="mt-2 font-manrope text-[12px] font-normal leading-[1.55] text-[#41566A]">
                  The scenic flight, flown by the same crews and aircraft.
                </p>

                <Link
                  href="/tours/everest-base-camp"
                  className="group mt-4 inline-flex items-center gap-2 font-jetbrains-mono text-[12px] font-medium uppercase leading-[15px] tracking-[1.5px] text-[#0062B1] transition-colors hover:text-[#003B70] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0062B1]"
                >
                  View
                  <ArrowRight
                    aria-hidden="true"
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}