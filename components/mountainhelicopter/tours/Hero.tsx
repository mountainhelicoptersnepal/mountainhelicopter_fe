import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import SecondaryButton from "@/components/shared/buttons/SecondaryButton";

const TOUR_LINKS = [
  { label: "Everest Base Camp", href: "/tours/everest-base-camp" },
  { label: "Annapurna Base Camp", href: "/tours/annapurna-base-camp" },
  { label: "Langtang Valley", href: "/tours/langtang-valley" },
  { label: "Gosaikunda Lake", href: "/tours/gosaikunda-lake" },
  { label: "Muktinath Tour", href: "/tours/muktinath" },
];



export default function Hero() {
  return (
    <section className="relative w-full">
      {/* Tour quick links */}
      <nav
        aria-label="Tour quick links"
        className="relative z-10 mt-[75px] w-full bg-[#0d3d6e]"
      >
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-6 gap-y-2 px-6 py-4 md:px-12 lg:px-16">
          <Link
            href="/tours"
            className="shrink-0 font-manrope text-[11px] font-semibold uppercase tracking-[1.1px] text-[#c1cdda] transition hover:text-[#f2b632]"
          >
            Our Tours
          </Link>

          {TOUR_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-manrope text-[11px] font-semibold uppercase tracking-[1.1px] text-[#c1cdda] transition hover:text-[#f2b632]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Hero image */}
      <div className="relative flex min-h-[600px] w-full items-center overflow-hidden bg-[#071825] sm:min-h-[720px] lg:min-h-[860px]">
        <Image
          src="/images/tour/hero-bg.jpg"
          alt="Snow-capped Himalayan peak seen from a Mountain Helicopters flight"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-16 md:px-12 md:py-24 lg:px-16 lg:py-28">
          <div className="flex flex-col items-start gap-5">
            <div className="flex items-center gap-4">
              <span aria-hidden="true" className="h-px w-8 bg-[#f2b632]" />

              <p className="font-manrope text-[10px] font-bold uppercase leading-[15px] tracking-[3.5px] text-[#f2b632]">
                Mountain Helicopters Nepal
              </p>
            </div>

            <h1 className="font-fraunces text-[clamp(48px,10vw,113.325px)] font-bold leading-[0.9] tracking-[-0.025em] text-white">
              <span className="block">The Himalaya,</span>
              <span className="block">by helicopter.</span>
            </h1>

            <p className="max-w-[500px] font-manrope text-[18px] font-bold leading-[33px] text-white">
              Explore Nepal from a perspective few will ever know. Curated
              helicopter journeys from Everest Base Camp to sacred Himalayan
              destinations.
            </p>

            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-[26px]">
              <PrimaryButton href="/tours" showArrow={false}>
                Explore Journeys
              </PrimaryButton>
              <SecondaryButton href="/contact">
                Custom Charter
              </SecondaryButton>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
