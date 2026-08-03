"use client";

import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Overview", href: "#overview" },
  { label: "When to Call", href: "#when-to-call" },
  { label: "Process", href: "#process" },
  { label: "Coverage", href: "#coverage" },
  { label: "Costs", href: "#costs" },
  { label: "Included", href: "#included" },
  { label: "FAQ", href: "#faq" },
  { label: "Why Us", href: "#why-us" },
];

const HEADER_OFFSET = 129;
// 75px main navbar + 54px subnavbar

export default function MuktinathRescueSubNavbar() {
  const [activeSection, setActiveSection] = useState(navItems[0].href);
  const animationFrameRef = useRef(null);

  const smoothScrollTo = (targetY, duration = 800) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    const startY = window.scrollY;

    const maxScrollY =
      document.documentElement.scrollHeight - window.innerHeight;

    const safeTargetY = Math.max(
      0,
      Math.min(targetY, maxScrollY)
    );

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

    smoothScrollTo(sectionTop, 800);

    window.history.pushState(null, "", href);
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

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;

      if (!hash) return;

      const section = document.querySelector(hash);

      if (!section) return;

      const sectionTop =
        section.getBoundingClientRect().top +
        window.scrollY -
        HEADER_OFFSET;

      smoothScrollTo(sectionTop, 800);
      setActiveSection(hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener(
        "hashchange",
        handleHashChange
      );
    };
  }, []);

  return (
    <nav
      aria-label="Rescue page sections"
      className="sticky top-[75px] z-40 w-full border-b-[0.83px] border-b-[#003366]/[0.08] bg-white/[0.97] backdrop-blur-md"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[80px] 2xl:px-[125px]">
        <div className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex h-[54px] min-w-max items-center gap-1 py-3">
            {navItems.map((item) => {
              const isActive =
                activeSection === item.href;

              return (
                <button
                  key={item.href}
                  type="button"
                  aria-label={`Scroll to ${item.label}`}
                  aria-current={
                    isActive ? "location" : undefined
                  }
                  onClick={() =>
                    smoothScrollToSection(item.href)
                  }
                  className={`inline-flex h-[30px] shrink-0 cursor-pointer items-center justify-center border-0 px-[18px] py-[7px] font-manrope text-[11px] font-semibold uppercase leading-[16.5px] tracking-[1.1px] transition-colors duration-200 ${
                    isActive
                      ? "bg-[#F2B632] text-[#003366]"
                      : "bg-transparent text-[#6B7886] hover:bg-[#F2B632]/15 hover:text-[#003366]"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}