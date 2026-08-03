"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "How quickly can a rescue helicopter reach me?",
    answer:
      "Response times depend on weather, flight permissions, helicopter availability, and your location. In favorable conditions, helicopters are often dispatched within an hour after an emergency is confirmed.",
  },
  {
    question: "Can foreign tourists use helicopter rescue services in Nepal?",
    answer:
      "Yes. Helicopter rescue services are available to both international visitors and Nepali citizens throughout the country's major regions.",
  },
  {
    question: "Is helicopter rescue available 24/7 in Nepal?",
    answer:
      "Emergency coordination is available around the clock, but actual flights depend on daylight, weather conditions, and aviation safety regulations.",
  },
  {
    question: "What should I carry to prepare for emergencies while trekking?",
    answer:
      "Carry comprehensive travel insurance, identification, emergency contact information, a charged phone or satellite communication device, and inform your guide or trekking agency of your itinerary.",
  },
  {
    question: "Why choose a professional helicopter rescue service in Nepal?",
    answer:
      "Professional rescue operators coordinate with experienced pilots, medical teams, hospitals, trekking agencies, and insurers to provide fast, safe, and reliable emergency evacuation throughout Nepal's mountainous regions.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const toggle = (index: number) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target;

      if (
        faqRef.current &&
        target instanceof Node &&
        !faqRef.current.contains(target)
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
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-12 md:py-24 lg:px-16 lg:py-28">
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

            <Link
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
            </Link>
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
