"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    question:
      "My parents are in their 70s and not strong walkers. Is this possible?",
    answer:
      "Many elderly passengers can participate. Helipad-to-temple distances are kept as short as possible, crew assistance is available, and oxygen is carried. Medical advice may be required for passengers with heart, lung, blood pressure or serious mobility concerns.",
  },
  {
    question: "Can a priest and puja be arranged at Muktinath?",
    answer:
      "Yes. Tell us the ceremony you wish to perform when booking. Our team can coordinate with local contacts and arrange puja materials, subject to temple availability and local conditions.",
  },
  {
    question: "Do you operate the full Kailash–Mansarovar yatra?",
    answer:
      "Kailash–Mansarovar can be arranged as a multi-day guided journey via Simikot and Hilsa. Permit availability, border rules, accommodation and ground transport must be confirmed for each departure.",
  },
  {
    question: "Can we perform a family ceremony at the temple?",
    answer:
      "Yes. Sankalpa, abhisheka, aarti, remembrance ceremonies and other family rituals can be discussed during booking. Ground time depends on weather, airport requirements and aircraft scheduling.",
  },
  {
    question: "What about prasad and offerings?",
    answer:
      "You may bring your own offerings or request an arranged offering kit. Prasad and sacred water can normally be carried back, subject to aircraft baggage and security requirements.",
  },
  {
    question: "Is Kailash possible for seniors?",
    answer:
      "It may be possible for medically fit senior travellers, but the journey still involves altitude and international border procedures. Medical clearance, gradual acclimatisation and an individual review are strongly recommended.",
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
        className="mb-8 font-fraunces text-[clamp(1.75rem,3.4vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-[#003366]"
      >
        Questions pilgrims ask.
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
                <span className="font-semibold leading-[1.55] text-[#003366]">
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