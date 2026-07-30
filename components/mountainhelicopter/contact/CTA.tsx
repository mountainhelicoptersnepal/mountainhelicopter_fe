export default function CTA() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#003366] via-[#001A33] to-[#003366] p-8 text-white md:p-12 lg:p-16">
          <div className="absolute right-6 top-6 flex items-center gap-2 md:right-8 md:top-8">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#f5a623] shadow-[0_0_12px_rgba(245,166,35,1)]" />
            <span className="font-manrope text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#f5a623]">
              Emergency line open
            </span>
          </div>

          <div className="grid items-center gap-8 lg:grid-cols-[3fr_2fr]">
            <div>
              <span className="mb-4 block font-manrope text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#f5a623]">
                Helicopter rescue · 24/7
              </span>

              <h2 className="mb-4 font-fraunces text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.02em]">
                Trekker in trouble?
                <br />
                <span className="text-[#f5a623]">Call now.</span>
              </h2>

              <p className="max-w-[520px] font-manrope text-lg leading-relaxed text-white/80">
                For active mountain emergencies — altitude sickness, injury, or
                evacuation — our dispatch answers immediately. Aircraft airborne
                in 30–45 minutes.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href="tel:+9779712082949"
                className="group block rounded-xl bg-[#f5a623] p-5 text-[#003366] transition hover:bg-[#e5a82d]"
              >
                <div className="mb-1 font-manrope text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#003366]/70">
                  Emergency dial
                </div>

                <div className="flex items-center justify-between font-fraunces text-2xl font-semibold tabular-nums">
                  +977-9712082949
                  <svg
                    className="h-6 w-6 transition-transform group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.11 4.11 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
              </a>

              <a
                href="https://wa.me/9779712082949?text=EMERGENCY%20RESCUE%20—%20"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-xl border-2 border-white/30 p-5 transition hover:border-[#f5a623] hover:bg-white/5"
              >
                <div className="mb-1 font-manrope text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/70">
                  WhatsApp rescue
                </div>

                <div className="flex items-center justify-between font-fraunces text-2xl font-semibold tabular-nums text-white">
                  +977-9712082949
                  <svg
                    className="h-6 w-6 text-[#f5a623]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24z" />
                  </svg>
                </div>
              </a>

              <p className="pt-2 text-center font-manrope text-xs text-white/60">
                Have ready: GPS location · patient condition · number of evacuees
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}