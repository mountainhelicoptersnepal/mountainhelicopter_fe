"use client";

import { useEffect, useRef, useState } from "react";


const faqs = [
  {
    question:
      "Are night-time helicopter rescues permitted in the Gosaikunda region?",
    answer:
      "Nighttime flight operations are generally restricted by the Civil Aviation Authority of Nepal. However, emergency evacuations are executed at dawn or during early morning hours as soon as adequate visibility is restored by the changing weather.",
  },
  {
    question:
      "What is the estimated price for a Gosaikunda helicopter evacuation?",
    answer:
      "A rescue charter is typically priced between USD 500 and USD 1200. The final amount is determined by the specific flight location, total air time, and the type of high-altitude aircraft utilized for the mission.",
  },
  {
    question:
      "Is it possible to evacuate more than one injured trekker in the same flight?",
    answer:
      "Yes, up to four or sometimes more patients, if they are in stable condition, can be rescued in the same flight, but the total weight must be restricted within the safety limits for the payload at the given altitude.",
  },
  {
    question:
      "What’s the flight time for a helicopter to Gosaikunda Lake?",
    answer:
      "When the helicopter is dispatched from the Kathmandu aviation center, 15 to 25 minutes is taken to reach the Gosaikunda Lake area.",
  },
  {
    question:
      "Is it possible for the helicopter to land at any random location in the Langtang conservation area?",
    answer:
      "Landings are strictly restricted to designated safe zones, flat terrains, and established teahouse helipads to guarantee the absolute safety of the aircraft and the patients.",
  },
  {
    question:
      "Is the possession of travel insurance made mandatory for a Gosaikunda helicopter rescue?",
    answer:
      "Comprehensive travel insurance is highly advised and is required for direct billing facilities; nevertheless, life-saving rescues are never denied even if insurance coverage is absent.",
  },
  {
    question:
      "To which medical facilities are the patients transferred after the aerial evacuation?",
    answer:
      "Evacuated patients are directly transferred to partnered trauma centers in Kathmandu, such as Grande International Hospital or the CIWEC Clinic, for advanced medical treatment.",
  },
  {
    question:
      "From which specific trekking routes can helicopter evacuations be arranged in the Gosaikunda region?",
    answer:
      "Rescue missions are successfully conducted from Gosaikunda Lake, the Lauribina La Pass, the Helambu Circuit, Sing Gompa, and various other remote teahouse settlements.",
  },
  {
    question:
      "What documents are needed to process a travel insurance claim?",
    answer:
      "A current insurance policy copy, the patient’s passport, a valid trekking permit, and a preliminary medical record of the patient as obtained from the trail are submitted by the rescue team.",
  },
  {
    question:
      "How is the safety of the Gosaikunda helicopter rescue operation ensured?",
    answer:
      "Strict aviation safety protocols are adhered to, and flights are only authorized to be operated when weather conditions and wind speeds are deemed completely safe by the pilot in command.",
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