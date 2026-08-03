// src/components/rescue/makalu/MakaluFaq.jsx

"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

const faqs = [
  {
    question:
      "Are nighttime helicopter rescues permitted in the Makalu region?",
    answer:
      "Makalu rescue flights are generally conducted during daylight and suitable visual flying conditions. Night operations depend on aircraft capability, weather, visibility, landing-site safety, aviation regulations and approval from the relevant authorities.",
  },
  {
    question:
      "What is the estimated price for a Makalu Base Camp helicopter evacuation?",
    answer:
      "The final cost depends on the rescue point, altitude, flight distance, aircraft staging location, landing difficulty, weather, patient condition, medical requirements, payload, insurance authorization and onward hospital destination. Dispatch provides an estimate after reviewing the full case.",
  },
  {
    question:
      "Is it possible to evacuate more than one injured climber in the same flight?",
    answer:
      "It may be possible when the combined patient condition, aircraft configuration, altitude, temperature, fuel requirement and passenger weight remain within safe operating limits. At high elevations, separate shuttle flights may be required.",
  },
  {
    question:
      "What’s the flight time for a helicopter to Makalu Base Camp?",
    answer:
      "Flight time varies according to the departure point, aircraft location, weather, route, fuel planning and whether intermediate staging is required. Total response time also includes rescue verification, aircraft preparation, authorization and the availability of a safe flying window.",
  },
  {
    question:
      "Is it possible for the helicopter to land at any random location in the Makalu-Barun conservation area?",
    answer:
      "No. The pilot must identify a safe and operationally suitable landing area. The patient may need to be moved to an established helipad, open field, lodge area, ridge or another nearby pickup point before evacuation.",
  },
  {
    question:
      "Is travel insurance mandatory for a Makalu Base Camp helicopter rescue?",
    answer:
      "Travel insurance is not the only way to arrange evacuation, but it is strongly recommended. Insured cases may proceed through the assistance company, while uninsured or unauthorized cases usually require a payment guarantee before dispatch.",
  },
  {
    question:
      "To which medical facilities are patients transferred after aerial evacuation?",
    answer:
      "Patients are generally transferred to an appropriate hospital or medical facility in Kathmandu based on their condition, receiving-hospital readiness, route, weather and medical coordination requirements.",
  },
  {
    question:
      "From which trekking routes can helicopter evacuations be arranged in the Makalu region?",
    answer:
      "Evacuations may be coordinated from Makalu Base Camp, Langmale Kharka, Yangle Kharka, Dobate, Shipton La, Kongma Danda, Tashigaon, Num and other accessible points along the Makalu-Barun trekking corridor.",
  },
  {
    question:
      "What documents are needed to process a travel insurance claim?",
    answer:
      "The insurer may request the rescue invoice, flight log, pickup location, evacuation time, patient report, medical records, passport details, policy number, assistance-company case reference and supporting communication from the guide, agency or rescue team.",
  },
  {
    question:
      "How is the safety of the Makalu Base Camp helicopter rescue operation ensured?",
    answer:
      "Each mission is assessed for weather, visibility, wind, altitude, payload, aircraft performance, route safety, landing access and patient requirements. The pilot always makes the final go or no-go decision.",
  },
];

export default function MakaluFaq() {
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
            const answerId = `makalu-faq-answer-${index}`;

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