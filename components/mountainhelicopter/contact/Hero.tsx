import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#071c36] text-white">
      <Image
        src="/images/home-section/mountain-helicopter.jpg"
        alt="Mountain Helicopters aircraft flying near the Himalayas"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#061a31]/78" />
      <div className="absolute left-0 right-0 top-0 h-1 bg-[#F2B632]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-24 lg:py-28 mt-10 sm:mt-0">
        <div className="grid items-center gap-12 lg:grid-cols-[3fr_2fr]">
          <div>
            <nav className="mb-5 font-manrope text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#F2B632]">
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>
              <span className="mx-2 opacity-50">/</span>
              <span className="text-white/90">Contact</span>
            </nav>

            <span className="mb-6 inline-flex items-center gap-3">
              <span className="block h-px w-10 bg-[#F2B632]" />
              <span className="font-manrope text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#F2B632]">
                Get in touch
              </span>
            </span>

            <h1 className="mb-6 font-fraunces text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
              Direct line.
              <br />
              <span className="text-[#F2B632]">Fast response.</span>
            </h1>

            <p className="mb-8 max-w-[560px] font-manrope text-lg leading-relaxed text-white/85 md:text-xl">
              Our flight desk is staffed 24/7. We answer calls, WhatsApp, and
              email within 2 hours during business hours, immediately for urgent
              matters.
            </p>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#F2B632] shadow-[0_0_10px_rgba(242,182,50,1)]" />
                <span className="font-manrope text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/80">
                  Flight desk open now
                </span>
              </div>

              <div className="flex items-center gap-2">
                <svg
                  className="h-4 w-4 text-[#F2B632]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path
                    d="M12 6v6l4 2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="font-manrope text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/80">
                  Kathmandu · GMT+5:45
                </span>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl bg-white text-[#071c36] shadow-2xl">
            <div className="bg-[#F2B632] px-6 py-3 text-center">
              <span className="font-manrope text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#071c36]">
                Fastest way to reach us
              </span>
            </div>

            <div className="space-y-3 p-6">
              <a
                href="tel:+9779712082949"
                className="group flex items-center gap-4 rounded-xl border border-[#dbe7f2] p-4 transition hover:border-[#F2B632] hover:bg-[#f2f7fc]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#f2f7fc] transition group-hover:bg-[#003366]">
                  <svg
                    className="h-5 w-5 text-[#003366] transition group-hover:text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.11 4.11 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>

                <div className="flex-1">
                  <div className="mb-0.5 font-manrope text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#6B7886]">
                    Call directly
                  </div>
                  <div className="font-manrope font-bold tabular-nums text-[#003366]">
                    +977-9712082949
                  </div>
                </div>
              </a>

              <a
                href="https://wa.me/9779712082949"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-[#dbe7f2] p-4 transition hover:border-[#F2B632] hover:bg-[#f2f7fc]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#fff4d5] transition group-hover:bg-[#003366]">
                  <svg
                    className="h-5 w-5 text-[#F2B632] transition group-hover:text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24z" />
                  </svg>
                </div>

                <div className="flex-1">
                  <div className="mb-0.5 font-manrope text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#6B7886]">
                    WhatsApp · 24/7 · ~5 min reply
                  </div>
                  <div className="font-manrope font-bold tabular-nums text-[#003366]">
                    +977-9712082949
                  </div>
                </div>
              </a>

              <a
                href="mailto:info@mountainhelicoptersnepal.com"
                className="group flex items-center gap-4 rounded-xl border border-[#dbe7f2] p-4 transition hover:border-[#F2B632] hover:bg-[#f2f7fc]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#f2f7fc] transition group-hover:bg-[#003366]">
                  <svg
                    className="h-5 w-5 text-[#003366] transition group-hover:text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="min-w-0 flex-1">
                  <div className="mb-0.5 font-manrope text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#6B7886]">
                    Email · &lt; 2 hr reply
                  </div>
                  <div className="break-all font-manrope text-sm font-bold text-[#003366]">
                    info@mountainhelicoptersnepal.com
                  </div>
                </div>
              </a>

              <a
                href="#inquiry-form"
                className="block w-full rounded-xl border-b-2 border-[#F2B632] bg-[#003366] py-3.5 text-center font-manrope font-bold text-white transition hover:bg-[#071c36]"
              >
                Or send an inquiry form ↓
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
