"use client";

import { useEffect, useRef, useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "How is a private helicopter charter priced?",
    answer:
      "Pricing depends on aircraft type, total flight time, positioning, landing fees, permits, passenger weight, ground arrangements and whether the journey operates over one or several days.",
  },
  {
    question: "How far ahead should I begin planning?",
    answer:
      "Simple routes may be arranged with a shorter lead time. Multi-day journeys and restricted regions should be planned earlier so permits, accommodation and operational requirements can be confirmed.",
  },
  {
    question: "Can the itinerary change during the flight?",
    answer:
      "Changes may be possible when fuel, weather, permissions, landing conditions and the Pilot in Command allow them. Safety and regulatory requirements always take priority.",
  },
  {
    question: "Can the aircraft remain with us for several days?",
    answer:
      "Multi-day charter planning may include aircraft positioning near the overnight destination. Availability, parking, crew accommodation, airport restrictions and operating costs must be reviewed.",
  },
  {
    question: "Which regions require additional permits?",
    answer:
      "Some national parks, conservation areas, restricted regions and border areas require additional permissions. The exact requirements depend on nationality, destination, route and current regulations.",
  },
  {
    question: "Can the itinerary be designed around a specific budget?",
    answer:
      "Yes. Share the preferred budget and priorities so the flight designer can recommend routes, flight time and landing options that provide the best fit.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqRef = useRef<HTMLElement | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index,
    );
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target instanceof Node)) {
        return;
      }

      if (faqRef.current && !faqRef.current.contains(event.target)) {
        setOpenIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <article
      ref={faqRef}
      aria-labelledby="faq-heading"
      className="w-full"
    >
      <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#B8860B]">
        Good to Know
      </p>

      <h2
        id="faq-heading"
        className="mb-8 font-fraunces text-[clamp(1.75rem,3.4vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-[#003366]"
      >
        Questions private guests ask.
      </h2>

      <div className="w-full border-t border-[#D1CFC9]">
        {faqs.map((faq, index: number) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={faq.question}
              className="border-b border-[#D1CFC9]"
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                aria-controls={`private-charter-faq-${index}`}
                className="group flex w-full items-center justify-between gap-6 py-5 text-left sm:py-6"
              >
                <span className="pr-4 text-[15px] font-semibold leading-relaxed text-[#0D1F3C] transition-colors duration-300 group-hover:text-[#B8860B] sm:text-[17px]">
                  {faq.question}
                </span>

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E6F0F8] text-[#003366] transition-colors group-hover:bg-[#F2B632]">
                  <Plus
                    size={17}
                    strokeWidth={2.5}
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </span>
              </button>

              <div
                id={`private-charter-faq-${index}`}
                className={`grid transition-all duration-500 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="max-w-3xl pb-6 pr-12 text-[14px] leading-7 text-[#64748B] sm:text-[15px]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
}