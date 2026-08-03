"use client";

import Link from "next/link";

import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    question: "How safe are helicopter flights in Nepal?",
    answer:
      "Safety is the foundation of every decision we make. Our aircraft are operated according to Civil Aviation Authority of Nepal requirements, and every flight depends on weather, route conditions, aircraft capability, and the final decision of the Pilot in Command.",
  },
  {
    question: "What if weather cancels my flight?",
    answer:
      "When weather conditions are unsuitable, the flight may be delayed, rescheduled, rerouted, or cancelled. Our team will explain the available options according to your booking terms and itinerary.",
  },
  {
    question: "What is the best time to fly over the Himalayas?",
    answer:
      "March to May and September to November generally provide favourable mountain visibility. Winter can also offer clear skies, while monsoon flights are more weather-dependent.",
  },
  {
    question: "Can children fly on a helicopter tour?",
    answer:
      "Yes, children may travel with an accompanying adult. Age, health, route altitude, seat arrangements, and safety requirements are reviewed before departure.",
  },
  {
    question: "Can I fully customize my helicopter charter?",
    answer:
      "Yes. Routes, departure times, destinations, landing points, and additional arrangements can be customized, subject to weather, permits, aircraft performance, and operational approval.",
  },
  {
    question: "Do you operate rescue and emergency helicopter services?",
    answer:
      "Yes, helicopter rescue and emergency evacuation services can be arranged across remote Himalayan regions when weather, permissions, aircraft availability, and landing conditions allow.",
  },
  {
    question: "Is Mountain Helicopters Nepal officially certified?",
    answer:
      "Mountain Helicopters Nepal operates according to the applicable requirements and approvals of the Civil Aviation Authority of Nepal.",
  },
  {
    question: "How quickly can emergency rescue services be arranged?",
    answer:
      "Response time depends on the patient location, weather, visibility, flight permissions, aircraft availability, landing conditions, and the accuracy of the rescue information provided.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqRef = useRef<HTMLElement | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index,
    );
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

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <article
      ref={faqRef}
      aria-labelledby="faq-heading"
      className="w-full"
    >
      <div className="mb-10">
        <p className="mb-3 font-manrope text-[11px] font-bold uppercase tracking-[0.15em] text-[#B8860B]">
          Good to Know
        </p>

        <h2
          id="faq-heading"
          className="font-fraunces text-[clamp(1.75rem,3.4vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-[#003366]"
        >
          Everything you need to know.
        </h2>

        <p className="mt-4 max-w-2xl font-manrope text-[15px] leading-7 text-[#475569]">
          Still have questions? Our team is available seven days a week to
          help you plan your flight.
        </p>

        <Link
          href="/contact"
          className="group mt-6 inline-flex min-h-[46px] items-center gap-3 rounded-lg bg-[#003366] px-6 py-3 font-manrope text-[13px] font-bold uppercase tracking-[0.04em] text-white transition duration-300 hover:bg-[#001A33]"
        >
          Ask us directly

          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>

      <div className="w-full border-t border-[#d1cfc9] font-manrope">
        {faqs.map((faq, index: number) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={faq.question}
              className="border-b border-[#d1cfc9]"
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                className="group flex w-full cursor-pointer items-center justify-between gap-6 py-5 text-left sm:py-6"
              >
                <span className="pr-4 font-manrope text-[15px] font-semibold leading-relaxed text-[#0d1f3c] transition-colors duration-300 group-hover:text-[#B8860B] sm:text-[17px]">
                  {faq.question}
                </span>

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E6F0F8] text-[#003366] transition-colors duration-300 group-hover:bg-[#F2B632]">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    aria-hidden="true"
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <path d="M12 5V19" />
                    <path d="M5 12H19" />
                  </svg>
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
                  <p className="max-w-3xl pb-6 pr-12 font-manrope text-[14px] leading-7 text-[#64748B] sm:text-[15px]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
}