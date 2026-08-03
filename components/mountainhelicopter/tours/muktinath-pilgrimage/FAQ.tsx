"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "Is the Muktinath helicopter tour available on a sharing basis?",
    answer:
      "Unlike ABC or EBC tours, the Muktinath tour usually operates as a private charter because most visitors travel as a family or private pilgrimage group. Sharing may be possible if multiple guests book the same date, but shared availability is not guaranteed.",
  },
  {
    question: "How long do we spend at Muktinath Temple?",
    answer:
      "The standard ground time is about 60 minutes, enough for the 108-taps bath, darshan at the main Vishnu temple, Jwala Mai temple darshan, and monastery visit.",
  },
  {
    question: "Can the 60-minute ground time be extended?",
    answer:
      "Yes, on a private charter. Depending on schedule and weather, extended ground time of 2 to 3 hours may be possible for longer puja, meditation, or repeated 108-taps rituals. Please mention this while booking.",
  },
  {
    question: "Is there a Jomsom fuel stop on the Kathmandu route?",
    answer:
      "Yes. Kathmandu-Muktinath flights often stop briefly at Jomsom Airport for refueling. This is standard operating procedure and adds approximately 15 to 20 minutes to the one-way journey.",
  },
  {
    question: "Can we get breakfast at Muktinath?",
    answer:
      "Yes. Ranipauwa village near Muktinath Temple has teahouses and small restaurants serving basic Nepali food, Indian dal-bhat, noodles, egg dishes, tea, and coffee. Bring Nepali rupee notes because card payment is not reliable.",
  },
  {
    question: "What happens if weather cancels the flight?",
    answer:
      "We review the weather at 4 AM and notify guests by WhatsApp or Viber around 5 AM. If bad weather cancels the flight, you can reschedule for the next clear morning free of charge or claim a full refund if rescheduling is not possible during your Nepal trip.",
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
      if (faqRef.current && !faqRef.current.contains(event.target as Node)) {
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
      className="scroll-mt-36 flex items-start justify-center bg-[#f9f8f6] text-[#0d1f3c]"
    >
      <div
        ref={faqRef}
        className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-16 md:gap-12 md:px-12 md:py-24 lg:flex-row lg:justify-between lg:gap-24 lg:px-16 lg:py-28"
      >
        <div className="flex w-full max-w-[650px] flex-col justify-center lg:max-w-[360px]">
          <p className="mb-5 text-[16px] font-semibold uppercase tracking-[0.28em] text-[#F2B632] font-manrope">
            Questions
          </p>

          <h2 className="font-fraunces text-[34px] font-bold leading-[1] tracking-[-0.92px] text-[#0A1929] sm:text-[36.95px] sm:leading-[33.99px]">
            Everything you
            <br />
            need to know.
          </h2>

          <p className="mt-6 max-w-[650px] text-sm font-medium leading-7 text-gray-500 font-manrope tracking-normal">
            Still have questions? Our team is available 7 days a week.
          </p>

          <Link
            href="/contact#inquiry-form"
            className="mt-[26px] inline-flex w-fit items-center gap-2.5 bg-[#0d1f3c] text-white text-[16px] font-bold uppercase px-8 py-3 border-2 border-[#0d1f3c] transition-all duration-300 group hover:bg-[#fbfbfb] hover:border-[#F2B632] hover:text-[#F2B632] font-manrope tracking-[-0.01em]"
          >
            ASK US DIRECTLY
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        <div className="w-full min-w-0 border-t border-[#d1cfc9] font-manrope lg:max-w-[760px] lg:pr-2">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-[#d1cfc9]">
              <button
                onClick={() => toggle(index)}
                aria-expanded={openIndex === index}
                className="group flex w-full cursor-pointer items-start justify-between gap-4 py-5 text-left sm:items-center sm:gap-6 sm:py-6"
              >
                <span className="min-w-0 text-[15px] font-semibold leading-snug text-[#0d1f3c] transition group-hover:text-[#C49A3C] font-manrope tracking-normal sm:text-[16px]">
                  {faq.question}
                </span>

                <span className="flex h-7 w-7 shrink-0 items-center justify-center text-[#0A1929]">
                  {openIndex === index ? (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    >
                      <path d="M6 6L18 18" />
                      <path d="M18 6L6 18" />
                    </svg>
                  ) : (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    >
                      <path d="M12 5V19" />
                      <path d="M5 12H19" />
                    </svg>
                  )}
                </span>
              </button>

              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="max-w-2xl pb-6 pr-1 text-sm leading-7 text-gray-500 sm:pb-7 sm:pr-6">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
