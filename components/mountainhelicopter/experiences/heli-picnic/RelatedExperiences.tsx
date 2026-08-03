import Image from "next/image";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

const relatedExperiences = [
  {
    title: "Say It at 5,000 Metres",
    category: "Celebrations",
    description:
      "Proposals, anniversaries and milestone moments arranged around a private Himalayan flight.",
    image: "/images/experiences/celebration.png",
    href: "/experiences/celebrations",
  },
  {
    title: "Breakfast Above the Clouds",
    category: "Everest Breakfast",
    description:
      "Hot coffee at 3,880 metres with Everest filling the horizon.",
    image: "/images/experiences/everest-breakfast.png",
    href: "/experiences/everest-breakfast",
  },
  {
    title: "Your Route, Your Rules",
    category: "Private Charter",
    description:
      "A private aircraft, a flexible schedule and a route designed around your plans.",
    image: "/images/experiences/private-charter.png",
    href: "/experiences/private-charter",
  },
];

export default function RelatedExperiences() {
  return (
    <section
      aria-labelledby="related-heading"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24 lg:px-16 lg:py-28">
        <header className="mb-12 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#B8860B]">
              Keep Exploring
            </p>

            <h2
              id="related-heading"
              className="font-fraunces text-[clamp(1.9rem,3.8vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-[#003366]"
            >
              You might also love.
            </h2>
          </div>

          <Link
            href="/experiences"
            className="inline-flex min-h-11 items-center gap-2 font-bold text-[#003366] transition hover:gap-4"
          >
            All experiences
            <ArrowRight size={17} />
          </Link>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          {relatedExperiences.map((experience) => (
            <Link
              key={experience.title}
              href={experience.href}
              className="group overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white transition hover:border-[#F2B632] hover:shadow-[0_20px_40px_rgba(0,51,102,0.16)]"
            >
              <div className="relative h-44 overflow-hidden bg-gradient-to-br from-[#0062B1] via-[#003366] to-[#001A33]">
                <Image
                  src={experience.image}
                  alt={experience.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover opacity-80 transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/70 to-transparent" />

                <span className="absolute bottom-3 left-5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#F2B632]">
                  {experience.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-fraunces text-xl font-semibold text-[#003366]">
                  {experience.title}
                </h3>

                <p className="mt-2 text-sm leading-[1.75] text-[#475569]">
                  {experience.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}