import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/mountainhelicopter/ads/lukla/Header";
import Footer from "@/components/mountainhelicopter/ads/lukla/Footer";
import { EMAIL, PHONE_DISPLAY, waLink } from "@/components/mountainhelicopter/ads/lukla/constants";
import { WhatsAppIcon } from "@/components/mountainhelicopter/ads/lukla/icons";

export const metadata: Metadata = {
  title: "Request Received | Mountain Helicopters Nepal",
  robots: { index: false, follow: false },
};

const STEPS = [
  "A flight specialist replies within 2 hours, 7 days a week.",
  "We confirm availability and share the exact departure window for your date.",
  "A deposit holds your seat, and you receive written confirmation with full terms.",
];

export default function ThankYouPage() {
  return (
    <div className="flex min-h-screen flex-col font-geist bg-[linear-gradient(160deg,#0C4396_0%,#082F6B_52%,#051F49_100%)]">
      <Header />

      <main className="flex flex-1 items-center justify-center px-[22px] py-14">
        <div className="w-full max-w-[640px] rounded-[14px] bg-white p-8 text-center shadow-[0_22px_60px_rgba(5,31,73,.45)] sm:p-[52px]">
          <div className="mx-auto mb-[22px] flex h-[76px] w-[76px] items-center justify-center rounded-full bg-[#F5AF00]">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="h-[38px] w-[38px] text-[#051F49]"
            >
              <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
            </svg>
          </div>

          <h1 className="font-fraunces leading-[1.12] text-[clamp(1.6rem,4vw,2.2rem)] font-black tracking-[-.01em] text-[#051F49]">
            Your request is on its way.
          </h1>
          <p className="mx-auto mb-7 mt-3 max-w-[460px] text-[#4A5B76]">
            Your booking request has reached our operations desk, and a
            confirmation email with your reference number is on its way to your
            inbox.
          </p>

          <div className="mb-[26px] rounded-xl border border-[#D7E2F2] bg-[#F3F7FD] p-6 text-left">
            <h2 className="mb-3 font-fraunces leading-[1.12] text-[13px] font-extrabold uppercase tracking-[.09em] text-[#0C4396]">
              What happens next
            </h2>
            <ol className="space-y-1">
              {STEPS.map((step, i) => (
                <li
                  key={step}
                  className="relative py-2 pl-10 text-[15.5px] text-[#12233F]"
                >
                  <span className="absolute left-0 top-[9px] rounded-md bg-[#051F49] px-[7px] py-[2px] font-geist-mono text-[13px] font-semibold text-[#F5AF00]">
                    0{i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={waLink(
                "Hi, I just sent a booking request from your website.",
              )}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center gap-[9px] rounded-full bg-[#F5AF00] px-[26px] py-[13px] text-[15px] font-bold text-[#051F49] shadow-[0_4px_14px_rgba(245,175,0,.35)] transition hover:bg-[#FFBE12]"
            >
              <WhatsAppIcon className="h-[18px] w-[18px] shrink-0" />
              Chat With Us on WhatsApp
            </a>
            <Link
              href="/kathmandu-to-lukla-helicopter"
              className="inline-flex items-center justify-center rounded-full border-[1.5px] border-[#0C4396] px-[26px] py-[13px] text-[15px] font-bold text-[#0C4396] transition hover:bg-[#F3F7FD]"
            >
              Back to Flights &amp; Tours
            </Link>
          </div>

          <p className="mt-[18px] text-[13.5px] text-[#4A5B76]">
            No confirmation email within a few minutes? Check spam, or reach us
            at{" "}
            <a
              href={waLink("Hi, I just sent a booking request.")}
              target="_blank"
              rel="noopener"
              className="font-semibold text-[#0C4396]"
            >
              {PHONE_DISPLAY}
            </a>{" "}
            or email{" "}
            <a href={`mailto:${EMAIL}`} className="font-semibold text-[#0C4396]">
              {EMAIL}
            </a>
            .
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
