"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const WHITE_HOLD_MS = 900;
const SPLASH_DURATION_MS = 8200;

export default function OpeningSplash() {
  const [hasStarted, setHasStarted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.documentElement.classList.add("mh-splash-active");
    document.body.classList.add("mh-splash-active");
    document.body.style.overflow = "hidden";

    const startTimer = window.setTimeout(() => {
      setHasStarted(true);
    }, WHITE_HOLD_MS);

    const exitTimer = window.setTimeout(() => {
      setIsVisible(false);
      document.documentElement.classList.remove("mh-splash-active");
      document.body.classList.remove("mh-splash-active");
      document.body.style.overflow = originalOverflow;
    }, SPLASH_DURATION_MS);

    return () => {
      window.clearTimeout(startTimer);
      window.clearTimeout(exitTimer);
      document.documentElement.classList.remove("mh-splash-active");
      document.body.classList.remove("mh-splash-active");
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="opening-splash"
      aria-label="Mountain Helicopters loading"
      role="status"
    >
      {hasStarted ? (
        <>
          <div className="opening-splash__mark">
            <Image
              src="/loading/first-unit.png"
              alt=""
              width={705}
              height={254}
              priority
              className="opening-splash__first-unit"
            />
            <Image
              src="/loading/second-unit.png"
              alt=""
              width={259}
              height={196}
              priority
              className="opening-splash__second-unit"
            />
            <Image
              src="/loading/Heli.png"
              alt=""
              width={146}
              height={49}
              priority
              className="opening-splash__heli"
            />
          </div>
          <div className="opening-splash__circle" />
        </>
      ) : null}
    </div>
  );
}
