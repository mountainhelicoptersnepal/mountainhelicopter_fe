"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const fontFamily = "var(--font-montserrat), Montserrat, sans-serif";

// ─── Social Icons ───
const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    fill="none"
    viewBox="0 0 22 22"
  >
    <path
      fill="currentColor"
      d="M20.167 11c0-5.06-4.107-9.167-9.167-9.167S1.833 5.94 1.833 11c0 4.436 3.154 8.13 7.334 8.983V13.75H7.333V11h1.834V8.708c0-1.77 1.439-3.208 3.208-3.208h2.292v2.75h-1.834a.92.92 0 0 0-.916.916V11h2.75v2.75h-2.75v6.37a9.165 9.165 0 0 0 8.25-9.12"
    ></path>
  </svg>
);

const TikTokIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    fill="none"
    viewBox="0 0 18 18"
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12.692 18A5.31 5.31 0 0 0 18 12.692V5.308A5.31 5.31 0 0 0 12.692 0H5.308A5.31 5.31 0 0 0 0 5.308v7.384A5.31 5.31 0 0 0 5.308 18zM10.58 3.243a.692.692 0 0 0-1.348.219v8.307a2.077 2.077 0 1 1-2.077-2.077.692.692 0 0 0 0-1.384 3.462 3.462 0 1 0 3.461 3.461V5.73c.708.658 1.705 1.193 3 1.193a.692.692 0 1 0 0-1.385c-.897 0-1.579-.369-2.085-.848-.517-.49-.829-1.083-.95-1.447"
      clipRule="evenodd"
    ></path>
  </svg>
);

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    fill="none"
    viewBox="0 0 18 18"
  >
    <path
      fill="currentColor"
      d="M9 5.822c-.844 0-1.653.335-2.25.93A3.174 3.174 0 0 0 9 12.177c.844 0 1.653-.335 2.25-.93A3.174 3.174 0 0 0 9 5.821"
    ></path>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3.88.282a46.6 46.6 0 0 1 10.24 0c1.86.208 3.36 1.669 3.578 3.532a44.6 44.6 0 0 1 0 10.371c-.219 1.863-1.718 3.324-3.576 3.533a46.6 46.6 0 0 1-10.243 0c-1.86-.209-3.358-1.67-3.576-3.532a44.6 44.6 0 0 1 0-10.372C.52 1.95 2.02.49 3.879.282m10.016 2.853a.98.98 0 0 0-.98.977.976.976 0 0 0 .98.978.98.98 0 0 0 .979-.978.976.976 0 0 0-.98-.977M4.349 8.999a4.64 4.64 0 0 1 1.362-3.283 4.655 4.655 0 0 1 6.578 0 4.64 4.64 0 0 1 0 6.567 4.655 4.655 0 0 1-6.578 0A4.64 4.64 0 0 1 4.35 8.999"
      clipRule="evenodd"
    ></path>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3.88.282a46.6 46.6 0 0 1 10.24 0c1.86.208 3.36 1.669 3.578 3.532a44.6 44.6 0 0 1 0 10.371c-.219 1.863-1.718 3.324-3.576 3.533a46.6 46.6 0 0 1-10.243 0c-1.86-.209-3.358-1.67-3.576-3.532a44.6 44.6 0 0 1 0-10.372C.52 1.95 2.02.49 3.879.282m10.016 2.853a.98.98 0 0 0-.98.977.976.976 0 0 0 .98.978.98.98 0 0 0 .979-.978.976.976 0 0 0-.98-.977M4.349 8.999a4.64 4.64 0 0 1 1.362-3.283 4.655 4.655 0 0 1 6.578 0 4.64 4.64 0 0 1 0 6.567 4.655 4.655 0 0 1-6.578 0A4.64 4.64 0 0 1 4.35 8.999"
      clipRule="evenodd"
    ></path>
  </svg>
);

const YouTubeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="17"
    fill="none"
    viewBox="0 0 21 17"
  >
    <path
      fill="currentColor"
      d="M8.4 12.143 13.85 8.5 8.4 4.857zm12.138-9.508c.136.57.231 1.336.294 2.307.073.972.105 1.81.105 2.538L21 8.5c0 2.66-.168 4.614-.462 5.865-.262 1.093-.872 1.797-1.817 2.1-.493.159-1.396.268-2.782.34a61 61 0 0 1-3.77.122L10.5 17c-4.4 0-7.14-.194-8.221-.534-.945-.304-1.554-1.008-1.817-2.101-.136-.57-.231-1.336-.294-2.307A34 34 0 0 1 .063 9.52L0 8.5c0-2.66.168-4.614.462-5.865.263-1.093.871-1.797 1.817-2.1C2.772.375 3.675.266 5.06.194a61 61 0 0 1 3.77-.122L10.5 0c4.4 0 7.14.194 8.221.534.945.304 1.555 1.008 1.817 2.101"
    ></path>
  </svg>
);

// ─── Location Pin Icon ───
const PinIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-3.5 h-3.5"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

// ─── Chevron Right Icon ───
const ChevronRightIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-3 h-3"
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

// ─── Link Data ───
const toursLinks = [
  {
    label: "Everest Kalapatthar Kathmandu",
    href: "/tours/everest-kalapatthar-kathmandu",
  },
  {
    label: "Everest Gokyo Lake Landing",
    href: "/tours/everest-gokyo-kathmandu",
  },
  {
    label: "Gorakshep to Kathmandu",
    href: "/tours/gorakshep-kathmandu-helicopter",
  },
  { label: "Kathmandu to Lukla", href: "/tours/kathmandu-lukla-helicopter" },
  { label: "Ramechhap to Lukla", href: "/tours/ramechhap-lukla-helicopter" },
  // { label: "Mera Peak", href: "/tours/mera-peak" },
  // { label: "Cultural Kathmandu", href: "/tours/cultural-kathmandu" },
  // { label: "Heli Picnic", href: "/experiences/heli-picnic" },
  // { label: "Rara Lake", href: "/tours/rara-lake" },
];

const servicesLinks = [
  // { label: "Charter", href: "/experiences/private-charter" },
  { label: "Rescue", href: "/rescue" },
  { label: "Fleet", href: "/fleet" },
  // { label: "About", href: "/about" },
  // { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blogs" },
  // { label: "FAQs", href: "/faqs" },
];

const legalLinks = [
  { label: "PRIVACY", href: "/privacy-policy" },
  { label: "TERMS", href: "/terms-condition" },
  { label: "CANCELLATION & REFUND", href: "/cancellation-refund" },
  // { label: "REFUND", href: "/refund" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribe:", email);
    setEmail("");
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#000b15] pt-16 md:pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* ─── Decorative Heading ─── */}
        <h2 className="font-fraunces text-[#33485C] text-3xl sm:text-4xl md:text-5xl lg:text-[76px] font-bold text-center mb-10 md:mb-12 tracking-tight">
          “One Sky, Every Journey.”
        </h2>

        {/* ─── Gold Divider ─── */}
        <div className="w-full h-px bg-gold/40 mb-10 md:mb-14" />

        {/* ─── Newsletter Section ─── */}
        <div className="rounded-2xl border border-[#3B4754] bg-primary-[#101A27] px-6 py-8 md:px-10 md:py-10 mb-14 md:mb-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Left Text */}
            <div className="flex flex-col">
              <span
                className="text-gold text-xs font-medium tracking-wider uppercase mb-2"
                style={{ fontFamily }}
              >
                Newsletter
              </span>
              <h3
                className="text-off-white text-xl md:text-2xl font-medium mb-1"
                style={{ fontFamily }}
              >
                Flight news, route updates, seasonal pricing.
              </h3>
              <p className="text-grey-light text-sm" style={{ fontFamily }}>
                No spam. Unsubscribe at any time.
              </p>
            </div>

            {/* Right Form */}
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto"
            >
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full sm:w-72 px-5 py-3 bg-blue-deep text-off-white text-sm placeholder:text-grey-light rounded-full outline-none border border-transparent focus:border-gold transition-colors"
                style={{ fontFamily }}
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 bg-gold text-blue-deep text-sm font-semibold rounded-full transition-all hover:bg-gold-warm whitespace-nowrap"
                style={{ fontFamily }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* ─── Main Footer Grid ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-14 md:mb-16">
          {/* Logo & Info Column */}
          <div className="flex flex-col">
            <div className="mb-5 flex h-16 w-48 flex-col justify-center">
              <Link href="/">
                <Image
                  src="/images/logo/mountainheli-logo.svg"
                  alt="Mountain Helicopters Logo"
                  width={192}
                  height={64}
                />
              </Link>
            </div>
            <p
              className="text-grey-light text-sm leading-relaxed mb-5"
              style={{ fontFamily }}
            >
              Nepal&apos;s mountain helicopter operator for tours, private
              charters, pilgrimage flights, and rescue coordination since 2009.
            </p>
            <div className="flex items-center gap-3">
              {[
                {
                  Icon: FacebookIcon,
                  label: "Facebook",
                  target: "_blank",
                  href: "https://www.facebook.com/mtnhelicoptersnepal",
                },
                {
                  Icon: TikTokIcon,
                  label: "TikTok",
                  target: "_blank",
                  href: "https://www.tiktok.com/@mountainhelicoptersnepal",
                },
                {
                  Icon: InstagramIcon,
                  label: "Instagram",
                  target: "_blank",
                  href: "https://www.instagram.com/mountainhelicoptersnepal",
                },
                {
                  Icon: YouTubeIcon,
                  label: "YouTube",
                  target: "_blank",
                  href: "https://www.youtube.com/@MountainHelicoptersNepal",
                },
              ].map(({ Icon, label, href, target }) => (
                <Link
                  key={label}
                  href={href}
                  target={target}
                  rel={target === "_blank" ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="text-grey-light transition-colors hover:text-gold"
                >
                  <Icon />
                </Link>
              ))}
            </div>
          </div>

          {/* Tours Column */}
          <div>
            <h4
              className="text-gold text-xs font-semibold tracking-[0.15em] uppercase mb-5"
              style={{ fontFamily }}
            >
              Tours
            </h4>
            <ul className="space-y-3">
              {toursLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-off-white text-sm transition-colors hover:text-gold"
                    style={{ fontFamily }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4
              className="text-gold text-xs font-semibold tracking-[0.15em] uppercase mb-5"
              style={{ fontFamily }}
            >
              Services
            </h4>
            <ul className="space-y-3">
              {servicesLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-off-white text-sm transition-colors hover:text-gold"
                    style={{ fontFamily }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Column */}
          <div>
            <h4
              className="text-gold text-xs font-semibold tracking-[0.15em] uppercase mb-5"
              style={{ fontFamily }}
            >
              Contact Us
            </h4>
            <div className="space-y-2 mb-6">
              {["+977-9712082949"].map((phone, index) => (
                <a
                  key={`${phone}-${index}`}
                  href={`tel:${phone}`}
                  className="block text-off-white text-sm transition-colors hover:text-gold"
                  style={{ fontFamily }}
                >
                  {phone}
                </a>
              ))}
              <a
                href="mailto:marketing@mtnhelicopters.com"
                className="block text-off-white text-sm transition-colors hover:text-gold"
                style={{ fontFamily }}
              >
                info@mountainhelicoptersnepal.com
              </a>
            </div>

            <h4
              className="text-gold text-xs font-semibold tracking-[0.15em] uppercase mb-3"
              style={{ fontFamily }}
            >
              Visit Us
            </h4>
            <div className="space-y-1 mb-3">
              <p className="text-off-white text-sm" style={{ fontFamily }}>
                Old Sinamangal · Pepsicola
              </p>
              <p className="text-off-white text-sm" style={{ fontFamily }}>
                Kathmandu, Bagmati
              </p>
              <p className="text-off-white text-sm" style={{ fontFamily }}>
                P.O. Box 20320, Nepal
              </p>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Old+Sinamangal+Pepsicola+Kathmandu+Nepal"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-gold text-sm transition-colors hover:text-gold-warm"
              style={{ fontFamily }}
            >
              <PinIcon />
              Get Direction
              <ChevronRightIcon />
            </a>
          </div>
        </div>

        {/* ─── Bottom Bar ─── */}
        <div className="border-t border-gold pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-grey-light max-w-full text-center text-xs tracking-wider uppercase md:text-left"
            style={{ fontFamily }}
          >
            &copy; {currentYear} MOUNTAIN HELICOPTERS PVT. LTD. ALL RIGHTS
            RESERVED.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 md:flex-nowrap md:justify-start md:gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-grey-light text-xs tracking-wider uppercase transition-colors hover:text-gold"
                style={{ fontFamily }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <span
          className="text-gold text-xs font-semibold text-center block mt-4"
          style={{ fontFamily }}
        >
          *This is a Beta Version of the website.
        </span>
      </div>
    </footer>
  );
}
