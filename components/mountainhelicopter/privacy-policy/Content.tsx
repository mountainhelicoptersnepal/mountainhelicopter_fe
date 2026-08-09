"use client";

import { Fragment } from "react";
import {
  BadgeCheck,
  Cookie,
  Database,
  ExternalLink,
  FileClock,
  Lock,
  Mail,
  RefreshCw,
  Scale,
  Share2,
  Sparkles,
  UserRoundCheck,
} from "lucide-react";

type Block =
  | { type: "paragraph"; text: string }
  | { type: "subhead"; text: string }
  | { type: "list"; items: string[] }
  | { type: "steps"; items: { label: string; text: string }[] }
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
    id: "information-we-collect",
    title: "Information We Collect",
    icon: Database,
    blocks: [
      { type: "subhead", text: "Personal Information" },
      {
        type: "paragraph",
        text: "When you submit an inquiry or booking request, we may collect:",
      },
      {
        type: "list",
        items: [
          "Full name",
          "Email address",
          "Phone number (with country code)",
          "Service of interest (tour, charter, rescue, or custom)",
          "Tour selection and number of passengers",
          "Preferred travel dates",
          "Any additional details or messages you provide",
        ],
      },
      {
        type: "paragraph",
        text: "For confirmed bookings and rescue/medevac operations, we may also collect:",
      },
      {
        type: "list",
        items: [
          "Passport or government-issued ID details",
          "Nationality",
          "Weight details (required for flight manifests and load calculations)",
          "Insurance information (for rescue and medical evacuation cases)",
          "Payment and billing details",
        ],
      },
      { type: "subhead", text: "Non-Personal Information" },
      { type: "paragraph", text: "We may automatically collect:" },
      {
        type: "list",
        items: [
          "IP address",
          "Browser type and device information",
          "Pages visited and time spent on our site",
          "Cookies and similar tracking technologies",
        ],
      },
    ],
  },
  {
    id: "how-we-use-information",
    title: "How We Use Your Information",
    icon: Sparkles,
    blocks: [
      { type: "paragraph", text: "We use the information we collect to:" },
      {
        type: "list",
        items: [
          "Respond to inquiries and process tour, charter, and rescue bookings",
          "Confirm flight details and coordinate passenger manifests",
          "Comply with Civil Aviation Authority of Nepal (CAAN) regulations and reporting requirements",
          "Coordinate with insurance providers and emergency/medical services during rescue operations",
          "Communicate with you about your inquiry or booking",
          "Improve our website and customer service",
          "Comply with applicable legal and regulatory obligations",
        ],
      },
      {
        type: "note",
        tone: "gold",
        text: "We do not use your information for unsolicited marketing without your consent.",
      },
    ],
  },
  {
    id: "sharing-your-information",
    title: "Sharing Your Information",
    icon: Share2,
    blocks: [
      {
        type: "paragraph",
        text: "We do not sell or rent your personal data. As stated on our inquiry form, we do not share your data with third parties for marketing purposes. We may, however, share necessary information with:",
      },
      {
        type: "steps",
        items: [
          {
            label: "Regulatory Authorities",
            text: "CAAN, airport authorities, and other government bodies as required for flight clearances and legal compliance.",
          },
          {
            label: "Emergency and Medical Services",
            text: "Local authorities, hospitals, or medical teams in connection with search-and-rescue or evacuation operations.",
          },
          {
            label: "Insurance Providers",
            text: "For rescue, medevac, or claims-related purposes.",
          },
          {
            label: "Service Providers",
            text: "Payment processors and IT/hosting providers who help us operate our website and services, bound by confidentiality obligations.",
          },
        ],
      },
    ],
  },
  {
    id: "data-retention",
    title: "Data Retention",
    icon: FileClock,
    blocks: [
      {
        type: "paragraph",
        text: "We retain your personal data only for as long as necessary to:",
      },
      {
        type: "list",
        items: [
          "Fulfill the purpose for which it was collected (e.g., completing a booking or inquiry)",
          "Meet legal, regulatory, aviation safety, or reporting obligations",
          "Resolve disputes or enforce our agreements",
        ],
      },
    ],
  },
  {
    id: "data-security",
    title: "Data Security",
    icon: Lock,
    blocks: [
      {
        type: "paragraph",
        text: "We implement reasonable technical and organizational safeguards, including SSL encryption and restricted access controls, to protect your data from unauthorized access, alteration, disclosure, or destruction. However, no method of internet transmission is completely secure, and we cannot guarantee absolute security.",
      },
    ],
  },
  {
    id: "cookies",
    title: "Cookies and Tracking Technologies",
    icon: Cookie,
    blocks: [
      {
        type: "paragraph",
        text: "Our website may use cookies to improve your browsing experience, analyze site traffic, and understand visitor preferences. You can adjust your browser settings to disable cookies, though this may affect certain site features.",
      },
    ],
  },
  {
    id: "your-privacy-rights",
    title: "Your Privacy Rights",
    icon: Scale,
    blocks: [
      { type: "subhead", text: "Under Nepal's Privacy Act, 2075" },
      {
        type: "paragraph",
        text: "You have the right to access the personal data we hold about you, request corrections to inaccurate information, and request deletion of your data when it is no longer required for legal or operational purposes.",
      },
      { type: "subhead", text: "If You Are in the European Union (GDPR)" },
      {
        type: "paragraph",
        text: "You have the right to access, correct, or request erasure of your personal data; restrict or object to certain processing; withdraw consent at any time; and request a copy of your data in a portable format.",
      },
      { type: "subhead", text: "If You Are a California Resident (CCPA)" },
      {
        type: "paragraph",
        text: "You have the right to know what personal information we have collected, request deletion of that information, and not be discriminated against for exercising these rights. We do not sell personal information.",
      },
      {
        type: "note",
        tone: "blue",
        text: "To exercise any of these rights, please contact us at info@mountainhelicoptersnepal.com.",
      },
    ],
  },
  {
    id: "childrens-privacy",
    title: "Children's Privacy",
    icon: UserRoundCheck,
    blocks: [
      {
        type: "paragraph",
        text: "Our services are not directed to children under the age of 13, and we do not knowingly collect personal information from children without parental or guardian involvement (such as when a minor is a listed passenger on a booking).",
      },
    ],
  },
  {
    id: "third-party-links",
    title: "Third-Party Links",
    icon: ExternalLink,
    blocks: [
      {
        type: "paragraph",
        text: "Our website may contain links to third-party websites (such as WhatsApp or Google Maps). We are not responsible for the privacy practices or content of these external sites.",
      },
    ],
  },
  {
    id: "changes-to-this-policy",
    title: "Changes to This Policy",
    icon: RefreshCw,
    blocks: [
      {
        type: "paragraph",
        text: "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The revised version will be posted on this page with an updated effective date.",
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
        text: "If you have any questions or concerns about this Privacy Policy or how we handle your data, please contact us:",
      },
      {
        type: "steps",
        items: [
          {
            label: "Mountain Helicopters Pvt. Ltd.",
            text: "Old Sinamangal, Pepsicola, Kathmandu, Bagmati, P.O. Box 20320, Nepal",
          },
          { label: "Email", text: "info@mountainhelicoptersnepal.com" },
          {
            label: "Phone",
            text: "+977-9712082949 / 01-4111051 / 01-4111031, 32",
          },
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
            Privacy Policy
          </h2>

          <p className="mt-3 max-w-4xl font-manrope text-sm leading-7 text-[#4f5965] md:text-base">
            Welcome to Mountain Helicopters Pvt. Ltd. We are committed to
            protecting your privacy and safeguarding your personal information.
            This Privacy Policy explains how we collect, use, disclose, and
            protect your data when you visit our website
            (https://mountainhelicoptersnepal.com) or use our helicopter tour,
            charter, and rescue services.
          </p>

          <p className="mt-3 max-w-4xl font-manrope text-sm leading-7 text-[#4f5965] md:text-base">
            By using our website or submitting an inquiry, you acknowledge that
            you have read and understood this Privacy Policy.
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
                  By using our website or submitting an inquiry, you confirm that
                  you have read and understood this Privacy Policy.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
