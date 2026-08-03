"use client";

import { useEffect, useRef, useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "Can I photograph with the helicopter doors removed?",
    answer:
      "Doors-off photography may be arranged when the aircraft configuration, route, weather, equipment, passenger weight and operational approval allow it. A full safety briefing and equipment-securing procedure are required.",
  },
  {
    question: "Can I communicate directly with the pilot during the shoot?",
    answer:
      "Yes. A communication headset allows you to request changes of angle, orbit, altitude or distance while the pilot remains responsible for safe aircraft operation.",
  },
  {
    question: "Which lenses are useful for aerial photography?",
    answer:
      "A standard zoom can cover wide landscapes and medium mountain compositions. A longer lens may be useful for compressed peak details. The correct choice depends on the route and shot list.",
  },
  {
    question: "Can the helicopter remain completely still for long exposures?",
    answer:
      "A helicopter can maintain position but it is not a fixed tripod. Faster shutter speeds are generally more reliable. Specialized stabilization equipment may be considered for professional video requirements.",
  },
  {
    question: "Can you support a full commercial production?",
    answer:
      "Yes. Commercial production planning may include equipment manifests, crew transport, route permits, additional flight time, multiple aircraft and ground logistics.",
  },
  {
    question: "Can heavy cinema cameras and equipment be carried?",
    answer:
      "Professional cinema equipment can be reviewed during planning. The final configuration depends on dimensions, total weight, mounting requirements, passenger numbers and aircraft performance.",
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
        Questions photographers ask.
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
                aria-controls={`photo-flight-faq-${index}`}
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
                id={`photo-flight-faq-${index}`}
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