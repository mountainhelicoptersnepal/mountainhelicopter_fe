"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "Is the Langtang helicopter tour safe for children and elderly passengers?",
    answer:
      "Yes. Langtang helicopter tours can be suitable for children and elderly passengers because trekking is not involved and no physical fitness is required. Guests with serious heart, lung, or respiratory conditions should seek medical advice before booking.",
  },
  {
    question: "Where does the helicopter land during the Langtang tour?",
    answer:
      "The helicopter commonly lands at Kyanjin Gompa, also called Kyanjin Village, at 3,870 m / 12,696 ft. This is the tour highlight with views of Langtang Lirung, Langtang Glacier, Dorje Lakpa, Yala Peak, and surrounding peaks.",
  },
  {
    question: "How long is the Langtang helicopter tour from Kathmandu?",
    answer:
      "Kathmandu to Kyanjin Gompa usually takes about 25-35 minutes one way. Including hotel pickup, airport check-in, flight time, ground time, and drop-off, the full tour normally takes approximately 2-4 hours.",
  },
  {
    question: "Why do you ask for passenger weight before the flight?",
    answer:
      "Passenger weight is required for helicopter safety and aircraft balance. The pilot uses it to calculate payload, fuel capacity, altitude performance, and landing safety.",
  },
  {
    question: "What happens if the weather is bad on the flight day?",
    answer:
      "If weather or visibility cancels the flight, we offer a free reschedule for the next available clear morning or a refund according to booking terms. Langtang flights do not operate if the pilot determines conditions are unsafe.",
  },
  {
    question: "What should I wear for the Langtang helicopter tour?",
    answer:
      "Wear warm and windproof clothing. We recommend a down jacket, thermal layer, gloves, warm hat, sunglasses, and comfortable shoes because Kyanjin Gompa is much colder than Kathmandu.",
  },
  {
    question: "Is altitude sickness a problem on the Langtang helicopter tour?",
    answer:
      "Serious altitude sickness is unlikely because ground time at Kyanjin Gompa is short. Some passengers may feel slight shortness of breath, headache, or a faster pulse at 3,870 m. Avoid running and tell the pilot if you feel unwell.",
  },
  {
    question: "Can I book the Langtang helicopter tour for 2 or 3 people?",
    answer:
      "Yes. For shared group joining, we try to combine you with other passengers. If you need privacy or want to fly without waiting for others, you can book a private helicopter charter.",
  },
  {
    question: "Is the Kyanjin cheese factory included in the tour?",
    answer:
      "You can visit the Kyanjin cheese factory during ground time if it is open and weather permits. It is one of the distinctive local cultural attractions at Kyanjin Gompa.",
  },
  {
    question: "Do I need a TIMS card for the Langtang helicopter tour?",
    answer:
      "No. A TIMS card is not required for a helicopter-only Langtang trip because you are not trekking on the trail. You only need the Langtang National Park Entry Permit, which is included.",
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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section id="faq" className="scroll-mt-36 flex items-start justify-center bg-[#f9f8f6] text-[#0d1f3c]">
      <div ref={faqRef} className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-16 md:gap-12 md:px-12 md:py-24 lg:flex-row lg:justify-between lg:gap-24 lg:px-16 lg:py-28">
        <div className="flex w-full max-w-[650px] flex-col justify-center lg:max-w-[360px]">
          <p className="mb-5 font-manrope text-[16px] font-semibold uppercase tracking-[0.28em] text-[#F2B632]">
            Questions
          </p>
          <h2 className="font-fraunces text-[34px] font-bold leading-[1] tracking-[-0.92px] text-[#0A1929] sm:text-[36.95px] sm:leading-[33.99px]">
            Everything you
            <br />
            need to know.
          </h2>
          <p className="mt-6 max-w-[650px] font-manrope text-sm font-medium leading-7 tracking-normal text-gray-500">
            Still have questions? Our team is available 7 days a week.
          </p>
          <Link href="/contact#inquiry-form" className="mt-[26px] inline-flex w-fit items-center gap-2.5 border-2 border-[#0d1f3c] bg-[#0d1f3c] px-8 py-3 font-manrope text-[16px] font-bold uppercase tracking-[-0.01em] text-white transition-all duration-300 hover:border-[#F2B632] hover:bg-[#fbfbfb] hover:text-[#F2B632]">
            ASK US DIRECTLY
            <span>→</span>
          </Link>
        </div>

        <div className="w-full min-w-0 border-t border-[#d1cfc9] font-manrope lg:max-w-[760px] lg:pr-2">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="border-b border-[#d1cfc9]">
              <button
                onClick={() => toggle(index)}
                aria-expanded={openIndex === index}
                className="group flex w-full cursor-pointer items-start justify-between gap-4 py-5 text-left sm:items-center sm:gap-6 sm:py-6"
              >
                <span className="min-w-0 font-manrope text-[15px] font-semibold leading-snug tracking-normal text-[#0d1f3c] transition group-hover:text-[#C49A3C] sm:text-[16px]">
                  {faq.question}
                </span>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center text-[#0A1929]">
                  {openIndex === index ? "×" : "+"}
                </span>
              </button>

              <div className={`grid transition-all duration-500 ease-in-out ${openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
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
