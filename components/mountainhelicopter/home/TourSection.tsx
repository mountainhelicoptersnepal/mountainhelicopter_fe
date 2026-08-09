import Image from "next/image";
import Link from "next/link";

const tours = [
  {
    title: "Everest Mountain Overfly with Kalapatthar Landing and Breakfast at Hotel Everest View from Kathmandu",
    meta: "4-5 HRS  |  5,545 M  |  KHUMBU, NEPAL",
    price: "FROM $1,200",
    cta: "VIEW EVEREST TOUR",
    href: "/tours/everest-base-camp",
    image: "/images/home-section/everest-base-camp.jpg",
    detail:
      "Fly deep into the heart of the Everest region for an unforgettable Himalayan adventure. Soar above the legendary Everest Base Camp, Khumbu Glacier, and the towering peaks of Everest, Lhotse, Nuptse, and Ama Dablam before landing at Kala Patthar for panoramic mountain views.",
    size: "hero",
  },
  {
    title: "Annapurna Base Camp Helicopter Tour",
    meta: "4 HRS  |  4,130M  |  ANNAPURNA, NEPAL",
    price: "From $1,100",
    cta: "VIEW ANNAPURNA TOUR",
    href: "/tours/annapurna-base-camp",
    image: "/images/langtang-valley/langtang.jpg",
    detail:
      "Fly into the heart of the Annapurna Sanctuary for close views of Annapurna I, Machhapuchhre, Hiunchuli, and the glacier-ringed amphitheater around base camp.",
    size: "side",
  },
  {
    title: "Muktinath Pilgrimage Helicopter Tour",
    meta: "3-4 HRS  |  3,710 M  |  MUSTANG, NEPAL",
    price: "From $1,100",
    cta: "VIEW MUKTINATH TOUR",
    href: "/tours/muktinath-pilgrimage",
    image: "/images/gosaikunda-lake/gosaikunda-lake.jpg",
    detail:
      "Reach the sacred temple of Muktinath by helicopter with dramatic views across Mustang, the Kali Gandaki valley, Dhaulagiri, and Nilgiri.",
    size: "small",
  },
  {
    title: "Langtang Valley Helicopter Tour",
    meta: "2-3 HRS  |  LANGTANG, NEPAL",
    price: "From $750",
    cta: "VIEW LANGTANG TOUR",
    href: "/tours/langtang-valley",
    image: "/images/home-section/image_filtersection.png",
    detail:
      "Lift north from Kathmandu into the hidden Langtang region, crossing forested ridges, alpine settlements, and broad Himalayan valleys.",
    size: "small",
  },
  {
    title: "Gosaikunda Lake Helicopter Tour",
    meta: "2-3 HRS  |  4,380 M  |  LANGTANG, NEPAL",
    price: "From $1250",
    cta: "VIEW GOSAIKUNDA TOUR",
    href: "/tours/gosaikunda-lake",
    image: "/images/langtang-valley/langtang-gallary5.jpg",
    detail:
      "Fly to the sacred alpine lake of Gosaikunda, with fast access to high Himalayan scenery and panoramic views over the Langtang range.",
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
      className={`group relative block overflow-hidden bg-[#102035] outline-none ${
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
      <div className="absolute inset-0 bg-black/20 transition duration-500 group-hover:bg-black/38 group-focus-visible:bg-black/38" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/30 to-transparent transition duration-500 group-hover:from-black/90 group-hover:via-black/48 group-focus-visible:from-black/90 group-focus-visible:via-black/48" />

      <div
        className={`absolute inset-x-0 bottom-0 text-white transition-transform duration-500 ease-out group-hover:-translate-y-3 group-focus-visible:-translate-y-3 ${
          isHero
            ? "px-[30px] pb-[27px] sm:pb-[29px]"
            : isSide
              ? "px-[30px] pb-[27px] sm:pb-[28px]"
              : "px-[30px] pb-[27px]"
        }`}
      >
        <p
          className={`font-manrope font-semibold uppercase leading-none tracking-[0.18em] text-white/90 ${
            isHero ? "text-[9px] sm:text-[14px]" : "text-[9px]"
          }`}
        >
          {tour.meta}
        </p>

        <h3
          className={`mt-[12px] max-w-[700px] font-fraunces font-bold leading-[0.92] tracking-[-0.01em] text-white ${
            isHero
              ? "text-[24px] sm:text-[40px]"
              : isSide
                ? "max-w-[300px] text-[23px] sm:text-[24px]"
                : "max-w-[330px] text-[24px] sm:text-[25px]"
          }`}
        >
          {tour.title}
        </h3>

        <p
          className={`mt-[10px] line-clamp-5 max-h-0 max-w-[720px] overflow-hidden font-manrope font-medium leading-[1.35] text-white/90 opacity-0 transition-all duration-500 ease-out group-hover:max-h-[120px] group-hover:opacity-100 group-focus-visible:max-h-[120px] group-focus-visible:opacity-100 ${
            isHero ? "text-[12px] sm:text-[14px]" : "text-[12px]"
          }`}
        >
          {tour.detail}
        </p>

        <div
          className={`flex items-end justify-between gap-4 font-manrope font-bold ${
            isHero ? "mt-[8px] sm:mt-[18px]" : "mt-[8px]"
          }`}
        >
          <span
            className={`shrink-0 text-[#DCA62E] ${
              isHero ? "text-[13px] sm:text-[16px]" : "text-[13px]"
            }`}
          >
            {tour.price}
          </span>

          <span
            className={`text-right font-extrabold uppercase leading-none tracking-[0.18em] text-white ${
              isHero ? "text-[9px] sm:text-[13px]" : "text-[9px]"
            }`}
          >
            {tour.cta} →
          </span>
        </div>
      </div>
    </Link>
  );
}
