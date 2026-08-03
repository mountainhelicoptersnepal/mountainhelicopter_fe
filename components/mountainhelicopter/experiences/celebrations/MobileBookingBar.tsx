"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function MobileBookingBar() {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  const isBookingBarVisible = !isFooterVisible;

  useEffect(() => {
    const footer = document.getElementById("site-footer");

    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -1px 0px",
      },
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const visibleOnMobile =
      isBookingBarVisible && window.innerWidth < 1024;

    window.dispatchEvent(
      new CustomEvent("mobile-booking-bar-change", {
        detail: {
          visible: visibleOnMobile,
        },
      }),
    );

    const handleResize = () => {
      window.dispatchEvent(
        new CustomEvent("mobile-booking-bar-change", {
          detail: {
            visible: isBookingBarVisible && window.innerWidth < 1024,
          },
        }),
      );
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);

      window.dispatchEvent(
        new CustomEvent("mobile-booking-bar-change", {
          detail: {
            visible: false,
          },
        }),
      );
    };
  }, [isBookingBarVisible]);

  return (
    <aside
      id="mobile-booking-bar"
      role="region"
      aria-label="Quick booking"
      aria-hidden={isFooterVisible}
      className={`fixed inset-x-0 bottom-0 z-50 flex min-h-[72px] items-center gap-3 border-t border-[#E2E8F0] bg-white px-3 py-2 shadow-[0_-8px_24px_rgba(0,51,102,0.12)] transition-[transform,opacity,visibility] duration-300 ease-out lg:hidden ${
        isFooterVisible
          ? "invisible translate-y-full opacity-0"
          : "visible translate-y-0 opacity-100"
      }`}
    >
      <div className="min-w-0 flex-1 pl-2">
        <p className="truncate font-fraunces text-lg font-semibold leading-none text-[#003366]">
          USD 1,800
        </p>

        <p className="mt-1 truncate font-manrope text-[11px] leading-4 text-[#475569]">
          Per couple · fully customized
        </p>
      </div>

      <Link
        href="/contact"
        tabIndex={isFooterVisible ? -1 : 0}
        className="inline-flex h-[46px] shrink-0 items-center justify-center rounded-xl bg-[#F2B632] px-6 font-manrope text-sm font-bold text-[#003366] transition-colors duration-300 hover:bg-[#003366] hover:text-white"
      >
        Reserve →
      </Link>
    </aside>
  );
}