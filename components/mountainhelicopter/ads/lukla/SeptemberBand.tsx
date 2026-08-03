import Reveal from "./Reveal";
import { waLink } from "./constants";

export default function SeptemberBand() {
  return (
    <section className="bg-[linear-gradient(120deg,#F5AF00_0%,#FFC63A_100%)] py-[50px] text-[#051F49]">
      <div className="mx-auto flex max-w-[1160px] flex-wrap items-center justify-between gap-[22px] px-[22px]">
        <Reveal>
          <h2 className="max-w-[580px] font-fraunces text-[clamp(1.35rem,3vw,1.85rem)] font-black tracking-[-.01em]">
            September opens the autumn Everest season. Seats go first.
          </h2>
          <p className="mt-2 max-w-[580px] font-medium">
            Clear post-monsoon mornings, peak trail conditions, and the highest
            demand of the year. Early booking secures your preferred date.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <a
            href={waLink(
              "Hi, I want to lock a September date for a Lukla flight or Everest heli tour.",
            )}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#0C4396] px-6 py-3.5 text-[15px] font-bold tracking-[.02em] text-white shadow-[0_6px_18px_rgba(8,47,107,.3)] transition hover:bg-[#0D4DAC] active:scale-[.98]"
          >
            Lock My September Date
          </a>
        </Reveal>
      </div>
    </section>
  );
}
