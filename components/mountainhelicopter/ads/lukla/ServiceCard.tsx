import Image from "next/image";
import { CheckIcon } from "./icons";

export default function ServiceCard({
  image,
  imageAlt,
  ribbon,
  flagged = false,
  route,
  title,
  desc,
  bullets,
  price,
  priceNote,
  ctaLabel,
  ctaHref,
}: {
  image: string;
  imageAlt: string;
  ribbon?: string;
  flagged?: boolean;
  route: string;
  title: string;
  desc: string;
  bullets: string[];
  price: string;
  priceNote: string;
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <article className="relative flex h-full flex-col rounded-[14px] border border-[#D7E2F2] bg-white p-[30px_26px] transition-all duration-300 hover:border-2 hover:border-[#F2B632] hover:shadow-[0_12px_34px_rgba(245,175,0,.15)]">

      <div className="relative -mx-[26px] -mt-[30px] mb-5 aspect-video overflow-hidden rounded-t-xl bg-[linear-gradient(140deg,#003366,#003366)]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover"
        />
      </div>

      {ribbon ? (
        <span
          className={`absolute left-6 top-[-13px] z-[2] rounded-full px-3.5 py-[5px] text-[11.5px] font-extrabold uppercase tracking-[.09em] ${
            flagged ? "bg-[#F2B632] text-[#0d1a2d]" : "bg-[#003366] text-white"
          }`}
        >
          {ribbon}
        </span>
      ) : null}

      <div className="mb-2 font-manrope text-xs uppercase tracking-[.09em] text-[#4A5B76]">
        {route}
      </div>
      <h3 className="mb-2.5 font-fraunces text-[1.22rem] font-extrabold text-[#0d1a2d]">
        {title}
      </h3>
      <p className="mb-4 text-[15px] text-[#4A5B76]">{desc}</p>

      <ul className="mb-5">
        {bullets.map((bullet) => (
          <li
            key={bullet}
            className="relative border-b border-dashed border-[#D7E2F2] py-[7px] pl-[27px] text-[14.5px] last:border-b-0"
          >
            <CheckIcon className="absolute left-0 top-[13px] h-[15px] w-[15px] rounded-full bg-[#F2B632] p-[2.5px] text-white" />
            {bullet}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-1.5">
        <div className="font-fraunces text-[1.35rem] font-black text-[#003366]">
          {price} <small className="text-[.8rem] font-semibold text-[#4A5B76]">{priceNote}</small>
        </div>
        <a
          href={ctaHref}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#003366] px-5 py-2.5 text-sm font-bold tracking-[.02em] text-white transition-colors duration-300 hover:bg-[#F2B632] hover:text-[#0d1a2d] active:scale-[.98]"
        >
          {ctaLabel}
        </a>
      </div>
    </article>
  );
}
