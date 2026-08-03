"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question:
      "How long does the Annapurna Base Camp helicopter tour take?",
    answer:
      "From Pokhara, the complete experience normally takes approximately 2 to 3 hours, including hotel transfers, airport procedures, the helicopter flight and ground time at Annapurna Base Camp. A one-way flight from Pokhara generally takes around 20 to 25 minutes. Flights from Kathmandu require more time and may include operational or refuelling stops.",
  },
  {
    question:
      "Where does the helicopter land during the Annapurna tour?",
    answer:
      "The planned landing is at Annapurna Base Camp, approximately 4,130 metres above sea level. The exact landing point is selected by the pilot according to wind, snow, visibility, passenger weight and current landing-zone conditions. When landing at ABC is not considered safe, the pilot may change the route, use an approved lower-altitude landing or return to Pokhara.",
  },
  {
    question:
      "How much time do passengers receive at Annapurna Base Camp?",
    answer:
      "Passengers normally receive approximately 30 to 45 minutes at Annapurna Base Camp. During this time, you can take photographs, enjoy the mountain views, walk around the permitted area and have hot tea or breakfast when lodge services are available. The pilot may shorten the landing because of changing weather, wind, aircraft performance or passenger health.",
  },
  {
    question:
      "Is the Annapurna Base Camp helicopter tour safe for children and elderly passengers?",
    answer:
      "The tour does not require trekking or advanced physical fitness, so many families and older passengers can participate. However, Annapurna Base Camp is located at 4,130 metres, where oxygen availability is lower than at sea level. Children, elderly travellers and passengers with heart, lung, blood-pressure or mobility concerns should consult a qualified healthcare professional before booking.",
  },
  {
    question:
      "Can altitude sickness occur during the ABC helicopter tour?",
    answer:
      "Mild altitude symptoms can occur because the helicopter ascends rapidly from Pokhara to 4,130 metres. Some passengers may experience a light headache, faster heartbeat, mild breathlessness, dizziness or nausea. Move slowly, avoid running and inform the pilot immediately if you feel unwell. Supplemental oxygen and a first-aid kit are carried onboard.",
  },
  {
    question:
      "What happens when the weather is unsuitable for the flight?",
    answer:
      "The flight may be delayed, rescheduled, rerouted or cancelled when poor visibility, cloud, rain, snowfall or strong winds make the route unsafe. Eligible passengers may receive a rescheduled departure or a refund according to the confirmed booking terms. The pilot has final authority over all departure, route and landing decisions.",
  },
  {
    question:
      "What should I wear for the Annapurna Base Camp helicopter tour?",
    answer:
      "Wear thermal base layers, a fleece or light insulating layer and a warm windproof down jacket. Bring gloves, a hat covering the ears, UV-protective sunglasses, sunscreen and comfortable walking shoes or light hiking boots. Annapurna Base Camp can be cold and windy even when Pokhara is warm.",
  },
  {
    question:
      "Are ACAP and TIMS permits required for the helicopter tour?",
    answer:
      "An Annapurna Conservation Area Permit, commonly known as ACAP, is required for entry into the Annapurna Conservation Area and can be arranged as part of the confirmed package. A TIMS card may be required when the helicopter journey is combined with trekking. The final documentation requirement depends on your itinerary, nationality and type of trip.",
  },
  {
    question:
      "Why is passenger weight required before confirming the flight?",
    answer:
      "Accurate passenger weight is required for aircraft balance, payload planning, fuel calculation and high-altitude performance. Annapurna Base Camp is located at 4,130 metres, where helicopter lifting performance is lower than at Pokhara. The operations team may arrange weight distribution, passenger grouping or additional flight rotations when necessary.",
  },
  {
    question:
      "Can I book the Annapurna helicopter tour for two or three passengers?",
    answer:
      "Yes. Two or three passengers may join a shared departure when matching seats are available. The operations team can combine your booking with other travellers. A private charter is available when you prefer the complete helicopter, greater privacy and more control over the departure schedule.",
  },
  {
    question:
      "Is breakfast included in the Annapurna Base Camp helicopter tour?",
    answer:
      "Hot tea, beverages or breakfast may be included according to the selected package and lodge availability at Annapurna Base Camp. Food service can be affected by the season, weather, lodge operation and available ground time. Your booking confirmation will clearly state what is included.",
  },
  {
    question:
      "How many passengers can fly in the Airbus H125 helicopter?",
    answer:
      "The Airbus H125 can carry up to five passengers plus the pilot under suitable conditions. The actual passenger capacity may be reduced according to total passenger weight, baggage, fuel requirements, weather and high-altitude aircraft performance.",
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
