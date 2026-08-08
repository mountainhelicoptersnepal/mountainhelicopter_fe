export default function Hero() {
  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-[#071825]">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/videos/fleet-hero-poster.webp"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/35" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-center px-6 py-24 text-center sm:px-8 md:px-12 lg:px-16">
        <div className="flex w-full flex-col items-center pt-12 sm:pt-16">
          <p className="font-manrope text-[10px] font-bold uppercase leading-[15px] tracking-[4px] text-[#f2b632]">
            Mountain Helicopters Nepal
          </p>

          <h1 className="mt-6 font-fraunces text-[clamp(58px,11vw,120px)] font-bold italic leading-[0.86] tracking-[-0.025em] text-white">
            <span aria-hidden="true">“</span>
            <span>Our </span>
            <span className="text-[#f2b632]">Fleet.</span>
            <span aria-hidden="true">”</span>
          </h1>

          <p className="mt-7 max-w-[680px] font-manrope text-[18px] font-medium leading-[30px] text-white sm:text-[20px] sm:leading-[34px]">
            Built for the Himalayas. Trusted for every mission.
          </p>
        </div>
      </div>
    </section>
  );
}
