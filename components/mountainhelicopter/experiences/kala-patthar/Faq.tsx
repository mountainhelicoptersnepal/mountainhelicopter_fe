"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "Why only 15 minutes on the ground?",
    answer:
      "At 5,545 m your body starts objecting quickly — you have arrived from 1,400 m in under two hours with no acclimatisation. Fifteen minutes lets you feel the place fully and leave before altitude does anything worse than thrill you. It is a safety protocol and it is non-negotiable.",
  },
  {
    question: "Why only 3 passengers?",
    answer:
      "Thin air means less lift. Above 5,000 m we fly lighter for safety margin — it is the same discipline our rescue crews use every week. It also means everyone gets a window.",
  },
  {
    question: "What if I feel unwell up there?",
    answer:
      "Tell the captain. The helicopter is twenty steps away and descent is the instant cure. Oxygen is available onboard from the moment you feel anything, and your captain briefs you on exactly what to watch for before you land.",
  },
  {
    question: "What does it actually feel like to breathe up there?",
    answer:
      "You will take two breaths where one used to do, your heart will work faster while you stand still, and a light euphoria may arrive after a few minutes. Most guests describe it afterwards as feeling intensely and unusually awake.",
  },
  {
    question: "Can we combine this with the Everest View breakfast?",
    answer:
      "Yes. Kala Patthar first at dawn while the air is stillest, then a descent to Hotel Everest View at 3,880 m for breakfast. It extends the morning by roughly an hour.",
  },
  {
    question: "What camera settings work up there?",
    answer:
      "The light is fierce and the contrast extreme. Expose for the snow, use a fast shutter speed, keep spare batteries in an inside pocket, and shoot RAW when possible. Then put the camera down for the last minute.",
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
                <span className="font-semibold leading-relaxed text-[#003366]">
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
                  <p className="px-5 pb-5 text-sm leading-relaxed text-[#0A1929]/80">
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