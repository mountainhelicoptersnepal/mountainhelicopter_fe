"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const quickLinks = [
  {
    label: "Everest Base Camp",
    href: "/tours/everest-base-camp",
    text: "Same-morning flight to Kala Patthar.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
        />
      </svg>
    ),
  },
  {
    label: "Muktinath Pilgrimage",
    href: "/tours/muktinath-pilgrimage",
    text: "A direct yatra route for families.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
        />
      </svg>
    ),
  },
  {
    label: "Rescue Services",
    href: "/rescue",
    text: "Emergency evacuation and coordination.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
        />
      </svg>
    ),
  },
  {
    label: "Flight Guides",
    href: "/blog",
    text: "Costs, seasons, routes, and planning notes.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
        />
      </svg>
    ),
  },
] as const;

function FlightPathIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Subtle mountain silhouette background */}

      <Image
        src="/images/fleet/fleet.png"
        alt="Mountain helicopter Nepal"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
    </div>
  );
}

function AnimatedCounter({ target }: { target: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target]);

  return <span>{count}</span>;
}

export default function NotFoundPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#0E2F4F] selection:bg-[#C79422]/20">
      {/* Navigation breadcrumb area */}
      <div className="border-b border-[#E8E0D6]">
        <div className="mx-auto max-w-7xl px-6 py-4 md:px-12">
          <nav className="flex items-center gap-2 text-sm text-[#0E2F4F]/40">
            <Link href="/" className="hover:text-[#C79422] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#0E2F4F]/60">404</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-20 md:px-12 md:pt-24 md:pb-28 lg:pt-32 lg:pb-36">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 lg:items-center">
          {/* Left: Text Content */}
          <div className="order-2 lg:order-1">
            {/* Status pill */}
            <div className="inline-flex items-center gap-2.5 rounded-full bg-[#0E2F4F]/[0.03] border border-[#0E2F4F]/10 px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D33F2F] opacity-40" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D33F2F]" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0E2F4F]/60">
                Page not found
              </span>
            </div>

            {/* Big 404 */}
            <h1 className="mt-8 font-bold text-[120px] leading-none tracking-tighter text-[#0E2F4F] md:text-[180px] lg:text-[200px]">
              <AnimatedCounter target={404} />
            </h1>

            {/* Headline */}
            <p className="mt-2 text-3xl font-semibold leading-tight text-[#0E2F4F] md:text-4xl lg:text-5xl">
              This route is not available.
            </p>

            {/* Description */}
            <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-[#0E2F4F]/50">
              The page may have moved, the link may be outdated, or the address
              may have been typed incorrectly. Choose a confirmed Mountain
              Helicopters Nepal route below.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/"
                className="group inline-flex items-center gap-2.5 rounded-lg bg-[#0E2F4F] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#153D5C] hover:shadow-lg hover:shadow-[#0E2F4F]/15"
              >
                Go home
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-[#0E2F4F]/15 px-7 py-3.5 text-sm font-semibold text-[#0E2F4F] transition-all duration-300 hover:border-[#0E2F4F]/30 hover:bg-[#0E2F4F]/[0.02]"
              >
                Contact operations
              </Link>
            </div>

            {/* Contact info */}
            <div className="mt-12 flex flex-wrap gap-8 pt-8 border-t border-[#E8E0D6]">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#C79422]">
                  Base
                </p>
                <p className="mt-1 text-sm font-medium text-[#0E2F4F]/70">
                  Kathmandu, Nepal
                </p>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#C79422]">
                  Support
                </p>
                <p className="mt-1 text-sm font-medium text-[#0E2F4F]/70">
                  24-hour operations desk
                </p>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#C79422]">
                  Status
                </p>
                <p className="mt-1 text-sm font-medium text-[#0E2F4F]/70">
                  Route unavailable
                </p>
              </div>
            </div>
          </div>

          {/* Right: Illustration */}
          <div className="order-1 lg:order-2">
            <div className="relative aspect-square max-w-md mx-auto lg:max-w-none rounded-2xl bg-gradient-to-br from-[#F0EBE3] to-[#E8E0D6] overflow-hidden">
              <FlightPathIllustration />

              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-[#C79422]/20 rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-[#C79422]/20 rounded-br-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="border-t border-[#E8E0D6] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#C79422]">
                Continue from a real route
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-[#0E2F4F] md:text-3xl">
                Popular flight paths
              </h2>
            </div>
            <p className="text-sm text-[#0E2F4F]/40 max-w-xs">
              These links are active pages on the website.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {quickLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative flex flex-col rounded-xl bg-[#FAF8F5] p-6 transition-all duration-300 hover:bg-[#0E2F4F] hover:shadow-xl hover:shadow-[#0E2F4F]/10"
              >
                {/* Number indicator */}
                <span className="absolute top-4 right-4 text-[11px] font-mono text-[#0E2F4F]/15 group-hover:text-white/20 transition-colors">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#0E2F4F]/5 text-[#0E2F4F] transition-colors group-hover:bg-white/10 group-hover:text-[#C79422]">
                  {link.icon}
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-[#0E2F4F] group-hover:text-white transition-colors">
                  {link.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#0E2F4F]/50 group-hover:text-white/60 transition-colors">
                  {link.text}
                </p>

                {/* Arrow */}
                <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-[#C79422] opacity-0 translate-x-[-4px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  Explore route
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
