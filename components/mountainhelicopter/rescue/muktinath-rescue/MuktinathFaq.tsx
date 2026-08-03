"use client";

import { useEffect, useRef, useState } from "react";


const faqs = [
  {
    question: "How is the Muktinath helicopter rescue cost calculated?",
    answer:
      "The cost is calculated based on fuel consumption, flight duration, and the distance from the nearest base. The exact price is confirmed after the weather and weight are checked by the dispatch team.",
  },
  {
    question: "Is travel insurance accepted for the Muktinath rescue?",
    answer:
      "Valid travel insurance is accepted. Approval and guarantee letters are obtained directly from the insurance company before the flight is dispatched.",
  },
  {
    question:
      " What is the maximum weight limit for the Muktinath rescue helicopter?",
    answer:
      "The maximum weight limit is strictly maintained at 400 kg for high-altitude safety. Each person's luggage is limited to 10 kg to maintain a balanced weight during the flight.",
  },
  {
    question:
      "How is altitude sickness managed during the Muktinath rescue flight?",
    answer:
      "Oxygen is administered immediately to the patient. A rapid descent is initiated by the helicopter, and the onboard medic monitors the vital signs continuously.",
  },
  {
    question:
      "Can the Muktinath rescue be arranged from Jomsom to Muktinath?",
    answer:
      "Yes, a helicopter rescue to Muktinath can be arranged from Jomsom. The flight duration is shorter, and the cost is adjusted based on the actual flight time.",
  },
  {
    question:
      "What immediate actions should be taken while waiting for the helicopter?",
    answer:
      "The patient is kept warm with emergency blankets. If altitude sickness is suspected, the patient is kept in a comfortable position. The landing area is cleared of loose rocks by the guide, and GPS coordinates are shared via satellite phone.",
  },
];


export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const faqRef = useRef(null);

  const toggle = (index) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        faqRef.current &&
        !faqRef.current.contains(event.target)
      ) {
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
      className="w-full scroll-mt-[123px] bg-white text-[#0A1929]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 py-12 sm:px-6 sm:py-16 md:px-10 lg:px-[80px] lg:py-[90px] xl:px-[125px]">
        <div
          ref={faqRef}
          className="grid w-full grid-cols-1 gap-10 md:gap-12 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-[80px] xl:grid-cols-[334.83px_minmax(0,1fr)] xl:gap-[159px]"
        >
          <aside className="flex w-full flex-col gap-5 sm:gap-[26px] lg:self-center xl:w-[334.83px]">
            <p className="font-manrope text-[14px] font-bold uppercase leading-[14px] tracking-[3px] text-[#F2B632] sm:text-[16px] sm:tracking-[3.8px]">
              Questions
            </p>

            <h2 className="font-fraunces text-[34px] font-bold leading-[1] tracking-[-0.92px] text-[#0A1929] sm:text-[40px] sm:leading-[0.92] lg:text-[42px] lg:leading-[0.86]">
              Everything you
              <br />
              need to know.
            </h2>

            <p className="max-w-[334.83px] font-manrope text-[14px] font-normal leading-[22px] text-[#6B7886]">
              Still have questions? Our team is available 7 days a week.
            </p>

            <a
              href="/contact"
              className="group inline-flex h-[46px] w-[196px] items-center justify-center gap-[5px] bg-[#002448] px-5 font-manrope text-[14px] font-bold uppercase tracking-[-0.5px] text-[#E6EBF0] transition-colors duration-300 hover:bg-[#F2B632] hover:text-[#002347] sm:text-[16px]"
            >
              Ask us directly

              <span
                aria-hidden="true"
                className="text-[17px] leading-none transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </aside>

          <div className="w-full min-w-0 font-manrope">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const buttonId = `faq-button-${index}`;
              const answerId = `faq-answer-${index}`;

              return (
                <div
                  key={faq.question}
                  className="border-b border-[#D9DEE3]"
                >
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    className="group flex min-h-[61.875px] w-full cursor-pointer items-center justify-between gap-3 py-4 text-left sm:gap-6 sm:py-3 lg:min-h-[61.875px] lg:py-3"
                  >
                    <span className="min-w-0 pr-2 font-manrope text-[14px] font-medium leading-[22px] text-[#151117] transition-colors duration-300 group-hover:text-[#F2B632] sm:pr-4 sm:text-[16px] sm:leading-[28px]">
                      {faq.question}
                    </span>

                    <span
                      aria-hidden="true"
                      className="relative flex h-[16px] w-[16px] shrink-0 items-center justify-center text-[#002347] transition-colors duration-300 group-hover:text-[#F2B632]"
                    >
                      <span className="absolute h-[1.5px] w-[12px] bg-current" />

                      <span
                        className={`absolute h-[12px] w-[1.5px] bg-current transition-transform duration-300 ${
                          isOpen ? "rotate-90" : "rotate-0"
                        }`}
                      />
                    </span>
                  </button>

                  <div
                    id={answerId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-[620px] pb-5 pr-2 font-manrope text-[14px] font-normal leading-[23px] text-[#6B7886] sm:pb-6 sm:pr-10">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}