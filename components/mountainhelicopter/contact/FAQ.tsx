"use client";

import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    question: "How fast do you actually respond?",
    answer:
      "WhatsApp messages are typically answered within 5 minutes during operating hours. Email and form inquiries within 2 hours. Emergency rescue calls are answered immediately, any hour of the day or night.",
  },
  {
    question: "What information should I include in my inquiry?",
    answer:
      "Three things get you the fastest quote: your preferred date with a backup date if flexible, your group size, and your destination or route. For charter work, add a sentence about the mission — filming, cargo, expedition support — so we can allocate the right configuration.",
  },
  {
    question: "Can I visit the office without an appointment?",
    answer:
      "Yes — walk-ins are welcome Monday to Saturday, 09:00–18:00 at Old Sinamangal, Pepsicola. If you want to be sure a flight coordinator is free when you arrive, a quick WhatsApp 30 minutes ahead helps.",
  },
  {
    question: "I'm calling about an emergency rescue. What do you need from me?",
    answer:
      "Three things: the patient's location, their condition, and the number of people needing evacuation. If the patient has travel insurance with heli-rescue cover, have the policy number ready.",
  },
  {
    question: "Which languages does your team speak?",
    answer:
      "English, Nepali, and Hindi — spoken fluently across our flight desk and crew. For other languages, WhatsApp works well since written messages can be translated on both ends.",
  },
  {
    question: "How do payments work?",
    answer:
      "A 30% deposit confirms your booking; the balance is due on flight day. We accept bank transfer, credit card, cash, eSewa, and Khalti. If we cancel for weather, you choose full refund or free reschedule.",
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
    <section className="flex min-h-screen items-start justify-center bg-[#f9f8f6] px-6 py-20 text-[#0d1f3c] lg:px-20 lg:py-24">
      <div
        ref={faqRef}
        className="grid w-full max-w-6xl grid-cols-1 items-start gap-14 lg:grid-cols-[320px_1fr] lg:gap-[200px]" >
        
        <aside className="flex flex-col justify-center lg:min-h-[620px]">
          <p className="mb-5 text-[16px] font-semibold uppercase tracking-[0.28em] text-[#F2B632] font-manrope">
            Questions
          </p>

          <h2 className="font-fraunces text-[36.95px] font-bold leading-[33.99px] tracking-[-0.92px] text-[#0A1929]">
            Everything you
            <br />
            need to know.
          </h2>

          <p className="mt-6 max-w-[650px] text-sm font-medium leading-7 text-gray-500 font-manrope tracking-normal">
            Still have questions? Our team is available 7 days a week.
          </p>

          <a
            href="#inquiry-form"
            className="mt-[26px] inline-flex w-fit items-center gap-2.5 bg-[#0d1f3c] text-white text-[16px] font-bold uppercase px-8 py-3 border-2 border-[#0d1f3c] transition-all duration-300 group hover:bg-[#fbfbfb] hover:border-[#F2B632] hover:text-[#F2B632] font-manrope tracking-[-0.01em]"
          >
            ASK US DIRECTLY
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </aside>

        <div className="max-h-155 border-t border-[#d1cfc9] pr-2 font-manrope">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-[#d1cfc9]">
              <button
                onClick={() => toggle(index)}
                aria-expanded={openIndex === index}
                className="group flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left"
              >
                <span className="text-[16px] font-semibold leading-snug text-[#0d1f3c] transition group-hover:text-[#C49A3C] font-manrope tracking-normal ">
                  {faq.question}
                </span>

                <span
  className="flex h-7 w-7 shrink-0 items-center justify-center text-[#0A1929]"
>
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
                  <p className="max-w-2xl pb-7 text-sm leading-7 text-gray-500">
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
