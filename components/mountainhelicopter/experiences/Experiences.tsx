"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock3, MapPin } from "lucide-react";

const filters = [
  { label: "All Experiences", value: "all" },
  { label: "Iconic Everest", value: "iconic" },
  { label: "Romantic", value: "romantic" },
  { label: "Spiritual", value: "spiritual" },
  { label: "Bespoke", value: "bespoke" },
];

const experiences = [
  {
    id: 1,
    number: "01",
    title: "Breakfast Above the Clouds",
    subtitle: "Hot coffee at 3,880 metres. Everest through the window.",
    description:
      "Fly through the Khumbu at dawn, land at Hotel Everest View, and take breakfast on the terrace with Everest, Lhotse, and Ama Dablam in front of you.",
    quote: "A Himalayan morning that begins before the rest of Nepal wakes.",
    image: "/images/experiences/everest-breakfast.png",
    categories: ["iconic"],
    duration: "4–5 Hours",
    location: "Kathmandu",
    season: "September – June",
    featured: true,
    href: "/experiences/everest-breakfast",
  },
  {
    id: 2,
    number: "02",
    title: "Stand at 5,545 Metres",
    subtitle:
      "The closest legal landing viewpoint to Everest without climbing it.",
    description:
      "Land at Kala Patthar, step into the high Himalayan air, and stand face-to-face with the world's highest mountain.",
    quote:
      "Trekkers walk for days to reach the view you can experience before lunch.",
    image: "/images/experiences/kala-patthar.png",
    categories: ["iconic"],
    duration: "4 Hours",
    location: "Kala Patthar",
    season: "Autumn – Spring",
    href: "/experiences/kala-patthar",
  },
  {
    id: 3,
    number: "03",
    title: "A Table in the Sky",
    subtitle: "A private picnic on a ridge reachable only by helicopter.",
    description:
      "Land on a secluded mountain meadow and enjoy a private picnic surrounded by an uninterrupted Himalayan panorama.",
    quote: "Lunch where no restaurant will ever exist.",
    image: "/images/experiences/heli-picnic.png",
    categories: ["romantic", "bespoke"],
    duration: "3–5 Hours",
    location: "Custom Ridge",
    season: "Year-round",
    href: "/experiences/heli-picnic",
  },
  {
    id: 4,
    number: "04",
    title: "Pilgrimage by Air",
    subtitle: "Muktinath, Gosaikunda, and sacred Himalayan destinations.",
    description:
      "A meaningful helicopter journey for pilgrims whose faith calls them to Nepal's sacred mountain destinations.",
    quote: "A difficult pilgrimage made possible in a single day.",
    image: "/images/experiences/pilgrimage.png",
    categories: ["spiritual"],
    duration: "Half Day",
    location: "Sacred Sites",
    season: "Seasonal",
    href: "/experiences/pilgrimage",
  },
  {
    id: 5,
    number: "05",
    title: "Say It at 5,000 Metres",
    subtitle: "Proposals, anniversaries, birthdays, and private celebrations.",
    description:
      "We arrange the route, landing, timing, flowers, photographer, and small details so you can focus entirely on the moment.",
    quote: "The Himalayas become part of your story.",
    image: "/images/experiences/celebration.png",
    categories: ["romantic"],
    duration: "Custom",
    location: "Private Landing",
    season: "Year-round",
    href: "/experiences/celebrations",
  },
  {
    id: 6,
    number: "06",
    title: "The Golden Hour Flight",
    subtitle: "Photography and filming flights designed around the light.",
    description:
      "Fly at sunrise or sunset with pilots who understand mountain light, ridgelines, cloud movement, and photography positioning.",
    quote: "Capture the shot that cannot be reached from the ground.",
    image: "/images/experiences/photo-flight.png",
    categories: ["bespoke"],
    duration: "Custom",
    location: "Nepal Himalayas",
    season: "Weather Based",
    href: "/experiences/photo-flight",
  },
  {
    id: 7,
    number: "07",
    title: "Design Your Own Day",
    subtitle: "Your route. Your timing. Your Himalaya.",
    description:
      "Start with a blank map of Nepal. We arrange the route, permits, landings, timing, and aircraft around the experience you imagine.",
    quote: "The entire Himalaya becomes your itinerary.",
    image: "/images/experiences/private-charter.png",
    categories: ["bespoke"],
    duration: "Fully Custom",
    location: "Across Nepal",
    season: "Year-round",
    href: "/experiences/private-charter",
  },
];

type Experience = (typeof experiences)[number];

type ExperienceMetaProps = {
  experience: Experience;
  light?: boolean;
};

function ExperienceMeta({ experience, light = false }: ExperienceMetaProps) {
  const textClass = light ? "text-white/75" : "text-[#475569]";

  return (
    <div
      className={`flex flex-wrap gap-x-6 gap-y-3 text-[10px] font-semibold uppercase tracking-[0.1em] ${textClass}`}
    >
      <span className="inline-flex items-center gap-2">
        <Clock3 size={14} className="shrink-0 text-[#F2B632]" />
        {experience.duration}
      </span>

      <span className="inline-flex items-center gap-2">
        <MapPin size={14} className="shrink-0 text-[#F2B632]" />
        {experience.location}
      </span>

      <span className="inline-flex items-center gap-2">
        <CalendarDays size={14} className="shrink-0 text-[#F2B632]" />
        {experience.season}
      </span>
    </div>
  );
}

export default function Experiences() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredExperiences = experiences.filter((experience) => {
    if (activeFilter === "all") return true;

    return experience.categories.includes(activeFilter);
  });

  const featuredExperience = filteredExperiences.find(
    (experience) => experience.featured,
  );

  const regularExperiences = filteredExperiences.filter(
    (experience) => !experience.featured,
  );

  return (
    <section
      id="experiences"
      className="border-y border-[#E2E8F0] bg-[#F8FAFC]"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24 lg:px-16 lg:py-28">
        {/* Section heading */}
        <div className="mb-10 flex items-end gap-4 md:mb-12 md:gap-5">
          <span className="select-none font-fraunces text-[64px] font-semibold leading-[0.75] text-[#F2B632] md:text-[110px]">
            02
          </span>

          <div>
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#F2B632] md:text-[11px]">
              Chapter Two
            </p>

            <h2 className="font-fraunces text-[32px] font-semibold leading-[1.1] tracking-[-1px] text-[#003366] md:text-[52px] md:tracking-[-1.2px]">
              Choose your moment.
            </h2>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-10 flex flex-wrap gap-2 md:mb-12">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.value;

            return (
              <button
                key={filter.value}
                type="button"
                onClick={() => setActiveFilter(filter.value)}
                className={`min-h-11 rounded-full border px-4 py-2.5 text-[12px] font-semibold transition sm:px-5 sm:text-[13px] ${
                  isActive
                    ? "border-[#003366] bg-[#003366] text-white"
                    : "border-[#E2E8F0] bg-white text-[#0A1929] hover:border-[#F2B632]"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Featured experience */}
        {featuredExperience && (
          <Link
            href={featuredExperience.href}
            className="group mb-8 block overflow-hidden rounded-[28px] bg-[#003B73] transition hover:shadow-[0_20px_45px_rgba(0,51,102,0.2)]"
          >
            <div className="lg:grid lg:grid-cols-2">
              {/* Featured image */}
              <div className="relative h-[260px] w-full overflow-hidden sm:h-[360px] lg:h-auto lg:min-h-[540px]">
                <Image
                  src={featuredExperience.image}
                  alt={featuredExperience.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                />

                {/* Mobile bottom fade */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#003B73] via-[#003B73]/10 to-transparent lg:hidden" />

                {/* Desktop side fade */}
                <div className="absolute inset-0 hidden bg-gradient-to-r from-transparent via-[#003B73]/20 to-[#003B73] lg:block" />

                <span className="absolute left-5 top-5 rounded-full bg-[#F2B632] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.16em] text-[#003366] sm:left-6 sm:top-6 sm:text-[10px]">
                  Signature Experience
                </span>
              </div>

              {/* Featured content */}
              <div className="flex flex-col justify-center px-7 pb-9 pt-5 text-white sm:px-9 sm:pb-11 lg:p-12 xl:p-16">
                <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.15em] text-[#F2B632]">
                  {featuredExperience.number}, Everest Experience
                </p>

                <h3 className="font-fraunces text-[34px] font-semibold leading-[1.06] tracking-[-1px] sm:text-[42px] md:text-[48px]">
                  {featuredExperience.title}
                </h3>

                <p className="mb-4 mt-4 text-[15px] font-semibold leading-[1.55] text-[#F2B632] sm:text-base">
                  {featuredExperience.subtitle}
                </p>

                <p className="mb-7 max-w-[520px] text-[14px] leading-[1.75] text-white/85 sm:text-base">
                  {featuredExperience.description}
                </p>

                <ExperienceMeta experience={featuredExperience} light />

                <span className="mt-8 inline-flex items-center gap-2 text-[16px] font-bold text-[#F2B632] transition-all group-hover:gap-4 sm:text-[18px]">
                  Reserve this experience
                  <ArrowRight size={20} />
                </span>
              </div>
            </div>
          </Link>
        )}

        {/* Regular experiences */}
        {regularExperiences.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {regularExperiences.map((experience) => (
              <Link
                key={experience.id}
                href={experience.href}
                className="group overflow-hidden rounded-[26px] border border-[#E2E8F0] bg-white transition duration-300 hover:border-[#F2B632] hover:shadow-[0_20px_45px_rgba(0,51,102,0.16)]"
              >
                <div className="relative h-[230px] overflow-hidden sm:h-[250px]">
                  <Image
                    src={experience.image}
                    alt={experience.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/80 via-transparent to-transparent" />

                  <span className="absolute bottom-5 left-6 text-[10px] font-bold uppercase tracking-[0.15em] text-[#F2B632]">
                    {experience.number}, Experience
                  </span>
                </div>

                <div className="p-6 sm:p-7 md:p-8">
                  <h3 className="font-fraunces text-[27px] font-semibold leading-[1.15] tracking-[-0.6px] text-[#003366] md:text-[32px]">
                    {experience.title}
                  </h3>

                  <p className="mb-3 mt-3 text-[14px] font-semibold leading-[1.6] text-[#B8860B]">
                    {experience.subtitle}
                  </p>

                  <p className="mb-5 text-[14px] leading-[1.75] text-[#475569]">
                    {experience.description}
                  </p>

                  <p className="mb-6 font-fraunces text-[16px] italic leading-[1.6] text-[#003366]/70">
                    “{experience.quote}”
                  </p>

                  <div className="border-t border-[#E2E8F0] pt-5">
                    <ExperienceMeta experience={experience} />

                    <span className="mt-5 inline-flex items-center gap-2 text-[14px] font-bold text-[#003366] transition-all group-hover:gap-4">
                      Explore experience
                      <ArrowRight size={17} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-[#E2E8F0] bg-white px-6 py-16 text-center">
            <p className="text-[17px] text-[#475569]">
              No experiences are currently available in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
