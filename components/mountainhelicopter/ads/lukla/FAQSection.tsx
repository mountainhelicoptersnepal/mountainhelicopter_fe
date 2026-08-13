"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { ChevronIcon } from "./icons";
import { FAQS } from "./constants";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-[#F3F7FD] py-[70px]">
      <div className="mx-auto max-w-[1160px] px-[22px]">
        <Reveal className="mb-9 max-w-[700px]">
          <div className="mb-2.5 font-geist-mono text-[12.5px] font-semibold uppercase tracking-[.16em] text-[#D99A00]">
            Before You Fly
          </div>
          <h2 className="font-fraunces leading-[1.12] text-[clamp(1.55rem,3.5vw,2.3rem)] font-extrabold tracking-[-.01em] text-[#051F49]">
            Questions travelers ask us every season.
          </h2>
        </Reveal>

        <Reveal>
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="mb-3 overflow-hidden rounded-xl border border-[#D7E2F2] bg-white"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full cursor-pointer items-center justify-between gap-3.5 px-[22px] py-[18px] text-left text-[16.5px] font-semibold text-[#051F49]"
                >
                  {faq.question}
                  <ChevronIcon
                    className={`h-5 w-5 shrink-0 text-[#0C4396] transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-[22px] pb-5 text-[15.5px] text-[#4A5B76]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
