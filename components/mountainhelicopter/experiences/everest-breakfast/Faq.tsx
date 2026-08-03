"use client";

import { useState } from "react";

import { Plus } from "lucide-react";

const faqs = [
  {
    question: "Will I feel the altitude at breakfast?",
    answer:
      "Some passengers notice lighter air, mild breathlessness or a slight headache. The visit is kept short, oxygen is available onboard, and passengers receive a safety briefing before departure.",
  },
  {
    question: "What is served for breakfast?",
    answer:
      "Breakfast availability depends on the hotel's current menu and operational conditions. Typical options may include eggs, bread, pancakes, fruit, tea, coffee or other available items. Dietary requirements should be shared before the flight.",
  },
  {
    question: "Is the Everest view guaranteed?",
    answer:
      "Mountain visibility cannot be guaranteed. Flights operate only when the pilot and operations team consider the weather and visibility suitable. Departure may be delayed, rescheduled or cancelled for safety.",
  },
  {
    question: "Can we add a Kala Patthar landing?",
    answer:
      "A Kala Patthar landing may be added when weather, aircraft performance, route approval, passenger weight and high-altitude operating conditions allow.",
  },
  {
    question: "Is the flight suitable for children and older passengers?",
    answer:
      "Many children and older passengers can participate, but high altitude may affect people differently. Medical advice is recommended for passengers with heart, lung, blood pressure or mobility concerns.",
  },
  {
    question: "How early should I book?",
    answer:
      "Booking at least one or two weeks ahead is recommended during October, November, March and April. Short-notice availability may be possible outside peak periods.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <article aria-labelledby="faq-heading">
      <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#B8860B]">
        Good to Know
      </p>

      <h2
        id="faq-heading"
        className="mb-8 font-fraunces text-[clamp(1.8rem,3.4vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-[#003366]"
      >
        Questions guests ask.
      </h2>

      <div className="space-y-3">
        {faqs.map((faq, index: number) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={faq.question}
              className={`overflow-hidden rounded-xl border bg-white transition ${
                isOpen
                  ? "border-[#F2B632] shadow-[0_8px_24px_rgba(0,51,102,0.1)]"
                  : "border-[#E2E8F0] hover:border-[#F2B632]"
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                className="flex min-h-[68px] w-full items-center justify-between gap-5 px-5 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-semibold leading-[1.5] text-[#003366]">
                  {faq.question}
                </span>

                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E6F0F8] text-[#003366]">
                  <Plus
                    size={17}
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </span>
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-sm leading-[1.8] text-[#0A1929]/80">
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