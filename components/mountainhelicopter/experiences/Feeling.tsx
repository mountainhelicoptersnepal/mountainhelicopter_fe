import Image from "next/image";

export default function Feeling() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24 lg:px-16 lg:py-28">
        <div className="mb-14 flex items-end gap-5">
          <span className="select-none font-fraunces text-[72px] font-semibold leading-[0.75] text-[#F2B632] md:text-[110px]">
            01
          </span>

          <div>
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#F2B632]">
              Chapter One
            </p>

            <h2 className="font-fraunces text-[36px] font-semibold leading-[1.1] tracking-[-1.2px] text-[#003366] md:text-[52px]">
              The feeling, not the flight.
            </h2>
          </div>
        </div>

        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6 text-[17px] leading-[1.8] text-[#0A1929] md:text-[18px]">
            <p>
              Most people think they want a helicopter ride. What they really
              want is{" "}
              <strong className="font-semibold text-[#003366]">
                the story they will tell for the rest of their lives.
              </strong>
            </p>

            <p>
              The moment the clouds break and Everest fills the windscreen. The
              silence at Kala Patthar. The look on someone&apos;s face when they
              understand why you brought them here.
            </p>

            <p>
              We know where the first sunlight touches Ama Dablam, which ridge
              creates the finest mountain view, and how to time a landing so the
              moment feels private.
            </p>

            <p className="pt-2 font-fraunces text-[24px] font-medium leading-[1.45] text-[#003366]">
              That knowledge is the real luxury.
              <br />
              <span className="text-[#B8860B]">
                The helicopter is simply how we take you there.
              </span>
            </p>
          </div>

          <figure className="relative pb-12 md:pb-0">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] shadow-[0_20px_45px_rgba(0,51,102,0.18)]">
              <Image
                src="/images/experiences/heli-himalayas.png"
                alt="Mountain Helicopters Nepal aircraft in the Himalayas"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <figcaption className="absolute -bottom-2 left-5 right-5 rounded-2xl border-t-4 border-[#F2B632] bg-white p-6 shadow-[0_20px_45px_rgba(0,51,102,0.18)] md:-right-8 md:bottom-8 md:left-auto md:w-[300px]">
              <p className="font-fraunces text-[18px] font-medium italic leading-[1.5] text-[#003366]">
                “We do not sell seats. We build mornings people remember for
                decades.”
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}