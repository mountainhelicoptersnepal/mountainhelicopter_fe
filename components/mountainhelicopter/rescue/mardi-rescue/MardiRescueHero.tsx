import { Mail, MessageCircle, Phone } from "lucide-react";

export default function MardiRescueHero() {
  return (
    <section className="relative overflow-hidden bg-[#061523] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-0 h-[520px] w-[520px] rounded-full bg-[#0d2940]/35 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[320px] w-[320px] rounded-full bg-[#0b2135]/30 blur-3xl" />
      </div>


       <div className="mx-auto grid min-h-[730px] max-w-[1440px] items-center gap-12 px-5 pb-16 pt-24 sm:px-8 sm:pb-20 sm:pt-28 lg:grid-cols-[1fr_300px] lg:px-12 lg:pb-20 lg:pt-32 xl:px-[80px] 2xl:px-[125px]">
        <div className="max-w-[920px]">
          <p className="font-manrope text-[10px] font-bold uppercase tracking-[0.24em] text-[#f2a10d]">
            — Mardi Himal // 24/7 Helicopter Rescue
          </p>

          <h1 className="mt-7 max-w-[920px] font-fraunces text-[48px] font-semibold leading-[0.98] tracking-[-0.035em] text-[#f6f2ea] sm:text-[62px] lg:text-[76px] xl:text-[84px]">
            <span className="block">
              Mardi{" "}
              <span className="italic text-[#f2a10d]">
                Helicopter Rescue
              </span>
            </span>

            <span className="block">Emergency Evacuation</span>

            <span className="block">from the Mardi Himal Route</span>
          </h1>

          <p className="mt-8 max-w-[800px] font-manrope text-[15px] leading-7 text-white/75 sm:text-[17px] sm:leading-8">
            Mardi Himal helicopter rescue provides emergency evacuation for
            trekkers, guides and porters facing altitude illness, injury,
            severe weather or other urgent conditions along the Mardi Himal
            trekking route. Rescue may be coordinated from Forest Camp, Low
            Camp, High Camp, View Point, Mardi Himal Base Camp and nearby
            accessible landing areas.
          </p>

          <div className="mt-10">
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a
                href="tel:+9779712082949"
                className="inline-flex h-[45px] items-center justify-center gap-2 bg-[#c85d00] px-5 font-manrope text-[10px] font-bold uppercase tracking-[0.14em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#df6b00]"
              >
                <span>[</span>
                <Phone size={14} />
                Call Emergency Line
                <span>]</span>
              </a>

              <a
                href="tel:+9779712082949"
                className="font-fraunces text-[31px] font-semibold text-[#f6f2ea] transition-colors duration-300 hover:text-[#f2a10d] sm:text-[38px]"
              >
                +977-9712082949
              </a>
            </div>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/9779712082949"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[44px] items-center justify-center gap-2 bg-[#328562] px-5 font-manrope text-[10px] font-bold uppercase tracking-[0.14em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#3d9974]"
              >
                <span>[</span>
                <MessageCircle size={14} fill="currentColor" />
                WhatsApp Dispatch
                <span>]</span>
              </a>

              <a
                href="mailto:info@mountainhelicoptersnepal.com"
                className="inline-flex h-[44px] items-center justify-center gap-2 border border-white/35 px-5 font-manrope text-[10px] font-bold uppercase tracking-[0.14em] text-white/90 transition duration-300 hover:border-white hover:text-white"
              >
                <span>[</span>
                <Mail size={14} />
                Email Coordination
                <span>]</span>
              </a>
            </div>
          </div>

          <div className="mt-8 grid max-w-[860px] gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
            <div>
              <p className="font-manrope text-[8px] font-bold uppercase tracking-[0.18em] text-[#f2a10d]">
                Common Pickup Points
              </p>

              <p className="mt-2 font-manrope text-[11px] leading-[1.6] text-white/65">
                High Camp, View Point, Base Camp, Low Camp and Forest Camp
              </p>
            </div>

            <div>
              <p className="font-manrope text-[8px] font-bold uppercase tracking-[0.18em] text-[#f2a10d]">
                Operational Base
              </p>

              <p className="mt-2 font-manrope text-[11px] leading-[1.6] text-white/65">
                Pokhara or Kathmandu depending on aircraft position and weather
              </p>
            </div>

            <div>
              <p className="font-manrope text-[8px] font-bold uppercase tracking-[0.18em] text-[#f2a10d]">
                Final Flight Decision
              </p>

              <p className="mt-2 font-manrope text-[11px] leading-[1.6] text-white/65">
                Based on weather, visibility, payload, landing access and pilot
                approval
              </p>
            </div>
          </div>

          <div className="mt-7 space-y-2 font-manrope text-[11px] leading-5 tracking-[0.03em] text-[#8794a0] sm:text-[12px]">
            <p>Pokhara and Kathmandu emergency coordination available</p>

            <p>
              Share the patient&apos;s GPS coordinates, altitude, symptoms,
              nearest lodge, insurance details and closest safe landing point.
            </p>
          </div>
        </div>

        <div className="flex justify-start lg:justify-end lg:self-end lg:pb-12">
          <div className="group w-full max-w-[270px] border border-[#9c6a12] bg-[#071825]/35 px-6 py-7 text-center transition duration-300 hover:-translate-y-1 hover:border-[#f2a10d] hover:shadow-[0_18px_45px_rgba(0,0,0,0.25)]">
            <p className="font-manrope text-[10px] font-bold uppercase tracking-[0.22em] text-[#f2a10d]">
              Highest Evac Point
            </p>

            <p className="mt-3 font-fraunces text-[48px] font-semibold leading-none text-[#f6f2ea] sm:text-[54px]">
              4,500 m
            </p>

            <p className="mt-3 font-manrope text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8794a0]">
              Mardi Himal Base Camp
            </p>

            <div className="mx-auto mt-5 h-px w-10 bg-[#9c6a12] transition-all duration-300 group-hover:w-full group-hover:bg-[#f2a10d]" />
          </div>
        </div>
      </div>
    </section>
  );
}