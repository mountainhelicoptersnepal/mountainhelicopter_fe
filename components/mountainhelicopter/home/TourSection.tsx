import Image from "next/image";
import Link from "next/link";

const tours = [
  {
    title: "Everest Base Camp & Kala Patthar Helicopter Tour",
    meta: "4-5 HRS  |  5,364M  |  KHUMBU, NEPAL",
    price: "FROM $1,200",
    cta: "VIEW EVEREST TOUR",
    href: "/tours/everest-base-camp",
    image: "/images/home-section/everest-base-camp.jpg",
    size: "hero",
  },
  {
    title: "Pathivara Devi Helicopter Tour",
    meta: "4 HRS  |  3,794M  |  KOSHI PROVINCE",
    price: "From $1,100",
    cta: "VIEW PATHIVARA TOUR",
    href: "/tours/pathivara-devi",
    image: "/images/langtang-valley/langtang.jpg",
    size: "side",
  },
  {
    title: "Manaslu Base Camp Helicopter Tour",
    meta: "3-4 HRS  |  4,800 M  |  GORKHA, NEPAL",
    price: "From $1,100",
    cta: "VIEW MANASLU TOUR",
    href: "/tours/manaslu-base-camp",
    image: "/images/gosaikunda-lake/gosaikunda-lake.jpg",
    size: "small",
  },
  {
    title: "Bardiya National Park Helicopter Tour",
    meta: "3-4 HRS  |  TERAI, NEPAL",
    price: "From $750",
    cta: "VIEW BARDIYA TOUR",
    href: "/tours/bardiya-national-park",
    image: "/images/home-section/image_filtersection.png",
    size: "small",
  },
  {
    title: "Shey Phoksundo Helicopter Tour",
    meta: "2-3 HRS  |  3,611 M  |  DOLPA, NEPAL",
    price: "From $1250",
    cta: "VIEW SHEY PHOKSUNDO TOUR",
    href: "/tours/shey-phoksundo",
    image: "/images/langtang-valley/langtang-gallary5.jpg",
    size: "small",
  },
];

export default function TourSection() {
  return (
    <section className="bg-[#f4f7fa]">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-12 md:py-24 lg:px-16 lg:py-28">
        <div className="flex items-center gap-[13px] text-[#DCA62E]">
          <span className="h-px w-[24px] bg-[#DCA62E]" />
          <p className="font-manrope text-[16px] font-semibold uppercase leading-none tracking-[0.32em]">
            Signature Helicopter Tours In Nepal
          </p>
        </div>

        <h2 className="mt-[18px] font-fraunces text-[49px] font-bold leading-[0.95] tracking-[-0.02em] text-[#06213f] sm:text-[52px]">
          Five Bucket List <span className="text-[#DCA62E]">Journeys.</span>
        </h2>

        <p className="mt-[32px] font-manrope text-[15px] font-medium leading-[1.45] text-[#40526b]">
          For those who dream bigger, travel farther, and believe the
          world&apos;s greatest adventures are best experienced from above.
        </p>

        <div className="mt-[7px] grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour) => (
            <TourCard key={tour.title} tour={tour} />
          ))}
        </div>
      </div>
    </section>
  );
}

type Tour = (typeof tours)[number];

function TourCard({ tour }: { tour: Tour }) {
  const isHero = tour.size === "hero";
  const isSide = tour.size === "side";

  return (
    <Link
      href={tour.href}
      className={`group relative block overflow-hidden bg-[#102035] ${
        isHero
          ? "min-h-[360px] sm:col-span-2 lg:min-h-[414px]"
          : isSide
            ? "min-h-[360px] lg:min-h-[414px]"
            : "min-h-[360px] lg:min-h-[393px]"
      }`}
    >
      <Image
        src={tour.image}
        alt={tour.title}
        fill
        sizes={
          isHero
            ? "(max-width: 1024px) 100vw, 755px"
            : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 367px"
        }
        className="object-cover transition duration-700 group-hover:scale-105"
        priority={isHero}
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/18 to-transparent" />

      <div
        className={`absolute inset-x-0 bottom-0 text-white ${
          isHero
            ? "px-[30px] pb-[29px]"
            : isSide
              ? "px-[30px] pb-[28px]"
              : "px-[30px] pb-[27px]"
        }`}
      >
        <p
          className={`font-manrope font-semibold uppercase leading-none tracking-[0.18em] text-white/90 ${
            isHero ? "text-[14px]" : "text-[9px]"
          }`}
        >
          {tour.meta}
        </p>

        <h3
          className={`mt-[12px] max-w-[700px] font-fraunces font-bold leading-[0.92] tracking-[-0.01em] text-white ${
            isHero
              ? "text-[38px] sm:text-[40px]"
              : isSide
                ? "max-w-[300px] text-[23px] sm:text-[24px]"
                : "max-w-[330px] text-[24px] sm:text-[25px]"
          }`}
        >
          {tour.title}
        </h3>

        <div
          className={`flex items-end justify-between gap-4 font-manrope font-bold ${
            isHero ? "mt-[18px]" : "mt-[8px]"
          }`}
        >
          <span
            className={`shrink-0 text-[#DCA62E] ${
              isHero ? "text-[16px]" : "text-[13px]"
            }`}
          >
            {tour.price}
          </span>

          <span
            className={`text-right font-extrabold uppercase leading-none tracking-[0.18em] text-white ${
              isHero ? "text-[13px]" : "text-[9px]"
            }`}
          >
            {tour.cta} →
          </span>
        </div>
      </div>
    </Link>
  );
}
