import { waLink } from "./constants";
import { WhatsAppIcon } from "./icons";

export default function FloatingCta() {
  const message = "Hi, I want to book a Lukla flight or Everest heli tour.";

  return (
    <>
      <a
        href={waLink(message)}
        target="_blank"
        rel="noopener"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-[22px] right-[22px] z-[80] hidden h-[58px] w-[58px] items-center justify-center rounded-full bg-[#25D366] shadow-[0_8px_24px_rgba(5,31,73,.35)] transition hover:scale-[1.07] md:flex"
      >
        <WhatsAppIcon className="h-[30px] w-[30px] text-white" />
      </a>

      <div className="fixed inset-x-0 bottom-0 z-[70] grid grid-cols-2 gap-2.5 border-t border-[#D7E2F2] bg-white/96 px-4 pb-[calc(12px+env(safe-area-inset-bottom))] pt-3 backdrop-blur-sm md:hidden">
        <a
          href={waLink(message)}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center justify-center rounded-full bg-[#F2B632] px-2.5 py-3.5 text-[14.5px] font-bold tracking-[.02em] text-[#0d1a2d]"
        >
          WhatsApp Us
        </a>
        <a
          href="#top"
          className="inline-flex items-center justify-center rounded-full bg-[#003366] px-2.5 py-3.5 text-[14.5px] font-bold tracking-[.02em] text-white"
        >
          Book Now
        </a>
      </div>
    </>
  );
}
