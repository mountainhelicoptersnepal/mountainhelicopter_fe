"use client";
import Image from "next/image";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import SecondaryButton from "@/components/shared/buttons/SecondaryButton";

function WhatsappIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.04 4C9.42 4 4.04 9.32 4.04 15.86c0 2.1.56 4.15 1.62 5.95L4 28l6.36-1.62a12.1 12.1 0 0 0 5.68 1.42C22.66 27.8 28 22.48 28 15.94 28 9.36 22.66 4 16.04 4Zm0 21.78c-1.82 0-3.6-.5-5.14-1.46l-.36-.22-3.78.96 1-3.64-.24-.38a9.82 9.82 0 0 1-1.5-5.18c0-5.42 4.5-9.84 10.02-9.84 5.5 0 9.98 4.44 9.98 9.92 0 5.42-4.48 9.84-9.98 9.84Zm5.48-7.36c-.3-.14-1.76-.86-2.04-.96-.28-.1-.48-.14-.68.14-.2.3-.78.96-.96 1.16-.18.2-.36.22-.66.08-.3-.14-1.26-.46-2.4-1.48-.88-.78-1.48-1.74-1.66-2.04-.18-.3-.02-.46.14-.6.14-.14.3-.36.46-.54.16-.18.2-.3.3-.5.1-.2.06-.38-.02-.54-.08-.14-.68-1.64-.94-2.24-.24-.58-.5-.5-.68-.5h-.58c-.2 0-.52.08-.8.38-.28.3-1.06 1.04-1.06 2.52s1.08 2.92 1.24 3.12c.16.2 2.12 3.22 5.14 4.52.72.3 1.28.48 1.72.62.72.22 1.38.18 1.9.12.58-.08 1.76-.72 2-1.42.24-.7.24-1.3.18-1.42-.08-.12-.28-.2-.58-.34Z" />
    </svg>
  );
}

export default function CTA() {
  const phoneNumber = "9712082949";
  const message =
    "Hi, I have a quick question about a Mountain Helicopters flight.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <section className="relative flex min-h-[560px] w-full items-center justify-center overflow-hidden bg-[#0d1a2d] sm:min-h-[620px]">
      <div className="absolute inset-0 bg-cover bg-[center_40%]">
        <Image src="/images/himalayan.jpg" alt="Himalayan Mountains" fill />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,20,40,0.50)_0%,rgba(8,16,32,0.70)_55%,rgba(6,12,26,0.88)_100%)]" />

      <div className="relative max-w-7xl text-center px-6 md:px-12 lg:px-16 py-16 md:py-24 lg:py-28">
        <div className="mb-6 flex items-center justify-center gap-3 sm:mb-8 sm:gap-4">
          <span className="h-px w-6 bg-[#F2B632] sm:w-9" />

          <span className="font-manrope text-[9px] font-medium uppercase tracking-[0.2em] text-[#f5a623] sm:text-[0.72rem] sm:tracking-[0.22em]">
            Begin Your Journey
          </span>

          <span className="h-px w-6 bg-[#F2B632] sm:w-9" />
        </div>

        <h2 className="mb-8 font-fraunces text-[clamp(44px,9vw,86.22px)] font-bold leading-[0.92] tracking-[-0.025em] text-white">
          Plan Your
          <br />
          <span className="text-[#F2B632]">Helicopter Tour in Nepal</span>
        </h2>

        <p className="mx-auto mb-10 max-w-2xl font-manrope text-[clamp(0.9rem,1.6vw,1.05rem)] font-light leading-[1.75] text-white/65">
          Let us know where you would like to fly: Everest, Annapurna, Langtang,
          Muktinath, Mustang, or an individualized Himalayas flight plan. We
          will assist in creating a safe and enjoyable experience that fits your
          schedule.
        </p>

        <div className="flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
          <PrimaryButton href="/contact">Inquire Now</PrimaryButton>
          <SecondaryButton
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-inline gap-2"
          >
            <WhatsappIcon />
            Chat on WhatsApp
          </SecondaryButton>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[90px] bg-gradient-to-b from-transparent to-[#0d1a2d]" />
    </section>
  );
}
