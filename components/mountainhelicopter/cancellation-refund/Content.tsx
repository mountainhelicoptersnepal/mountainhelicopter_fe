"use client";

import { Fragment } from "react";
import {
  BadgeCheck,
  Ban,
  CalendarX,
  CloudRain,
  FileText,
  HeartPulse,
  Mail,
  Mountain,
  Plane,
  Send,
  Wallet,
} from "lucide-react";

type Block =
  | { type: "paragraph"; text: string }
  | { type: "subhead"; text: string }
  | { type: "list"; items: string[] }
  | { type: "steps"; items: { label: string; text: string }[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "note"; tone: "gold" | "blue"; text: string };

type Section = {
  id: string;
  title: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  blocks: Block[];
};

const LAST_UPDATED = "August 4, 2026";

const sections: Section[] = [
  {
    id: "overview",
    title: "Overview",
    icon: FileText,
    blocks: [
      {
        type: "paragraph",
        text: "This policy applies to all bookings made through mountainhelicoptersnepal.com, our partners, or our agents. By confirming your booking, you accept this policy.",
      },
      {
        type: "paragraph",
        text: "The schedule below applies to per-seat tour bookings. Charter bookings have separate terms detailed in Section 5.",
      },
    ],
  },
  {
    id: "cancellation-by-you",
    title: "Cancellation by You",
    icon: CalendarX,
    blocks: [
      {
        type: "paragraph",
        text: "If you need to cancel your booking, the following refund schedule applies, calculated by the number of days between your written cancellation request and your scheduled flight date:",
      },
      {
        type: "table",
        headers: ["Days Before Flight", "Refund", "Notes"],
        rows: [
          ["30+ days", "90%", "Full refund minus a 10% processing fee."],
          ["15 – 29 days", "75%", "Standard cancellation window."],
          [
            "7 – 14 days",
            "50%",
            "Late cancellation. The aircraft block is already scheduled.",
          ],
          ["3 – 6 days", "25%", "Short-notice cancellation."],
          ["0 – 2 days", "0%", "No refund. Seat cannot be resold."],
          [
            "No-show",
            "0%",
            "No refund. Late arrivals beyond 30 minutes are treated as no-shows.",
          ],
        ],
      },
      {
        type: "paragraph",
        text: "Cancellations must be submitted in writing to info@mountainhelicoptersnepal.com, by WhatsApp to our official number, or through your original booking platform.",
      },
      {
        type: "note",
        tone: "gold",
        text: "The date your cancellation is received determines the refund tier, not the date you intended to send it.",
      },
    ],
  },
  {
    id: "cancellation-by-mhn",
    title: "Cancellation by MHN",
    icon: CloudRain,
    blocks: [
      { type: "subhead", text: "Weather Cancellations" },
      {
        type: "paragraph",
        text: "If we cancel your flight due to weather, visibility, or other safety conditions, you are entitled to one of the following:",
      },
      {
        type: "list",
        items: [
          "Reschedule to the next available date at no additional cost.",
          "Full refund (100% of the amount paid).",
          "Voucher valid for 12 months at face value.",
        ],
      },
      {
        type: "paragraph",
        text: "You choose. Weather decisions are made by the pilot in command and our flight operations team. Their decisions are final and based on aviation safety standards.",
      },
      { type: "subhead", text: "Mechanical or Operational Cancellations" },
      {
        type: "paragraph",
        text: "If we cancel due to mechanical issues, aircraft availability, crew availability, or other operational reasons, the same three options above apply: reschedule, full refund, or voucher.",
      },
      { type: "subhead", text: "Schedule Changes" },
      {
        type: "paragraph",
        text: "If we change your flight time by more than 3 hours from the originally confirmed time and the new time is not acceptable to you, you may request a full refund or rescheduling. Schedule changes of less than 3 hours do not entitle you to a refund.",
      },
    ],
  },
  {
    id: "force-majeure",
    title: "Things We Can't Control",
    icon: Mountain,
    blocks: [
      {
        type: "paragraph",
        text: "For cancellations caused by events beyond our reasonable control, including natural disasters, earthquakes, landslides, government-imposed airspace closures, civil unrest, pandemics, or other extraordinary events, we will provide the following:",
      },
      {
        type: "list",
        items: [
          "Rescheduling at no additional cost when feasible.",
          "Full refund or voucher when rescheduling is not possible.",
        ],
      },
      {
        type: "paragraph",
        text: "We are not liable for any consequential losses (accommodation, missed connections, etc.) caused by force majeure events. We strongly recommend that all travelers carry comprehensive travel insurance.",
      },
    ],
  },
  {
    id: "charter-cancellation",
    title: "Charter Cancellation Terms",
    icon: Plane,
    blocks: [
      {
        type: "paragraph",
        text: "Charter bookings (private full-helicopter bookings, corporate flights, aerial photography, medical evacuation training, and similar) follow a separate cancellation schedule due to aircraft and crew dedication:",
      },
      {
        type: "table",
        headers: ["Days Before Flight", "Refund", "Notes"],
        rows: [
          ["30+ days", "100%", "Full refund."],
          ["15 – 30 days", "70%", "Standard charter cancellation."],
          ["5 – 15 days", "40%", "Late charter cancellation."],
          ["1 – 5 days", "10%", "Very late cancellation."],
          [
            "Same day",
            "0%",
            "No refund. The aircraft and crew are already blocked.",
          ],
        ],
      },
      {
        type: "paragraph",
        text: "For multi-day charter operations or specialized services (filming or medical), separate terms may apply as documented in your charter contract.",
      },
    ],
  },
  {
    id: "medical-exceptions",
    title: "Medical Emergency Exceptions",
    icon: HeartPulse,
    blocks: [
      {
        type: "paragraph",
        text: "If you are unable to fly due to a documented medical emergency affecting you or an immediate family member, we will, at our discretion, offer the following:",
      },
      {
        type: "list",
        items: [
          "Rescheduling to a future date within 12 months at no penalty.",
          "Voucher for the full amount paid, valid for 12 months.",
          "In severe cases, a partial or full refund.",
        ],
      },
      {
        type: "note",
        tone: "blue",
        text: "Documentation required: medical certificate from a licensed practitioner, dated no more than 7 days before or after the scheduled flight, listing the condition that prevented travel.",
      },
    ],
  },
  {
    id: "refusal-of-boarding",
    title: "Refusal of Boarding",
    icon: Ban,
    blocks: [
      {
        type: "paragraph",
        text: "No refund is provided if you are refused boarding for the following reasons:",
      },
      {
        type: "list",
        items: [
          "Misrepresentation of identity, weight, or medical condition.",
          "Apparent intoxication or substance use.",
          "Failure to comply with safety briefings or crew instructions.",
          "Late arrival beyond 30 minutes from the designated check-in time.",
          "Behavior that endangers the safety of the flight or other passengers.",
        ],
      },
    ],
  },
  {
    id: "how-to-cancel",
    title: "How to Request a Cancellation",
    icon: Send,
    blocks: [
      {
        type: "paragraph",
        text: "Submit cancellation requests through any of the following channels:",
      },
      {
        type: "steps",
        items: [
          {
            label: "Email",
            text: "info@mountainhelicoptersnepal.com (include your booking reference number).",
          },
          {
            label: "WhatsApp",
            text: "+977-9712082949 (within business hours, 6 AM – 8 PM NPT).",
          },
        ],
      },
      {
        type: "paragraph",
        text: "Cancellation is effective when we issue written acknowledgment. Please include the following: full name, booking reference, scheduled flight date, and reason for cancellation.",
      },
    ],
  },
  {
    id: "refund-processing",
    title: "Refund Processing",
    icon: Wallet,
    blocks: [
      {
        type: "paragraph",
        text: "Refunds are processed to the original payment method within:",
      },
      {
        type: "table",
        headers: ["Payment Method", "Processing Time"],
        rows: [
          ["Stripe (international cards)", "5 – 10 business days"],
          ["Razorpay (Indian payments)", "3 – 7 business days"],
          ["eSewa (Nepali payments)", "1 – 3 business days"],
          ["Wire transfer", "7 – 14 business days"],
          ["OTA platforms", "Per the OTA's refund policy, typically 7 – 21 days"],
        ],
      },
      {
        type: "paragraph",
        text: "Bank processing times beyond our control may extend these windows. For tracking issues, contact your bank or payment provider.",
      },
      {
        type: "note",
        tone: "gold",
        text: "Insurance recommendation: we strongly recommend comprehensive travel insurance that covers trip cancellation, weather-related interruptions, and medical emergencies. Our cancellation policy does not replace insurance.",
      },
    ],
  },
  {
    id: "contact-us",
    title: "Contact Us",
    icon: Mail,
    blocks: [
      {
        type: "paragraph",
        text: "For cancellation requests or questions, our bookings and cancellations desk is available 6 AM to 8 PM NPT, 7 days a week.",
      },
      {
        type: "steps",
        items: [
          { label: "Email", text: "info@mountainhelicoptersnepal.com" },
          { label: "WhatsApp", text: "+977-9712082949" },
          { label: "Phone", text: "+977-9712082949" },
          { label: "Hours", text: "6:00 AM – 8:00 PM NPT" },
          { label: "Address", text: "Old Sinamangal, Kathmandu" },
        ],
      },
    ],
  },
];

/** Renders bracketed placeholders such as [Insert %] as highlighted tokens, or plain text if none. */
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

  if (block.type === "subhead") {
    return (
      <h4 className="pt-2 font-fraunces text-xl font-medium text-[#00569a] md:text-2xl">
        {block.text}
      </h4>
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

  if (block.type === "table") {
    return (
      <div className="overflow-x-auto rounded-2xl border border-[#e5e7eb]">
        <table className="w-full min-w-[520px] border-collapse text-left">
          <thead>
            <tr className="bg-[#e6f0f8]">
              {block.headers.map((header) => (
                <th
                  key={header}
                  className="px-4 py-3 font-manrope text-[11px] font-bold uppercase tracking-[0.12em] text-[#00569a] md:px-5"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {block.rows.map((row) => (
              <tr key={row[0]} className="border-t border-[#e5e7eb]">
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={`px-4 py-3 align-top font-manrope text-sm leading-6 md:px-5 ${
                      cellIndex === 0
                        ? "font-semibold text-[#171717]"
                        : "text-[#4f5965]"
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
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
            Cancellation &amp; Refund Policy
          </h2>

          <p className="mt-3 max-w-4xl font-manrope text-sm leading-7 text-[#4f5965] md:text-base">
            Cancellation timelines, refund schedules, and what happens when
            weather or operations require us to change your flight.
          </p>

          <p className="mt-3 max-w-4xl font-manrope text-sm leading-7 text-[#4f5965] md:text-base">
            Mountain Helicopters Nepal operates flights in challenging mountain
            conditions. This Cancellation &amp; Refund Policy explains what
            happens when you need to cancel, when we need to cancel for weather
            or safety reasons, and how refunds are processed.
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
                <article
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-28"
                >
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

            {/* ACKNOWLEDGEMENT NOTE */}
            <article className="scroll-mt-28">
              <div className="flex items-start gap-3 rounded-2xl border border-[#e7d5a8] bg-[#fffaf0] px-5 py-5 md:px-7">
                <span className="mt-0.5 text-[#a6770c]">
                  <BadgeCheck size={20} strokeWidth={1.8} />
                </span>
                <p className="font-manrope text-xs leading-6 text-[#6f6245] md:text-sm">
                  By confirming your booking with Mountain Helicopters Nepal, you
                  accept this Cancellation &amp; Refund Policy.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
