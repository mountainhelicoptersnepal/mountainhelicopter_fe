"use client";

import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    question: "How much is a helicopter rescue by Tilicho Lake?",
    answer:
      "The price of a helicopter flight varies with the flight distance from Kathmandu or Pokhara, the accessibility of the landing area, if your flight is private or on a shared basis, and the necessity of having medical personnel onboard. If you have insurance, trekkers do not have to pay upfront after you inform your insurer, who gives assurance of paying on your behalf.",
  },
  {
    question: "Does travel insurance cover helicopter rescue near Tilicho? ",
    answer:
      "Typically most comprehensive travel insurance policies have helicopter evacuation as a benefit; however, the trip has to include a high-altitude trek, and the highest altitude has to be above what you will reach. Check with your travel insurance to know its height limit before traveling. It has to go above 4919 m above sea level if you want to reach the lake directly.",
  },
  {
    question: "Do I need to pay before the helicopter is dispatched? ",
    answer:
      "No. In genuine emergencies, dispatch proceeds with coordination while insurance verification happens in parallel. Uninsured trekkers may be asked for a guarantee of payment or credit authorization, but the helicopter is not held on the ground solely waiting for cash payment in urgent cases.",
  },
  {
    question: "What happens if my insurance doesn't cover the full cost?",
    answer:
      "You are responsible for any amount not covered by your policy. This is why confirming your policy's coverage limit and altitude cap before your trek matters more than most trekkers realize until they are mid-emergency.",
  },
  {
    question:
      "How much does a shared helicopter evacuation cost compared to private?",
    answer:
      "Shared evacuations split the flight cost among multiple patients, generally making them less expensive per person than a private flight, which is billed in full to one party. Private evacuations are faster to arrange since there is no need to coordinate additional passengers. ",
  },
  {
    question: "Do trekking agencies arrange insurance for you? ",
    answer:
      "Some agencies offer insurance as part of a package, but many require trekkers to arrange their own policy. Always confirm directly with your agency whether helicopter evacuation coverage is included or whether you need a separate policy. ",
  },
];

export default function TilichoFAQ() {
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
            Tilicho region.
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
