import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import SecondaryButton from "@/components/shared/buttons/SecondaryButton";

export default function Hero() {
  return (
    <section
      id="home-hero"
      className="relative h-screen overflow-x-clip bg-[#071825]"
    >
      <div className="relative h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/videos/landing-poster.webp"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/landing_hero.webm" type="video/webm" />
          <source src="/videos/landing_hero.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/35" />

        <div className="absolute inset-0 z-20 mx-auto flex h-screen w-full items-center justify-center px-4 text-center text-white sm:px-6 md:px-10">
          <div className="w-full max-w-full origin-center pt-16 sm:pt-20 min-[1400px]:scale-[0.86]">
            <h1 className="mx-auto max-w-full font-fraunces text-[clamp(38px,10vw,58px)] font-bold leading-[1.064] tracking-[-1.5px] sm:text-[64px] sm:tracking-[-2px] lg:whitespace-nowrap lg:text-[86px] lg:tracking-[-2.6px]">
              <span className="block lg:inline">“One Sky, </span>

              <span className="block text-[#F5B82E] lg:inline">
                Every Journey”
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
              <PrimaryButton href="/contact">Enquire Now</PrimaryButton>

              <SecondaryButton href="/experiences">
                Find Your Experience
              </SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
