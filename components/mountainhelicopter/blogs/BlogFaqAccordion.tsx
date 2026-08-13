"use client";

import { useEffect, useRef, useState } from "react";

type Faq = {
  question: string;
  answer: string;
};

export default function BlogFaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqRef = useRef<HTMLDivElement | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (faqRef.current && !faqRef.current.contains(event.target as Node)) {
        setOpenIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={faqRef}
      className="mt-6 w-full min-w-0 border-t border-[#d1cfc9] font-manrope sm:mt-7"
    >
      {faqs.map((faq, index) => (
        <div key={faq.question} className="border-b border-[#d1cfc9]">
          <button
            onClick={() => toggle(index)}
            aria-expanded={openIndex === index}
            className="group flex w-full cursor-pointer items-start justify-between gap-4 py-5 text-left sm:items-center sm:gap-6 sm:py-6"
          >
            <span className="min-w-0 text-[15px] font-semibold leading-snug text-[#0d1f3c] transition group-hover:text-[#C49A3C] font-manrope tracking-normal sm:text-[16px]">
              {faq.question}
            </span>

            <span className="flex h-7 w-7 shrink-0 items-center justify-center text-[#0A1929]">
              {openIndex === index ? (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M6 6L18 18" />
                  <path d="M18 6L6 18" />
                </svg>
              ) : (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M12 5V19" />
                  <path d="M5 12H19" />
                </svg>
              )}
            </span>
          </button>

          <div
            className={`grid transition-all duration-500 ease-in-out ${
              openIndex === index
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <p className="max-w-2xl pb-6 pr-1 text-sm leading-7 text-gray-500 sm:pb-7 sm:pr-6">
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
