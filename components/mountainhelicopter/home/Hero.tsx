"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

function clamp(value: number, minimum = 0, maximum = 1) {
  return Math.min(Math.max(value, minimum), maximum);
}

function smoothStep(value: number) {
  return value * value * (3 - 2 * value);
}

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const video = videoRef.current;
    const overlay = overlayRef.current;
    const content = contentRef.current;
    const scrollHint = scrollHintRef.current;

    if (!hero || !video || !overlay || !content || !scrollHint) {
      return;
    }

    const heroElement = hero;
    const videoElement = video;
    const overlayElement = overlay;
    const contentElement = content;
    const scrollHintElement = scrollHint;

    let animationFrameId: number | null = null;

    function updateHero() {
      animationFrameId = null;

      const heroPosition = heroElement.getBoundingClientRect();
      const scrollDistance = heroElement.offsetHeight - window.innerHeight;

      const rawProgress =
        scrollDistance > 0 ? -heroPosition.top / scrollDistance : 0;

      const progress = clamp(rawProgress);

      /*
       * Text moves toward the viewer while remaining centered.
       */
      const zoomProgress = smoothStep(clamp((progress - 0.02) / 0.58));

      /*
       * Text fades after moving forward.
       */
      const fadeProgress = smoothStep(clamp((progress - 0.4) / 0.3));

      const contentDepth = zoomProgress * 280;
      const contentScale = 1 + zoomProgress * 0.18;

      contentElement.style.transform = `
        translate3d(0, 0, ${contentDepth}px)
        scale(${contentScale})
      `;

      contentElement.style.opacity = String(1 - fadeProgress);

      contentElement.style.pointerEvents = fadeProgress > 0.9 ? "none" : "auto";

      /*
       * Slight background-video zoom.
       */
      const videoScale = 1.08 + progress * 0.04;

      videoElement.style.transform = `
        translate3d(0, 0, 0)
        scale(${videoScale})
      `;

      overlayElement.style.opacity = String(0.5 + progress * 0.28);

      scrollHintElement.style.opacity = String(1 - clamp(progress / 0.14));
    }

    function handleScroll() {
      if (animationFrameId !== null) {
        return;
      }

      animationFrameId = window.requestAnimationFrame(updateHero);
    }

    updateHero();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);

      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-[180vh] overflow-x-clip bg-[#071825]"
    >
      <div
        className="sticky top-0 h-screen overflow-hidden"
        style={{
          perspective: "900px",
          perspectiveOrigin: "center center",
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            transform: "translate3d(0, 0, 0) scale(1.08)",
            transformOrigin: "center center",
            willChange: "transform",
          }}
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>

        <div
          ref={overlayRef}
          className="absolute inset-0 bg-black"
          style={{
            opacity: 0.5,
            willChange: "opacity",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#071825]/20 via-transparent to-[#071825]/80" />

        <div
          ref={contentRef}
          className="relative z-20 mx-auto flex h-full w-full items-center justify-center px-4 text-center text-white sm:px-6 md:px-10"
          style={{
            transform: "translate3d(0, 0, 0) scale(1)",
            transformOrigin: "center center",
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
            willChange: "transform, opacity",
          }}
        >
          <div className="w-full max-w-full origin-center pt-16 sm:pt-20 min-[1400px]:scale-[0.86]">
            <h1 className="mx-auto max-w-full font-fraunces text-[clamp(38px,10vw,58px)] font-bold leading-[1.064] tracking-[-1.5px] sm:text-[64px] sm:tracking-[-2px] lg:whitespace-nowrap lg:text-[86px] lg:tracking-[-2.6px]">
              <span className="block lg:inline">Above Everest, </span>

              <span className="block text-[#F5B82E] lg:inline">
                Beyond Ordinary
              </span>
            </h1>

            <p className="mx-auto mt-5 w-full text-center font-manrope text-[17.6px] font-medium not-italic leading-[28.6px] tracking-[0px] text-white/90 sm:mt-6 min-[1400px]:text-[20.5px] min-[1400px]:leading-[33.25px]">
              <span className="lg:block lg:whitespace-nowrap">
                Enjoy Nepal&apos;s finest helicopter tours in Nepal by Mountain
                Helicopters Nepal from high mountain
              </span>

              <span className="lg:block lg:whitespace-nowrap">
                landings to helicopter overflight of Everest to specially
                designed private chartered tours that are
              </span>

              <span className="lg:block lg:whitespace-nowrap">
                centered on safety, luxury and astounding views of the majestic
                Himalayan mountains.
              </span>
            </p>

            <div className="mx-auto mt-5 flex w-full max-w-[409.5px] flex-col items-center justify-center gap-4 sm:h-[46px] sm:flex-row sm:gap-[30px]">
              <Link
                href="/contact"
                className="group relative isolate flex h-[46px] w-[157px] shrink-0 items-center justify-center gap-[5px] overflow-hidden whitespace-nowrap bg-[#F2B632] px-6 py-2 font-manrope text-[14px] font-bold uppercase text-[#003366]"
              >
                <span className="absolute inset-0 -translate-x-[101%] bg-white transition-transform duration-500 ease-out group-hover:translate-x-0" />

                <span className="relative z-10 flex items-center gap-[5px]">
                  Enquire Now
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>

              <Link
                href="/experiences"
                className="group relative isolate flex h-[46px] w-[222px] max-w-full shrink-0 items-center justify-center gap-[5px] overflow-hidden whitespace-nowrap border-2 border-white bg-transparent px-6 py-2 font-manrope text-[14px] font-bold uppercase text-white"
              >
                <span className="absolute inset-0 -translate-x-[101%] bg-white transition-transform duration-500 ease-out group-hover:translate-x-0" />

                <span className="relative z-10 transition-colors duration-300 group-hover:text-[#003366]">
                  Find Your Experience
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div
          ref={scrollHintRef}
          className="pointer-events-none absolute bottom-8 left-1/2 z-30 -translate-x-1/2 text-center text-white"
          style={{
            willChange: "opacity",
          }}
        />
      </div>
    </section>
  );
}
