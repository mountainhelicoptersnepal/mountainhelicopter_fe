"use client";

import Link from "next/link";

import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    question: "How safe are helicopter flight in Nepal?",
    answer:
      "Safety is the foundation of every decision we make. Our fleet meets EASA and CAAN standards, all pilots hold high-altitude certifications, and every flight uses HTAWS terrain-avoidance technology.",
  },
  {
    question: "What if weather cancels my flight?",
    answer:
      "If weather conditions are unsafe, we reschedule your flight or provide the best available alternative based on your itinerary.",
  },
  {
    question: "What is the best time to fly over the Himalayas?",
    answer:
      "The best seasons are March–May and October–November, when skies are clearer and mountain visibility is excellent.",
  },
  {
    question: "Can children fly on the helicopter tour?",
    answer:
      "Yes, children can fly with an accompanying adult. Safety briefing and seat arrangements are handled before the flight.",
  },
  {
    question: "Can I fully customize my helicopter charter?",
    answer:
      "Absolutely. We can customize routes, timings, destinations, landing points, and charter experiences around your requirements.",
  },
  {
    question: "Do you operate rescue and emergency helicopter services?",
    answer:
      "Yes, we support rescue and emergency operations across remote Himalayan regions when conditions allow.",
  },
  {
    question: "Is Mountain Helicopters Nepal officially certified?",
    answer:
      "We are fully certified by the Civil Aviation Authority of Nepal (CAAN) and comply with international EASA safety standards.",
  },
  {
    question: "How quickly can emergency rescue services be arranged?",
    answer:
      "Our dedicated rescue fleet is on standby around the clock to ensure rapid response in emergencies.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqRef = useRef<HTMLDivElement | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target instanceof Node)) {
        return;
      }

      if (faqRef.current && !faqRef.current.contains(event.target)) {
        setOpenIndex(null);
      }
    };

    const handleScroll = () => {
      setOpenIndex(null);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="w-full bg-white text-[#0A1929]">
      {/* 1440px Figma frame */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24 lg:px-16 lg:py-28">
        {/* 1190px content, 334.83px left column, 159px gap */}
        <div
          ref={faqRef}
          className="grid w-full grid-cols-1 gap-10 md:gap-12 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-[80px] xl:grid-cols-[334.83px_minmax(0,1fr)] xl:gap-[159px]"
        >
          {/* Left content */}
          <aside className="flex w-full flex-col gap-5 sm:gap-[26px] lg:w-full lg:self-center xl:w-[334.83px]">
            <p className="font-manrope text-[14px] font-bold uppercase leading-[14px] tracking-[3px] text-[#F2B632] sm:text-[16px] sm:tracking-[3.8px]">
              Questions
            </p>

            <h2 className="font-fraunces text-[34px] font-bold leading-[1] tracking-[-0.92px] text-[#0A1929] sm:text-[40px] sm:leading-[0.92] lg:text-[42px] lg:leading-[0.86]">
              Everything you
              <br />
              need to know.
            </h2>

            <p className="max-w-[334.83px] font-manrope text-[14px] font-normal leading-[22px] tracking-[0px] text-[#6B7886]">
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

          {/* Right FAQ list: 8 × 61.875px = 495px */}
          <div className="w-full min-w-0 font-manrope">
            {faqs.map((faq, index: number) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className="border-b border-[#D9DEE3]"
                >
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="group flex min-h-[61.875px] w-full items-center justify-between gap-3 py-4 text-left sm:gap-6 sm:py-3 lg:h-[61.875px] lg:py-0"
                  >
                    <span className="min-w-0 pr-2 font-manrope text-[14px] font-medium leading-[22px] tracking-[0px] text-[#151117] transition-colors duration-300 group-hover:text-[#F2B632] cursor-pointer sm:pr-4 sm:text-[16px] sm:leading-[28px]">
                      {faq.question}
                    </span>

                    <span className="relative flex h-[16px] w-[16px] shrink-0 items-center justify-center text-[#002347]">
                      {/* Horizontal line */}
                      <span className="absolute h-[1.5px] w-[12px] bg-current" />

                      {/* Vertical line */}
                      <span
                        className={`absolute h-[12px] w-[1.5px] bg-current transition-transform duration-300 ${
                          isOpen ? "rotate-90" : "rotate-0"
                        }`}
                      />
                    </span>
                  </button>

                  <div
                    id={`faq-answer-${index}`}
                    className={`grid transition-all duration-500 ease-in-out ${
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