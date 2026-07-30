const mapLink = "https://maps.app.goo.gl/yzwvUbkkpHgepQ1F8";

const mapEmbedLink =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.7297154363255!2d85.36014147550905!3d27.69474747618977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1987940c3d35%3A0xbdf923163c7593a5!2sMountain%20Helicopters%20Pvt.Ltd.!5e0!3m2!1sen!2sus!4v1782982994409!5m2!1sen!2sus";
  
export default function FindUs() {
  return (
    <section className="border-y border-[#E2E8F0] bg-[#F8FAFC] py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <header className="mb-10 grid items-end gap-8 lg:grid-cols-[3fr_2fr]">
          <div>
            <span className="mb-4 block font-manrope text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#f5a623]">
              Find us
            </span>

            <h2 className="font-fraunces text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-[#003366]">
              Our Kathmandu headquarters.
            </h2>
          </div>

          <div className="font-manrope leading-relaxed text-[#0A1929]/70">
            <p>
              Old Sinamangal, Pepsicola — 10 minutes from Tribhuvan
              International Airport. Visitor parking available on-site.
            </p>
          </div>
        </header>

        <div className="grid items-stretch gap-6 lg:grid-cols-[3fr_2fr] lg:gap-8">
        <div className="h-[450px] overflow-hidden rounded-2xl border border-[#E2E8F0] bg-[#E6F0F8] shadow-[0_8px_24px_rgba(0,51,102,0.12)] md:h-[560px]">
        
        <iframe
          src={mapEmbedLink}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Mountain Helicopters Pvt. Ltd."
        />
        </div>

          <div className="space-y-5">
            <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 md:p-7">
              <span className="mb-3 block font-manrope text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#f5a623]">
                Office address
              </span>

              <address className="mb-4 font-manrope text-lg font-semibold not-italic leading-snug text-[#0A1929]">
                Old Sinamangal, Pepsicola
                <br />
                Kathmandu, Bagmati
                <br />
                P.O. Box 20320, Nepal
              </address>

              <div className="flex flex-wrap gap-2">
                <a
                  href={mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#003366] px-5 py-2.5 font-manrope text-sm font-semibold text-white transition hover:bg-[#001A33]"
                >
                  Google Maps
                </a>
                
                <a
                  href="tel:+9779712082949"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#003366] px-5 py-2.5 font-manrope text-sm font-semibold text-[#003366] transition hover:bg-[#E6F0F8]"
                >
                  Call for directions
                </a>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-[#003366] p-6 text-white md:p-7">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#f5a623]/10" />

              <div className="relative">
                <span className="mb-3 block font-manrope text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#f5a623]">
                  Helipad access
                </span>

                <h4 className="mb-2 font-manrope text-lg font-bold">
                  Tribhuvan International Airport
                </h4>

                <p className="mb-4 font-manrope text-sm leading-relaxed text-white/80">
                  Flights depart from the TIA General Aviation Terminal. Meet us
                  at the office — we transfer you to the helipad 30 minutes
                  before takeoff.
                </p>

                <div className="space-y-1.5 border-t border-white/15 pt-4 font-manrope text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-[#f5a623]">◷</span>
                    <span className="text-white/90">
                      10 min airport → office
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[#f5a623]">▣</span>
                    <span className="text-white/90">
                      Visitor parking on-site
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[#f5a623]">✓</span>
                    <span className="text-white/90">
                      Hotel pickup on tour bookings
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 md:p-7">
              <span className="mb-4 block font-manrope text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#f5a623]">
                Hours
              </span>

              <div className="grid grid-cols-2 gap-5">
                <div>
                  <div className="mb-1 font-manrope text-sm font-bold text-[#0A1929]">
                    Sales Office
                  </div>
                  <div className="font-manrope text-xs font-semibold tabular-nums text-[#003366]">
                    MON–SAT · 09:00–18:00
                  </div>
                  <div className="mt-0.5 font-manrope text-xs text-[#6B7886]">
                    Sunday closed
                  </div>
                </div>

                <div>
                  <div className="mb-1 font-manrope text-sm font-bold text-[#0A1929]">
                    Flight Ops
                  </div>
                  <div className="font-manrope text-xs font-semibold tabular-nums text-[#003366]">
                    24 / 7 · 365 DAYS
                  </div>
                  <div className="mt-0.5 font-manrope text-xs text-[#6B7886]">
                    Rescue always on
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}