import Reveal from "./Reveal";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, waLink } from "./constants";
import { WhatsAppIcon } from "./icons";

export default function ContactStrip() {
  return (
    <section className="bg-white py-[70px]">
      <div className="mx-auto max-w-[1160px] px-[22px]">
        <Reveal className="flex flex-wrap items-center justify-between gap-[26px] rounded-[14px] border border-[#D7E2F2] bg-[#F3F7FD] p-[32px_clamp(22px,4vw,40px)]">
          <div>
            <h2 className="font-fraunces leading-[1.12] text-[clamp(1.3rem,2.8vw,1.7rem)] font-extrabold text-[#051F49]">
              Prefer to talk to a person?
            </h2>
            <p className="mt-1.5 text-[#4A5B76]">
              Operations desk answers 24/7. Office lines Mon to Sat, 09:00 to
              18:00 NPT.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={waLink(
                "Hi, I have a question about Lukla flights and Everest tours.",
              )}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full bg-[#F5AF00] px-6 py-3.5 text-[15px] font-bold tracking-[.02em] text-[#051F49] shadow-[0_4px_14px_rgba(245,175,0,.35)] transition hover:bg-[#FFBE12] active:scale-[.98]"
            >
              <WhatsAppIcon className="h-[18px] w-[18px]" />
              WhatsApp Us
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center justify-center rounded-full border-[1.5px] border-[#0C4396] px-6 py-3.5 text-[15px] font-bold tracking-[.02em] text-[#0C4396] transition hover:bg-[#0C4396]/[.05] active:scale-[.98]"
            >
              {PHONE_DISPLAY}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center justify-center rounded-full border-[1.5px] border-[#0C4396] px-6 py-3.5 text-[15px] font-bold tracking-[.02em] text-[#0C4396] transition hover:bg-[#0C4396]/[.05] active:scale-[.98]"
            >
              Email Us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
