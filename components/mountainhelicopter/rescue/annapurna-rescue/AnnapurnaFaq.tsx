"use client";

import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    question:
      "Are night time helicopter rescues permitted in the Annapurna region?",
    answer:
      "Night time helicopter operations are generally restricted by the Civil Aviation Authority of Nepal. Emergency evacuations are normally carried out at dawn or during the early morning once adequate visibility has been restored and weather conditions are considered safe.",
  },
  {
    question:
      "What is the estimated price for an Annapurna helicopter evacuation?",
    answer:
      "A rescue charter is commonly estimated between USD 500 and USD 1,200, but the final amount depends on the exact rescue location, total flight time, aircraft staging point, weather conditions, landing difficulty, patient condition and the type of high-altitude aircraft required for the mission.",
  },
  {
    question:
      "Is it possible to evacuate more than one injured trekker in the same flight?",
    answer:
      "Yes, more than one patient may be evacuated in the same flight when their medical conditions are stable and the total payload remains within the aircraft's safe operating limits. At high altitude, passenger capacity may be reduced because aircraft performance is affected by elevation, temperature, fuel and total weight.",
  },
  {
    question:
      "What is the flight time for a helicopter to Annapurna Base Camp?",
    answer:
      "From Pokhara, a helicopter normally takes approximately 25 to 35 minutes to reach Annapurna Base Camp. The actual flight time may vary according to the departure point, weather, air traffic, aircraft routing and operational requirements.",
  },
  {
    question:
      "Can the helicopter land at any random location in the Annapurna Conservation Area?",
    answer:
      "No. Landings are restricted to designated safe zones, established helipads, approved open areas and locations selected by the pilot. Terrain, slope, wind, visibility, obstacles, surface condition and nearby people must all be assessed before landing.",
  },
  {
    question:
      "Is travel insurance mandatory for an Annapurna helicopter rescue?",
    answer:
      "Comprehensive travel insurance covering helicopter evacuation and high-altitude activities is strongly recommended and is usually required for direct billing through an insurance assistance company. However, emergency rescue coordination may still be started when insurance is unavailable, provided payment arrangements can be confirmed.",
  },
  {
    question:
      "Which medical facilities receive patients after aerial evacuation?",
    answer:
      "Patients may be transferred to suitable hospitals in Pokhara or Kathmandu depending on their condition and the rescue route. Receiving facilities may include major trauma centres, teaching hospitals, specialist clinics and tertiary-care hospitals selected according to the patient's medical needs.",
  },
  {
    question:
      "From which trekking routes can helicopter evacuations be arranged in the Annapurna region?",
    answer:
      "Rescue flights may be arranged from Annapurna Base Camp, Machhapuchhre Base Camp, the Annapurna Circuit, Thorong La Pass, Thorong Phedi, High Camp, Tilicho Lake, Mardi Himal, Manang, Muktinath and other accessible trekking settlements or approved landing locations.",
  },
  {
    question:
      "What documents are required to process a travel insurance claim?",
    answer:
      "Insurance processing may require a copy of the current insurance policy, the patient's passport, trekking permit, preliminary medical report, guide report, rescue authorization, flight invoice, evacuation route, pickup location, dispatch timeline and hospital documents.",
  },
  {
    question:
      "How is the safety of the Annapurna helicopter rescue operation ensured?",
    answer:
      "Each mission follows aviation safety procedures and is operated only when the pilot determines that weather, visibility, wind, landing conditions, payload and aircraft performance are suitable. The pilot has final authority over departure, routing, landing, diversion and cancellation decisions.",
  },
];

export default function AnnapurnaFAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const faqRef = useRef(null);

  const toggle = (index) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index,
    );
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
            Annapurna region.
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
              <article
                key={faq.question}
                className="border-b border-[#d1cfc9]"
              >
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