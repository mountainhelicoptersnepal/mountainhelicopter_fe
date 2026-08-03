import Image from "next/image";
import { PHONE_DISPLAY, PHONE_TEL, waLink } from "./constants";
import { WhatsAppIcon } from "./icons";

export default function Header() {
  return (
    <header className="sticky top-0 z-[60] border-b border-[#D7E2F2] bg-white">
      <div className="mx-auto flex max-w-[1160px] items-center justify-between gap-4 px-[22px] py-[11px]">
        <a href="#top" aria-label="Mountain Helicopters Nepal home" className="shrink-0">
          <Image
            src="/images/navbar-logo-clear.png"
            alt="Mountain Helicopters Pvt. Ltd. logo"
            width={160}
            height={52}
            className="h-[46px] w-auto sm:h-[52px]"
            priority
          />
        </a>

        <nav
          aria-label="Page sections"
          className="hidden gap-6 text-[15.5px] font-medium md:flex"
        >
          <a href="#flights" className="text-[#4A5B76] hover:text-[#0C4396]">
            Daily Flights
          </a>
          <a href="#tours" className="text-[#4A5B76] hover:text-[#0C4396]">
            Everest Tours
          </a>
          <a href="#faq" className="text-[#4A5B76] hover:text-[#0C4396]">
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-3.5">
          <a
            href={`tel:${PHONE_TEL}`}
            className="hidden whitespace-nowrap font-jetbrains-mono text-[13.5px] font-semibold text-[#0C4396] lg:inline"
          >
            {PHONE_DISPLAY}
          </a>
          <a
            href={waLink(
              "Hi, I want to book a Kathmandu to Lukla helicopter flight.",
            )}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-[#F5AF00] px-5 py-3 text-sm font-bold tracking-[.02em] text-[#051F49] shadow-[0_4px_14px_rgba(245,175,0,.35)] transition hover:bg-[#FFBE12] active:scale-[.98]"
          >
            <WhatsAppIcon className="h-[18px] w-[18px] shrink-0" />
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
