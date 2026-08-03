import Link from "next/link";
import { ArrowRight, Mail, MessageCircle, Phone } from "lucide-react";


const rescuePhone = "+977-9712082949";
const rescuePhoneHref = "tel:+9779712082949";
const whatsappHref = "https://wa.me/9779712082949";
const rescueEmail = "mailto:enquiry@moutainhelicoptersnepal.com";

export default function GosaikundaOverview() {
  return (
    <section
      id="overview"
      className={` w-full scroll-mt-[129px] bg-[#FFFFFF]`}
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
              <span>Overview of Gosaikunda Helicopter </span>

              <em className="font-[900] italic">Rescue Operations</em>
            </h2>

            {/* Body text */}
            <div className="mt-6 flex w-full max-w-[672px] flex-col gap-6 font-font-manrope text-[17px] font-normal leading-[27.63px] tracking-[0px] text-[#0A1929]/80">
              <p>
                The Gosaikunda area of Langtang National Park faces a wide
                range of high altitudes and volatile weather. That’s why a
                higher number of emergency medical situations often arise due
                to these hazardous circumstances. At such instances, a
                Gosaikunda Helicopter Rescue assists to retrieve any victims on
                elevated hiking trails where evacuation on the ground would not
                be feasible. Helicopter rescues for altitude above 4000m like
                Gosaikunda Lake and Lauribina La pass where a normal helicopter
                won’t be able to fly are assisted using specially-designed
                helicopter machines by our organization. The overall process of
                the evacuation between the trekking company, the insurance
                company and aviation agency.
              </p>

              <h2 className="max-w-[670px] font-fraunces text-[38px] font-semibold leading-[1.06] tracking-[-1px] text-[#003366] sm:text-[44px] lg:text-[51.2px] lg:leading-[54.27px] lg:tracking-[-1.02px]">
                <span>
                  Highlights of Rescue Operation in Gosaikunda Area
                </span>
              </h2>

              <ul className="list-disc space-y-3 pl-6">
                <li>
                  Full-time emergency dispatch operations are continued in the
                  entire Langtang and Gosaikunda conservation area.
                </li>

                <li>
                  The delivery out of Kathmandu and the rescue location is
                  arrived within minutes.
                </li>

                <li>
                  High-altitude helicopter flights are operated by certified
                  aviation professionals.
                </li>

                <li>
                  Our operations are approved by the Civil Aviation Authority
                  of Nepal (CAAN) and operate with an experienced fleet of
                  mountain pilots.
                </li>

                <li>
                  The paramedical care is provided on route to the hospital
                  during the air evacuation.
                </li>

                <li>
                  There is the provision of in-flight oxygen cylinders and a
                  complete first-aid kit on the aircraft.
                </li>

                <li>
                  We ensure safe landing procedures at the highest altitude
                  points of risk, such as Gosaikunda Lake, Lauribina La Pass,
                  and Sing Gompa.
                </li>

                <li>
                  Direct hospital transfers to tertiary care center hospitals
                  in Kathmandu are also facilitated by us.
                </li>
              </ul>
            </div>
          </div>

          {/* Right column */}
          <aside className="flex w-full flex-col gap-4">
            {/* Emergency dispatch card */}
            <div className="box-border flex w-full flex-col border-t-[0.67px] border-t-[#F2B632]/60 bg-[#003366] p-5 text-[#F8FAFC]">
              <div>
                <div className="flex items-center gap-[15px]">
                  <span className="h-3 w-3 shrink-0 bg-[#0062B1]" />

                  <p className="font-manrope text-[12px] font-medium uppercase leading-[15px] tracking-[1.92px]">
                    24/7 operational
                  </p>
                </div>

                <div className="flex w-full flex-col pt-6">
                  <span className="h-px w-full bg-[#F2B632]/40" />
                </div>
              </div>

              <div className="flex h-[33px] w-full flex-col pt-6">
                <p className="w-[153px] font-manrope text-[10px] font-medium uppercase leading-[16.5px] tracking-[1.98px] text-[#F2B632]">
                  Emergency dispatch
                </p>
              </div>

              <div className="flex h-[168px] w-full flex-col gap-[12px] pt-6">
                <Link
                  href={rescuePhoneHref}
                  aria-label={`Call emergency dispatch at ${rescuePhone}`}
                  className="group inline-flex h-11 min-h-11 w-full items-center gap-2 bg-[#D62828] px-5 py-[10.4px] font-manrope text-[13px] font-medium uppercase leading-[19.5px] tracking-[1.3px] text-[#F8FAFC] transition-colors hover:bg-[#BC2020] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F8FAFC]"
                >
                  <Phone
                    aria-hidden="true"
                    className="h-3.5 w-3.5 shrink-0"
                  />

                  <span className="whitespace-nowrap">{rescuePhone}</span>
                </Link>

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

                <Link
                  href={`mailto:${rescueEmail}`}
                  aria-label={`Email emergency dispatch at ${rescueEmail}`}
                  className="group inline-flex h-11 min-h-11 w-full items-center gap-2 border-[0.67px] border-[#F8F6F1]/50 bg-transparent px-5 py-[10.4px] font-manrope text-[13px] font-medium  leading-[19.5px] tracking-[1.3px] text-[#F8FAFC] transition-colors hover:border-[#F8F6F1]/80 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F8FAFC]"
                >
                  <Mail
                    aria-hidden="true"
                    className="h-3.5 w-3.5 shrink-0"
                  />

                  <span className="min-w-0 truncate">{rescueEmail}</span>
                </Link>
              </div>

              <div className="flex w-full flex-col pt-7">
                <span className="h-px w-full bg-[#F2B632]/50" />
              </div>

              <div className="mt-4 border-tpt-4">
                <div className="flex w-full flex-col">
                  <p className="font-manrope text-[14px] leading-[22.75px] tracking-[0px] text-[#F8FAFC]/80">
                    Response typical &lt;5 min to coordinate from any Everest
                    region point.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col pt-4">
              <div className="flex w-full flex-col border-[0.67px] border-[#003366]/15 bg-[#EDF4FA] p-6">
                <p className="font-manrope text-[9px] font-medium uppercase leading-[14px] tracking-[2px] text-[#C98900]">
                  Also on this route
                </p>

                <h3 className="mt-3 font-fraunces text-[18px] font-semibold leading-[1.3] tracking-[-0.2px] text-[#003B70]">
                 gosaikunda-lake Helicopter Tour
                </h3>

                <p className="mt-2 font-manrope text-[12px] font-normal leading-[1.55] text-[#41566A]">
                  The scenic flight, flown by the same crews and aircraft.
                </p>

                <Link
                  href="/tours/gosaikunda-lake"
                  className="group mt-4 inline-flex items-center gap-2 font-manrope  text-[12px] font-bold uppercase leading-[15px] tracking-[1.5px] text-[#0062B1] transition-colors hover:text-[#003B70] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0062B1]"
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