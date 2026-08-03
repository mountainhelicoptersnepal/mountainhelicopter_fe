"use client";

import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    question: "How fast can a helicopter rescue reach Everest Base Camp?",
    answer:
      "Response time depends on weather, aircraft availability, location, visibility, clearance, and landing-zone safety. In good conditions, coordination can begin immediately, but dispatch is always subject to mountain flying conditions.",
  },
  {
    question: "How much does Everest Helicopter Rescue cost?",
    answer:
      "Everest Helicopter Rescue usually ranges from around USD 3,000 to USD 8,000 or more depending on pickup location, altitude, route, weather, aircraft positioning, and destination. Rescue from GorakShep or Everest Base Camp is generally more expensive than rescue from Namche, Pheriche, or Dingboche.",
  },
  {
    question: "Is insurance required for Everest Helicopter Rescue?",
    answer:
      "Insurance is strongly recommended. A good policy should cover high-altitude trekking, helicopter evacuation, medical treatment, and hospital transfer in Nepal. Without insurance, direct payment or a payment guarantee may be required before dispatch.",
  },
  {
    question: "What documents are needed for insurance-covered rescue?",
    answer:
      "Commonly required documents include insurance policy number, passport copy, patient details, location, medical symptoms, guide report, rescue invoice, flight details, and hospital documents if admitted.",
  },
  {
    question: "Can I request rescue without insurance?",
    answer:
      "Yes, rescue may still be arranged without insurance, but direct payment or payment guarantee will usually be required. Cost confirmation should be done before dispatch whenever possible.",
  },
  {
    question: "What are the most common rescue points in the Everest region?",
    answer:
      "Common rescue points include Everest Base Camp, GorakShep, Lobuche, Dingboche, Pheriche, Tengboche, Namche Bazaar, and Lukla.",
  },
  {
    question: "Can helicopter rescue be done in bad weather?",
    answer:
      "Helicopter rescue cannot be guaranteed in bad weather. Visibility, wind, cloud, snowfall, rain, and landing-zone safety can delay or stop flights. The pilot’s safety decision is final.",
  },
  {
    question: "What symptoms may require emergency evacuation?",
    answer:
      "Severe breathlessness at rest, confusion, loss of balance, extreme drowsiness, chest tightness, worsening altitude sickness, serious injury, inability to walk, or suspected HAPE / HACE may require emergency evacuation.",
  },
  {
    question: "Can multiple patients be evacuated at once?",
    answer:
      "Yes, but only if the altitude, aircraft weight, patient conditions, fuel amount, weather, and pilot judgment permit such evacuation.",
  },
  {
    question: "Does the rescue get taken to Kathmandu straight away?",
    answer:
      "Many rescue missions are transferred to Kathmandu when hospital facilities are required. Some patients may first be brought to Lukla, Pheriche, or another suitable location depending on weather, medical condition, and flight routing.",
  },
  {
    question:
      "Is it possible for the helicopter to carry out the rescue operation beyond Everest Base Camp?",
    answer:
      "Rescue operations beyond Everest Base Camp are difficult and depend on altitude, terrain, weather, landing opportunities, technical rescue support, and aircraft capability.",
  },
  {
    question: "How do I make an Everest Helicopter Rescue Request?",
    answer:
      "Call Mountain Helicopters Nepal and provide the patient's location, symptoms, altitude, insurance details, nearest landmark, GPS coordinates if available, and the guide or expedition leader's phone number.",
  },
  {
    question:
      "Is it possible for trekking agencies to make rescue requests for their clients?",
    answer:
      "Yes. Trekking agencies, guides, expedition leaders, hotels, relatives, and insurance assistance companies can make rescue requests on behalf of the patient.",
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