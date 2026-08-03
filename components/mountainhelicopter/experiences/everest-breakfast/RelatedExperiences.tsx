import Image from "next/image";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

const relatedExperiences = [
  {
    title: "Stand at 5,545 Metres",
    category: "Kala Patthar Landing",
    description:
      "A high-altitude landing experience near one of Everest's most famous viewpoints.",
    image: "/images/experiences/kala-patthar.png",
    href: "/experiences/kala-patthar",
  },
  {
    title: "A Table in the Sky",
    category: "Helicopter Picnic",
    description: "A private picnic experience on a secluded Himalayan ridge.",
    image: "/images/experiences/heli-picnic.png",
    href: "/experiences/heli-picnic",
  },
  {
    title: "Celebrate Above the Clouds",
    category: "Private Celebration",
    description:
      "A private helicopter experience for proposals, anniversaries and milestone occasions.",
    image: "/images/experiences/celebration.png",
    href: "/experiences/celebrations",
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
              className="font-fraunces text-[clamp(2rem,3.8vw,2.8rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-[#003366]"
            >
              You might also enjoy.
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
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#0062B1] via-[#003366] to-[#001A33]">
                {experience.image && (
                  <>
                    <Image
                      src={experience.image}
                      alt={experience.title}
                      fill
                      className="object-cover opacity-70 transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/75 to-transparent" />
                  </>
                )}

                <span className="absolute bottom-4 left-5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#F2B632]">
                  {experience.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-fraunces text-[22px] font-semibold text-[#003366]">
                  {experience.title}
                </h3>

                <p className="mt-3 text-sm leading-[1.75] text-[#475569]">
                  {experience.description}
                </p>

                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#003366] transition group-hover:gap-4">
                  Explore
                  <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}