"use client";

import { Fragment } from "react";
import {
  AlertTriangle,
  BadgeCheck,
  CalendarClock,
  CreditCard,
  FileText,
  Gavel,
  HeartPulse,
  LifeBuoy,
  Luggage,
  Mail,
  MapPin,
  Phone,
  Plane,
  Route,
  Scale,
  ShieldCheck,
  Tag,
  Users,
} from "lucide-react";

type Block =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "steps"; items: { label: string; text: string }[] }
  | { type: "note"; tone: "gold" | "blue"; text: string };

type Section = {
  id: string;
  title: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  blocks: Block[];
};

const LAST_UPDATED = "[Insert Date]";

const sections: Section[] = [
  {
    id: "booking-policy",
    title: "Booking Policy",
    icon: CalendarClock,
    blocks: [
      { type: "paragraph", text: "All bookings can be made via:" },
      {
        type: "list",
        items: [
          "Phone: +977-9712082949",
          "Email: info@mountainhelicoptersnepal.com",
          "WhatsApp: +977-9712082949",
          "Website enquiry form: https://mountainhelicoptersnepal.com/#contact",
        ],
      },
      {
        type: "paragraph",
        text: "A booking is confirmed only after you receive written confirmation from Mountain Helicopters Nepal.",
      },
      { type: "paragraph", text: "Accurate passenger details are required:" },
      {
        type: "list",
        items: ["Full name as per passport", "Nationality", "Contact number"],
      },
      {
        type: "note",
        tone: "gold",
        text: "Incomplete or incorrect passenger information may delay or invalidate a confirmed booking.",
      },
    ],
  },
  {
    id: "payment-terms",
    title: "Payment Terms",
    icon: CreditCard,
    blocks: [
      {
        type: "steps",
        items: [
          {
            label: "Advance Payment",
            text: "A non-refundable advance payment of [Insert %] of the total flight cost is required to secure a booking.",
          },
          {
            label: "Final Payment",
            text: "The remaining balance must be paid in full before departure. Boarding may be refused if full payment has not been received.",
          },
        ],
      },
      { type: "paragraph", text: "Accepted payment methods:" },
      {
        type: "list",
        items: [
          "Bank transfer",
          "Cash",
          "Credit/debit card (a processing surcharge of [Insert %] applies to card payments)",
        ],
      },
    ],
  },
  {
    id: "cancellation-refund",
    title: "Cancellation and Refund Policy",
    icon: Scale,
    blocks: [
      {
        type: "paragraph",
        text: "Cancellation by the Client — all cancellations must be submitted in writing (email or official letter). Charges apply based on notice given:",
      },
      {
        type: "steps",
        items: [
          {
            label: "More than 30 days",
            text: "Loss of advance payment only.",
          },
          {
            label: "15–30 days",
            text: "[Insert %] of total flight cost charged.",
          },
          { label: "Less than 15 days", text: "No refund." },
        ],
      },
      {
        type: "paragraph",
        text: "Cancellation by Mountain Helicopters Nepal — your safety is our priority. We may postpone, reroute, or cancel a flight due to weather, mechanical issues, or safety concerns. Affected clients will be offered the next available flight slot or a full refund, at the Company's discretion.",
      },
      {
        type: "paragraph",
        text: "Postponement requests — rescheduling a flight is subject to aircraft and pilot availability. Additional charges may apply for postponed flights.",
      },
    ],
  },
  {
    id: "flight-safety",
    title: "Flight Safety and Operational Authority",
    icon: Plane,
    blocks: [
      {
        type: "list",
        items: [
          "All flights depend on weather, visibility, and Air Traffic Control clearance.",
          "The Pilot-in-Command has final authority over whether a flight proceeds, including route, altitude, and landing decisions.",
          "Mountain Helicopters Nepal is not liable for costs such as accommodation, meals, or missed onward travel resulting from weather- or technical-related delays.",
        ],
      },
    ],
  },
  {
    id: "weight-baggage",
    title: "Weight and Baggage Restrictions",
    icon: Luggage,
    blocks: [
      {
        type: "list",
        items: [
          "Passengers must declare accurate body weight and luggage weight at the time of booking.",
          "Strict payload limits apply for flights above [Insert altitude, e.g. 4,000 meters].",
          "Excess baggage may need to be left behind or sent on a separate shuttle flight at the Client's expense.",
        ],
      },
    ],
  },
  {
    id: "rescue-evacuation",
    title: "Search, Rescue, and Medical Evacuation Flights",
    icon: LifeBuoy,
    blocks: [
      {
        type: "list",
        items: [
          "Trekkers and climbers must carry travel insurance covering helicopter rescue and medical evacuation up to their trekking altitude.",
          "If insurance approval is delayed, the Client, their agency, or a representative must provide a guarantee of payment before a rescue helicopter is dispatched.",
        ],
      },
    ],
  },
  {
    id: "insurance",
    title: "Travel and Health Insurance",
    icon: ShieldCheck,
    blocks: [
      {
        type: "paragraph",
        text: "Comprehensive travel insurance is strongly recommended for every passenger, covering:",
      },
      {
        type: "list",
        items: [
          "Trip cancellation",
          "Medical treatment",
          "Helicopter evacuation",
          "Loss of personal belongings",
        ],
      },
    ],
  },
  {
    id: "health-declarations",
    title: "Health and Medical Declarations",
    icon: HeartPulse,
    blocks: [
      {
        type: "list",
        items: [
          "Passengers must disclose pre-existing medical conditions (heart conditions, pregnancy, respiratory issues) before flying.",
          "Mountain flights involve rapid altitude changes; passengers concerned about Acute Mountain Sickness (AMS) should consult a doctor beforehand.",
        ],
      },
    ],
  },
  {
    id: "liability",
    title: "Liability",
    icon: AlertTriangle,
    blocks: [
      {
        type: "list",
        items: [
          "Mountain Helicopters Nepal maintains passenger liability insurance as required by the Civil Aviation Authority of Nepal (CAAN).",
          "The Company is not liable for injury, illness, delay, or baggage loss unless caused by proven negligence.",
          "The Company is not responsible for inherent risks associated with high-altitude mountain travel.",
          "Passengers are responsible for their own luggage and belongings throughout the trip.",
        ],
      },
    ],
  },
  {
    id: "itinerary-changes",
    title: "Itinerary Changes",
    icon: Route,
    blocks: [
      {
        type: "paragraph",
        text: "Routes, landing points, and schedules may be changed without prior notice when required for safety or operational reasons.",
      },
    ],
  },
  {
    id: "passenger-conduct",
    title: "Passenger Conduct",
    icon: Users,
    blocks: [
      {
        type: "list",
        items: [
          "All passengers must follow safety briefings and instructions from pilots and ground staff.",
          "Unlawful or unsafe behavior may result in removal from the flight without refund.",
        ],
      },
    ],
  },
  {
    id: "travel-documentation",
    title: "Travel Documentation",
    icon: FileText,
    blocks: [
      {
        type: "paragraph",
        text: "Clients are responsible for arranging their own passports, visas, permits, and recommended vaccinations.",
      },
    ],
  },
  {
    id: "pricing",
    title: "Pricing",
    icon: Tag,
    blocks: [
      {
        type: "list",
        items: [
          "Prices may change without notice due to currency fluctuations, fuel costs, taxes, or government fees.",
          "Prices confirmed in writing at the time of booking will be honored.",
        ],
      },
    ],
  },
  {
    id: "governing-law",
    title: "Governing Law",
    icon: Gavel,
    blocks: [
      {
        type: "list",
        items: [
          "The laws of Nepal govern these Terms and Conditions.",
          "Any disputes fall under the exclusive jurisdiction of the courts of Kathmandu, Nepal.",
        ],
      },
    ],
  },
];

/** Renders bracketed placeholders such as [Insert %] as highlighted tokens. */
function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\])/g);

  return (
    <>
      {parts.map((part, index) =>
        part.startsWith("[") && part.endsWith("]") ? (
          <span
            key={index}
            className="rounded bg-[#fdf3d8] px-1.5 py-0.5 font-manrope text-[0.9em] font-semibold text-[#8a6400]"
          >
            {part}
          </span>
        ) : (
          <Fragment key={index}>{part}</Fragment>
        )
      )}
    </>
  );
}

function BlockContent({ block }: { block: Block }) {
  if (block.type === "paragraph") {
    return (
      <p className="font-manrope text-sm leading-7 text-[#4f5965] md:text-base">
        <RichText text={block.text} />
      </p>
    );
  }

  if (block.type === "list") {
    return (
      <ul className="space-y-3">
        {block.items.map((item) => (
          <li
            key={item}
            className="flex gap-3 font-manrope text-sm leading-7 text-[#4f5965] md:text-base"
          >
            <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#F2B632]" />
            <span>
              <RichText text={item} />
            </span>
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "steps") {
    return (
      <div className="space-y-4">
        {block.items.map((item) => (
          <div
            key={item.label}
            className="border-l-2 border-[#d4dae2] pl-4 md:pl-5"
          >
            <p className="font-manrope text-xs font-bold uppercase tracking-[0.08em] text-[#00569a]">
              {item.label}
            </p>
            <p className="mt-1.5 font-manrope text-sm leading-7 text-[#4f5965] md:text-base">
              <RichText text={item.text} />
            </p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className={
        block.tone === "gold"
          ? "rounded-2xl border border-[#e7d5a8] bg-[#fffaf0] px-5 py-4 md:px-6"
          : "rounded-2xl border border-[#cfe0ef] bg-[#f2f8fc] px-5 py-4 md:px-6"
      }
    >
      <p
        className={`font-manrope text-xs leading-6 md:text-sm ${
          block.tone === "gold" ? "text-[#6f6245]" : "text-[#38536b]"
        }`}
      >
        <RichText text={block.text} />
      </p>
    </div>
  );
}

const contactDetails = [
  { icon: MapPin, label: "Address", value: "Old Sinamangal, Kathmandu" },
  {
    icon: Mail,
    label: "Email",
    value: "info@mountainhelicoptersnepal.com",
    href: "mailto:info@mountainhelicoptersnepal.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+977-9712082949",
    href: "tel:+9779712082949",
  },
];

export default function Content() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24 lg:px-16 lg:py-28">
        {/* HEADING */}
        <div className="border-l-4 border-[#F2B632] pl-5 md:pl-6">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#F2B632]" />
            <p className="font-manrope text-[11px] font-bold uppercase tracking-[0.22em] text-[#a6770c]">
              Legal
            </p>
          </div>

          <h2 className="mt-4 font-fraunces text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#171717] md:text-4xl">
            Terms and Conditions
          </h2>

          <p className="mt-3 max-w-4xl font-manrope text-sm leading-7 text-[#4f5965] md:text-base">
            Welcome to Mountain Helicopters Nepal. These Terms and Conditions
            apply to every helicopter charter, scenic flight, trekking support
            flight, and rescue service booked with us. By booking a flight, you
            agree to the policies below.
          </p>

          <p className="mt-4 font-manrope text-xs uppercase tracking-[0.12em] text-[#6b7886]">
            Last updated:{" "}
            <span className="font-semibold text-[#8a6400]">{LAST_UPDATED}</span>
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[260px_1fr] lg:gap-16">
          {/* TABLE OF CONTENTS */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-manrope text-[11px] font-bold uppercase tracking-[0.18em] text-[#6b7886]">
              On this page
            </p>

            <nav className="mt-4 space-y-1 border-l border-[#e5e7eb]">
              {sections.map((section, index) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="group flex gap-3 border-l-2 border-transparent py-1.5 pl-4 font-manrope text-sm leading-6 text-[#4f5965] transition-colors hover:border-[#F2B632] hover:text-[#00569a]"
                >
                  <span className="pt-0.5 font-manrope text-[11px] font-bold tabular-nums text-[#94a3b8] group-hover:text-[#a6770c]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>

          {/* SECTIONS */}
          <div className="space-y-14 md:space-y-16">
            {sections.map((section, index) => {
              const Icon = section.icon;

              return (
                <article key={section.id} id={section.id} className="scroll-mt-28">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-[#e6f0f8] text-[#0a6db7]">
                      <Icon size={20} strokeWidth={1.8} />
                    </div>

                    <div>
                      <p className="font-manrope text-[11px] font-bold uppercase tracking-[0.18em] text-[#94a3b8]">
                        Section {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-1 font-fraunces text-2xl font-semibold leading-tight text-[#00569a] md:text-[26px]">
                        {section.title}
                      </h3>
                    </div>
                  </div>

                  <div className="mt-5 space-y-5 md:pl-14">
                    {section.blocks.map((block, blockIndex) => (
                      <BlockContent key={blockIndex} block={block} />
                    ))}
                  </div>
                </article>
              );
            })}

            {/* CONTACT */}
            <article id="contact-us" className="scroll-mt-28">
              <div className="rounded-2xl bg-[#002347] px-6 py-8 text-white md:px-10 md:py-10">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-[#F2B632]" />
                  <p className="font-manrope text-[11px] font-bold uppercase tracking-[0.22em] text-[#F2B632]">
                    Contact Us
                  </p>
                </div>

                <h3 className="mt-4 font-fraunces text-2xl font-semibold leading-tight text-white md:text-3xl">
                  Mountain Helicopters Nepal
                </h3>

                <div className="mt-8 grid gap-6 sm:grid-cols-3">
                  {contactDetails.map((detail) => {
                    const Icon = detail.icon;

                    return (
                      <div key={detail.label} className="flex gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-white/10 text-[#F2B632]">
                          <Icon size={18} strokeWidth={1.8} />
                        </div>

                        <div>
                          <p className="font-manrope text-[11px] font-bold uppercase tracking-[0.16em] text-white/55">
                            {detail.label}
                          </p>

                          {detail.href ? (
                            <a
                              href={detail.href}
                              className="mt-1 block font-manrope text-sm leading-6 text-white transition-colors hover:text-[#F2B632]"
                            >
                              {detail.value}
                            </a>
                          ) : (
                            <p className="mt-1 font-manrope text-sm leading-6 text-white">
                              {detail.value}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-8 flex items-start gap-3 rounded-2xl border border-[#e7d5a8] bg-[#fffaf0] px-5 py-5 md:px-7">
                <span className="mt-0.5 text-[#a6770c]">
                  <BadgeCheck size={20} strokeWidth={1.8} />
                </span>
                <p className="font-manrope text-xs leading-6 text-[#6f6245] md:text-sm">
                  By booking with Mountain Helicopters Nepal, you confirm that
                  you have read, understood, and agreed to these Terms and
                  Conditions.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
