import Link from "next/link";

export default function ReachDesk() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <header className="mx-auto mb-14 max-w-[640px] text-center">
          <span className="mb-4 block font-manrope text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#F2B632]">
            Who do you need?
          </span>

          <h2 className="font-fraunces text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-[#003366]">
            Reach the right desk, first time.
          </h2>
        </header>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl bg-[#003366] p-7 text-white transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,51,102,0.18)]">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
              <svg
                className="h-6 w-6 text-[#F2B632]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>

            <h3 className="mb-1.5 font-manrope text-lg font-bold">
              Tour Bookings
            </h3>
            <p className="mb-4 font-manrope text-sm leading-relaxed text-white/75">
              Everest tours, Annapurna, Langtang, and all 30+ Khumbu sectors.
              Availability and pricing.
            </p>

            <div className="space-y-1 border-t border-white/15 pt-4 font-manrope text-sm">
              <div className="font-semibold tabular-nums text-[#F2B632]">
                +977-9712082949
              </div>
              <div className="break-all text-xs text-white/70">
                info@mountainhelicoptersnepal.com
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-[#F2B632] p-7 text-[#003366] transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,51,102,0.18)]">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/35">
              <svg
                className="h-6 w-6 text-[#003366]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M2 12h20M2 12l4-4M2 12l4 4M22 12l-4-4M22 12l-4 4"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <h3 className="mb-1.5 font-manrope text-lg font-bold">
              Charter & Expedition
            </h3>
            <p className="mb-4 font-manrope text-sm leading-relaxed text-[#003366]/80">
              Film crews, expedition logistics, corporate travel, custom routes.
              Quote within 24 hours.
            </p>

            <div className="space-y-1 border-t border-[#003366]/20 pt-4 font-manrope text-sm">
              <div className="font-semibold tabular-nums">
                +977-9712082949
              </div>
              <div className="break-all text-xs text-[#003366]/75">
                info@mountainhelicoptersnepal.com
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-[#003366] p-7 text-white transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,51,102,0.18)]">
            <div className="absolute right-4 top-4 flex items-center gap-1.5">
            </div>

            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F2B632]/20">
              <svg
                className="h-6 w-6 text-[#F2B632]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h3 className="mb-1.5 font-manrope text-lg font-bold">
              Emergency Rescue
            </h3>
            <p className="mb-4 font-manrope text-sm leading-relaxed text-white/75">
              Active mountain emergencies. Dispatch answers immediately,
              aircraft airborne in 30–45 min.
            </p>

            <div className="space-y-1 border-t border-white/15 pt-4 font-manrope text-sm">
              <div className="text-base font-bold tabular-nums text-[#F2B632]">
                +977-9712082949
              </div>
              <div className="text-xs text-white/60">24 hours · 365 days</div>
            </div>
          </div>

          <div className="rounded-2xl bg-[#F2B632] p-7 text-[#003366] transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,51,102,0.18)]">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/35">
              <svg
                className="h-6 w-6 text-[#003366]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
            </div>

            <h3 className="mb-1.5 font-manrope text-lg font-bold">
              Safety Reporting
            </h3>
            <p className="mb-4 font-manrope text-sm leading-relaxed text-[#003366]/80">
              Confidential occurrence or hazard reports. Reviewed within 48
              hours. No retaliation, ever.
            </p>

            <div className="border-t border-[#003366]/20 pt-4">
              <Link
                href="/safety"
                className="inline-flex items-center gap-1.5 font-manrope text-sm font-semibold transition-all hover:gap-2.5"
              >
                File a safety report
                <svg
                  className="h-3.5 w-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="M5 12h14M12 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
