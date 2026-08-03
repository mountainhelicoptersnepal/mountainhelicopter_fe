"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Mail,
  MessageCircle,
  Phone,
  Square,
} from "lucide-react";

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
  "Hello, I need information about emergency helicopter rescue in the Tilicho Lake region.";

const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
  whatsappMessage,
)}`;

const HEADER_OFFSET = 133;
// 75px main navbar + 58px mini navbar

export default function TilichoOverview() {
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
        animationFrameRef.current =
          requestAnimationFrame(animateScroll);
      } else {
        animationFrameRef.current = null;
      }
    };

    animationFrameRef.current =
      requestAnimationFrame(animateScroll);
  };

  const smoothScrollToSection = (href) => {
    const section = document.querySelector(href);

    if (!section) {
      console.warn(`Section not found: ${href}`);
      return;
    }

    setActiveSection(href);

    const sectionTop =
      section.getBoundingClientRect().top +
      window.scrollY -
      HEADER_OFFSET;

    smoothScrollTo(sectionTop);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY + HEADER_OFFSET + 30;

      let currentSection = navItems[0].href;

      navItems.forEach((item) => {
        const section = document.querySelector(item.href);

        if (!section) return;

        const sectionTop =
          section.getBoundingClientRect().top +
          window.scrollY;

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
                Rescue Operation Overview
                <br />

                <span className="italic">
                  in the Tilicho Area
                </span>
              </h2>

              <div className="mt-7 max-w-3xl space-y-5 font-manrope text-sm leading-7 text-[#4f5d6d] md:text-base md:leading-8">
                <p>
                  The Tilicho region is one of the most difficult among the
                  highest trekking regions of Nepal. Travelers or people hiking
                  in this region face acute altitude sickness, extreme
                  exhaustion, hypothermia, injuries such as fractures from
                  falls, breathing issues, food poisoning, heart attacks, or
                  any other emergency medical issues. Since Tilicho Lake is
                  located at such a high altitude, such conditions become very
                  critical if patients continue walking or delay their way
                  down.
                </p>

                <p>
                  Mountain Helicopters Nepal will be able to assist you with
                  coordinating emergency rescues, planning helicopter landing
                  and taking off strategy, assisting with travel documents
                  including your insurance, arranging your medical care, and
                  transferring you to a hospital in case of a Tilicho
                  helicopter rescue. The case of your rescue on and off Tilicho
                  Base Camp, near Tilicho Lake in the Manang area, or even while
                  trekking along the path down from Khangsar can help us conduct
                  the emergency rescue faster and more safely.
                </p>

                <p>
                  For quick emergency Tilicho helicopter rescue, contact us.
                  Let us know your location on WhatsApp with your GPS
                  coordinates and describe the condition of the patient.
                  Providing your insurance policy and contact details of your
                  guide and closest landing site is recommended.
                </p>
              </div>

              <h2 className="mt-12 max-w-3xl font-fraunces text-4xl font-semibold leading-[0.98] tracking-[-0.03em] text-[#003366] md:text-5xl lg:text-[51.2px]">
                Highlights of Rescue Operation
                <br />

                <span className="italic">
                  in the Tilicho Area
                </span>
              </h2>

              <div className="mt-7 max-w-3xl">
                <ul className="space-y-4 font-manrope text-sm leading-7 text-[#4f5d6d] md:text-base md:leading-8">
                  <li className="flex items-start gap-3">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d89b1d]" />

                    <span>
                      Dedicated all daytime emergency dispatch operations in the
                      Tilicho Lake region, also covering the entire Manang
                      region, Khangsar, Shree Kharka, and and Tilicho Base Camp
                      to the trails of Tilicho Lake itself.
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d89b1d]" />

                    <span>
                      Coordinated and managed swift helicopter dispatch services
                      either from Kathmandu or Pokhara for critical and urgent
                      patients, taking advantage of the earliest possible safe
                      weather window.
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d89b1d]" />

                    <span>
                      Successfully accomplished challenging high altitude
                      helicopter rescues operations in the Himalayan terrains
                      of Tilicho Base Camp, Tilicho Lake, Mesokanto La Pass and
                      trails along the Annapurna circuit.
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d89b1d]" />

                    <span>
                      All rescue operations are executed according to the
                      regulatory directives from the Nepal Civil Aviation
                      Authority (CAAN), flown by the most experienced mountain
                      helicopter pilots in well-maintained, approved aircraft
                      with established safety protocols.
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d89b1d]" />

                    <span>
                      Coordinated 24/7 communication with trekking agencies,
                      trekkers, mountain guides, lodges, local contacts, and
                      rescue operations controllers on updates of patients’
                      conditions and selection of suitable and safest landing
                      sites.
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d89b1d]" />

                    <span>
                      Assisted with in-flight emergency first aid assistance,
                      including administration of oxygen, management of initial
                      patient care, and providing support for stretcher
                      operations at the landing site if required.
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
                    from the Tilicho Lake and Manang region.
                  </p>
                </div>
              </div>

              {/* TOUR CARD */}
              <div className="border border-[#cad8e5] bg-[#eef5fb] p-5 md:p-6">
                <p className="font-manrope text-[10px] font-bold uppercase tracking-[0.22em] text-[#d89b1d]">
                  Also on This Route
                </p>

                <h2 className="mt-3 font-fraunces text-xl font-semibold text-[#073763]">
                  Tilicho Lake Helicopter Tour
                </h2>

                <p className="mt-2 font-manrope text-sm leading-6 text-slate-500">
                  The scenic flight follows the same Manang and Tilicho corridor
                  used by rescue aircraft during emergency operations.
                </p>

                <Link
                  href="/tours/tilicho-lake-helicopter-tour"
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