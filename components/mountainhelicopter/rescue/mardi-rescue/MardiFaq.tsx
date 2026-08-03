// src/components/rescue/mardi/MardiFaq.jsx

"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

const faqs = [
  {
    question: "How much does a helicopter rescue on Mardi Himal cost?",
    answer:
      "The final cost depends on the patient’s pickup point, altitude, flight distance, aircraft staging location, weather, landing access, medical requirements, passenger weight, insurance approval and destination hospital. Dispatch provides an estimate after reviewing the full rescue details.",
  },
  {
    question: "Does travel insurance cover helicopter rescue on Mardi Himal?",
    answer:
      "It may, provided the policy includes emergency helicopter evacuation, trekking is a covered activity and the maximum altitude of the Mardi Himal route falls within the policy limit. Some insurers also require a case reference, medical report, guide statement or payment guarantee before dispatch.",
  },
  {
    question: "How fast can a rescue helicopter reach Mardi Himal?",
    answer:
      "Response time depends on the rescue point, current aircraft location, weather, visibility, authorization and landing access. Flights may be coordinated from Pokhara, Kathmandu or another suitable staging point, but the helicopter only launches when the route and pickup area are considered safe.",
  },
  {
    question: "What happens if my insurance doesn't cover the full cost?",
    answer:
      "The patient, family, trekking agency or another responsible party may need to pay the remaining balance. This can include the policy excess, deductible, altitude exclusions, non-covered medical services or any amount above the insurer’s approved limit.",
  },
  {
    question:
      "Can a guide request a rescue without the trekker's insurance details?",
    answer:
      "Yes. A guide can contact dispatch and begin sharing the patient’s condition, location, altitude and other emergency information immediately. However, insurance approval or a direct-payment guarantee may still be required before the aircraft is dispatched.",
  },
  {
    question:
      "How much does a shared helicopter evacuation cost compared to private?",
    answer:
      "A shared evacuation may reduce the cost when another compatible flight is available and the arrangement is medically appropriate, operationally safe and approved by the pilot. A critical patient should not be delayed while waiting for a shared flight.",
  },
  {
    question: "Is a licensed guide required for the Mardi Himal trek?",
    answer:
      "Guide requirements can depend on current Nepal tourism rules, the trekker’s nationality, permit category and route regulations. Travellers should confirm the latest requirement with their trekking agency or the relevant tourism authority before departure.",
  },
];

export default function MardiFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="scroll-mt-[123px] bg-[#f6f3ed] px-5 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-[80px] 2xl:px-[125px]"
    >
      <div className="mx-auto max-w-[1440px]">
        <p className="font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#a66e00]">
          — Questions, Answered
        </p>

        <h2 className="mt-4 font-fraunces text-[40px] font-semibold leading-[1.03] tracking-[-0.03em] text-[#071825] sm:text-[50px] lg:text-[60px]">
          Frequently asked questions.
        </h2>

        <div className="mt-8 border-t border-[#d4d7d7]">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            const answerId = `mardi-faq-answer-${index}`;

            return (
              <article
                key={item.question}
                className="border-b border-[#d4d7d7]"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  className="group flex w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <span
                    className={`font-manrope text-[12px] font-medium leading-[1.55] transition-colors duration-300 sm:text-[13px] lg:text-[14px] ${
                      isOpen
                        ? "text-[#0d5ea6]"
                        : "text-[#071825] group-hover:text-[#0d5ea6]"
                    }`}
                  >
                    {item.question}
                  </span>

                  <ChevronRight
                    size={18}
                    strokeWidth={1.8}
                    className={`shrink-0 text-[#a66e00] transition-all duration-300 ${
                      isOpen
                        ? "rotate-90"
                        : "group-hover:translate-x-1"
                    }`}
                  />
                </button>

                <div
                  id={answerId}
                  role="region"
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[1050px] pb-5 pr-10 font-manrope text-[11px] leading-[1.8] text-[#5b6872] sm:text-[12px]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}