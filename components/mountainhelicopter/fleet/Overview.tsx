export default function Overview() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-6 px-6 py-16 md:px-12 md:py-24 lg:px-16 lg:py-28">
        <p className="font-jetbrains-mono text-[11px] font-medium uppercase leading-[16.5px] tracking-[1.98px] text-[#b87800]">
          , Overview
        </p>

        <h2 className="max-w-[530px] text-center font-fraunces text-[32px] font-semibold leading-[1.05] tracking-[-0.02em] text-primary-blue sm:text-[40px] lg:text-[51.2px]">
          Built for the <span className="text-[#dca62e]">Himalayas</span>
        </h2>

        <div className="flex w-full flex-col gap-4 text-left font-manrope text-[17px] font-normal leading-[27.625px] text-ink/80">
          <p>
            Mountain Helicopters Nepal operates Airbus H125 (AS350 B3e)
            helicopters, an aircraft well suited to Nepal’s high mountains and
            changing conditions. It’s Safran Arriel 2D engine provides strong
            high-altitude performance, while the low-vibration cabin keeps
            passengers comfortable and offers wide views of the Himalayas.
          </p>

          <p>
            Each helicopter can carry up to five passengers with one pilot,
            depending on altitude, weather and payload. Our fleet is used for
            mountain tours, pilgrimage flights, private charters, expedition
            support, rescues and medical evacuations.
          </p>

          <p>
            Our team of pilots, engineers and ground crew work together to keep
            every flight safe, carefully planned and reliable. Whether you are
            flying for the view or travelling somewhere beyond the road network,
            our H125 fleet is ready for the journey.
          </p>
        </div>
      </div>
    </section>
  );
}
