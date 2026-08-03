import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import SecondaryButton from "@/components/shared/buttons/SecondaryButton";

import {
  CalendarDays,
  Clock3,
  Mountain,
  Star,
  Wind,
} from "lucide-react";

const details = [
  {
    icon: Clock3,
    label: "4 hours total",
  },
  {
    icon: Mountain,
    label: "15 min at altitude",
  },
  {
    icon: CalendarDays,
    label: "September – June",
  },
  {
    icon: Wind,
    label: "Oxygen onboard",
  },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-[72vh] w-full items-center overflow-hidden bg-[#003366] text-white md:min-h-[88vh]">
      {/* Full-width background image */}
      <Image
        src="/images/experiences/kala-patthar-bg.png"
        alt="Helicopter resting on the black ridge of Kala Patthar at dawn with the Everest massif behind"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Dark left overlay for text readability */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,25,51,0.94)_0%,rgba(0,30,59,0.74)_35%,rgba(0,36,69,0.3)_62%,rgba(0,20,40,0.04)_100%)]" />

      {/* Subtle top and bottom shading */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,20,40,0.2)_0%,rgba(0,20,40,0.02)_48%,rgba(0,20,40,0.48)_100%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-14 pt-24 md:px-12 md:pb-20 md:pt-32 lg:px-16">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex flex-wrap items-center gap-2 [font-family:var(--font-manrope)] text-[11px] font-semibold uppercase tracking-[0.15em] text-[#F2B632]"
        >
          <Link
            href="/"
            className="transition-colors duration-300 hover:text-white"
          >
            Home
          </Link>

          <span className="text-white/50">/</span>

          <Link
            href="/experiences"
            className="transition-colors duration-300 hover:text-white"
          >
            Experience
          </Link>

          <span className="text-white/50">/</span>

          <span className="text-white/90">Kala Patthar Landing</span>
        </nav>

        {/* Badges */}
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center rounded-full bg-[#F2B632] px-4 py-2 [font-family:var(--font-manrope)] text-[10px] font-bold uppercase tracking-[0.18em] text-[#003366]">
            Iconic Experience · 02
          </span>

          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 [font-family:var(--font-manrope)] text-xs font-semibold text-white backdrop-blur-sm">
            <Star
              size={14}
              className="shrink-0 fill-[#F2B632] text-[#F2B632]"
            />
            4.9 · The bucket-list landing
          </span>
        </div>

        {/* Heading */}
        <h1 className="max-w-[900px] [font-family:var(--font-fraunces)] text-[clamp(2.75rem,7vw,5.5rem)] font-semibold leading-[1.03] tracking-[-0.03em]">
          Stand at
          <br />
          5,545 Metres
        </h1>

        {/* Description */}
        <p className="mb-10 mt-6 max-w-[660px] [font-family:var(--font-manrope)] text-xl font-light leading-relaxed text-white/90 md:text-2xl">
          The closest a human can legally get to Everest without climbing it.
          Fifteen minutes on the black ridge.
        </p>

        {/* Experience details */}
        <div className="mb-10 flex max-w-[800px] flex-wrap gap-x-8 gap-y-4">
          {details.map((detail) => {
            const Icon = detail.icon;

            return (
              <span
                key={detail.label}
                className="inline-flex items-center gap-2 [font-family:var(--font-manrope)] text-[11px] font-semibold uppercase tracking-[0.12em] text-white/85"
              >
                <Icon
                  size={16}
                  className="shrink-0 text-[#F2B632]"
                />

                {detail.label}
              </span>
            );
          })}
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <PrimaryButton
            href="#booking"
            className="h-[52px] w-full px-8 sm:w-auto"
          >
            Reserve this landing
          </PrimaryButton>

          <SecondaryButton
            href="/experiences"
            className="h-[52px] w-full px-8 sm:w-auto"
          >
            See all experiences
          </SecondaryButton>
        </div>
      </div>
    </section>
  );
}