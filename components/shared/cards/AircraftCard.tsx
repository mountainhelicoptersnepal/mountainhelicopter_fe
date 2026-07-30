import Image from "next/image";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" className="shrink-0">
      <path
        d="M2.5 6L5 8.5L9.5 3.5"
        stroke="#F2B632"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
      <path
        d="M3.75 5.625L7.5 9.375L11.25 5.625"
        stroke="#003366"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsappIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M16.04 4C9.42 4 4.04 9.32 4.04 15.86c0 2.1.56 4.15 1.62 5.95L4 28l6.36-1.62a12.1 12.1 0 0 0 5.68 1.42C22.66 27.8 28 22.48 28 15.94 28 9.36 22.66 4 16.04 4Zm0 21.78c-1.82 0-3.6-.5-5.14-1.46l-.36-.22-3.78.96 1-3.64-.24-.38a9.82 9.82 0 0 1-1.5-5.18c0-5.42 4.5-9.84 10.02-9.84 5.5 0 9.98 4.44 9.98 9.92 0 5.42-4.48 9.84-9.98 9.84Zm5.48-7.36c-.3-.14-1.76-.86-2.04-.96-.28-.1-.48-.14-.68.14-.2.3-.78.96-.96 1.16-.18.2-.36.22-.66.08-.3-.14-1.26-.46-2.4-1.48-.88-.78-1.48-1.74-1.66-2.04-.18-.3-.02-.46.14-.6.14-.14.3-.36.46-.54.16-.18.2-.3.3-.5.1-.2.06-.38-.02-.54-.08-.14-.68-1.64-.94-2.24-.24-.58-.5-.5-.68-.5h-.58c-.2 0-.52.08-.8.38-.28.3-1.06 1.04-1.06 2.52s1.08 2.92 1.24 3.12c.16.2 2.12 3.22 5.14 4.52.72.3 1.28.48 1.72.62.72.22 1.38.18 1.9.12.58-.08 1.76-.72 2-1.42.24-.7.24-1.3.18-1.42-.08-.12-.28-.2-.58-.34Z" />
    </svg>
  );
}

export interface AircraftCardProps {
  image: string;
  imageAlt: string;
  badge: string;
  watermark: string;
  eyebrow: string;
  title: string;
  description: string;
  capabilities: readonly string[];
  idealFor: readonly string[];
  contentBg: string;
  reverse?: boolean;
  bookHref: string;
  enquireHref: string;
}

const AircraftCard = ({
  image,
  imageAlt,
  badge,
  watermark,
  eyebrow,
  title,
  description,
  capabilities,
  idealFor,
  contentBg,
  reverse = false,
  bookHref,
  enquireHref,
}: AircraftCardProps) => {
  return (
    <article
      className={`flex flex-col lg:flex-row ${reverse ? "lg:flex-row-reverse" : ""}`}
    >
      <div className="relative min-h-[320px] w-full overflow-hidden bg-[#0a1929] lg:w-1/2">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />

        <div
          className={`absolute inset-0 ${
            reverse
              ? "bg-gradient-to-l from-transparent from-55% to-[rgba(0,22,45,0.5)]"
              : "bg-gradient-to-r from-transparent from-55% to-[rgba(0,22,45,0.5)]"
          }`}
        />

        <span className="absolute left-6 top-6 bg-[#f2b632] px-4 py-2 font-manrope text-[9px] font-extrabold uppercase leading-[13.5px] tracking-[1.8px] text-[#003366]">
          {badge}
        </span>

        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-6 select-none font-fraunces text-[80px] font-light leading-none tracking-[-3.2px] text-white/[0.07] sm:text-[120px]"
        >
          {watermark}
        </span>
      </div>

      <div className={`w-full p-6 sm:p-10 lg:w-1/2 lg:p-16 ${contentBg}`}>
        <div className="flex flex-col items-start gap-3">
          <p className="font-manrope text-[10px] font-bold uppercase leading-[15px] tracking-[3px] text-[#f2b632]">
            {eyebrow}
          </p>

          <h3 className="font-fraunces text-[28px] font-light leading-[1.1] tracking-[-0.02em] text-[#003366] sm:text-[36px] lg:text-[44px]">
            {title}
          </h3>

          <p className="font-manrope text-[15px] font-light leading-[28.5px] text-[#4a5568]">
            {description}
          </p>

          <div className="flex flex-col gap-3">
            <p className="font-manrope text-[9.5px] font-bold uppercase leading-[14.25px] tracking-[1.9px] text-[#003366]">
              Key Capabilities
            </p>

            <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {capabilities.map((capability) => (
                <li key={capability} className="flex items-start gap-2">
                  <span className="pt-1">
                    <CheckIcon />
                  </span>

                  <span className="font-manrope text-[12.5px] font-normal leading-[18.75px] text-[#6b7886]">
                    {capability}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full border-y border-[#003366]/[0.08] py-4">
            <div className="flex items-center justify-between">
              <p className="font-manrope text-[11px] font-bold uppercase leading-[16.5px] tracking-[1.65px] text-[#003366]">
                Full Specifications
              </p>

              <ChevronIcon />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-manrope text-[9.5px] font-bold uppercase leading-[14.25px] tracking-[1.9px] text-[#003366]">
              Ideal For
            </p>

            <div className="flex flex-wrap gap-2">
              {idealFor.map((item) => (
                <span
                  key={item}
                  className="border border-[#003366]/10 bg-[#003366]/[0.06] px-3 py-1.5 font-manrope text-[11px] font-semibold leading-[16.5px] text-[#003366]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <PrimaryButton href={bookHref}>Book Flight</PrimaryButton>

            <a
              href={enquireHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-[46px] shrink-0 items-center justify-center gap-[5px] border-2 border-black/60 px-6 py-2 font-manrope text-[14px] font-bold uppercase tracking-[-0.14px] text-black/60 transition-colors duration-300 hover:border-[#003366] hover:text-[#003366]"
            >
              <WhatsappIcon />
              Enquire
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default AircraftCard;
