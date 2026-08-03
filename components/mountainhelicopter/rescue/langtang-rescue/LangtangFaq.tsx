"use client";

import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    question: "How do I call for helicopter rescue on Langtang?",
    answer:
      "Dial our 24-hour emergency line or WhatsApp message us with the patient’s name, nationality, condition, and precise GPS location of the incident along with his/her policy number. In some cases, your trekking guide, lodge manager or trekking company will make the call on your behalf. As soon as we get your call, we initiate coordination.",
  },
  {
    question:
      "What happens in case of bad weather preventing helicopter rescue?",
    answer:
      "The helicopter will hover and wait for the next window of good weather to fly. Our coordination centre will maintain communication with the ground team/person on-site and provide remote medical advice via satellite phone or WhatsApp. We are constantly monitoring the weather forecasts and will fly the moment the conditions are favorable. In the Langtang Valley, mornings usually present the best windows.",
  },
  {
    question: "What is the cost of Langtang helicopter rescue?",
    answer:
      "The costs vary greatly depending on flight distance, altitude, landing zone complexity, weather delays and the presence of medical personnel on board. For example, helicopter rescue from Kyanjin Gompa will be more costly than from Syabrubesi due to extended flight time and higher altitude operations. We provide cost estimates prior to the dispatch when time allows. With the right insurance policy, your insurer directly compensates us for the costs.",
  },
  {
    question:
      "What documentation will I need for an insurance claim after a helicopter rescue on Langtang?",
    answer:
      "You will need to submit your insurance policy document (including the policy number), copy of your passport, medical report from the hospital, flight manifest and invoice from the helicopter company, GPS coordinates of the pick up point, and a copy of your trekking permit. We will facilitate the necessary flight documents for your insurance claim and assist in submitting the claim to your insurer.",
  },
  {
    question: "What are the symptoms of HAPE on the Langtang trail?",
    answer:
      "Signs of HAPE include difficulty breathing even at rest; persistent wet cough, which may produce pink, frothy sputum; extreme fatigue; a sense of chest tightness; and bluish lips or fingertips. HAPE most commonly occurs in people ascending above 3,500 meters, often while ascending from Langtang Village to Kyanjin Gompa and above 3,800 meters on a trek up to Tserko Ri. HAPE is a deadly disease that requires immediate descent, preferably by helicopter.",
  },
  {
    question: "How do I prepare for altitude sickness in Langtang?",
    answer:
      "Slowly ascend – do not gain more than 500 meters of sleeping elevation per day above 3,000 meters. On reaching Langtang Village, take an acclimatization day before continuing to Kyanjin Gompa. Drink 3-4 liters of water per day and do not drink alcoholic beverages or caffeinated drinks. You may also consult with your doctor about taking the altitude sickness medication acetazolamide (Diamox). Carry a pulse oximeter and use it to check blood oxygen level, and if you feel symptoms worsening, descend immediately.",
  },
  {
    question: "What kind of GPS coordinates should I provide in an emergency situation?",
    answer: 
    `If you have access to a GPS device, smartwatch, or phone, provide the coordinates in decimal format (like 28.2135 N, 85.5854 E). In the absence of precise coordinates, accurately describe your location relative to recognizable landmarks, for example, "halfway between Kyanjin Gompa and the last monastery," "30 minutes above Kyanjin Gompa cheese factory," or "just above the army check post at Ghodatabela." Our experienced coordination team knows all these areas and landmarks very well.`,
  },
];

export default function LangtangFAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const faqRef = useRef(null);

  const toggle = (index) => {
    setOpenIndex((currentIndex) => (currentIndex === index ? null : index));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
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
    <section
      id="faq"
      className="scroll-mt-[133px] bg-[#ffffff] px-6 py-16 text-[#0d1f3c] md:px-8 lg:px-20 lg:py-20"
    >
      <div
        ref={faqRef}
        className="mx-auto grid w-full max-w-6xl grid-cols-1 items-start gap-12 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-20 xl:gap-[130px]"
      >
        {/* LEFT CONTENT */}
        <aside className="flex flex-col justify-center lg:sticky lg:top-[170px]">
          <p className="mb-4 flex items-center gap-3 font-manrope text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d89b1d]">
            <span className="h-px w-7 bg-[#d89b1d]" />
            Questions
          </p>

          <h2 className="font-fraunces text-4xl font-semibold leading-[1.02] tracking-[-0.03em] text-[#0A1929] md:text-[44px]">
            Frequently asked
            <br />
            questions.
          </h2>

          <p className="mt-6 max-w-[420px] font-manrope text-sm leading-7 text-gray-500">
            Find practical information about emergency operations, rescue cost,
            insurance, landing restrictions, medical transfer and safety in the
            Langtang region.
          </p>

          <a
            href="/contact"
            className="group mt-7 inline-flex w-fit items-center gap-2.5 border-2 border-[#0d1f3c] bg-[#0d1f3c] px-7 py-3 font-manrope text-xs font-bold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:border-[#C49A3C] hover:bg-transparent hover:text-[#C49A3C]"
          >
            Ask Us Directly
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </aside>

        {/* FAQ ACCORDION */}
        <div className="border-t border-[#d1cfc9] font-manrope">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <article key={faq.question} className="border-b border-[#d1cfc9]">
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`annapurna-rescue-faq-answer-${index}`}
                  className="group flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left"
                >
                  <span
                    className={`font-manrope text-[15px] font-semibold leading-6 transition-colors duration-300 md:text-base ${
                      isOpen
                        ? "text-[#C49A3C]"
                        : "text-[#0d1f3c] group-hover:text-[#C49A3C]"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 border-[#C49A3C] bg-[#C49A3C] text-white"
                        : "border-[#0A1929]/20 text-[#0A1929] group-hover:border-[#C49A3C] group-hover:text-[#C49A3C]"
                    }`}
                  >
                    {isOpen ? (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        aria-hidden="true"
                      >
                        <path d="M6 12H18" />
                      </svg>
                    ) : (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        aria-hidden="true"
                      >
                        <path d="M12 5V19" />
                        <path d="M5 12H19" />
                      </svg>
                    )}
                  </span>
                </button>

                <div
                  id={`annapurna-rescue-faq-answer-${index}`}
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-3xl pb-7 pr-8 font-manrope text-sm leading-7 text-gray-500">
                      {faq.answer}
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
