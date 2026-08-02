import Image from "next/image";

export interface AircraftSpec {
  label: string;
  value: string;
}

export interface AircraftCardProps {
  registration: string;
  image: string;
  imageAlt: string;
  specs: readonly AircraftSpec[];
  reverse?: boolean;
}

const AircraftCard = ({
  registration,
  image,
  imageAlt,
  specs,
  reverse = false,
}: AircraftCardProps) => {
  return (
    <article
      className={`group flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-5 ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      <div className="relative aspect-[1195/560] w-full shrink-0 overflow-hidden rounded-[24px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.3)] transition-[width,aspect-ratio] duration-500 ease-out sm:rounded-[40px] lg:w-full lg:rounded-[80px] lg:group-hover:w-1/2 lg:group-hover:aspect-[620/600]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 1280px) 1152px, 100vw"
          className="object-cover"
        />

        <div
          className={`absolute inset-0 from-transparent from-55% to-[rgba(0,22,45,0.5)] ${
            reverse ? "bg-gradient-to-l" : "bg-gradient-to-r"
          }`}
        />

        <div
          aria-hidden="true"
          className="absolute bottom-0 left-1/2 h-[45%] w-[130%] -translate-x-1/2 rounded-b-[80px] bg-primary-blue/90 blur-[50px] transition-opacity duration-500 lg:group-hover:opacity-0"
        />

        <p className="absolute inset-x-6 bottom-[8%] text-center font-fraunces text-[28px] font-semibold tracking-[-0.02em] text-gold transition-opacity duration-300 lg:group-hover:opacity-0 sm:text-[36px] lg:text-[44px]">
          {registration}
        </p>
      </div>

      <div className="w-full overflow-hidden transition-all duration-500 ease-out lg:w-0 lg:opacity-0 lg:group-hover:w-1/2 lg:group-hover:opacity-100">
        <div
          className={`flex w-full flex-col gap-4 lg:w-[560px] ${
            reverse ? "lg:pr-5" : "lg:pl-5"
          }`}
        >
          <h3 className="font-fraunces text-[32px] font-semibold tracking-[-0.02em] text-primary-blue sm:text-[38px] lg:text-[44px]">
            {registration}
          </h3>

          <dl className="flex flex-col">
            {specs.map((spec) =>
              spec.label === "Seat Capacity" ? (
                <div
                  key={spec.label}
                  className="flex flex-col font-manrope text-[15px] leading-[1.8] sm:text-[16px]"
                >
                  <div className="flex flex-wrap gap-x-1.5">
                    <dt className="font-bold text-[#002448]">
                      {spec.label}:
                    </dt>
                    <dd className="font-semibold text-[#335c85]">
                      1 Pilot + 5 Passengers or
                    </dd>
                  </div>
                  <dd className="pl-[108px] font-semibold text-[#335c85]">
                    2 Pilots + 4 Passengers
                  </dd>
                </div>
              ) : (
                <div
                  key={spec.label}
                  className="flex flex-wrap gap-x-1.5 font-manrope text-[15px] leading-[1.8] sm:text-[16px]"
                >
                  <dt className="font-bold text-[#002448]">{spec.label}:</dt>
                  <dd className="font-semibold text-[#335c85]">
                    {spec.value}
                  </dd>
                </div>
              ),
            )}
          </dl>
        </div>
      </div>
    </article>
  );
};

export default AircraftCard;
