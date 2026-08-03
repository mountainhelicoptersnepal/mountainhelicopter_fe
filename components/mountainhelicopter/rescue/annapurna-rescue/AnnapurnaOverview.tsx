"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Mail, MessageCircle, Phone, Square } from "lucide-react";

const navItems = [
  {
    label: "When to Call",
    href: "#when-to-call",
  },
  {
    label: "Process",
    href: "#process",
  },
  {
    label: "Coverage",
    href: "#coverage",
  },
  {
    label: "Cost",
    href: "#cost",
  },
  {
    label: "What's Covered",
    href: "#whats-covered",
  },
  {
    label: "FAQ",
    href: "#faq",
  },
  {
    label: "Why Us",
    href: "#why-us",
  },
];

const phoneNumber = "9779712082949";

const whatsappMessage =
  "Hello, I need information about emergency helicopter rescue in the Annapurna region.";

const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
  whatsappMessage,
)}`;

const HEADER_OFFSET = 133;
// 75px main navbar + 58px mini navbar

export default function AnnapurnaOverview() {
  const [activeSection, setActiveSection] = useState("#when-to-call");
  const animationFrameRef = useRef(null);

  const smoothScrollTo = (targetY, duration = 800) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    const startY = window.scrollY;
    const maxScrollY =
      document.documentElement.scrollHeight - window.innerHeight;

    const safeTargetY = Math.max(0, Math.min(targetY, maxScrollY));
    const distance = safeTargetY - startY;
    const startTime = performance.now();

    const easeInOutCubic = (progress) =>
      progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOutCubic(progress);

      window.scrollTo({
        top: startY + distance * easedProgress,
        left: 0,
      });

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animateScroll);
      } else {
        animationFrameRef.current = null;
      }
    };

    animationFrameRef.current = requestAnimationFrame(animateScroll);
  };

  const smoothScrollToSection = (href) => {
    const section = document.querySelector(href);

    if (!section) {
      console.warn(`Section not found: ${href}`);
      return;
    }

    setActiveSection(href);

    const sectionTop =
      section.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;

    smoothScrollTo(sectionTop);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + HEADER_OFFSET + 30;

      let currentSection = navItems[0].href;

      navItems.forEach((item) => {
        const section = document.querySelector(item.href);

        if (!section) return;

        const sectionTop = section.getBoundingClientRect().top + window.scrollY;

        if (scrollPosition >= sectionTop) {
          currentSection = item.href;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* MINI NAVBAR */}
      <section className="sticky top-[75px] z-40 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <nav className="flex min-h-[58px] items-center gap-1 overflow-x-auto">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;

              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => smoothScrollToSection(item.href)}
                  aria-label={`Scroll to ${item.label}`}
                  className={`flex h-[58px] shrink-0 cursor-pointer items-center justify-center border-0 px-5 font-manrope text-xs font-bold uppercase tracking-[0.12em] transition-colors duration-300 md:px-6 ${
                    isActive
                      ? "bg-[#f6b51f] text-[#073763]"
                      : "bg-white text-slate-500 hover:bg-slate-50 hover:text-[#073763]"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
      </section>

      {/* OVERVIEW */}
      <section
        id="when-to-call"
        className="scroll-mt-[133px] bg-white px-5 py-14 md:px-8 lg:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-16">
            {/* LEFT CONTENT */}
            <main className="min-w-0">
              <p className="flex items-center gap-3 font-manrope text-xs font-bold uppercase tracking-[0.22em] text-[#B87800]">
                <span className="h-px w-7 bg-[#d89b1d]" />
                Overview
              </p>

              <h2 className="mt-5 max-w-3xl font-fraunces text-4xl font-semibold leading-[0.98] tracking-[-0.03em] text-[#003366] md:text-5xl lg:text-[51.2px]">
                Overview of Annapurna
                <br />
                <span className="italic">Helicopter Rescue Operations</span>
              </h2>

              <div className="mt-7 max-w-3xl space-y-5 font-manrope text-sm leading-7 text-[#4f5d6d] md:text-base md:leading-8">
                <p>
                  There are extreme altitudes and unstable weather conditions
                  are found in the Annapurna region. Therefore, there is a
                  higher possibility of a medical emergency in adverse
                  conditions. Annapurna Helicopter Rescue is specialized in
                  rescuing trekkers from high elevation trials in the Annapurna
                  Region where it’s impossible to reach by ground. The
                  helicopter rescue will be conducted at an elevation above 4000
                  meters such as at Annapurna Base Camp (ABC), Thorong La Pass
                  and so on because normal helicopters cannot fly in this high
                  altitude. Our company uses specialized aircraft machines to
                  evacuate. This process involves the trekking agency, the
                  insurance company, and the aviation team.
                </p>
                <p>
                However, when an emergency occurs, we make sure we send
                specialized high altitude aviator crew to reach you there for
                medical rescue. In times of dire conditions when someone's life
                is at stake from the Himalayas we respond very fast so that
                people should not lose life. Safety of those in trouble is on
                top priority of our dispatchers.
                </p>
              </div>

              <h2 className="mt-12 max-w-3xl font-fraunces text-4xl font-semibold leading-[0.98] tracking-[-0.03em] text-[#003366] md:text-5xl lg:text-[51.2px]">
                Highlights of Rescue Operation
                <br />
                <span className="italic">in Annapurna Area</span>
              </h2>

              <div className="mt-7 max-w-3xl">
                <ul className="space-y-4 font-manrope text-sm leading-7 text-[#4f5d6d] md:text-base md:leading-8">
                  <li className="flex items-start gap-3">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d89b1d]" />

                    <span>
                      Full-time emergency dispatch operation throughout the
                      Annapurna Conservation Area.
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d89b1d]" />

                    <span>
                      Quick dispatch from Kathmandu or Pokhara from anywhere
                      within hours.
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d89b1d]" />

                    <span>High-altitude helicopter flights are operated.</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d89b1d]" />

                    <span>
                      Operation is certified by the Civil Aviation Authority of
                      Nepal (CAAN) with highly experienced mountain aviators.
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d89b1d]" />

                    <span>
                      Paramedical care is provided on route to the hospital
                      during air evacuation.
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d89b1d]" />

                    <span>
                      In flight oxygen cylinder and complete first aid kit
                      provided on the aircraft.
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d89b1d]" />

                    <span>
                      Safe landing operation in highest altitude points of risk
                      such as Annapurna Base Camp, Thorong La Pass, Muktinath
                      Temple, Mardi Himal base etc.
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d89b1d]" />

                    <span>
                      Direct hospital transfers to tertiary care center
                      hospitals in Pokhara and Kathmandu.
                    </span>
                  </li>
                </ul>
              </div>
            </main>

            {/* RIGHT SIDEBAR */}
            <aside className="space-y-4 lg:sticky lg:top-[153px]">
              {/* EMERGENCY CARD */}
              <div className="bg-[#073763] p-5 text-white md:p-6">
                <div className="flex items-center gap-3 border-b border-[#d8a11f]/50 pb-5">
                  <Square
                    size={10}
                    fill="currentColor"
                    className="text-[#087ac1]"
                  />

                  <p className="font-manrope text-xs font-bold uppercase tracking-[0.2em]">
                    24/7 Operational
                  </p>
                </div>

                <div className="mt-5">
                  <p className="font-manrope text-[11px] font-bold uppercase tracking-[0.2em] text-[#f3b323]">
                    Emergency Dispatch
                  </p>

                  <div className="mt-4 space-y-3">
                    <a
                      href="tel:+9779712082949"
                      className="flex min-h-11 items-center gap-3 bg-[#e52b2f] px-4 font-manrope text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#c92125]"
                    >
                      <Phone size={15} />
                      +977-9712082949
                    </a>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-h-11 items-center gap-3 bg-[#0873bd] px-4 font-manrope text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#075f9c]"
                    >
                      <MessageCircle size={15} />
                      WhatsApp
                    </a>

                    <a
                      href="mailto:info@mountainhelicoptersnepal.com"
                      className="flex min-h-11 items-center gap-3 border border-white/30 px-4 font-manrope text-[10.3px] font-bold uppercase tracking-[0.1em] text-white transition hover:bg-white/10"
                    >
                      <Mail size={15} />

                      <span className="break-all">
                        info@mountainhelicoptersnepal.com
                      </span>
                    </a>
                  </div>
                </div>

                <div className="mt-5 border-t border-[#d8a11f]/50 pt-5">
                  <p className="font-manrope text-xs leading-6 text-white/75">
                    Typical response time is under five minutes to coordinate
                    from any Annapurna-region location.
                  </p>
                </div>
              </div>

              {/* TOUR CARD */}
              <div className="border border-[#cad8e5] bg-[#eef5fb] p-5 md:p-6">
                <p className="font-manrope text-[10px] font-bold uppercase tracking-[0.22em] text-[#d89b1d]">
                  Also on This Route
                </p>

                <h2 className="mt-3 font-fraunces text-xl font-semibold text-[#073763]">
                  Annapurna Base Camp Helicopter Tour
                </h2>

                <p className="mt-2 font-manrope text-sm leading-6 text-slate-500">
                  The scenic flight follows the same Annapurna corridor used by
                  our rescue aircraft.
                </p>

                <Link
                  href="/tours/annapurna-base-camp"
                  className="mt-4 inline-flex items-center gap-2 font-manrope text-xs font-bold uppercase tracking-[0.16em] text-[#0873bd]"
                >
                  View
                  <ArrowRight size={13} />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
