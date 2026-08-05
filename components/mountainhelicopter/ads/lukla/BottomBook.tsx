import Reveal from "./Reveal";
import BookingForm from "./BookingForm";

export default function BottomBook() {
  return (
    <section
      id="book"
      className="bg-[linear-gradient(160deg,#003366_0%,#003366_60%,#0d1a2d_100%)] py-[70px]"
    >
      <div className="mx-auto max-w-[1160px] px-[22px]">
        <Reveal className="mb-[30px] text-center">
          <div className="mb-2.5 font-manrope text-[12.5px] font-semibold uppercase tracking-[.16em] text-[#F2B632]">
            Ready When You Are
          </div>
          <h2 className="font-fraunces text-[clamp(1.55rem,3.5vw,2.3rem)] font-extrabold tracking-[-.01em] text-white">
            Read everything? Book your seat right here.
          </h2>
        </Reveal>

        <Reveal className="mx-auto max-w-[560px]">
          <BookingForm idPrefix="bottom" heading={false} />
        </Reveal>
      </div>
    </section>
  );
}
